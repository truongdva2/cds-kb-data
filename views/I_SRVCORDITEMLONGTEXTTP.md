---
name: I_SRVCORDITEMLONGTEXTTP
description: Srvcorditemlongtexttp
semantic_en: "Long text content for service order items with reference linking — supporting detailed item documentation and cross-references."
semantic_vi: "Nội dung văn bản dài cho hạng mục đơn hàng dịch vụ với liên kết tham chiếu — hỗ trợ tài liệu hạng mục chi tiết và tham chiếu chéo."
keywords:
  - văn bản dài
  - hạng mục đơn hàng
  - tài liệu
app_component: CRM-S4-SRV-SVO-2CL
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITEMLONGTEXTTP

**Srvcorditemlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceOrder` | `ServiceOrder` |
| `ServiceOrderItem` | `ServiceOrderItem` |
| `TextObjectType` | `TextObjectType` |
| `Language` | `Language` |
| `SrvcDocLogTextIdentifier` | `SrvcDocLogTextIdentifier` |
| `TextObjectCategory` | `TextObjectCategory` |
| `SrvcDocLongTextMimeType` | `SrvcDocLongTextMimeType` |
| `ServiceOrderItemLongText` | `ServiceOrderItemLongText` |
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
@EndUserText.label: 'Service Order Item Notes - TP'
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
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdItemLongTextTP
  as projection on R_SrvcOrdItemLongTextTP as _SrvcOrdItemLongTextTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key TextObjectType,
  key Language,
  key SrvcDocLogTextIdentifier,

      //ServiceDocumentLongTextUUID,

      TextObjectCategory,

      SrvcDocLongTextMimeType,
      @Semantics.text:true
      @EndUserText.label: 'Long Text Item'
      ServiceOrderItemLongText,
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

      _ServiceOrderItemTP : redirected to parent I_ServiceOrderItemTP,
      _ServiceOrderTP     : redirected to I_ServiceOrderTP
}
```
