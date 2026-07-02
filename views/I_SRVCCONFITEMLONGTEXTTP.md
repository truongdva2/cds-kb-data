---
name: I_SRVCCONFITEMLONGTEXTTP
description: Srvcconfitemlongtexttp
semantic_en: "service confirmation item long text — manages unstructured long text entries with mime type and reference support for service line items."
semantic_vi: "văn bản dài mục xác nhận dịch vụ — quản lý các mục văn bản dài không có cấu trúc với hỗ trợ loại mime và tham chiếu cho các mục dịch vụ."
keywords:
  - văn bản dài
  - mục dịch vụ
  - ghi chú
app_component: CRM-S4-SRV-SCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - text
  - item-level
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITEMLONGTEXTTP

**Srvcconfitemlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceConfirmation` | `ServiceConfirmation` |
| `ServiceConfirmationItem` | `ServiceConfirmationItem` |
| `TextObjectType` | `TextObjectType` |
| `Language` | `Language` |
| `SrvcDocLogTextIdentifier` | `SrvcDocLogTextIdentifier` |
| `TextObjectCategory` | `TextObjectCategory` |
| `SrvcDocLongTextMimeType` | `SrvcDocLongTextMimeType` |
| `SrvcConfItemLongText` | `SrvcConfItemLongText` |
| `ReferenceTextObjectCategory` | `ReferenceTextObjectCategory` |
| `ReferenceTextObjectType` | `ReferenceTextObjectType` |
| `ReferenceLongTextKey` | `ReferenceLongTextKey` |
| `ReferenceServiceObjectType` | `ReferenceServiceObjectType` |
| `ReferenceServiceDocument` | `ReferenceServiceDocument` |
| `ReferenceServiceDocumentItem` | `ReferenceServiceDocumentItem` |
| `SrvcDocLongTxtCreationDateTime` | `SrvcDocLongTxtCreationDateTime` |
| `SrvcDocLongTextCreatedByUser` | `SrvcDocLongTextCreatedByUser` |
| `SrvcDocLongTextChangedDateTime` | `SrvcDocLongTextChangedDateTime` |
| `SrvcDocLongTextChangedByUser` | `SrvcDocLongTextChangedByUser` |
| `_Language` | *Association* |
| `_ReferenceTextObjectCategory` | *Association* |
| `_ReferenceTextObjectType` | *Association* |
| `_TextObjectCategory` | *Association* |
| `_TextObjectType` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {

   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
  // dataCategory: #TEXT
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@EndUserText.label: 'Service Conf Item Notes - TP'
define view entity I_SrvcConfItemLongTextTP
  as projection on R_SrvcConfItemLongTextTP as _SrvcConfItemLongTextTP
{
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  key TextObjectType,
      @Semantics.language:true
  key Language,
  key SrvcDocLogTextIdentifier,

      //ServiceDocumentLongTextUUID,
      TextObjectCategory,

      SrvcDocLongTextMimeType,
      @Semantics.text:true
      @EndUserText.label: 'Long Text Item'
      SrvcConfItemLongText,
      ReferenceTextObjectCategory,
      ReferenceTextObjectType,
      ReferenceLongTextKey,
      ReferenceServiceObjectType,
      ReferenceServiceDocument,
      ReferenceServiceDocumentItem,

      SrvcDocLongTxtCreationDateTime,
      SrvcDocLongTextCreatedByUser,
      SrvcDocLongTextChangedDateTime,
      SrvcDocLongTextChangedByUser,

      /* Associations */
      _Language,
      _ReferenceTextObjectCategory,
      _ReferenceTextObjectType,
      _TextObjectCategory,
      _TextObjectType,

      _ServiceConfirmationItemTP : redirected to parent I_ServiceConfirmationItemTP,
      _ServiceConfirmationTP     : redirected to I_ServiceConfirmationTP
}
```
