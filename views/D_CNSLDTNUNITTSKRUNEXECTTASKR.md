---
name: D_CNSLDTNUNITTSKRUNEXECTTASKR
description: D Cnsldtnunittskrunexecttaskr
semantic_en: "Consolidation Unit Task Run Execute Result — result capturing background job reference for consolidation task execution."
semantic_vi: "Kết quả Thực hiện Nhiệm vụ Thực hiện Nhiệm vụ Đơn vị Hợp nhất — kết quả tác vụ nền hợp nhất."
keywords:
  - hợp nhất
  - tác vụ nền
  - thực hiện nhiệm vụ
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
# D_CNSLDTNUNITTSKRUNEXECTTASKR

**D Cnsldtnunittskrunexecttaskr**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CnsldtnTaskRunBackgroundJob` | `fincs_taskrun_job_id` |
| `CnsldtnTskRunBackgroundJobName` | `fincs_taskrun_jobname_id` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldt Unit Task Run Execute Result'
define abstract entity D_CnsldtnUnitTskRunExectTaskR
{
  CnsldtnTaskRunBackgroundJob              : fincs_taskrun_job_id;
  CnsldtnTskRunBackgroundJobName           : fincs_taskrun_jobname_id;
}
```
