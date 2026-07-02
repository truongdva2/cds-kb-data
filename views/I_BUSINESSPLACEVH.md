---
name: I_BUSINESSPLACEVH
description: Businessplacevh
semantic_en: "value help for business place — quick lookup view for company code and business location identifiers."
semantic_vi: "danh sách trợ giúp giá trị cho địa điểm kinh doanh — tìm kiếm nhanh chi nhánh theo công ty."
keywords:
  - tìm kiếm chi nhánh
  - địa điểm kinh doanh
  - công ty
app_component: FI-LOC-BUP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-BUP
  - interface-view
  - value-help
  - component:FI-LOC-BUP
  - lob:Finance
---
# I_BUSINESSPLACEVH

**Businessplacevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-BUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `CompanyCode` |
| `BusinessPlace` | `BusinessPlace` |
| `BusinessPlaceDescription` | `BusinessPlaceDescription` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@Consumption.ranked:true
@VDM.viewType: #BASIC
@ObjectModel: { representativeKey: 'BusinessPlace',
                dataCategory: #VALUE_HELP,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #ORGANIZATIONAL }
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@EndUserText.label: 'Value for Business Place'
define view entity I_BusinessPlaceVH as select from I_BusinessPlace  {
    @Search.defaultSearchElement:true
    @Search.fuzzinessThreshold:0.7
    @Search.ranking:#LOW
key CompanyCode,
    @Search.defaultSearchElement:true
    @Search.fuzzinessThreshold:0.8
    @Search.ranking:#HIGH
    @ObjectModel.text.element:['BusinessPlaceDescription']
key BusinessPlace,
//    @Search.defaultSearchElement:true
    @Semantics.text:true
    BusinessPlaceDescription
  
}
where BusinessPlaceStartDate <= $session.system_date
  and BusinessPlaceEndDate >= $session.system_date
```
