# tools/

Maintenance scripts for the CDS view data. Not used by the MCP server at runtime
(the MCP only reads `views/**` and `index/**`).

## regenerate_tables.mjs

Rebuilds the `## Fields` and `## Associations` tables of each `views/*.md` from its
`## Source Code` (the ABAP CDS DDL), which is the source of truth.

**Why:** the original extraction produced corrupt Fields tables on complex views —
multi-line annotations (`@Consumption.valueHelpDefinition: [{...}]`) counted as fields,
calculated `case…end` / `cast(… as … preserving type)` fields split across many rows,
real fields missing, and comment braces (`//… }`) breaking the projection `{}` scan.
Measured before the fix: **38.7%** of field rows were malformed across **82.9%** of files.

The parser strips comments + annotations first, then walks the projection with a
bracket/string-aware scanner. It handles: view / view entity / projection views,
abstract entities (`name : type;`), `with parameters`, `key` prefix, calculated
expressions, path-filter exposures (`_Assoc[filter].Field`), and association/composition
declarations. It refuses to touch views whose source is an extraction error
(`GetSource failed … does not exist`).

```bash
# dry-run, all views (summary only)
node tools/regenerate_tables.mjs .

# rewrite all views
node tools/regenerate_tables.mjs . --all --write

# inspect a single view
node tools/regenerate_tables.mjs . I_BUSINESSPARTNER --dump

# rewrite specific views
node tools/regenerate_tables.mjs . I_SALESORDER I_PRODUCT --write
```

> **Ideal home:** this logic belongs in the extraction pipeline (the `cds-kb-mcp`
> repo, alongside `enrich_index.mjs`) so that newly added views are generated
> correctly at source. It is kept here as a one-shot repair / verification tool.
