---
name: I_PHYSINVTRYDOCHDRFISCALYEARVH
description: Physinvtrydochdrfiscalyearvh
semantic_en: "Physical inventory document header fiscal year value help — filtered fiscal years for document headers."
semantic_vi: "Trợ giúp giá trị năm tài chính của tiêu đề kiểm kê — năm tài chính được lọc cho tiêu đề tài liệu."
keywords:
  - kiểm kê
  - năm tài chính
  - trợ giúp giá trị
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - value-help
  - header-level
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYDOCHDRFISCALYEARVH

**Physinvtrydochdrfiscalyearvh**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FiscalYear` | `FiscalYear` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Physical Inventory Document Hdr FYear'
@VDM.viewType: #BASIC
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #D,
                             dataClass: #TRANSACTIONAL
                           },
                dataCategory: #VALUE_HELP,
                representativeKey: 'FiscalYear',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER ]
              }
@Analytics.technicalName: 'IPIDOCHDRYVH'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_PhysInvtryDocHdrFiscalYearVH
  as select distinct from I_PhysInvtryDocHeader
{
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.9
  @Search.ranking: #HIGH
  key FiscalYear
}
```
