---
name: D_STRPTASKSTATUSCHANGED
description: D Strptaskstatuschanged
semantic_en: "change-document signature for statutory reporting tasks — records status change with reporting entity, category, task status, period dates, reporting year, classification, activity phase, country, region, agency, and integration scenario"
semantic_vi: "chữ ký thay đổi tài liệu cho các nhiệm vụ báo cáo theo quy định — ghi lại thay đổi trạng thái với thực thể báo cáo, danh mục, trạng thái nhiệm vụ, ngày kỳ, năm báo cáo, phân loại, giai đoạn hoạt động, quốc gia, vùng, cơ quan và kịch bản tích hợp"
keywords:
  - báo cáo theo quy định
  - thay đổi trạng thái nhiệm vụ
  - báo cáo thuế
app_component: FI-LOC-SRF-RUN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-SRF
  - status
  - component:FI-LOC-SRF-RUN
  - lob:Finance
  - bo:StatutoryReportingTask
---
# D_STRPTASKSTATUSCHANGED

**D Strptaskstatuschanged**

| Property | Value |
|---|---|
| App Component | `FI-LOC-SRF-RUN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `StatryRptgEntity` | `srf_reporting_entity` |
| `StatryRptCategory` | `srf_rep_cat_id` |
| `StatryRptTaskStatus` | `srf_reporting_status` |
| `StatryRptTaskPeriodStartDate` | `srf_rpg_period_start_date` |
| `StatryRptTaskPeriodEndDate` | `srf_rpg_period_end_date` |
| `StatryRptgReportingYear` | `srf_reporting_year` |
| `StatryRptClassificationId` | `srf_classification_id` |
| `StatryRptActivityPhase` | `srf_rep_cat_phase` |
| `Country` | `land1` |
| `Region` | `regio` |
| `StatryRptAgencyID` | `srf_agency_id` |
| `StatryRptIntegScenario` | `srf_ext_integration_scenario` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Statutory reporting task status changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'StatutoryReportingTask'
define abstract entity D_StRpTaskStatusChanged
{
StatryRptgEntity              : srf_reporting_entity ; 
StatryRptCategory             : srf_rep_cat_id;
StatryRptTaskStatus           : srf_reporting_status;  --NOS/INP/CMP (NOS(Not Started)/GOD(In Process)/SOK(Completed) )
StatryRptTaskStatusText       : srf_task_status_text;  --‘Not Started’/ ‘In Process’ / ‘Completed’
StatryRptTaskDueDate          : srf_due_date;               
StatryRptTaskPeriodStartDate  : srf_rpg_period_start_date; 
StatryRptTaskPeriodEndDate    : srf_rpg_period_end_date;   
StatryRptgReportingYear       : srf_reporting_year; 
StatryRptClassificationId     : srf_classification_id;  
StatryRptActivityPhase        : srf_rep_cat_phase;
Country                       : land1;
Region                        : regio;
StatryRptAgencyID             : srf_agency_id;
StatryRptIntegScenario        : srf_ext_integration_scenario;
}
```
