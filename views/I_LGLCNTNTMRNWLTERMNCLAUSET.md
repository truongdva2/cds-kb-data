---
name: I_LGLCNTNTMRNWLTERMNCLAUSET
description: Lglcntntmrnwltermnclauset
semantic_en: "Renewal termination clause text — provides multilingual names for renewal and termination clause definitions."
semantic_vi: "Tên điều khoản gia hạn và chấm dứt — cung cấp tên đa ngôn ngữ cho các định nghĩa điều khoản gia hạn và chấm dứt."
keywords:
  - điều khoản gia hạn
  - điều khoản chấm dứt
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
  - component:CM-GF-2CL
  - lob:Other
---
# I_LGLCNTNTMRNWLTERMNCLAUSET

**Lglcntntmrnwltermnclauset**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMClauseID` | `lglcntntmclauseid` |
| `Language` | `language` |
| `LglCntntMRnwlTermnClauseName` | `lglcntntmclausename` |

## Associations

> No associations found.

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILCMRNWLTCLAUSET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType : #BASIC

@ObjectModel: {
  representativeKey: 'LglCntntMClauseID',
  dataCategory: #TEXT,
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  usageType.dataClass:  #CUSTOMIZING
}

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@Search.searchable: true

@EndUserText.label: 'Renewal Termination Clause - Text'

define view I_LglCntntMRnwlTermnClauseT
  as select from lcm_crnwtrmclst
{
  key lglcntntmclauseid as LglCntntMClauseID,
      @Semantics.language: true
  key language          as Language,
  
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  lglcntntmclausename as LglCntntMRnwlTermnClauseName

}
```
