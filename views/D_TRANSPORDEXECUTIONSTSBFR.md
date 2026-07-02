---
name: D_TRANSPORDEXECUTIONSTSBFR
description: D Transpordexecutionstsbfr
semantic_en: "parameterized status-before signature — transportation order execution status state before change"
semantic_vi: "chữ ký trạng thái trước được tham số hóa — trạng thái thực hiện đơn hàng vận chuyển trước khi thay đổi"
keywords:
  - thực hiện đơn hàng
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
# D_TRANSPORDEXECUTIONSTSBFR

**D Transpordexecutionstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrderExecSts` | `/scmtms/tor_execution_status` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_TranspOrdExecutionStsChgd` | — |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdExecutionStsBfr
{
  TransportationOrderExecSts : /scmtms/tor_execution_status;
  _DummyAssociation           : association to parent D_TranspOrdExecutionStsChgd;
}
```
