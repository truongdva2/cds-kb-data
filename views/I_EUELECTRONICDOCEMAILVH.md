---
name: I_EUELECTRONICDOCEMAILVH
description: Euelectronicdocemailvh
semantic_en: "electronic mail document value helper — provides email document options for EU electronic document processing"
semantic_vi: "trợ giúp giá trị tài liệu email điện tử — cung cấp các tùy chọn tài liệu email để xử lý tài liệu điện tử EU"
keywords:
  - tài liệu email
  - tài liệu điện tử
  - EU
app_component: CA-GTF-CSC-EDO-PAP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - value-help
  - workflow
  - email
  - component:CA-GTF-CSC-EDO-PAP
  - lob:Cross-Application Components
  - bo:EU_EDocEmail
---
# I_EUELECTRONICDOCEMAILVH

**Euelectronicdocemailvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-PAP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EU_EDocEmail` | `cast(dd07t.domvalue_l as edoc_eu_email)` |
| `Language` | `ddlanguage` |
| `EU_EDocEmailText` | `ddtext` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Receive Document per eMail'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'EU_EDocEmail'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel:{
usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
},
  supportedCapabilities: [#VALUE_HELP_PROVIDER],
  modelingPattern: #NONE
}
@VDM.viewType: #BASIC

@Search.searchable:true
define view entity I_EUElectronicDocEmailVH
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel: { text.element:  [ 'EU_EDocEmailText' ]}
  key cast(dd07t.domvalue_l as edoc_eu_email) as EU_EDocEmail,
      @Semantics.language
      @UI.hidden: true
  key ddlanguage                              as Language,
      @Semantics.text: true
      @Search: {
       defaultSearchElement: true,
       ranking: #HIGH,
       fuzzinessThreshold: 0.8 }
      ddtext                                  as EU_EDocEmailText,

      _Language
}

where
      domname    = 'EDOC_EU_EMAIL'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
