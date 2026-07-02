---
name: I_LGLCNTNTMCNTNTTYPETXTAPI01
description: Lglcntntmcntnttypetxtapi 01
semantic_en: "Document content type text — provides multilingual names for document content types."
semantic_vi: "Tên loại nội dung tài liệu — cung cấp tên đa ngôn ngữ cho các loại nội dung tài liệu."
keywords:
  - tên nội dung tài liệu
  - dữ liệu đa ngôn ngữ
  - phân loại nội dung
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
  - component:CM-DOC-2CL
  - lob:Other
  - bo:LglCntntMDocContentType
---
# I_LGLCNTNTMCNTNTTYPETXTAPI01

**Lglcntntmcntnttypetxtapi 01**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocContentType` | `LglCntntMDocContentType` |
| `Language` | `Language` |
| `LglCntntMDocContentTypeName` | `LglCntntMDocContentTypeName` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMCNTTYPTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'LglCntntMDocContentType'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@EndUserText.label: 'Document Content Type - Text'
define view I_LglCntntMCntntTypeTxtAPI01
  as select from I_LglCntntMDocContentTypeText
{

  key LglCntntMDocContentType,

      @Semantics.language: true
  key Language,

      @Semantics.text: true
      LglCntntMDocContentTypeName
}
```
