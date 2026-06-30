// extract_view_meta.mjs
// Emit a COMPACT JSONL describing every view still missing `semantic_en:`,
// to be used as the LLM input for bulk semantic generation. Pure offline.
//
// Why: the expensive part of enrichment is the LLM. Feeding a full .md file
// (long ABAP source) per view costs ~2k input tokens; the model rarely needs
// the full source. This emits only what's needed to write a good description:
// name, the active @EndUserText.label, view type, lob/bo, the source entity,
// and the first dozen field names. ~150-250 tokens/view.
//
// Usage:
//   node tools/extract_view_meta.mjs .                 # all views missing semantic -> stdout JSONL
//   node tools/extract_view_meta.mjs . > meta.jsonl
//   node tools/extract_view_meta.mjs . --limit 100     # first N (for testing)

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.argv[2] || '.'
const limitArg = process.argv.indexOf('--limit')
const limit = limitArg > -1 ? parseInt(process.argv[limitArg + 1], 10) : Infinity
const viewsDir = join(root, 'views')

function frontmatter(txt) {
  if (!txt.startsWith('---')) return ''
  const end = txt.indexOf('\n---', 3)
  return end < 0 ? '' : txt.slice(3, end)
}

function activeLabel(src) {
  // last non-commented @EndUserText.label wins (commented lines start with //)
  const re = /@EndUserText\.label\s*:\s*'([^']*)'/g
  let m, last = ''
  const lines = src.split('\n')
  for (const ln of lines) {
    if (ln.trimStart().startsWith('//')) continue
    const mm = ln.match(/@EndUserText\.label\s*:\s*'([^']*)'/)
    if (mm) last = mm[1]
  }
  return last
}

function tagVal(fm, prefix) {
  for (const ln of fm.split('\n')) {
    const t = ln.trim().replace(/^-\s*/, '')
    if (t.startsWith(prefix)) return t.slice(prefix.length)
  }
  return ''
}

function sourceBlock(txt) {
  const i = txt.indexOf('```abap')
  if (i < 0) return ''
  const j = txt.indexOf('```', i + 7)
  return j < 0 ? txt.slice(i + 7) : txt.slice(i + 7, j)
}

function selectFrom(src) {
  const m = src.match(/(?:define\s+(?:root\s+)?(?:view(?:\s+entity)?|abstract\s+entity|custom\s+entity)[^]*?)(?:as\s+select\s+from|as\s+projection\s+on)\s+([A-Za-z0-9_]+)/i)
  if (m) return m[1]
  const a = src.match(/define\s+(root\s+)?abstract\s+entity/i)
  return a ? '(abstract entity)' : ''
}

function fields(txt) {
  // first ~14 field names from the "## Fields" table, excluding associations
  const i = txt.indexOf('## Fields')
  if (i < 0) return []
  const seg = txt.slice(i, txt.indexOf('\n## ', i + 1) > -1 ? txt.indexOf('\n## ', i + 1) : undefined)
  const out = []
  for (const ln of seg.split('\n')) {
    const m = ln.match(/^\|\s*`([^`]+)`\s*\|/)
    if (m && !/^_/.test(m[1])) out.push(m[1])   // skip _Association rows
    if (out.length >= 14) break
  }
  return out
}

const files = readdirSync(viewsDir).filter(f => f.endsWith('.md')).sort()
let n = 0
for (const f of files) {
  if (n >= limit) break
  const txt = readFileSync(join(viewsDir, f), 'utf8')
  const fm = frontmatter(txt)
  if (/\nsemantic_en\s*:/.test(fm) || fm.startsWith('semantic_en')) continue   // already enriched
  const src = sourceBlock(txt)
  const rec = {
    name: f.replace(/\.md$/, ''),
    label: activeLabel(src),
    from: selectFrom(src),
    lob: tagVal(fm, 'lob:'),
    bo: tagVal(fm, 'bo:'),
    fields: fields(txt),
  }
  process.stdout.write(JSON.stringify(rec) + '\n')
  n++
}
