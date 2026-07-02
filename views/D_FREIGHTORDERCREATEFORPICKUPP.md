---
name: D_FREIGHTORDERCREATEFORPICKUPP
description: D Freightordercreateforpickupp
semantic_en: "freight order creation for pickup action parameters — input for CreateFreightOrderForPickup action, specifying transportation order type."
semantic_vi: "tham số hành động tạo đơn hàng vận chuyển cho nhận hàng — đầu vào cho hành động CreateFreightOrderForPickup, xác định loại đơn hàng vận chuyển."
keywords:
  - tạo đơn hàng
  - nhận hàng
  - loại
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
# D_FREIGHTORDERCREATEFORPICKUPP

**D Freightordercreateforpickupp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrderType` | `/scmtms/tor_type` |
| `_FreightBookingItems` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FreightBookingItems` | `D_FreightOrderCrteForPkupItmP` | [0..*] |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'FreightOrderCreateForPickup Action Param'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_FreightOrderCreateForPickupP
{
  TransportationOrderType : /scmtms/tor_type;  
  _FreightBookingItems    : association [0..*] to D_FreightOrderCrteForPkupItmP on 1 = 0; 
}
```
