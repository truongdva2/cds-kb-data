---
name: I_SPONSOREDCLASSCORETEXT
description: Sponsoredclasscoretext
semantic_en: "Sponsored class - text — language-specific descriptions and names for sponsored classes."
semantic_vi: "Mô tả lớp được tài trợ — tên và mô tả lớp tài trợ theo ngôn ngữ."
keywords:
  - lớp tài trợ
  - mô tả
  - tài trợ
app_component: PSM-GM-GTE-MD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-GM
  - PSM-GM-GTE
  - interface-view
  - text-view
  - text
  - component:PSM-GM-GTE-MD
  - lob:Other
  - bo:SponsoredClassText
---
# I_SPONSOREDCLASSCORETEXT

**Sponsoredclasscoretext**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SponsoredClass` | `sponsored_class` |
| `Language` | `language` |
| `SponsoredClassDescription` | `description` |
| `SponsoredClassName` | `sponsoredclassname` |
| `_SponsoredClass` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SponsoredClass` | `I_SponsoredClassCore` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sponsored Class - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'SponsoredClass'
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L
}
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'IGMSPCLASSCT'
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.sapObjectNodeType.name: 'SponsoredClassText'
@Analytics.dataExtraction.enabled: true
define view I_SponsoredClassCoreText
  as select from gmspclasstexts
  association [1..1] to I_SponsoredClassCore as _SponsoredClass on $projection.SponsoredClass = _SponsoredClass.SponsoredClass
  association [0..1] to I_Language           as _Language       on $projection.Language = _Language.Language
{
  key sponsored_class    as SponsoredClass,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language           as Language,
      @Semantics.text: true
      description        as SponsoredClassDescription,
      @Semantics.text: true
      sponsoredclassname as SponsoredClassName,

      _SponsoredClass,
      _Language
}
```
