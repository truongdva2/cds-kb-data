---
name: D_MAINTPLANSTARTSCHEDULEP
description: D Maintplanstartschedulep
semantic_en: "abstract parameter to start maintenance plan schedule — specifies start date/time, counter reading, and call date limit."
semantic_vi: "tham số trừu tượng để bắt đầu lịch kế hoạch bảo trì — xác định ngày/giờ bắt đầu, đọc bộ đếm và giới hạn ngày gọi."
keywords:
  - bắt đầu lịch
  - kế hoạch bảo trì
  - ngày gọi
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - schedule-line
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# D_MAINTPLANSTARTSCHEDULEP

**D Maintplanstartschedulep**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SchedulingStartDate` | `stadt` |
| `SchedulingStartTime` | `time_start` |
| `MaintPlanStartCntrReadingValue` | `szaehc` |
| `MaintPlnSchedgCallObjUpToDte` | `syst_datum` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Start Maint Plan Schedule Parameter'
@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]
define abstract entity D_MaintPlanStartScheduleP
{
  SchedulingStartDate            : stadt ;
  SchedulingStartTime            : time_start ;
  MaintPlanStartCntrReadingValue : szaehc ;
  MaintPlnSchedgCallObjUpToDte   : syst_datum;
}
```
