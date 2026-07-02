---
name: D_FREIGHTORDCRTEFORDELIVITMP
description: D Freightordcrtefordelivitmp
semantic_en: "freight order creation for delivery item parameters — action parameter capturing freight booking item UUID for creating delivery-linked freight orders."
semantic_vi: "tham số tạo đơn hàng vận chuyển cho mục giao hàng — tham số hành động ghi lại UUID mục đặt vận chuyển để tạo đơn hàng vận chuyển liên kết giao hàng."
keywords:
  - đơn hàng vận chuyển
  - giao hàng
  - tham số
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
---
# D_FREIGHTORDCRTEFORDELIVITMP

**D Freightordcrtefordelivitmp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FreightBookingItemUUID` | `/scmtms/vdm_frt_bkg_item_uuid` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'FreightOrdCrteForDelivItmP Act Param'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrdCrteForDelivItmP 
{
    FreightBookingItemUUID  : /scmtms/vdm_frt_bkg_item_uuid;
}
```
