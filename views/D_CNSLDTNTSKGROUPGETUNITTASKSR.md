---
name: D_CNSLDTNTSKGROUPGETUNITTASKSR
description: D Cnsldtntskgroupgetunittasksr
semantic_en: "Consolidation Task Group Get Unit Tasks Result — result returning consolidation tasks with sequencing, blocking, and milestone status."
semantic_vi: "Kết quả Lấy Nhiệm vụ Đơn vị Nhóm Nhiệm vụ Hợp nhất — kết quả danh sách nhiệm vụ đơn vị hợp nhất."
keywords:
  - hợp nhất
  - nhiệm vụ
  - trình tự
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
# D_CNSLDTNTSKGROUPGETUNITTASKSR

**D Cnsldtntskgroupgetunittasksr**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationTaskGroup` | `fincs_taskgroup` |
| `ConsolidationTask` | `fincs_tsk` |
| `ConsolidationTaskText` | `fincs_task_txt` |
| `ConsolidationTaskCategory` | `fincs_taskcategory` |
| `ConsolidationTaskCategoryText` | `fincs_description_text_60` |
| `CnsldtnTskIsBlkdAutomatically` | `fincs_task_blockauto` |
| `ConsolidationTaskIsMilestone` | `fincs_task_milestone` |
| `ConsolidationTaskSequenceValue` | `fincs_task_sequence` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldtn Task Group Get Unit Tasks Result'
define abstract entity D_CnsldtnTskGroupGetUnitTasksR
{
  ConsolidationTaskGroup                  : fincs_taskgroup;
  ConsolidationTask                       : fincs_tsk;
  ConsolidationTaskText                   : fincs_task_txt;
  ConsolidationTaskCategory               : fincs_taskcategory;
  ConsolidationTaskCategoryText           : fincs_description_text_60;
  CnsldtnTskIsBlkdAutomatically           : fincs_task_blockauto;
  ConsolidationTaskIsMilestone            : fincs_task_milestone;
  ConsolidationTaskSequenceValue          : fincs_task_sequence;
}
```
