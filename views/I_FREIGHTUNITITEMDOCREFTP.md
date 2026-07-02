---
name: I_FREIGHTUNITITEMDOCREFTP
description: Freightunititemdocreftp
semantic_en: "freight unit item document reference transactional proxy — source document references at line-item level for transportation unit items."
semantic_vi: "tham chiếu tài liệu mặt hàng đơn vị vận chuyển - máy chủ proxy giao dịch — tham chiếu tài liệu nguồn ở cấp độ dòng cho các mặt hàng đơn vị vận chuyển."
keywords:
  - tham chiếu tài liệu mặt hàng
  - đơn vị vận chuyển
  - số hiệu tài liệu
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
  - item-level
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FREIGHTUNITITEMDOCREFTP

**Freightunititemdocreftp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
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
| `_FreightUnit` | *Association* |
| `_FreightUnitItem` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Unit Item Doc Ref - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern: #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['TranspOrdItemDocReferenceID'],
   representativeKey: 'TranspOrdItemDocReferenceUUID',
   sapObjectNodeType.name: 'FreightUnitItemDocRef'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightUnitItemDocRefTP
  as projection on R_TranspOrdItemDocRefTP as FreightUnitItemDocRef
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
      FreightUnitItemDocRef._TransportationOrder as _FreightUnit : redirected to I_FreightUnitTP,
      FreightUnitItemDocRef._TransportationOrderItem as _FreightUnitItem: redirected to parent I_FreightUnitItemTP
}
where FreightUnitItemDocRef.TransportationOrderCategory = 'FU'
```
