---
name: D_CNDNRECORDSELECTIONOPTIONP
description: D Cndnrecordselectionoptionp
semantic_en: "Pricing Condition Record Selection Options Parameter — parameter for selecting pricing condition records with range criteria."
semantic_vi: "Tham số Tùy chọn Lựa chọn Bản ghi Điều kiện Giá — tham số lựa chọn bản ghi điều kiện giá."
keywords:
  - điều kiện giá
  - bản ghi
  - phạm vi lựa chọn
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# D_CNDNRECORDSELECTIONOPTIONP

**D Cndnrecordselectionoptionp**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PrcgConditionRecordRangeSign` | `tvarv_sign` |
| `PrcgConditionRecordRangeOption` | `tvarv_opti` |
| `PricingConditionRecordRangeLow` | `knumh` |
| `PrcgConditionRecordRangeHigh` | `knumh` |
| `_ConditionRecordCriteriaItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionRecordCriteriaItem` | `D_ConditionRecordCriteriaItemP` | — |

## Source Code

```abap
@EndUserText.label: 'Selection Option for Condition Records'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
define abstract entity D_CndnRecordSelectionOptionP
{
  PrcgConditionRecordRangeSign   : tvarv_sign;
  PrcgConditionRecordRangeOption : tvarv_opti;
  PricingConditionRecordRangeLow : knumh;
  PrcgConditionRecordRangeHigh   : knumh;

  _ConditionRecordCriteriaItem   : association to parent D_ConditionRecordCriteriaItemP;
}
```
