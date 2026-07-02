---
name: I_FREIGHTUNITDOCREFTP
description: Freightunitdocreftp
semantic_en: "freight unit document reference transactional proxy — source document references linked to transportation units with document types and dates."
semantic_vi: "tham chiếu tài liệu đơn vị vận chuyển - máy chủ proxy giao dịch — tham chiếu tài liệu nguồn được liên kết với các đơn vị vận chuyển với loại tài liệu và ngày tháng."
keywords:
  - tham chiếu tài liệu
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
  - component:TM-PLN-FU-2CL
  - lob:Other
---
# I_FREIGHTUNITDOCREFTP

**Freightunitdocreftp**

| Property | Value |
|---|---|
| App Component | `TM-PLN-FU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrderDocRefUUID` | `TransportationOrderDocRefUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TranspOrdDocReferenceID` | `TranspOrdDocReferenceID` |
| `TranspOrdDocReferenceType` | `TranspOrdDocReferenceType` |
| `TranspOrdDocReferenceItmID` | `TranspOrdDocReferenceItmID` |
| `TranspOrdDocReferenceItmType` | `TranspOrdDocReferenceItmType` |
| `TranspOrdDocumentReferenceDate` | `TranspOrdDocumentReferenceDate` |
| `TranspOrdDocRefIssuerName` | `TranspOrdDocRefIssuerName` |
| `_FreightUnit` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Unit Document Reference - TP'
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
   semanticKey: ['TranspOrdDocReferenceID'],
   representativeKey: 'TransportationOrderDocRefUUID',
   sapObjectNodeType.name: 'FreightUnitDocumentReference'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FreightUnitDocRefTP
  as projection on R_TranspOrdDocRefTP as FreightUnitDocumentReference
{
      /* Attributes */
  key TransportationOrderDocRefUUID,
      TransportationOrderUUID,
      TranspOrdDocReferenceID,
      TranspOrdDocReferenceType,
      TranspOrdDocReferenceItmID,
      TranspOrdDocReferenceItmType,
      TranspOrdDocumentReferenceDate,
      TranspOrdDocRefIssuerName,

      /* Redirections */
      FreightUnitDocumentReference._TransportationOrder as _FreightUnit : redirected to parent I_FreightUnitTP
}
where FreightUnitDocumentReference.TransportationOrderCategory = 'FU'
```
