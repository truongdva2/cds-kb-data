---
name: D_FREIGHTBOOKINGCANCELED
description: D Freightbookingcanceled
semantic_en: "freight booking cancellation event — change-document signature tracking when a FreightBooking is canceled, capturing transportation order and carrier details."
semantic_vi: "sự kiện hủy đặt vận chuyển — chữ ký tài liệu thay đổi theo dõi khi một FreightBooking bị hủy, ghi lại chi tiết đơn hàng vận chuyển và nhà vận chuyển."
keywords:
  - hủy vận chuyển
  - sự kiện
  - đơn hàng
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
# D_FREIGHTBOOKINGCANCELED

**D Freightbookingcanceled**

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
define abstract entity D_FreightBookingCanceled
{

  TransportationOrder        : /scmtms/tor_id;
  TransportationOrderType    : /scmtms/tor_type;
  TransportationMode         : /scmtms/trmodcode;
  TransportationShippingType : /scmtms/shipping_type;
  Carrier                    : /scmtms/pty_carrier;
  TranspPurgOrgExtID         : /scmtms/vdm_pur_org_ext_id;

}
```
