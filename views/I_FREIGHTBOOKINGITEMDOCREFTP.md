---
name: I_FREIGHTBOOKINGITEMDOCREFTP
description: Freightbookingitemdocreftp
semantic_en: "freight booking item document reference transactional proxy — source document references at line-item level for transportation order items."
semantic_vi: "tham chiếu tài liệu mặt hàng đặt hàng vận chuyển - máy chủ proxy giao dịch — tham chiếu tài liệu nguồn ở cấp độ dòng cho các mặt hàng đơn hàng vận chuyển."
keywords:
  - tham chiếu tài liệu mặt hàng
  - đặt hàng vận chuyển
  - số hiệu tài liệu
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
# I_FREIGHTBOOKINGITEMDOCREFTP

**Freightbookingitemdocreftp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdItemDocReferenceUUID` | `TranspOrdItemDocReferenceUUID` |
| `TransportationOrderItemUUID` | `TransportationOrderItemUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TranspOrdItemDocReferenceID` | `TranspOrdItemDocReferenceID` |
| `TranspOrdItemDocReferenceType` | `TranspOrdItemDocReferenceType` |
| `TranspOrdItmDocReferenceItemID` | `TranspOrdItmDocReferenceItemID` |
| `TranspOrdItmDocRefItemType` | `TranspOrdItmDocRefItemType` |
| `TranspOrdItmDocRefDate` | `TranspOrdItmDocRefDate` |
| `TranspOrdItemDocRefIssuerName` | `TranspOrdItemDocRefIssuerName` |
| `_FreightBooking` | *Association* |
| `_FreightBookingItem` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Booking Item Doc Ref - TP'
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
   semanticKey: ['TranspOrdItemDocReferenceID'],
   representativeKey: 'TranspOrdItemDocReferenceUUID',
   sapObjectNodeType.name: 'FreightBookingItemDocRef'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
                 
define view entity I_FreightBookingItemDocRefTP
  as projection on R_TranspOrdItemDocRefTP as FreightBookingItemDocRef
{
      /* Attributes */
  key TranspOrdItemDocReferenceUUID,
      TransportationOrderItemUUID,
      TransportationOrderUUID,
      TranspOrdItemDocReferenceID,
      TranspOrdItemDocReferenceType,
      TranspOrdItmDocReferenceItemID,
      TranspOrdItmDocRefItemType,
      TranspOrdItmDocRefDate,
      TranspOrdItemDocRefIssuerName,

      /* Redirections */
      FreightBookingItemDocRef._TransportationOrder as _FreightBooking : redirected to  I_FreightBookingTP,
      FreightBookingItemDocRef._TransportationOrderItem as _FreightBookingItem : redirected to parent I_FreightBookingItemTP
}
where FreightBookingItemDocRef.TransportationOrderCategory = 'BO'
```
