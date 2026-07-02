---
name: I_SRVCQTANLONGTEXTTP
description: Srvcqtanlongtexttp
semantic_en: "long text storage for service quotations — manages extended text content for quotations with change tracking"
semantic_vi: "lưu trữ văn bản dài cho báo giá dịch vụ — quản lý nội dung văn bản mở rộng cho báo giá với theo dõi thay đổi"
keywords:
  - văn bản dài
  - báo giá
  - tài liệu
app_component: CRM-S4-SRV-SVQ-2CL
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
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANLONGTEXTTP

**Srvcqtanlongtexttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceQuotation` | `ServiceQuotation` |
| `TextObjectType` | `TextObjectType` |
| `Language` | `Language` |
| `SrvcDocLogTextIdentifier` | `SrvcDocLogTextIdentifier` |
| `TextObjectCategory` | `TextObjectCategory` |
| `SrvcDocLongTextMimeType` | `SrvcDocLongTextMimeType` |
| `ServiceObjectType` | `ServiceObjectType` |
| `SrvcQtanLongText` | `SrvcQtanLongText` |
| `ReferenceTextObjectCategory` | `ReferenceTextObjectCategory` |
| `ReferenceTextObjectType` | `ReferenceTextObjectType` |
| `ReferenceLongTextKey` | `ReferenceLongTextKey` |
| `SrvcDocLongTxtCreationDateTime` | `SrvcDocLongTxtCreationDateTime` |
| `SrvcDocLongTextCreatedByUser` | `SrvcDocLongTextCreatedByUser` |
| `SrvcDocLongTextChangedDateTime` | `SrvcDocLongTextChangedDateTime` |
| `SrvcDocLongTextChangedByUser` | `SrvcDocLongTextChangedByUser` |

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
                sizeCategory:   #L},
                dataCategory: #TEXT
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@EndUserText.label: 'Long Text for Service Quotation Item - TP'
define view entity I_SrvcQtanLongTextTP
  as projection on R_SrvcQtanLongTextTP as _SrvcQtanLongTextTP
{
  key ServiceQuotation,
  key TextObjectType,
      @Semantics.language:true
  key Language,
  key SrvcDocLogTextIdentifier,

      //ServiceDocumentLongTextUUID,

      TextObjectCategory,
      SrvcDocLongTextMimeType,
      ServiceObjectType,

      @Semantics.text:true
      @EndUserText.label: 'Long Text'
      SrvcQtanLongText,
      ReferenceTextObjectCategory,
      ReferenceTextObjectType,
      ReferenceLongTextKey,

      SrvcDocLongTxtCreationDateTime,
      SrvcDocLongTextCreatedByUser,
      SrvcDocLongTextChangedDateTime,
      SrvcDocLongTextChangedByUser,

      /* Associations */
      _ServiceQuotationTP : redirected to parent I_ServiceQuotationTP
}
```
