---
name: I_CORRESPONDENCETYPETEXT
description: Correspondencetypetext
semantic_en: "correspondence type text — localized correspondence type names and date field descriptions in selected languages."
semantic_vi: "tên loại thư tín — tên loại thư tín và mô tả trường ngày đã được dịch sang các ngôn ngữ được chọn."
keywords:
  - loại thư tín
  - tên thư tín
  - mô tả ngôn ngữ
app_component: FI-GL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-2CL
  - lob:Finance
  - bo:Correspondence
---
# I_CORRESPONDENCETYPETEXT

**Correspondencetypetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `spras` |
| `Correspondence` | `event` |
| `CorrespondenceName` | `ltext` |
| `CorrespondenceFirstDateName` | `dtex1` |
| `CorrespondenceSecondDateName` | `dtex2` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICRRSPNDNCTPTXT'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.representativeKey: 'Correspondence'
@AbapCatalog.buffering.status: #NOT_ALLOWED         
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@EndUserText.label: 'Correspondence Type - Text'
define view I_CorrespondenceTypeText as select from t048t association [0..1] to I_Language as _Language 
                                                                          on $projection.Language = _Language.Language {
  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key spras as Language,
  key event as Correspondence,
  
  @Semantics.text: true
  ltext as CorrespondenceName,
  @Semantics.text: true
  dtex1 as CorrespondenceFirstDateName,
  @Semantics.text: true
  dtex2 as CorrespondenceSecondDateName,
  
  _Language  
  
}
```
