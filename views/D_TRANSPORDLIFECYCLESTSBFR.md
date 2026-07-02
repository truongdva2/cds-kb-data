---
name: D_TRANSPORDLIFECYCLESTSBFR
description: D Transpordlifecyclestsbfr
semantic_en: "transportation order lifecycle status — abstract entity capturing the preceding state before change."
semantic_vi: "trạng thái vòng đời đơn hàng vận chuyển — thực thể trừu tượng ghi lại trạng thái trước khi thay đổi."
keywords:
  - trạng thái vòng đời
  - đơn hàng vận chuyển
  - STSBFR
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDLIFECYCLESTSBFR

**D Transpordlifecyclestsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdLifeCycleStatus` | `/scmtms/tor_lc_status` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_TranspOrdLifecycleStsChgd` | — |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdLifecycleStsBfr
{
  TranspOrdLifeCycleStatus : /scmtms/tor_lc_status;
  _DummyAssociation        : association to parent D_TranspOrdLifecycleStsChgd;
}
```
