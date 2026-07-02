---
name: D_TRANSPORDBLOCKSTSBFR
description: D Transpordblockstsbfr
semantic_en: "parameterized status-before signature — transportation order execution block status state before change"
semantic_vi: "chữ ký trạng thái trước được tham số hóa — trạng thái khối thực hiện đơn hàng vận chuyển trước khi thay đổi"
keywords:
  - khối đơn hàng
  - trạng thái thực hiện
  - đơn hàng vận chuyển
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
# D_TRANSPORDBLOCKSTSBFR

**D Transpordblockstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdExecutionIsBlocked` | `/scmtms/block_execution` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_TranspOrdBlockStsChgd` | — |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdBlockStsBfr
{
  TranspOrdExecutionIsBlocked : /scmtms/block_execution;
  _DummyAssociation        : association to parent D_TranspOrdBlockStsChgd;
}
```
