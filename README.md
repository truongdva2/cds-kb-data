# cds-kb-data

Pure **data** repository for the SAP CDS Knowledge Base — consumed read-only by the
[`cds-kb-mcp`](https://github.com/truongdva2/cds-kb-mcp) MCP server.

No code, no build tooling here — just views and a pre-built search index.

## Contents

```
views/                    7,355 SAP S/4HANA released CDS views, one .md each
                          (YAML frontmatter + fields + associations + DDL source)

index/search_index.json   Pre-built MiniSearch (BM25) search index
                          (~4.7 MB, self-describing, carries its own options)
```

### View file structure

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

### Index format

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

The MiniSearch `options` travel inside the file, so the MCP server shares **zero schema code**
with this repo — they evolve independently as long as `schemaVersion` is honored.

## How it connects to the MCP server

The server reads **exactly two paths** at runtime:

| Path | Purpose |
|---|---|
| `index/search_index.json` | Full-text search index (loaded once at startup) |
| `views/<NAME>.md` | Individual view definitions (loaded on demand) |

**Locally** via `--data <clone>`, or **remotely** via raw GitHub URL:

```
https://raw.githubusercontent.com/truongdva2/cds_knowledge_base/main
```

## Statistics

| Metric | Value |
|---|---|
| Total CDS views | 7,355 |
| Enriched (with `semanticDescription`) | 7,160 (97.3%) |
| Unique SAP modules | 31 |
| Views with business object tag | 889 |
| Index file size | ~4.7 MB |
| Views folder size | ~45 MB |
| Top prefixes | `I_` (6594), `D_` (485), `C_` (179) |

## Rebuilding the index

`index/search_index.json` is a **pre-built artifact**. To rebuild or enrich it:

```bash
# In the cds-kb-mcp repo:
node enrich_index.mjs /path/to/this/repo
```

This extracts `@EndUserText.label` from DDL source in each view file and rebuilds
the MiniSearch index with human-readable `semanticDescription` and improved `description` fields.

## License

Internal use — SAP CDS view metadata extracted from public SAP documentation.
