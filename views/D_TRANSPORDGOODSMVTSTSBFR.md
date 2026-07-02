---
name: D_TRANSPORDGOODSMVTSTSBFR
description: D Transpordgoodsmvtstsbfr
semantic_en: "parameterized status-before signature — transportation order goods movement status state before change"
semantic_vi: "chữ ký trạng thái trước được tham số hóa — trạng thái chuyển động hàng hóa đơn hàng vận chuyển trước khi thay đổi"
keywords:
  - chuyển động hàng hóa
  - trạng thái chuyển động
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
# D_TRANSPORDGOODSMVTSTSBFR

**D Transpordgoodsmvtstsbfr**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdGoodsMovementStatus` | `/scmtms/dlv_goods_movem_status` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_TranspOrdGoodsMvtStsChgd` | — |

## Source Code

```abap
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspOrdGoodsMvtStsBfr
{
  TranspOrdGoodsMovementStatus : /scmtms/dlv_goods_movem_status;
  _DummyAssociation            : association to parent D_TranspOrdGoodsMvtStsChgd;
}
```
