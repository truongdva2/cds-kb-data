---
name: I_LEGALTRANSDOCLINKTP_2
description: Legaltransdoclinktp 2
semantic_en: "Legal transaction linked documents — establishes relationships between transactions and associated documents with content type and status tracking."
semantic_vi: "tài liệu được liên kết của giao dịch pháp lý — thiết lập mối quan hệ giữa các giao dịch và các tài liệu liên quan với loại nội dung và theo dõi trạng thái."
keywords:
  - liên kết tài liệu giao dịch
  - quản lý tài liệu pháp lý
  - liên kết quan hệ
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - transactional-processing
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSDOCLINKTP_2

**Legaltransdoclinktp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LegalTransactionDocLinkUUID` | `LegalTransactionDocLinkUUID` |
| `LegalTransactionUUID` | `LegalTransactionUUID` |
| `LglCntntMDocument` | `LglCntntMDocument` |
| `LglCntntMDocAccessLvl` | `LglCntntMDocAccessLvl` |
| `LglCntntMDocContentType` | `LglCntntMDocContentType` |
| `InternalDocumentStatus` | `InternalDocumentStatus` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Legal Transaction Linked Documents'
@ObjectModel: {
  usageType: {
    sizeCategory: #M,
    serviceQuality: #C,
    dataClass:#TRANSACTIONAL
  },
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define view entity I_LegalTransDocLinkTP_2
  as projection on R_LegalTransDocLinkTP
{
  key LegalTransactionDocLinkUUID,
      LegalTransactionUUID,
      LglCntntMDocument,
                                                                      
      //Only for Authorization Check in DCL
      @Consumption.hidden: true                           
      LglCntntMDocAccessLvl,
      @Consumption.hidden: true
      LglCntntMDocContentType,
      @Consumption.hidden: true
      InternalDocumentStatus,
      
      /* Associations */
      _LegalTransaction : redirected to parent I_LegalTransactionTP_2
}
```
