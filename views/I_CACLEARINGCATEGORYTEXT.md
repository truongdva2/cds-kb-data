---
name: I_CACLEARINGCATEGORYTEXT
description: Caclearingcategorytext
semantic_en: "clearing category texts — provides multilingual names for clearing categories."
semantic_vi: "văn bản danh mục thanh toán — cung cấp tên đa ngôn ngữ cho các danh mục thanh toán."
keywords:
  - danh mục thanh toán
  - văn bản
  - tên
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
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACLEARINGCATEGORYTEXT

**Caclearingcategorytext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CAClearingCategory` | `vertyp` |
| `Language` | `spras` |
| `CAClearingCategoryName` | `text` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Clearing Category - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAClearingCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE, 
                                         #LANGUAGE_DEPENDENT_TEXT, 
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAClearingCategoryText
  as select from tfk111t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key vertyp as CAClearingCategory,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,

      @Semantics.text
      text   as CAClearingCategoryName,

      _Language
}
```
