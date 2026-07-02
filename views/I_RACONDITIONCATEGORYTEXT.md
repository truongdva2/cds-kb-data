---
name: I_RACONDITIONCATEGORYTEXT
description: Raconditioncategorytext
semantic_en: "Revenue accounting condition category text — multilingual labels for revenue condition classification"
semantic_vi: "Văn bản danh mục điều kiện kế toán doanh thu — nhãn đa ngôn ngữ cho phân loại điều kiện doanh thu"
keywords:
  - doanh thu
  - điều kiện
  - ngôn ngữ
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:FI-RA-2CL
  - lob:Finance
  - bo:RevnAcctgConditionCategory
---
# I_RACONDITIONCATEGORYTEXT

**Raconditioncategorytext**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `cast(dd07t.ddlanguage as spras preserving type)` |
| `RevnAcctgConditionCategory` | `cast(dd07t.domvalue_l as farr_condition_category)` |
| `RevnAcctgConditionCategoryName` | `dd07t.ddtext` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_RAConditionCategory` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RAConditionCategory` | `I_RAConditionCategory` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRACNDTNCTGYTEXT'

@EndUserText.label: 'Condition Category - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'RevnAcctgConditionCategory'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_RAConditionCategoryText
  as select from dd07t

  association        to parent I_RAConditionCategory as _RAConditionCategory
    on $projection.RevnAcctgConditionCategory = _RAConditionCategory.RevnAcctgConditionCategory

  association [0..1] to I_Language                   as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type)   as Language,

      @ObjectModel.foreignKey.association: '_RAConditionCategory'
      @ObjectModel.text.element: [ 'RevnAcctgConditionCategory' ]
  key cast(dd07t.domvalue_l as farr_condition_category) as RevnAcctgConditionCategory,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      dd07t.ddtext                                      as RevnAcctgConditionCategoryName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,

      _RAConditionCategory,
      _Language

}
where dd07t.domname  = 'FARR_CONDITION_CATEGORY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
