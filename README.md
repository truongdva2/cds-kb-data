# cds-kb-data

Pure **data** repository for the SAP CDS Knowledge Base — consumed read-only by the
[`cds-kb-mcp`](https://github.com/truongdva2/cds-kb-mcp) MCP server.

No code lives here, but a CI/CD workflow does: any change to `views/**` or `index/taxonomy.json` triggers an automatic rebuild of the search index, stamped with the new commit hash. MCP clients pick up the new data on their next session — typically within seconds.

## Table of Contents

- [Contents](#contents)
- [View file structure](#view-file-structure)
- [Index format](#index-format)
- [Version manifest](#version-manifest)
- [How it connects to the MCP server](#how-it-connects-to-the-mcp-server)
- [Updating data — CI/CD workflow](#updating-data--cicd-workflow) ← **start here as a contributor**
- [Common scenarios](#common-scenarios)
- [Quick reference](#quick-reference)
- [Statistics](#statistics)
- [License](#license)

## Contents

```
views/                    7,355 SAP S/4HANA released CDS views, one .md each
                          (YAML frontmatter + fields + associations + DDL source)

index/search_index.json   Pre-built MiniSearch (BM25) search index
                          (~5.7 MB, self-describing, carries its own options)

index/taxonomy.json       Lines of Business + Business Object taxonomy
                          (12 LOBs, 829 BOs, with keywords/synonyms)

index/version.json        Tiny (~200 B) manifest: {commit, builtAt, viewCount, ...}
                          MCP clients probe this on every startup to decide
                          whether to invalidate cache

.github/workflows/
  rebuild-on-push.yml     Auto-rebuilds the index when views or taxonomy change
```

## View file structure

Each `.md` file in `views/` follows this format:

```markdown
---
name: I_PURCHASEORDERAPI01
description: Purchase Order
app_component: MM-PUR-PO-2CL
software_component: S4CORE
release_state: released
tags:
  - MM
  - purchase-order
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# I_PURCHASEORDERAPI01

**Purchase Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| ...           | ...              |

## Fields
| Field | Data Source |
|---|---|
| `PurchaseOrder` | `PurchaseOrder` |
| ...             | ...             |

## Associations
| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchaseOrderItem` | `I_PurchaseOrderItemAPI01` | [0..*] |
| ...                  | ...                        | ...    |

## Source Code
(full ABAP DDL source with annotations)
```

## Index format

`search_index.json` is a **self-describing wrapper**:

```json
{
  "schemaVersion": 1,
  "builtAt": "2026-06-25T...",
  "viewCount": 7355,
  "enrichedCount": 7160,
  "options": { "idField": "id", "fields": [...], "storeFields": [...] },
  "minisearch": "<serialized MiniSearch index>"
}
```

The MiniSearch `options` travel inside the file, so the MCP server shares **zero schema code** with this repo — they evolve independently as long as `schemaVersion` is honored.

## Version manifest

`index/version.json` is the small file MCP clients fetch on every startup (~200 B):

```json
{
  "schemaVersion": 1,
  "commit": "1c0be6077edaa2744c5862384d74187d0fc92668",
  "builtAt": "2026-06-26T04:13:27.263Z",
  "viewCount": 7355,
  "enrichedCount": 7160
}
```

The `commit` field is the SHA of the commit that produced this index. When a client sees a different `commit` than what it cached, it invalidates and re-downloads the full index. This is what makes "data update visible to clients within seconds" possible without push-based infrastructure.

The CI workflow stamps `commit` using `$GITHUB_SHA` (the trigger commit). When running locally, `enrich_index.mjs` falls back to `git rev-parse HEAD` on the data repo.

## How it connects to the MCP server

The server reads exactly **three paths** at runtime:

| Path | Purpose | When fetched |
|---|---|---|
| `index/version.json` | Cache-invalidation probe | Every startup |
| `index/search_index.json` | Full-text search index | Startup if cache invalidated |
| `views/<NAME>.md` | Individual view definitions | On demand via `get_cds_view` |

**Locally** via `--data <clone>`, or **remotely** via raw GitHub URL:

```
https://raw.githubusercontent.com/truongdva2/cds-kb-data/main
```

Online mode is the default — the MCP needs no configuration.

---

## Updating data — CI/CD workflow

> **TL;DR for contributors:** edit a `.md` under `views/` (or `index/taxonomy.json`) → push → done. The workflow regenerates the index, MCP clients pick it up on their next session.

### Pipeline diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│  DEV LOCAL                                                          │
│                                                                     │
│   1. Edit views/*.md  or  index/taxonomy.json                       │
│   2. (Optional) Smoke-test locally with enrich_index + test_tools   │
│   3. git commit + git push origin main                              │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│  GITHUB ACTIONS                                                     │
│  Trigger: push to main with paths matching views/**                 │
│           or index/taxonomy.json (also: workflow_dispatch)          │
│                                                                     │
│   [job: rebuild]                                                    │
│   ├─ checkout cds-kb-data (fetch-depth: 0, for git history)         │
│   ├─ checkout cds-kb-mcp@main (to get enrich_index.mjs)             │
│   ├─ setup Node.js 20                                               │
│   ├─ npm install minisearch (the script's one dep)                  │
│   ├─ node .cds-kb-mcp/enrich_index.mjs .                            │
│   │     ├─ writes index/search_index.json (5.7 MB)                  │
│   │     └─ writes index/version.json (commit = $GITHUB_SHA)         │
│   ├─ git diff --stat (logs what changed)                            │
│   └─ git commit + git push as github-actions[bot]                   │
│       message: "chore(index): rebuild after <sha>"                  │
└─────────────────────────────────────────────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│  MCP CLIENTS (Claude Code, Claude Desktop, ...)                     │
│  End users — nothing to do                                          │
│                                                                     │
│   On next MCP session start:                                        │
│   ├─ GET <base>/index/version.json (~200 B, no TTL)                 │
│   ├─ compare commit vs ~/.cache/cds-kb/<hash>/version.json          │
│   │   ├─ MATCH    → reuse cache; ready in ~150 ms                   │
│   │   └─ MISMATCH → log "refreshing index"; download new index      │
│   └─ search_cds / get_cds_view return new data                      │
└─────────────────────────────────────────────────────────────────────┘
```

**End-to-end SLA:** from `git push` to clients seeing fresh data = time of one MCP restart **after** the workflow finishes. Workflow itself usually completes in 1–2 minutes.

### Dev checklist — 5 steps

#### Step 1 — edit data locally

```bash
git clone https://github.com/truongdva2/cds-kb-data.git
cd cds-kb-data
# Edit:
#   views/X.md           — add/modify a view
#   index/taxonomy.json  — update LOBs/BOs/keywords
```

> ⚠️ **Do not** hand-edit `index/search_index.json` or `index/version.json`. The workflow regenerates them.

#### Step 2 (recommended) — smoke test before pushing

```bash
# From the cds-kb-mcp repo (clone it as a sibling)
cd ../cds-kb-mcp
node enrich_index.mjs ../cds-kb-data
node test_tools.mjs ../cds-kb-data
```

Pass criteria:
- All 6 tests print `✅`
- `kb_info` shows the expected `viewCount`
- The search test (TEST 1) returns results relevant to your edits

**Important** — restore the local index before committing so the CI is the only thing that produces it:

```bash
cd ../cds-kb-data
git checkout index/search_index.json index/version.json
rm -f index/search_index.json.bak
```

#### Step 3 — commit and push

```bash
cd cds-kb-data
git add views/ index/taxonomy.json   # data only, NOT index/search_index.json
git commit -m "data: <short description>"
# Examples:
#   data: add I_VENDORAGING view for AP report
#   data: update bo:salesorder keywords
#   data: remove deprecated I_LEGACY_FOO
git push origin main
```

#### Step 4 — watch the workflow run

Open the repo's **Actions** tab:

1. The workflow appears with `🟡 In progress` status within ~30 s of your push.
2. Click into the run to see each step:

| Step | Typical duration | What to verify |
|---|---|---|
| Checkout cds-kb-data | ~5 s | ✓ |
| Checkout cds-kb-mcp | ~5 s | ✓ |
| Setup Node.js | ~3 s | ✓ |
| Install minisearch | ~10 s | ✓ |
| Rebuild search_index + version.json | ~15–30 s | **Correct `viewCount`, `commit` = the trigger SHA** |
| Show diff stats | ~1 s | Confirms which files changed bytes |
| Commit and push | ~5 s | **`chore(index): rebuild after <sha>`** lands on `main` |

3. Final status: `✅ Success` (1–2 minutes total).

Then in the **Code** tab, the bot's commit should be visible. Open `index/version.json` — its `commit` field should equal the SHA of the previous step.

#### Step 5 — verify a client sees the new data

In any project that has `cds-kb` registered as an MCP, ask the agent:

> *"Run kb_info."*

Look at the `commit` field. It should match the workflow's bot commit (8-char prefix).

If you want to force a refresh outside an AI session:

```bash
CDS_KB_REFRESH=1 node /path/to/cds-kb-mcp/dist/cds-kb-mcp.mjs
```

---

## Common scenarios

### A. Workflow runs but logs "No index changes to commit"

The edit didn't affect indexed fields (e.g. whitespace, source comment). Not a problem — the workflow passes `✅` and skips the commit step.

### B. Workflow fails at the rebuild step

Most common causes:
- A new view's YAML frontmatter is malformed (missing required field, bad indentation)
- `taxonomy.json` has a JSON syntax error (trailing comma, etc.)

**Fix:** open the failing step's log, find the error from `enrich_index.mjs`, fix locally, re-push.

### C. Workflow fails at "Commit and push" with HTTP 403

The repo isn't granting the bot write permission.

**One-time fix:** Settings → Actions → General → Workflow permissions → select **"Read and write permissions"** → Save.

### D. A client still sees old data after the workflow finishes

The client is running in an old session whose cache hasn't been re-probed.

**Fix any one of:**
- Restart the MCP host (close/reopen Claude Code or Claude Desktop)
- Wipe cache: `rm -rf ~/.cache/cds-kb/`
- Start the server with `CDS_KB_REFRESH=1`

### E. Need to roll back a bad data commit

```bash
git revert <bad-sha>
git push
```

The workflow runs against the reverted state — clients sync back to the previous version within a minute.

### F. Need to change `enrich_index.mjs` logic itself (not data)

That script lives in `cds-kb-mcp`, not here. Flow:

1. Edit `cds-kb-mcp/enrich_index.mjs` → commit + push **that** repo.
2. **Manually trigger** the workflow in this repo: Actions tab → "Rebuild search index on data change" → **Run workflow** button.
3. The workflow checks out `cds-kb-mcp@main`, so it'll use the new logic.
4. If the index schema changed, you may also need to bump the MCP bundle in clients.

---

## Quick reference

| Situation | Command |
|---|---|
| Routine data edit | edit → `git commit` → `git push` (workflow handles the rest) |
| Smoke test before push | `node ../cds-kb-mcp/enrich_index.mjs . && node ../cds-kb-mcp/test_tools.mjs .` |
| Trigger workflow manually | Actions tab → Rebuild workflow → "Run workflow" button |
| Force a client to refresh | `CDS_KB_REFRESH=1 …` or `rm -rf ~/.cache/cds-kb/` |
| Check which commit a client is on | Ask the AI for `kb_info`, look at `commit` field |
| Roll back | `git revert <sha> && git push` |

## Statistics

| Metric | Value |
|---|---|
| Total CDS views | 7,355 |
| Enriched (with `semanticDescription`) | 7,160 (97.3%) |
| Unique SAP modules | 31 |
| Lines of Business | 12 |
| Business Objects in taxonomy | 829 |
| Views with business object tag | 889 |
| `search_index.json` (on disk) | ~5.7 MB |
| `search_index.json` (on the wire, gzip) | ~820 KB |
| `views/` folder | ~80 MB unzipped |
| Top filename prefixes | `I_` (6,594) · `D_` (485) · `C_` (179) |

## License

Internal use — SAP CDS view metadata extracted from public SAP documentation.
