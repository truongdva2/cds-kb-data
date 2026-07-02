---
name: I_CNTRLPURCONTRITEMNOTESTP_2
description: Cntrlpurcontritemnotestp 2
semantic_en: "central contract item notes with transfer pricing — document notes and attachments at line-item level for central purchase contracts with content and audit metadata."
semantic_vi: "ghi chú mục hợp đồng tập trung với định giá chuyển nhượng — ghi chú tài liệu và tệp đính kèm ở cấp độ mục hàng cho các hợp đồng mua tập trung với siêu dữ liệu nội dung và kiểm toán."
keywords:
  - hợp đồng tập trung
  - ghi chú mục
  - tài liệu
  - tệp đính kèm
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
  - item-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLPURCONTRITEMNOTESTP_2

**Cntrlpurcontritemnotestp 2**

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
| `CentralPurchaseContract` | `CentralPurchaseContract` |
| `CentralPurchaseContractItem` | `CentralPurchaseContractItem` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'CCTR Item Notes - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: [ 'CentralPurchaseContract', 'CentralPurchaseContractItem' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CntrlPurContrItemNotesTP_2
  as projection on R_CntrlPurContrItemNotesTP
{

  key PurchasingDocumentNoteUUID,
      PurchasingDocumentObjNodeType,
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
      CentralPurchaseContract,
      CentralPurchaseContractItem,
      
      
      /* Associations */
      _CentralPurchaseContract   : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurchaseContractItem : redirected to parent I_CntrlPurchaseContractItmTP_2 
}
```
