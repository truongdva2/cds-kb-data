---
name: I_LANGUAGEVH
description: Languagevh
semantic_en: "Language value help — provides language lookup data including language codes, names, and ISO standards."
semantic_vi: "trợ giúp giá trị ngôn ngữ — cung cấp dữ liệu tra cứu ngôn ngữ bao gồm mã ngôn ngữ, tên và tiêu chuẩn ISO."
keywords:
  - ngôn ngữ tra cứu
  - mã ISO ngôn ngữ
  - danh sách ngôn ngữ
app_component: BC-DOC-TTL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DOC
  - BC-DOC-TTL
  - interface-view
  - value-help
  - language
  - component:BC-DOC-TTL
  - lob:Basis Components
---
# I_LANGUAGEVH

**Languagevh**

| Property | Value |
|---|---|
| App Component | `BC-DOC-TTL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `Language` |
| `LanguageName` | `_Text[1: Language = $session.system_language].LanguageName` |
| `LanguageISOCode` | `LanguageISOCode` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #NOT_REQUIRED
}
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S
  },
  representativeKey: 'Language',
  semanticKey: ['Language'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@Consumption.ranked: true
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Language'

define view entity I_LanguageVH
  as select from I_Language
{

      @Semantics.language:true
      @ObjectModel.text.element: [ 'LanguageName' ]
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key Language,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      _Text[1: Language = $session.system_language].LanguageName,

      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.8
      }
      LanguageISOCode

}
```
