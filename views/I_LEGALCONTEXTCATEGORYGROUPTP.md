---
name: I_LEGALCONTEXTCATEGORYGROUPTP
description: Legalcontextcategorygrouptp
semantic_en: "Legal context category group — organizes categories within legal contexts with titled groupings for structured content organization."
semantic_vi: "nhóm danh mục ngữ cảnh pháp lý — tổ chức các danh mục trong các ngữ cảnh pháp lý với các nhóm có tên để tổ chức nội dung có cấu trúc."
keywords:
  - nhóm danh mục pháp lý
  - tổ chức nội dung
  - quản lý danh mục
app_component: CM-CTX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-CTX
  - interface-view
  - transactional-processing
  - text
  - component:CM-CTX-2CL
  - lob:Other
---
# I_LEGALCONTEXTCATEGORYGROUPTP

**Legalcontextcategorygrouptp**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMCntxtCatGroupUUID` | `LglCntntMCntxtCatGroupUUID` |
| `LglCntntMContextUUID` | `LglCntntMContextUUID` |
| `LglCntntMCatGroupTitle` | `LglCntntMCatGroupTitle` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED
    }
@EndUserText.label: 'Legal Context Category group - TP'
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

define view entity I_LegalContextCategoryGroupTP
  as projection on I_LCMContextCategoryGroupTP
{
  key LglCntntMCntxtCatGroupUUID,
      LglCntntMContextUUID,
      LglCntntMCatGroupTitle,

      _LCMContextTP               : redirected to parent I_LegalContextTP,
      _LCMContextParentCategoryTP : redirected to composition child I_LegalContextParentCategoryTP
}
```
