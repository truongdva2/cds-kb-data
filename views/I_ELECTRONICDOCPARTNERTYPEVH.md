---
name: I_ELECTRONICDOCPARTNERTYPEVH
description: Electronicdocpartnertypevh
semantic_en: "electronic document partner type value help — descriptions of business partner types for electronic documents."
semantic_vi: "Trợ giúp giá trị loại đối tác tài liệu điện tử — mô tả loại đối tác kinh doanh."
keywords:
  - loại đối tác
  - tài liệu điện tử
  - giá trị
app_component: CA-GTF-CSC-EDO
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
  - partner
  - component:CA-GTF-CSC-EDO
  - lob:Cross-Application Components
  - bo:ElectronicDocBPType
---
# I_ELECTRONICDOCPARTNERTYPEVH

**Electronicdocpartnertypevh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ElectronicDocBPType` | `cast(domvalue_l as edoc_partner_type)` |
| `ElectronicDocBPTypeDesc` | `cast( dd07t.ddtext as val_text preserving type )` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Electronic Document Partner Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey:'ElectronicDocBPType'
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER
@Search.searchable:true
define view entity I_ElectronicDocPartnerTypeVH
  as select from dd07t
{
      @ObjectModel: { text.element:  [ 'ElectronicDocBPTypeDesc' ]}
  key cast(domvalue_l as edoc_partner_type)            as ElectronicDocBPType,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label: 'Partner Type Description'
      cast( dd07t.ddtext as val_text preserving type ) as ElectronicDocBPTypeDesc
}
where
      domname    = 'EDOC_PARTNER_TYPE'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
