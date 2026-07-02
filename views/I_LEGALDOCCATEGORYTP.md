---
name: I_LEGALDOCCATEGORYTP
description: Legaldoccategorytp
semantic_en: "Legal document category transactional proxy — maintains parent-child category hierarchies for documents with nested classification support."
semantic_vi: "ủy quyền giao dịch danh mục tài liệu pháp lý — duy trì các phân cấp danh mục cha-con cho tài liệu với hỗ trợ phân loại lồng nhau."
keywords:
  - danh mục tài liệu
  - phân loại tài liệu pháp lý
  - tổ chức tài liệu
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
# I_LEGALDOCCATEGORYTP

**Legaldoccategorytp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocCategoryUUID` | `LglCntntMDocCategoryUUID` |
| `LglCntntMDocParCatUUID` | `LglCntntMDocParCatUUID` |
| `LglCntntMDocumentUUID` | `LglCntntMDocumentUUID` |
| `LglCntntMCategory` | `LglCntntMCategory` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Category - TP'
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

define view entity I_LegalDocCategoryTP
  as projection on R_LegalDocCategoryTP as LegalDocCategory
{
  key LglCntntMDocCategoryUUID,

      LglCntntMDocParCatUUID,

      LglCntntMDocumentUUID,

      LglCntntMCategory,

//      LglCntntMChangedUTCDateTime,

      /* Associations */
      _Document            : redirected to I_LegalDocumentTP,
      _LegalDocParCategory : redirected to parent I_LegalDocParCategoryTP
}
```
