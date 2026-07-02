---
name: I_DNGRSGDSRGLNLANGUAGETYPETEXT
description: Dngrsgdsrglnlanguagetypetext
semantic_en: "multilingual text for dangerous goods regulation language types — provides localized regulatory language labels."
semantic_vi: "văn bản đa ngôn ngữ cho các loại ngôn ngữ quy định hàng nguy hiểm — cung cấp nhãn ngôn ngữ quy định địa phương."
keywords:
  - hàng nguy hiểm
  - quy định
  - ngôn ngữ
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - interface-view
  - text-view
  - language
  - text
  - component:EHS-SUS-DG
  - lob:Other
  - bo:DngrsGdsRglnLanguageType
---
# I_DNGRSGDSRGLNLANGUAGETYPETEXT

**Dngrsgdsrglnlanguagetypetext**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DngrsGdsRglnLanguageType` | `cast(…)` |
| `Language` | `dd07t.ddlanguage` |
| `DngrsGdsRglnLanguageTypeName` | `dd07t.ddtext` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Dangerous Goods Language Type - Text'

@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DngrsGdsRglnLanguageType'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@AbapCatalog.sqlViewName: 'IDGREGLANGTYPT'
@AbapCatalog.compiler.compareFilter: true

// Client handling by session
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
// used for BOBF Master Data Object
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.usageType:{ serviceQuality: #A,        // < 15 msec
                         sizeCategory:  #S,         // < 1.000
                         dataClass: #META }

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_DngrsGdsRglnLanguageTypeText as select from dd07t
    association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key cast( left(dd07t.domvalue_l, 2) as ehdgm_regulation_language_type preserving type ) as DngrsGdsRglnLanguageType,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key dd07t.ddlanguage as Language,
    @Semantics.text:true
    dd07t.ddtext as DngrsGdsRglnLanguageTypeName,
        
    _Language
}
where dd07t.domname  = 'EHDGM_REGULATION_LANGUAGE_TYPE'
  and dd07t.as4local = 'A'
```
