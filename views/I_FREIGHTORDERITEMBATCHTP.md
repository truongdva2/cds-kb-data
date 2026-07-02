---
name: I_FREIGHTORDERITEMBATCHTP
description: Freightorderitembatchtp
semantic_en: "freight order item batch transactional proxy — batch and manufacturing information for transportation order items with expiration tracking."
semantic_vi: "lô mặt hàng đơn hàng vận chuyển - máy chủ proxy giao dịch — thông tin lô và sản xuất cho các mặt hàng đơn hàng vận chuyển với theo dõi hết hạn."
keywords:
  - lô hàng
  - ngày sản xuất
  - hết hạn
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRO
  - interface-view
  - transactional-processing
  - freight
  - batch
  - item-level
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERITEMBATCHTP

**Freightorderitembatchtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `_FreightOrder` | *Association* |
| `_FreightOrderItem` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Order Item Batch - TP'
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
   sapObjectNodeType.name: 'FreightOrderItemBatch'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

define view entity I_FreightOrderItemBatchTP
  as projection on R_TranspOrdItemBatchTP as FreightOrderItemBatch
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
      FreightOrderItemBatch._TransportationOrder     as _FreightOrder     : redirected to        I_FreightOrderTP,
      FreightOrderItemBatch._TransportationOrderItem as _FreightOrderItem : redirected to parent I_FreightOrderItemTP
}
where FreightOrderItemBatch.TransportationOrderCategory = 'TO'
```
