---
name: D_TRANSPORDSUBCONTRGSTSCHGD
description: D Transpordsubcontrgstschgd
semantic_en: "transportation order subcontracting status change signature — captures order, type, mode, shipping type, carrier, and subcontracting status changes."
semantic_vi: "chữ ký thay đổi trạng thái phân thầu đơn hàng vận chuyển — ghi lại đơn hàng, loại, chế độ, loại giao hàng, nhà vận chuyển và thay đổi trạng thái phân thầu."
keywords:
  - thay đổi trạng thái phân thầu
  - đơn hàng vận chuyển
  - nhà vận chuyển
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
# D_TRANSPORDSUBCONTRGSTSCHGD

**D Transpordsubcontrgstschgd**

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
| `TranspOrderSubcontrgSts` | `/scmtms/tor_subcontr_status` |
| `__before` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `__before` | `D_TranspOrdSubcontrgStsBfr` | [1..1] |

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'TransportationOrder'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdSubcontrgStsChgd
{
  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;
  TranspOrderSubcontrgSts    : /scmtms/tor_subcontr_status;
  __before                   : composition [1..1] of D_TranspOrdSubcontrgStsBfr;

}
```
