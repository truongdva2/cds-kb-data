---
name: C_MM_SUPLREVALOUTPSCORETYPEVH
description: MM Suplrevaloutpscoretypevh
semantic_en: "Supplier evaluation output score action type — value help (VH) listing the valid score output action types and their texts for use in supplier evaluation analytics."
semantic_vi: "Loại hành động điểm đầu ra đánh giá nhà cung cấp — trợ giúp giá trị (VH) liệt kê các loại hành động điểm đầu ra hợp lệ và văn bản tương ứng dùng trong phân tích đánh giá nhà cung cấp."
keywords:
  - đánh giá nhà cung cấp
  - loại điểm đầu ra
  - trợ giúp giá trị
  - supplier evaluation
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - value-help
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:SuplrEvalScoreOutputActionType
---
# C_MM_SUPLREVALOUTPSCORETYPEVH

**MM Suplrevaloutpscoretypevh**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SuplrEvalScoreOutputActionType` | `cast( SuplrEvalScoreOutputActionType as mmpur_ana_de_output_act_typ)` |
| `SuplrEvalScoreOutpActnTypeText` | `_Text[1: Language = $session.system_language ].SuplrEvalScoreOutpActnTypeText` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSESOTPTYPVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey:true
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@ObjectModel.semanticKey: ['SuplrEvalScoreOutputActionType']
@ObjectModel.representativeKey: 'SuplrEvalScoreOutputActionType'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Value Help for SE Output Score Type'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations:true 
define view C_MM_SuplrEvalOutpScoreTypeVH 

 as select from I_SuplrEvalOutputScoreType
{      
       @Search.ranking: #HIGH
       @ObjectModel.text.element: ['SuplrEvalScoreOutpActnTypeText']
       @Consumption.labelElement: 'SuplrEvalScoreOutpActnTypeText'
  key  cast( SuplrEvalScoreOutputActionType   as mmpur_ana_de_output_act_typ) as SuplrEvalScoreOutputActionType,

       @Semantics.text: true
       @Search: { defaultSearchElement: true, ranking: #LOW,  fuzzinessThreshold: 0.8   }
       _Text[1: Language = $session.system_language ].SuplrEvalScoreOutpActnTypeText                                   as SuplrEvalScoreOutpActnTypeText
}
```
