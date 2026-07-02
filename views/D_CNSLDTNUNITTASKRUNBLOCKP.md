---
name: D_CNSLDTNUNITTASKRUNBLOCKP
description: D Cnsldtnunittaskrunblockp
semantic_en: "Consolidation Unit Task Run Block Parameter — parameter for blocking consolidation unit task execution by user request."
semantic_vi: "Tham số Khóa Thực hiện Nhiệm vụ Đơn vị Hợp nhất — tham số khóa thực hiện nhiệm vụ."
keywords:
  - hợp nhất
  - nhiệm vụ
  - khóa thực hiện
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
# D_CNSLDTNUNITTASKRUNBLOCKP

**D Cnsldtnunittaskrunblockp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationChartOfAccounts` | `fincs_conschartofaccounts` |
| `ConsolidationVersion` | `fincs_consolidationversion` |
| `FiscalYear` | `fincs_fiscalyear` |
| `FiscalPeriod` | `fincs_period` |
| `ConsolidationTask` | `fincs_tsk` |
| `ConsolidationUnit` | `fincs_consolidationunit` |
| `CnsldtnTskRunIsBlkdUponUsrReq` | `fincs_taskrun_blockbyuser` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldtn Unit Task Run Block Parameter'
define abstract entity D_CnsldtnUnitTaskRunBlockP
{
  ConsolidationChartOfAccounts          : fincs_conschartofaccounts;
  ConsolidationVersion                  : fincs_consolidationversion;
  FiscalYear                            : fincs_fiscalyear;
  FiscalPeriod                          : fincs_period;
  ConsolidationTask                     : fincs_tsk;
  ConsolidationUnit                     : fincs_consolidationunit;
  CnsldtnTskRunIsBlkdUponUsrReq         : fincs_taskrun_blockbyuser; 
}
```
