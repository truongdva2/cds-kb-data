---
name: D_CPWF_START_PARAMETER
description: D Cpwf Start Parameter
semantic_en: "Workflow Start Parameter — parameter field for workflow initialization with definition and retention configuration."
semantic_vi: "Tham số Bắt đầu Quy trình — tham số khởi tạo quy trình làm việc."
keywords:
  - quy trình
  - bắt đầu
  - khởi tạo
app_component: BC-BMT-WFP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-WFP
  - component:BC-BMT-WFP
  - lob:Basis Components
---
# D_CPWF_START_PARAMETER

**D Cpwf Start Parameter**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CpWfDefId` | `swf_cpwf_defid` |
| `PaWfDefId` | `swf_cpwf_defid_long` |
| `RetentionTime` | `swf_cpwf_retention` |
| `Consumer` | `swf_cpwf_consumer` |
| `CallbackClass` | `seoclsname` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Parameterfield for workflow start'
define abstract entity D_CPWF_START_PARAMETER
{
  CpWfDefId     : swf_cpwf_defid;
  PaWfDefId     : swf_cpwf_defid_long;
  RetentionTime : swf_cpwf_retention;
  Consumer      : swf_cpwf_consumer;
  CallbackClass : seoclsname;
}
```
