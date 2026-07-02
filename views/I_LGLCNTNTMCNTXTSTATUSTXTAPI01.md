---
name: I_LGLCNTNTMCNTXTSTATUSTXTAPI01
description: Lglcntntmcntxtstatustxtapi 01
semantic_en: "Context status text — multilingual labels for legal content context status codes."
semantic_vi: "Nhãn trạng thái ngữ cảnh — cung cấp nhãn đa ngôn ngữ cho các mã trạng thái ngữ cảnh nội dung pháp lý."
keywords:
  - trạng thái ngữ cảnh
  - mã trạng thái
  - dữ liệu đa ngôn ngữ
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-GF
  - interface-view
  - status
  - component:CM-GF-2CL
  - lob:Other
  - bo:LglCntntMStatus
---
# I_LGLCNTNTMCNTXTSTATUSTXTAPI01

**Lglcntntmcntxtstatustxtapi 01**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMStatus` | `LglCntntMStatus` |
| `Language` | `Language` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMSTSTXTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'LglCntntMStatus'

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

@EndUserText.label: 'Context Status - Text'
define view I_LglCntntMCntxtStatusTxtAPI01
  as select from I_LCMStatusText
{
  key LglCntntMStatus,

      @Semantics.language: true
  key Language,

      @Semantics.text: true -- identifies the text field
      LglCntntMStatusName
}
```
