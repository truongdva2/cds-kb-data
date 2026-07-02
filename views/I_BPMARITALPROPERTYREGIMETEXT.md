---
name: I_BPMARITALPROPERTYREGIMETEXT
description: Bpmaritalpropertyregimetext
semantic_en: "business partner marital property regime multilingual text — localized descriptions of marital property regimes"
semantic_vi: "mô tả đa ngôn ngữ chế độ tài sản hôn nhân — bản mô tả địa phương hóa các chế độ tài sản hôn nhân"
keywords:
  - tài sản hôn nhân
  - ngôn ngữ
  - chế độ pháp lý
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPMARITALPROPERTYREGIMETEXT

**Bpmaritalpropertyregimetext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `cast(tp04t.langu as langu preserving type)` |
| `BPMaritalPropertyRegime` | `cast(tp04t.proprty_st as bp_proprty_old preserving type)` |
| `BPMaritalPropertyRegimeDesc` | `tp04t.proprty_t` |
| `_BPMaritalPropertyRegime` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPMaritalPropertyRegime` | `I_BPMaritalPropertyRegime` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'BP: Marital Property Regime - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPMaritalPropertyRegime',
                usageType : { dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ]
              }
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_BPMaritalPropertyRegimeText
  as select from tp04t
  association [0..1] to I_BPMaritalPropertyRegime as _BPMaritalPropertyRegime on $projection.BPMaritalPropertyRegime = _BPMaritalPropertyRegime.BPMaritalPropertyRegime
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(tp04t.langu as langu preserving type)               as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPMaritalPropertyRegime'
  key cast(tp04t.proprty_st as bp_proprty_old preserving type) as BPMaritalPropertyRegime,

      @Semantics.text: true
      tp04t.proprty_t                                        as BPMaritalPropertyRegimeDesc,

      _BPMaritalPropertyRegime,
      _Language
}
```
