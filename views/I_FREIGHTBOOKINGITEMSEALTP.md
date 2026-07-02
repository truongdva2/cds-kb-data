---
name: I_FREIGHTBOOKINGITEMSEALTP
description: Freightbookingitemsealtp
semantic_en: "freight booking item seal transactional proxy — seal numbers and sealing timestamps for shipment security tracking on transportation order items."
semantic_vi: "con dấu mặt hàng đặt hàng vận chuyển - máy chủ proxy giao dịch — số con dấu và dấu thời gian đóng dấu để theo dõi bảo mật hàng hóa trên các mặt hàng đơn hàng vận chuyển."
keywords:
  - con dấu vận chuyển
  - bảo mật hàng hóa
  - đặt hàng
app_component: TM-FRM-FRB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRB
  - interface-view
  - transactional-processing
  - freight
  - item-level
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGITEMSEALTP

**Freightbookingitemsealtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdItemSealUUID` | `TranspOrdItemSealUUID` |
| `TransportationOrderItemUUID` | `TransportationOrderItemUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TranspOrdItemSealNumber` | `TranspOrdItemSealNumber` |
| `TranspOrdItemSealingDateTime` | `TranspOrdItemSealingDateTime` |
| `_FreightBooking` | *Association* |
| `_FreightBookingItem` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Booking Item Seal - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['TranspOrdItemSealNumber'],
   representativeKey: 'TranspOrdItemSealUUID',
   sapObjectNodeType.name: 'FreightBookingItemSeal'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightBookingItemSealTP
  as projection on R_TranspOrdItemSealTP as FreightBookingItemSeal
{
      /* Attributes */
  key TranspOrdItemSealUUID,
      TransportationOrderItemUUID,
      TransportationOrderUUID,
      TranspOrdItemSealNumber,
      TranspOrdItemSealingDateTime,

      /* Redirections */
      FreightBookingItemSeal._TransportationOrder as _FreightBooking : redirected to  I_FreightBookingTP,
      FreightBookingItemSeal._TransportationOrderItem as _FreightBookingItem : redirected to parent I_FreightBookingItemTP
}
where FreightBookingItemSeal.TransportationOrderCategory = 'BO'
```
