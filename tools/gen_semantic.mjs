// gen_semantic.mjs
// Generate bilingual semantic_en / semantic_vi / keywords for CDS views via the
// Anthropic Message Batches API (50% cheaper, async, one request per view).
//
// WHY THIS EXISTS: the in-Claude-Code agent approach hit the org's monthly
// SUBSCRIPTION spend limit. This script calls the Anthropic API directly with
// ANTHROPIC_API_KEY, billed against API CREDITS — a separate budget — so it runs
// outside the limit that blocks the interactive agents. It is the hand-off path.
//
// Pipeline:
//   1. node tools/extract_view_meta.mjs . > meta.jsonl     # compact LLM input
//   2. node tools/gen_semantic.mjs meta.jsonl results.jsonl # THIS — calls the API
//   3. node tools/apply_semantic.mjs . results.jsonl        # byte-level insert (EOL-safe)
//   4. git add views/ && git commit                          # bank progress
//
// Idempotent / resumable: pass an existing results.jsonl as the 3rd arg to skip
// views already generated (so a re-run only fills gaps).
//
// Usage:
//   export ANTHROPIC_API_KEY=sk-ant-...
//   node tools/gen_semantic.mjs meta.jsonl results.jsonl [done.jsonl] [--limit N] [--model claude-sonnet-4-6]
//
// Requires Node 18+ (global fetch). No npm dependencies.

import { readFileSync, appendFileSync, existsSync } from 'node:fs'

const metaPath = process.argv[2]
const outPath = process.argv[3]
if (!metaPath || !outPath) {
  console.error('usage: node tools/gen_semantic.mjs <meta.jsonl> <results.jsonl> [done.jsonl] [--limit N] [--model ID]')
  process.exit(1)
}
const donePath = process.argv[4] && !process.argv[4].startsWith('--') ? process.argv[4] : null
const limArg = process.argv.indexOf('--limit')
const limit = limArg > -1 ? parseInt(process.argv[limArg + 1], 10) : Infinity
const modelArg = process.argv.indexOf('--model')
const MODEL = modelArg > -1 ? process.argv[modelArg + 1] : 'claude-sonnet-4-6'

const API_KEY = process.env.ANTHROPIC_API_KEY
if (!API_KEY) { console.error('ANTHROPIC_API_KEY not set'); process.exit(1) }

const BASE = 'https://api.anthropic.com/v1/messages/batches'
const HEADERS = {
  'x-api-key': API_KEY,
  'anthropic-version': '2023-06-01',
  'content-type': 'application/json',
}

const SYSTEM = `You write bilingual (English + Vietnamese) one-line semantic descriptions for SAP S/4HANA CDS views, used to power business search.

For the view metadata given, produce:
- semantic_en: ONE concise English sentence describing what the view represents in business terms. Style: a short noun phrase + em-dash + clause naming the key columns/purpose. Ground it ONLY in the metadata (name, label, source entity, fields, lob/bo). Invent nothing. Reflect the view kind: value-help (suffix VH), data-extract/projection (DEX, or P/R suffixes), event signature, email/workflow template, analytical cube/query, parameterized view, etc.
- semantic_vi: a business-accurate Vietnamese rendering using correct SAP Vietnamese terminology — natural, NOT a word-for-word calque (avoid clumsy literals like "giá trị giúp đỡ"; prefer "trợ giúp giá trị / value help").
- keywords: 2-5 natural Vietnamese search terms a user might type.`

const SCHEMA = {
  type: 'object',
  properties: {
    semantic_en: { type: 'string' },
    semantic_vi: { type: 'string' },
    keywords: { type: 'array', items: { type: 'string' } },
  },
  required: ['semantic_en', 'semantic_vi', 'keywords'],
  additionalProperties: false,
}

function userText(r) {
  return `View metadata:
name: ${r.name}
label: ${r.label || '(none)'}
source entity: ${r.from || '(none)'}
line of business: ${r.lob || '(none)'}
business object: ${r.bo || '(none)'}
fields: ${(r.fields || []).join(', ') || '(none)'}`
}

async function api(method, path = '', body) {
  const res = await fetch(BASE + path, {
    method,
    headers: HEADERS,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}: ${await res.text()}`)
  return res.json()
}

// ---- build request list ----
const done = new Set()
if (donePath && existsSync(donePath)) {
  for (const l of readFileSync(donePath, 'utf8').split('\n').filter(Boolean)) {
    try { done.add(JSON.parse(l).name) } catch {}
  }
}
let recs = readFileSync(metaPath, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l))
recs = recs.filter(r => !done.has(r.name))
if (recs.length > limit) recs = recs.slice(0, limit)
if (recs.length === 0) { console.error('nothing to do (all in done.jsonl)'); process.exit(0) }
console.error(`generating ${recs.length} views with ${MODEL} via batch API`)

const requests = recs.map(r => ({
  custom_id: r.name.slice(0, 64),
  params: {
    model: MODEL,
    max_tokens: 400,
    system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
    output_config: { format: { type: 'json_schema', schema: SCHEMA } },
    messages: [{ role: 'user', content: userText(r) }],
  },
}))
// map custom_id (truncated) back to full name
const nameByCid = new Map(recs.map(r => [r.name.slice(0, 64), r.name]))

// ---- create batch ----
const batch = await api('POST', '', { requests })
console.error(`batch ${batch.id} status=${batch.processing_status}`)

// ---- poll ----
let cur = batch
while (cur.processing_status !== 'ended') {
  await new Promise(r => setTimeout(r, 30000))
  cur = await api('GET', `/${batch.id}`)
  const c = cur.request_counts || {}
  console.error(`  status=${cur.processing_status} processing=${c.processing} succeeded=${c.succeeded} errored=${c.errored}`)
}

// ---- fetch results (JSONL at results_url) ----
const res = await fetch(cur.results_url, { headers: { 'x-api-key': API_KEY, 'anthropic-version': '2023-06-01' } })
if (!res.ok) throw new Error(`results -> ${res.status}: ${await res.text()}`)
const text = await res.text()

let ok = 0, bad = 0
for (const line of text.split('\n').filter(Boolean)) {
  let obj
  try { obj = JSON.parse(line) } catch { bad++; continue }
  const name = nameByCid.get(obj.custom_id) || obj.custom_id
  if (obj.result?.type !== 'succeeded') { bad++; console.error(`  fail ${name}: ${obj.result?.type} ${obj.result?.error?.type || ''}`); continue }
  const block = (obj.result.message.content || []).find(b => b.type === 'text')
  if (!block) { bad++; continue }
  let data
  try { data = JSON.parse(block.text) } catch { bad++; console.error(`  unparseable JSON for ${name}`); continue }
  appendFileSync(outPath, JSON.stringify({ name, semantic_en: data.semantic_en, semantic_vi: data.semantic_vi, keywords: data.keywords }) + '\n')
  ok++
}
console.error(`done: ${ok} written to ${outPath}, ${bad} failed`)
