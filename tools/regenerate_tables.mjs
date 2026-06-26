// regenerate_tables.mjs
// Rebuild the `## Fields` and `## Associations` tables of each view .md
// from its `## Source Code` (the ABAP CDS DDL), which is the source of truth.
//
// The original extraction produced corrupt Fields tables on complex views
// (multi-line annotations counted as fields, calculated case/cast fields split
// across rows, missing fields, comment braces breaking the {} scan). This parser
// strips comments + annotations, then walks the projection with a bracket/string
// aware scanner. Pure offline — no system access needed.
//
// Usage:
//   node tools/regenerate_tables.mjs .                       # dry-run, all views (summary)
//   node tools/regenerate_tables.mjs . --all --write         # rewrite all views
//   node tools/regenerate_tables.mjs . I_BUSINESSPARTNER --dump
//   node tools/regenerate_tables.mjs . I_SALESORDER --write
//
// NOTE: ideally this logic lives in the extraction pipeline (cds-kb-mcp) so newly
// added views are generated correctly at source. Kept here as a one-shot/repair tool.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const OPEN = '[{(', CLOSE = ']})';

function skipString(s, i) { i++; while (i < s.length) { if (s[i] === "'") { if (s[i + 1] === "'") { i += 2; continue; } return i + 1; } i++; } return s.length; }
function skipBalanced(s, i) { let d = 0; for (; i < s.length; i++) { const c = s[i]; if (c === "'") { i = skipString(s, i) - 1; continue; } if (OPEN.includes(c)) d++; else if (CLOSE.includes(c)) { d--; if (d === 0) return i + 1; } } return s.length; }

function stripComments(code) {
  let out = '';
  for (let i = 0; i < code.length; i++) {
    const c = code[i], n = code[i + 1];
    if (c === "'") { const j = skipString(code, i); out += code.slice(i, j); i = j - 1; continue; }
    if (c === '/' && n === '/') { while (i < code.length && code[i] !== '\n') i++; out += '\n'; continue; }
    if (c === '/' && n === '*') { i += 2; while (i < code.length && !(code[i] === '*' && code[i + 1] === '/')) i++; i++; continue; }
    out += c;
  }
  return out;
}

function skipAnnotationValue(s, i) {
  if (OPEN.includes(s[i])) return skipBalanced(s, i);
  if (s[i] === "'") return skipString(s, i);
  while (i < s.length) { const c = s[i]; if (/\s/.test(c)) break; if (OPEN.includes(c)) { i = skipBalanced(s, i); continue; } if (c === "'") { i = skipString(s, i); continue; } i++; }
  return i;
}

function stripAnnotations(code) {
  let out = '';
  for (let i = 0; i < code.length; i++) {
    const c = code[i];
    if (c === "'") { const j = skipString(code, i); out += code.slice(i, j); i = j - 1; continue; }
    if (c === '@') {
      let j = i + 1; while (j < code.length && /[\w.]/.test(code[j])) j++;
      let k = j; while (k < code.length && /[ \t]/.test(code[k])) k++;
      if (code[k] === ':') { k++; while (k < code.length && /\s/.test(code[k])) k++; k = skipAnnotationValue(code, k); } else k = j;
      out += ' '; i = k - 1; continue;
    }
    out += c;
  }
  return out;
}

function splitTop(s, sep) {
  const out = []; let d = 0, last = 0;
  for (let i = 0; i < s.length; i++) { const c = s[i]; if (c === "'") { i = skipString(s, i) - 1; continue; } if (OPEN.includes(c)) d++; else if (CLOSE.includes(c)) d--; else if (c === sep && d === 0) { out.push(s.slice(last, i)); last = i + 1; } }
  out.push(s.slice(last)); return out;
}
const splitTopComma = (s) => splitTop(s, ',');

function findTopAs(s) {
  let d = 0;
  for (let i = 0; i + 3 < s.length; i++) {
    const c = s[i];
    if (c === "'") { i = skipString(s, i) - 1; continue; }
    if (OPEN.includes(c)) { d++; continue; } if (CLOSE.includes(c)) { d--; continue; }
    if (d === 0 && /\s/.test(c) && (s[i + 1] === 'a' || s[i + 1] === 'A') && (s[i + 2] === 's' || s[i + 2] === 'S') && /\s/.test(s[i + 3])) return i + 1;
  }
  return -1;
}

