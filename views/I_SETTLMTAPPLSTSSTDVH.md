---
name: I_SETTLMTAPPLSTSSTDVH
description: Settlmtapplstsstdvh
semantic_en: "Settlement application status standard value help — value helper for settlement application status codes."
semantic_vi: "Trợ giúp giá trị tiêu chuẩn trạng thái ứng dụng quyết toán — trợ giúp giá trị cho mã trạng thái ứng dụng quyết toán."
keywords:
  - trợ giúp giá trị trạng thái
  - mã trạng thái quyết toán
  - danh sách trạng thái
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
# I_SETTLMTAPPLSTSSTDVH

**Settlmtapplstsstdvh**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SettlmtApplSts` | `SettlmtApplSts` |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Settlement Application Status'  
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   dataCategory: #VALUE_HELP,
   representativeKey: 'SettlmtApplSts',
   modelingPattern:       #VALUE_HELP_PROVIDER,   
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

define view entity I_SettlmtApplStsStdVH
  as select from I_SettlmtApplSts
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_FIRST
  key SettlmtApplSts,

      /* Associations */
      _Text
}
```
