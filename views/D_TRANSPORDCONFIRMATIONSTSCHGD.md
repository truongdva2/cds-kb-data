---
name: D_TRANSPORDCONFIRMATIONSTSCHGD
description: D Transpordconfirmationstschgd
semantic_en: "change-document signature for transportation orders — records confirmation status change with order details (order number, type, mode, shipping type, carrier, procurement organization, confirmation status)"
semantic_vi: "chữ ký thay đổi tài liệu cho các đơn hàng vận chuyển — ghi lại thay đổi trạng thái xác nhận với chi tiết đơn hàng (số đơn hàng, loại, chế độ, loại vận chuyển, nhà vận chuyển, tổ chức mua, trạng thái xác nhận)"
keywords:
  - đơn hàng vận chuyển
  - xác nhận đơn hàng
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
# D_TRANSPORDCONFIRMATIONSTSCHGD

**D Transpordconfirmationstschgd**

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
| `TransportationOrderConfSts` | `/scmtms/tor_confirm_status` |
| `__before` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `__before` | `D_TranspOrdConfirmationStsBfr` | [1..1] |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdConfirmationStsChgd
{
  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;
  TransportationOrderConfSts : /scmtms/tor_confirm_status;
  __before                   : composition [1..1] of D_TranspOrdConfirmationStsBfr;

}
```