function stripLeadingAnnotations(s) {
  s = s.replace(/^\s+/, '');
  while (s[0] === '@') {
    let i = 1; while (i < s.length && /[\w.]/.test(s[i])) i++; while (i < s.length && /\s/.test(s[i])) i++;
    if (s[i] === ':') { i++; while (i < s.length && /\s/.test(s[i])) i++; if (OPEN.includes(s[i])) i = skipBalanced(s, i); else if (s[i] === "'") i = skipString(s, i); else { while (i < s.length && !/\s/.test(s[i]) && s[i] !== '@') i++; } }
    s = s.slice(i).replace(/^\s+/, '');
  }
  return s;
}

function splitStructure(code) {
  let d = 0, defIdx = -1;
  for (let i = 0; i < code.length; i++) { const c = code[i]; if (c === "'") { i = skipString(code, i) - 1; continue; } if (OPEN.includes(c)) { d++; continue; } if (CLOSE.includes(c)) { d--; continue; } if (d === 0 && /[a-z]/i.test(c)) { if (/^(define|extend)\b/.test(code.slice(i)) && !/[\w]/.test(code[i - 1] || ' ')) { defIdx = i; break; } } }
  if (defIdx === -1) return null;
  let projStart = -1;
  for (let i = defIdx; i < code.length; i++) { const c = code[i]; if (c === "'") { i = skipString(code, i) - 1; continue; } if (c === '{') { projStart = i; break; } }
  if (projStart === -1) return null;
  const projEnd = skipBalanced(code, projStart);
  return { header: code.slice(defIdx, projStart), body: code.slice(projStart + 1, projEnd - 1) };
}

function parseAssociations(header) {
  const re = /\b(association|composition)\s*(\[[^\]]*\])?\s+(?:to|of)\s+(?:parent\s+)?([A-Za-z_]\w*)\s+as\s+(_\w+)/g;
  const out = [], seen = new Set(); let m;
  while ((m = re.exec(header))) { const card = (m[2] || '').replace(/\s+/g, ''), target = m[3], alias = m[4], key = alias + '|' + target; if (seen.has(key)) continue; seen.add(key); out.push({ alias, target, card: card || '' }); }
  return out;
}

function shapeSource(src) {
  src = src.replace(/\s+/g, ' ').trim();
  if (/^[A-Za-z_]\w*(\.[A-Za-z_]\w*)*$/.test(src)) return src;
  if (src.length <= 80) return src;
  if (/^case\b/i.test(src)) return 'case…end';
  const fn = src.match(/^([A-Za-z_]\w*)\s*\(/); return (fn ? fn[1] : 'expr') + '(…)';
}

function parseFields(body) {
  const fields = [];
  for (let raw of splitTopComma(body)) {
    let el = stripLeadingAnnotations(raw).replace(/^\s+|\s+$/g, '');
    if (!el) continue;
    if (/^_\w+$/.test(el)) { fields.push({ field: el, src: '*Association*', assoc: true }); continue; }
    el = el.replace(/^key\s+/i, '').replace(/^virtual\s+/i, '');
    const asIdx = findTopAs(el); let field, src;
    if (asIdx >= 0) { src = el.slice(0, asIdx).trim(); field = (el.slice(asIdx + 2).trim().match(/^[A-Za-z_]\w*/) || [''])[0]; }
    else { const oneLine = el.replace(/\s+/g, ' ').trim(); if (/^[A-Za-z_]\w*$/.test(oneLine)) { field = oneLine; src = oneLine; } else { const seg = oneLine.match(/\.([A-Za-z_]\w*)\s*$/); if (seg) { field = seg[1]; src = shapeSource(oneLine); } else continue; } }
    if (!field) continue;
    if (/^_\w+$/.test(field)) { fields.push({ field, src: '*Association*', assoc: true }); continue; }
    fields.push({ field, src: shapeSource(src), assoc: false });
  }
  return fields;
}

function parseEntity(body) {
  const fields = [], assocs = [], seen = new Set();
  for (let raw of splitTop(body, ';')) {
    let el = stripLeadingAnnotations(raw).trim(); if (!el) continue;
    el = el.replace(/^key\s+/i, '');
    const m = el.match(/^(\w+)\s*:\s*([\s\S]+)$/);
    if (!m) { if (/^\w+$/.test(el)) fields.push({ field: el, src: '*Association*', assoc: true }); continue; }
    const name = m[1], rhs = m[2].trim();
    const am = rhs.match(/^(association|composition)\s*(\[[^\]]*\])?\s+(?:to\s+parent\s+|to\s+|of\s+)([A-Za-z_]\w*)/i);
    if (am) { const card = (am[2] || '').replace(/\s+/g, ''), target = am[3], key = name + '|' + target; if (!seen.has(key)) { seen.add(key); assocs.push({ alias: name, target, card }); } fields.push({ field: name, src: '*Association*', assoc: true }); }
    else fields.push({ field: name, src: shapeSource(rhs), assoc: false });
  }
  return { fields, assocs };
}

