---
name: I_PURCONTRHEADERNOTESTP
description: Purcontrheadernotestp
semantic_en: "purchase contract header notes — stores text documentation and comments at the contract level"
semantic_vi: "ghi chú tiêu đề hợp đồng mua — lưu trữ tài liệu văn bản và nhận xét ở cấp hợp đồng"
keywords:
  - ghi chú hợp đồng
  - tài liệu hợp đồng
  - tiêu đề
app_component: MM-PUR-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - note
  - header-level
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRHEADERNOTESTP

**Purcontrheadernotestp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ArchitecturalObjectNumber` | `ArchitecturalObjectNumber` |
| `TechnicalObjectType` | `TechnicalObjectType` |
| `DocumentText` | `DocumentText` |
| `Language` | `Language` |
| `PurchaseContract` | `PurchaseContract` |
| `NoteDescription` | `NoteDescription` |
| `LastChangeDateTime` | `LastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Header Notes - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.semanticKey:  [ 'ArchitecturalObjectNumber','TechnicalObjectType','DocumentText','Language','PurchaseContract']

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #CUSTOMIZING
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_PurContrHeaderNotesTP 
as projection on R_PurContrHeaderNotesTP 
{
  key ArchitecturalObjectNumber,
  key TechnicalObjectType,
  key DocumentText,
  key Language,
  key PurchaseContract,
  NoteDescription,
   @Semantics.systemDateTime.lastChangedAt: true
  LastChangeDateTime,
  /* Associations */
 _PurchaseContract : redirected to parent I_PurchaseContractTP
}
```
