---
name: I_ESTIMATEDCOSTCOSTINGRUNSTDVH
description: Estimatedcostcostingrunstdvh
semantic_en: "estimated cost costing run value helper — provides standardized list of costing runs with dates and versions"
semantic_vi: "trợ giúp giá trị chạy định giá chi phí ước tính — cung cấp danh sách tiêu chuẩn các chạy định giá với ngày tháng và phiên bản"
keywords:
  - chi phí ước tính
  - định giá
  - chạy định giá
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - value-help
  - standard-value-help
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_ESTIMATEDCOSTCOSTINGRUNSTDVH

**Estimatedcostcostingrunstdvh**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EstimatedCostCostingRun` | `EstimatedCostCostingRun` |
| `EstimatedCostCostingRunDate` | `EstimatedCostCostingRunDate` |
| `CostingVersion` | `CostingVersion` |
| `EstimatedCostCostingRunDesc` | `cast(EstimatedCostCostingRunDesc as fpc_costing_run_description preserving type)` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@Analytics.technicalName: 'IFIESTDCOSTRUNVH'
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities:[ #VALUE_HELP_PROVIDER ],
  representativeKey: 'EstimatedCostCostingRun',
  usageType: { dataClass: #MASTER,
               serviceQuality: #C,
               sizeCategory: #M
  }
}
@Metadata.ignorePropagatedAnnotations
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Estimated Cost Costing Run'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_EstimatedCostCostingRunStdVH
  as select from I_EstimatedCostCostingRun
{

      @ObjectModel.text.element: ['EstimatedCostCostingRunDesc']
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8 
  key EstimatedCostCostingRun,
  key EstimatedCostCostingRunDate,
  key CostingVersion,

      @Semantics.text: true
      @Search: { defaultSearchElement: true, ranking: #LOW }
      @Search.fuzzinessThreshold: 0.8
      cast(EstimatedCostCostingRunDesc as fpc_costing_run_description preserving type) as EstimatedCostCostingRunDesc
}
```
