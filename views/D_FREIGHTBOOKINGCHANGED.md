---
name: D_FREIGHTBOOKINGCHANGED
description: D Freightbookingchanged
semantic_en: "freight booking modification event — change-document signature capturing when FreightBooking is updated, including transportation mode, shipping type, and carrier changes."
semantic_vi: "sự kiện thay đổi đặt vận chuyển — chữ ký tài liệu ghi lại khi FreightBooking được cập nhật, bao gồm thay đổi chế độ vận chuyển, loại vận chuyển, và nhà vận chuyển."
keywords:
  - thay đổi vận chuyển
  - sự kiện
  - chi tiết đơn hàng
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - freight
  - component:TM-FRM-2CL
  - lob:Other
  - bo:FreightBooking
---
# D_FREIGHTBOOKINGCHANGED

**D Freightbookingchanged**

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

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'FreightBooking'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_FreightBookingChanged
{

  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;

}
```