function renderFields(fields) {
  if (!fields.length) return '> No fields found.';
  let t = '| Field | Data Source |\n|---|---|\n';
  for (const f of fields) t += `| \`${f.field}\` | ${f.assoc ? '*Association*' : '`' + f.src + '`'} |\n`;
  return t.trimEnd();
}
function renderAssocs(assocs) {
  if (!assocs.length) return '> No associations found.';
  let t = '| Alias | Target View | Cardinality |\n|---|---|---|\n';
  for (const a of assocs) t += `| \`${a.alias}\` | \`${a.target}\` | ${a.card || '—'} |\n`;
  return t.trimEnd();
}

export function regenerate(mdText) {
  const m = mdText.match(/## Source Code\s*```(?:abap)?\s*([\s\S]*?)```/);
  if (!m) return { error: 'no source code' };
  if (/GetSource failed|ADT API error|does not exist/.test(m[1].slice(0, 400))) return { error: 'source is error-text' };
  const code = stripAnnotations(stripComments(m[1]));
  const st = splitStructure(code);
  if (!st) return { error: 'no define/projection' };
  const isView = /\bas\s+(select|projection)\b/i.test(st.header);
  if (isView) return { fields: parseFields(st.body), assocs: parseAssociations(st.header), kind: 'view' };
  return { ...parseEntity(st.body), kind: 'entity' };
}

export function applyTables(mdText) {
  const r = regenerate(mdText);
  if (r.error) return { error: r.error };
  const re = /(## Fields\n\n)[\s\S]*?(\n\n## Associations\n\n)[\s\S]*?(\n\n## Source Code\n)/;
  if (!re.test(mdText)) return { error: 'section layout mismatch' };
  return { newText: mdText.replace(re, `$1${renderFields(r.fields)}$2${renderAssocs(r.assocs)}$3`), fields: r.fields, assocs: r.assocs, kind: r.kind };
}

// ---------- CLI ----------
function countOld(t) {
  const f = t.match(/## Fields\n([\s\S]*?)\n## Associations/), a = t.match(/## Associations\n([\s\S]*?)\n## Source Code/);
  const c = (s) => s ? s[1].split('\n').filter(l => l.trim().startsWith('|') && !/^\|\s*(Field|Alias)/i.test(l) && !/^\|\s*:?-+/.test(l)).length : 0;
  return { f: c(f), a: c(a) };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const args = process.argv.slice(2);
  const dir = args[0] || '.';
  const write = args.includes('--write'), dump = args.includes('--dump'), all = args.includes('--all');
  let files = args.slice(1).filter(a => !a.startsWith('--'));
  if (all || files.length === 0) files = fs.readdirSync(path.join(dir, 'views')).filter(f => f.endsWith('.md'));

  let written = 0, unchanged = 0, errText = 0, other = 0, oldF = 0, newF = 0;
  for (const f of files) {
    const p = path.join(dir, 'views', f.endsWith('.md') ? f : f + '.md');
    const txt = fs.readFileSync(p, 'utf8'); const old = countOld(txt); const res = applyTables(txt);
    if (res.error) { if (res.error === 'source is error-text') errText++; else other++; if (files.length <= 30) console.log(`✗ ${f}: ${res.error}`); continue; }
    oldF += old.f; newF += res.fields.length;
    if (files.length <= 30) {
      console.log(`${f}\n   Fields: ${old.f} → ${res.fields.length}   Assoc: ${old.a} → ${res.assocs.length}`);
      if (dump) { console.log(renderFields(res.fields).replace(/^/gm, '   ')); console.log(renderAssocs(res.assocs).replace(/^/gm, '   ')); }
    }
    if (res.newText !== txt) { if (write) fs.writeFileSync(p, res.newText); written++; } else unchanged++;
  }
  console.log(`\n${write ? 'written' : 'would change'}: ${written} | unchanged: ${unchanged} | error-text: ${errText} | other-err: ${other} | fields ${oldF}→${newF}`);
}
