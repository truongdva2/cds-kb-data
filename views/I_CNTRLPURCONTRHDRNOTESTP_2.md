---
name: I_CNTRLPURCONTRHDRNOTESTP_2
description: Cntrlpurcontrhdrnotestp 2
semantic_en: "central contract header notes with transfer pricing — document notes and annotations at header level for central purchase contracts including creation/modification metadata."
semantic_vi: "ghi chú tiêu đề hợp đồng tập trung với định giá chuyển nhượng — ghi chú tài liệu và chú thích ở cấp tiêu đề cho các hợp đồng mua tập trung bao gồm siêu dữ liệu tạo/sửa đổi."
keywords:
  - hợp đồng tập trung
  - ghi chú
  - tiêu đề
  - tài liệu
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - note
  - header-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRHDRNOTESTP_2

**Cntrlpurcontrhdrnotestp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchasingDocumentNoteUUID` | `PurchasingDocumentNoteUUID` |
| `PurchasingDocumentObjNodeType` | `PurchasingDocumentObjNodeType` |
| `CentralPurchaseContract` | `CentralPurchaseContract` |
| `PurchasingDocumentNoteObjectID` | `PurchasingDocumentNoteObjectID` |
| `PurchasingDocumentNoteType` | `PurchasingDocumentNoteType` |
| `PurchasingDocumentNoteLanguage` | `PurchasingDocumentNoteLanguage` |
| `PurchasingDocumentNoteTitle` | `PurchasingDocumentNoteTitle` |
| `PurchasingDocumentNoteMimeType` | `PurchasingDocumentNoteMimeType` |
| `PurgDocNoteCreatedBy` | `PurgDocNoteCreatedBy` |
| `PurgDocNoteCreationDateTime` | `PurgDocNoteCreationDateTime` |
| `PurgDocNoteLastChangedBy` | `PurgDocNoteLastChangedBy` |
| `PurgDocNoteLastChangedDateTime` | `PurgDocNoteLastChangedDateTime` |
| `PurgDocNoteText` | `PurgDocNoteText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'CCTR Header Notes - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlPurContrHdrNotesTP_2
  as projection on R_CntrlPurContractHdrNotesTP
{

  key PurchasingDocumentNoteUUID,
      PurchasingDocumentObjNodeType,
      CentralPurchaseContract,
      PurchasingDocumentNoteObjectID,
      PurchasingDocumentNoteType,
      PurchasingDocumentNoteLanguage,
      PurchasingDocumentNoteTitle,
      PurchasingDocumentNoteMimeType,
      PurgDocNoteCreatedBy,
      PurgDocNoteCreationDateTime,
      PurgDocNoteLastChangedBy,
      PurgDocNoteLastChangedDateTime,
      PurgDocNoteText,

      /* Associations */
      _CntrlPurchaseContract : redirected to parent I_CntrlPurchaseContractTP_2

}
```
