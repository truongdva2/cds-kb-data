---
name: I_FREIGHTUNITITEMBATCHTP
description: Freightunititembatchtp
semantic_en: "freight unit item batch transactional proxy — batch and manufacturing information for transportation unit items with expiration tracking."
semantic_vi: "lô mặt hàng đơn vị vận chuyển - máy chủ proxy giao dịch — thông tin lô và sản xuất cho các mặt hàng đơn vị vận chuyển với theo dõi hết hạn."
keywords:
  - lô hàng
  - ngày sản xuất
  - hết hạn
app_component: TM-PLN-FU-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-PLN
  - TM-PLN-FU
  - interface-view
  - transactional-processing
  - freight
  - batch
  - item-level
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FREIGHTUNITITEMBATCHTP

**Freightunititembatchtp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
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
| `_FreightUnit` | *Association* |
| `_FreightUnitItem` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Unit Item Batch - TP'
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
   sapObjectNodeType.name: 'FreightUnitItemBatch'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl: { authorizationCheck:    #MANDATORY,
                  personalData.blocking: #('TRANSACTIONAL_DATA') }

define view entity I_FreightUnitItemBatchTP
  as projection on R_TranspOrdItemBatchTP as FreightUnitItemBatch
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
      FreightUnitItemBatch._TransportationOrder     as _FreightUnit     : redirected to        I_FreightUnitTP,
      FreightUnitItemBatch._TransportationOrderItem as _FreightUnitItem : redirected to parent I_FreightUnitItemTP
}
where FreightUnitItemBatch.TransportationOrderCategory = 'FU'
```
