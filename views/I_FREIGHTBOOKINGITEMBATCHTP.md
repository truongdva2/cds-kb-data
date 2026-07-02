---
name: I_FREIGHTBOOKINGITEMBATCHTP
description: Freightbookingitembatchtp
semantic_en: "freight booking item batch transactional proxy — batch and manufacturing information for transportation order items with expiration tracking."
semantic_vi: "lô mặt hàng đặt hàng vận chuyển - máy chủ proxy giao dịch — thông tin lô và sản xuất cho các mặt hàng đơn hàng vận chuyển với theo dõi hết hạn."
keywords:
  - lô hàng
  - ngày sản xuất
  - hết hạn
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
  - batch
  - item-level
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGITEMBATCHTP

**Freightbookingitembatchtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdItemBatchUUID` | `TranspOrdItemBatchUUID` |
| `TransportationOrderItemUUID` | `TransportationOrderItemUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `Batch` | `Batch` |
| `ProductID` | `ProductID` |
| `BatchBySupplier` | `BatchBySupplier` |
| `ManufactureDate` | `ManufactureDate` |
| `ShelfLifeExpirationDate` | `ShelfLifeExpirationDate` |
| `_FreightBooking` | *Association* |
| `_FreightBookingItem` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Booking Item Batch - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #B,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['Batch'],
   representativeKey: 'TranspOrdItemBatchUUID',
   sapObjectNodeType.name: 'FreightBookingItemBatch'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl: { authorizationCheck:    #MANDATORY,
                  personalData.blocking: #('TRANSACTIONAL_DATA') }

define view entity I_FreightBookingItemBatchTP
  as projection on R_TranspOrdItemBatchTP as FreightBookingItemBatch
{
      /* Attributes */
  key TranspOrdItemBatchUUID,
      TransportationOrderItemUUID,
      TransportationOrderUUID,
      
      Batch,
      ProductID,
      
      BatchBySupplier,
      ManufactureDate,
      ShelfLifeExpirationDate,

      /* Redirections */
      FreightBookingItemBatch._TransportationOrder     as _FreightBooking     : redirected to        I_FreightBookingTP,
      FreightBookingItemBatch._TransportationOrderItem as _FreightBookingItem : redirected to parent I_FreightBookingItemTP
}
where FreightBookingItemBatch.TransportationOrderCategory = 'BO'
```
