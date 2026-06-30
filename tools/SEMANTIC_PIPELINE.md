# Bulk semantic enrichment — pipeline & hand-off

Goal: fill `semantic_en` / `semantic_vi` / `keywords` into the frontmatter of every
`views/*.md` that still lacks them (~7,000 views), **cheaply and resumably**, without
hitting the Claude Code subscription spend limit.

## Why the new approach

The first attempt used in-Claude-Code multi-agent workflows: one agent read each full
`.md` (long ABAP source) and edited it. That cost **~6.5k tokens/view** (~45M tokens for
the full set) and died on the **org monthly subscription limit** after ~131 views.

This pipeline fixes both problems:

1. **Decouple from the subscription limit.** Generation runs as a standalone Node script
   against the Anthropic **API** (`ANTHROPIC_API_KEY`), billed to **API credits** — a
   separate budget from the Claude Code subscription that was blocked.
2. **~20-40× cheaper.** Compact input (name + label + fields + lob/bo, *not* the full
   source) + the **Message Batches API** (50% off, async) → roughly **$10-15 for sonnet**
   across all ~7,000 views (less with prompt caching; ~1/3 that with `claude-haiku-4-5`).

## The three tools (all offline-safe except step 2)

| Step | Tool | What it does | Cost |
|---|---|---|---|
| 1 | `extract_view_meta.mjs` | Emit compact JSONL (name, label, source entity, lob/bo, top fields) for every view missing `semantic_en`. | free (offline) |
| 2 | `gen_semantic.mjs` | Call the Anthropic **Batches API** (one request/view, structured output) → `results.jsonl`. | API credits |
| 3 | `apply_semantic.mjs` | **Byte-level** insert of the 3 keys after `description:`, preserving the file's mixed EOL (frontmatter LF, ABAP source CRLF). Diff is additions-only. Skips views already enriched. | free (offline) |

## Run it

```bash
cd <repo root>                       # the cds-kb-data working tree

# 1. worklist (compact LLM input)
node tools/extract_view_meta.mjs . > meta.jsonl
wc -l meta.jsonl                     # ~7,000

# 2. generate (needs API credits; runs outside the Claude Code limit)
export ANTHROPIC_API_KEY=sk-ant-...
node tools/gen_semantic.mjs meta.jsonl results.jsonl
#   - one request per view, model claude-sonnet-4-6 (override: --model claude-haiku-4-5)
#   - polls the batch (most finish < 1h, max 24h), streams results to results.jsonl
#   - test first:  node tools/gen_semantic.mjs meta.jsonl results.jsonl --limit 50

# 3. apply + verify additions-only
node tools/apply_semantic.mjs . results.jsonl --dry        # preview counts
node tools/apply_semantic.mjs . results.jsonl              # write
git diff --numstat | awk '{a+=$1;d+=$2} END{print "added="a" removed="d}'   # removed MUST be 0

# 4. commit (CI rebuilds the search index on push)
git add views/ && git commit -m "feat(semantic): bilingual semantic for N views"
```

## Resumability

- `extract_view_meta.mjs` only emits views that still lack `semantic_en`, and
  `apply_semantic.mjs` skips views that already have it — so **re-running the whole
  pipeline only fills gaps**. Safe after any interruption.
- To re-batch only the not-yet-generated views, pass the existing results as a 3rd arg:
  `node tools/gen_semantic.mjs meta.jsonl results.jsonl results.jsonl` (skips done names).
- Commit in waves (e.g. after each batch) so progress is banked in git even if a later
  step fails.

## Gotchas (learned the hard way)

- **Mixed EOL.** `views/*.md` frontmatter is LF but the ```abap``` source block is CRLF.
  Any whole-file text rewrite converts CRLF→LF and produces a massive whitespace diff
  (no content lost, but noisy and it masks real changes). `apply_semantic.mjs` works at
  the byte level to avoid this. Always check `git diff --numstat` shows `removed=0`.
- **API credits ≠ subscription.** If `gen_semantic.mjs` 4xx's on billing, top up API
  credits in the Anthropic console — that's a different wallet from Claude Code.
- **scratchpad is ephemeral.** Write `meta.jsonl` / `results.jsonl` somewhere durable
  (or commit progress) — the session scratchpad is wiped on context switches.
