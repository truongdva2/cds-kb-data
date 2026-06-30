// apply_semantic.mjs
// Insert LLM-generated semantic_en / semantic_vi / keywords into view .md
// frontmatter, immediately after the `description:` line. Pure offline.
//
// CRITICAL: view .md files have MIXED line endings — frontmatter+body use LF,
// the ```abap Source Code``` block uses CRLF (raw SAP source). A naive
// read-as-text + rewrite converts CRLF->LF and produces a huge whitespace diff
// (and noisy history). This applier works at the BYTE level: it only splices
// the new lines after the description line's LF and leaves every other byte —
// including the CRLF source block — untouched. Diffs are additions-only.
//
// Input: a JSONL file, one object per line:
//   {"name":"C_BOMMATERIALVH","semantic_en":"...","semantic_vi":"...","keywords":["a","b"]}
//
// Usage:
//   node tools/apply_semantic.mjs . results.jsonl            # write
//   node tools/apply_semantic.mjs . results.jsonl --dry      # report only
//
// Skips a view that already has semantic_en (idempotent / resumable).

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = process.argv[2] || '.'
const resultsPath = process.argv[3]
const dry = process.argv.includes('--dry')
if (!resultsPath) { console.error('usage: node tools/apply_semantic.mjs <root> <results.jsonl> [--dry]'); process.exit(1) }

const enc = new TextEncoder()

function yamlDQ(s) {
  // double-quoted YAML scalar; escape backslash and double-quote
  return '"' + String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'
}

function buildBlock(r) {
  const lines = []
  lines.push('semantic_en: ' + yamlDQ(r.semantic_en))
  lines.push('semantic_vi: ' + yamlDQ(r.semantic_vi))
  lines.push('keywords:')
  for (const k of (r.keywords || [])) lines.push('  - ' + String(k).replace(/\r?\n/g, ' ').trim())
  return lines.join('\n') + '\n'
}

const recs = readFileSync(resultsPath, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l))
let applied = 0, skipped = 0, missing = 0, invalid = 0
const problems = []

for (const r of recs) {
  if (!r.name || !r.semantic_en || !r.semantic_vi || !Array.isArray(r.keywords) || r.keywords.length === 0) {
    invalid++; problems.push(`invalid record: ${r.name || '(no name)'}`); continue
  }
  const path = join(root, 'views', r.name + '.md')
  if (!existsSync(path)) { missing++; problems.push(`missing file: ${r.name}`); continue }
  const raw = readFileSync(path)                       // Buffer (bytes)
  const head = raw.subarray(0, Math.min(raw.length, 4000)).toString('utf8')
  if (/\nsemantic_en\s*:/.test(head)) { skipped++; continue }   // already enriched
  const d = raw.indexOf(enc.encode('\ndescription:'))
  if (d < 0) { problems.push(`no description line: ${r.name}`); invalid++; continue }
  const nl = raw.indexOf(0x0a, d + 1)                  // end of description line
  if (nl < 0) { problems.push(`no EOL after description: ${r.name}`); invalid++; continue }
  const ins = Buffer.from(enc.encode(buildBlock(r)))
  const out = Buffer.concat([raw.subarray(0, nl + 1), ins, raw.subarray(nl + 1)])
  if (!dry) writeFileSync(path, out)
  applied++
}

console.error(`${dry ? '[dry] would apply' : 'applied'}: ${applied}  skipped(already): ${skipped}  missing: ${missing}  invalid: ${invalid}`)
for (const p of problems.slice(0, 30)) console.error('  - ' + p)
