---
name: D_ENPRJELMCHGPERDDISTROPTIONP
description: D Enprjelmchgperddistroptionp
semantic_en: "Parameter Structure for action ChgPeriodDistributionOption — parameter set for changing period distribution option of enterprise project elements with planned date range."
semantic_vi: "Cấu trúc Tham số cho hành động ChgPeriodDistributionOption — tập tham số cho thay đổi tùy chọn phân phối kỳ của các phần tử dự án doanh nghiệp."
keywords:
  - dự án doanh nghiệp
  - period distribution
  - phân phối kỳ
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - component:PPM-SCL-STR
  - lob:Other
---
# D_ENPRJELMCHGPERDDISTROPTIONP

**D Enprjelmchgperddistroptionp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PlannedStartDate` | `/s4ppm/tv_ltst_start_date` |
| `PlannedEndDate` | `/s4ppm/tv_ltst_end_date` |
| `EntProjElmntDistributionOption` | `/s4ppm/tv_distributiontype` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Parameter Structure for action ChgPeriodDistributionOption'
define abstract entity D_EnPrjElmChgPerdDistrOptionP
{
  PlannedStartDate   : /s4ppm/tv_ltst_start_date;
  PlannedEndDate : /s4ppm/tv_ltst_end_date;
  EntProjElmntDistributionOption : /s4ppm/tv_distributiontype;
}
```
