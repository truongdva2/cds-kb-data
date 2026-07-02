---
name: D_TRANSPORDBLOCKSTSCHGD
description: D Transpordblockstschgd
semantic_en: "change-document signature for transportation orders — records execution block status change with order details (order number, type, mode, shipping type, carrier, procurement organization, block status)"
semantic_vi: "chữ ký thay đổi tài liệu cho các đơn hàng vận chuyển — ghi lại thay đổi trạng thái khối thực hiện với chi tiết đơn hàng (số đơn hàng, loại, chế độ, loại vận chuyển, nhà vận chuyển, tổ chức mua, trạng thái khối)"
keywords:
  - đơn hàng vận chuyển
  - khối thực hiện
  - thay đổi trạng thái
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
  - bo:TransportationOrder
---
# D_TRANSPORDBLOCKSTSCHGD

**D Transpordblockstschgd**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrder` | `/scmtms/tor_id` |
| `TransportationOrderType` | `/scmtms/tor_type` |
| `TransportationMode` | `/scmtms/trmodcode` |
| `TransportationShippingType` | `/scmtms/shipping_type` |
| `Carrier` | `/scmtms/pty_carrier` |
| `TranspPurgOrgExtID` | `/scmtms/vdm_pur_org_ext_id` |
| `TranspOrdExecutionIsBlocked` | `/scmtms/block_execution` |
| `__before` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `__before` | `D_TranspOrdBlockStsBfr` | [1..1] |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdBlockStsChgd
{
  TransportationOrder         : /scmtms/tor_id;
  TransportationOrderType     : /scmtms/tor_type;
  TransportationMode          : /scmtms/trmodcode;
  TransportationShippingType  : /scmtms/shipping_type;
  Carrier                     : /scmtms/pty_carrier;
  TranspPurgOrgExtID          : /scmtms/vdm_pur_org_ext_id;
  TranspOrdExecutionIsBlocked : /scmtms/block_execution;
  __before                    : composition [1..1] of D_TranspOrdBlockStsBfr;

}
```
