---
name: I_CADUNNINGPROCEDURECATEGORYT
description: Cadunningprocedurecategoryt
semantic_en: "dunning procedure category text — language-specific names of dunning procedure categories."
semantic_vi: "Văn bản danh mục quy trình thúc đẩy — tên danh mục quy trình thúc đẩy theo ngôn ngữ."
keywords:
  - Danh mục quy trình
  - Tên
  - Ngôn ngữ
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADUNNINGPROCEDURECATEGORYT

**Cadunningprocedurecategoryt**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CADunningProcedureCategory` | `mvtyp` |
| `Language` | `spras` |
| `CADunningProcedureCategoryName` | `mvtxt` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICADUNPROCCATT'

@EndUserText.label: 'Dunning Procedure Category - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CADunningProcedureCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT, 
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADunningProcedureCategoryT
  as select from tfk047jt
  
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key mvtyp  as CADunningProcedureCategory,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,

      @Semantics.text
      mvtxt  as CADunningProcedureCategoryName,

      _Language
}
```
