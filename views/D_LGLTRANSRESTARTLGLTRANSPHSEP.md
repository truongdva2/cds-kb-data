---
name: D_LGLTRANSRESTARTLGLTRANSPHSEP
description: D Lgltransrestartlgltransphsep
semantic_en: "abstract parameter to restart legal transaction phase — identifies phase UUID for workflow restart."
semantic_vi: "tham số trừu tượng để khởi động lại giai đoạn giao dịch pháp lý — xác định UUID giai đoạn cho khởi động lại quy trình."
keywords:
  - khởi động lại giai đoạn
  - giao dịch pháp lý
  - quy trình
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - component:CM-LT-2CL
  - lob:Other
---
# D_LGLTRANSRESTARTLGLTRANSPHSEP

**D Lgltransrestartlgltransphsep**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMPhaseUUID` | `lcm_uuid` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Legal Trans Restart Phase Action Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglTransRestartLglTransPhseP
{
  LglCntntMPhaseUUID : lcm_uuid;
}
```
