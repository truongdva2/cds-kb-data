---
name: I_LEGALDOCSTAMPTP
description: Legaldocstamptp
semantic_en: "Legal document stamp transactional proxy — records document stamps with creation audit trail for document authentication and tracking."
semantic_vi: "ủy quyền giao dịch con dấu tài liệu pháp lý — ghi lại các dấu hiệu tài liệu với theo dõi kiểm toán tạo cho xác thực và theo dõi tài liệu."
keywords:
  - con dấu tài liệu
  - xác thực tài liệu
  - theo dõi kiểm toán
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - interface-view
  - transactional-processing
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LEGALDOCSTAMPTP

**Legaldocstamptp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocumentStampUUID` | `LglCntntMDocumentStampUUID` |
| `LglCntntMDocumentUUID` | `LglCntntMDocumentUUID` |
| `LglCntntMDocumentStamp` | `LglCntntMDocumentStamp` |
| `LglCntntMCreatedUTCDateTime` | `LglCntntMCreatedUTCDateTime` |
| `LglCntntMCreatedByUser` | `LglCntntMCreatedByUser` |
| `LglTransWrkFlwModInstce` | `LglTransWrkFlwModInstce` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Stamp - TP'
@ObjectModel: {
    usageType: {
        sizeCategory: #L,
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

define view entity I_LegalDocStampTP
  as projection on R_LegalDocStampTP as LegalDocStamp
{
  key LglCntntMDocumentStampUUID,
      LglCntntMDocumentUUID,
      LglCntntMDocumentStamp,
      LglCntntMCreatedUTCDateTime,
      LglCntntMCreatedByUser,
      LglTransWrkFlwModInstce,
//      LglCntntMChangedUTCDateTime,

      /* Associations */
      _Document : redirected to parent I_LegalDocumentTP
}
```
