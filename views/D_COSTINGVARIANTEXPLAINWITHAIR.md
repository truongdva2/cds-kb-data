---
name: D_COSTINGVARIANTEXPLAINWITHAIR
description: D Costingvariantexplainwithair
semantic_en: "Costing Variant Explain with AI Result — result of AI explanation providing textual interpretation of costing variant logic."
semantic_vi: "Kết quả Giải thích Phương án Định giá với AI — kết quả giải thích từ AI."
keywords:
  - định giá
  - giải thích AI
  - kết quả
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# D_COSTINGVARIANTEXPLAINWITHAIR

**D Costingvariantexplainwithair**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ExplainWithAIResultText` | `aifnd_xc_explanation` |
| `CreationDateTime` | `tzntstmps` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Returning entity of AI Explain Request'
define root abstract entity D_CostingVariantExplainWithAIR
{
  ExplainWithAIResultText : aifnd_xc_explanation;
  CreationDateTime    : tzntstmps;
}
```
