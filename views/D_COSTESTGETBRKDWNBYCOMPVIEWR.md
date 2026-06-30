---
name: D_COSTESTGETBRKDWNBYCOMPVIEWR
description: D Costestgetbrkdwnbycompviewr
semantic_en: "Cost breakdown of cost estimate action result — output structure returning CompanyCodeCurrency, ControllingAreaCurrency, and the associated cost components."
semantic_vi: "Kết quả hành động phân tích chi phí ước tính — cấu trúc đầu ra trả về đơn vị tiền tệ mã công ty, đơn vị tiền tệ vùng kiểm soát và các thành phần chi phí liên quan."
keywords:
  - phân tích chi phí
  - kết quả ước tính giá thành
  - thành phần chi phí
  - đơn vị tiền tệ kiểm soát
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
# D_COSTESTGETBRKDWNBYCOMPVIEWR

**D Costestgetbrkdwnbycompviewr**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCodeCurrency` | `waers` |
| `ControllingAreaCurrency` | `waers` |
| `_CostComponents` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostComponents` | `D_CostEstCostComponentR` | [0..*] |

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Cost Breakdown of Cost Estimate'
define root abstract entity D_CostEstGetBrkdwnByCompViewR
{
    CompanyCodeCurrency : waers;
    ControllingAreaCurrency : waers;
    _CostComponents : association [0..*] to D_CostEstCostComponentR on 1=1;
}
```
