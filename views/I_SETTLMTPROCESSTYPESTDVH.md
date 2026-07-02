---
name: I_SETTLMTPROCESSTYPESTDVH
description: Settlmtprocesstypestdvh
semantic_en: "settlement process type value helper — standard lookup linking process types to document types."
semantic_vi: "công cụ trợ giúp giá trị loại quy trình thỏa thuận — công cụ tìm kiếm chuẩn liên kết các loại quy trình với các loại tài liệu."
keywords:
  - loại quy trình
  - loại tài liệu
  - tìm kiếm giá trị
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - value-help
  - standard-value-help
  - component:LO-AB
  - lob:Logistics General
---
# I_SETTLMTPROCESSTYPESTDVH

**Settlmtprocesstypestdvh**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SettlmtProcessType` | `SettlmtProcessType` |
| `SettlmtDocType` | `SettlmtDocType` |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
//GENERATED:005:GFBfhyK17jY3}FsS2rjVUW
@EndUserText.label: 'Settlement Process Type'
@VDM: { 
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_Text' ],
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   dataCategory: #VALUE_HELP,
   representativeKey: 'SettlmtProcessType',
   modelingPattern: #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
   usageType: {
     dataClass:      #CUSTOMIZING, 
     serviceQuality: #B,
     sizeCategory:   #S
   }
}
@Analytics: {
    internalName: #LOCAL
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_SettlmtProcessTypeStdVH
  as select from I_SettlmtProcessType
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_FIRST
  key SettlmtProcessType,

      @Consumption.hidden: true
      SettlmtDocType,

      /* Associations */
      _Text
}
```
