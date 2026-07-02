---
name: D_CNSLDTNTSKGROUPGETUNITTASKSP
description: D Cnsldtntskgroupgetunittasksp
semantic_en: "Consolidation Task Group Get Unit Tasks Parameter — parameter for retrieving consolidation unit tasks by fiscal period and version."
semantic_vi: "Tham số Lấy Nhiệm vụ Đơn vị Nhóm Nhiệm vụ Hợp nhất — tham số lấy nhiệm vụ của đơn vị hợp nhất."
keywords:
  - hợp nhất
  - nhiệm vụ
  - đơn vị
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# D_CNSLDTNTSKGROUPGETUNITTASKSP

**D Cnsldtntskgroupgetunittasksp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationVersion` | `fincs_consolidationversion` |
| `FiscalYear` | `fincs_fiscalyear` |
| `FiscalPeriod` | `fincs_period` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldtn Task Group Get Unit Tasks Param'
define abstract entity D_CnsldtnTskGroupGetUnitTasksP
{
  ConsolidationVersion                  : fincs_consolidationversion;
  FiscalYear                            : fincs_fiscalyear;
  FiscalPeriod                          : fincs_period;
}
```
