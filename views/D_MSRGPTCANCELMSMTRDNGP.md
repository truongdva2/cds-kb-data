---
name: D_MSRGPTCANCELMSMTRDNGP
description: D Msrgptcancelmsmtrdngp
semantic_en: "abstract parameter to stop measurement reading transfer — specifies interval end date and time for cancellation."
semantic_vi: "tham số trừu tượng để dừng chuyển đọc số đo — xác định ngày và giờ kết thúc khoảng thời gian cho hủy."
keywords:
  - dừng chuyển đọc
  - số đo
  - khoảng thời gian
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# D_MSRGPTCANCELMSMTRDNGP

**D Msrgptcancelmsmtrdngp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MsmtRdngIntervalEndDate` | `imrc_idate` |
| `MsmtRdngIntervalEndTime` | `imrc_itime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Stop Measurement Reading Transfer'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
define abstract entity D_MsrgPtCancelMsmtRdngP
 {
   MsmtRdngIntervalEndDate   : imrc_idate;
   MsmtRdngIntervalEndTime   : imrc_itime;  
}
```
