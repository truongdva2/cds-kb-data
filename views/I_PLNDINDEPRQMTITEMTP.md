---
name: I_PLNDINDEPRQMTITEMTP
description: Plndindeprqmtitemtp
semantic_en: "planned independent requirement item time-period view — forecast items grouped by period type with period-specific quantity data"
semantic_vi: "chế độ xem kỳ thời gian mục nhu cầu độc lập dự kiến — mục dự báo được nhóm theo loại kỳ với dữ liệu số lượng cụ thể cho kỳ"
keywords:
  - dự báo theo kỳ
  - phân tích kỳ
  - mục dòng theo thời gian
app_component: PP-MP-DEM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-MP
  - PP-MP-DEM
  - interface-view
  - transactional-processing
  - item-level
  - component:PP-MP-DEM-2CL
  - lob:Manufacturing
---
# I_PLNDINDEPRQMTITEMTP

**Plndindeprqmtitemtp**

| Property | Value |
|---|---|
| App Component | `PP-MP-DEM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Product` | `Product` |
| `Plant` | `Plant` |
| `MRPArea` | `MRPArea` |
| `PlndIndepRqmtType` | `PlndIndepRqmtType` |
| `PlndIndepRqmtVersion` | `PlndIndepRqmtVersion` |
| `RequirementPlan` | `RequirementPlan` |
| `RequirementSegment` | `RequirementSegment` |
| `PlndIndepRqmtPeriod` | `PlndIndepRqmtPeriod` |
| `PeriodType` | `PeriodType` |
| `PlndIndepRqmtPeriodStartDate` | `PlndIndepRqmtPeriodStartDate` |
| `PlndIndepRqmtInternalID` | `PlndIndepRqmtInternalID` |
| `WorkingDayDate` | `WorkingDayDate` |
| `PlannedQuantity` | `PlannedQuantity` |
| `WithdrawalQuantity` | `WithdrawalQuantity` |
| `UnitOfMeasure` | `UnitOfMeasure` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `PlndIndepRqmtLastChgdDateTime` | `PlndIndepRqmtLastChgdDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Planned Indep Req Item - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #M, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY

@VDM.viewType: #TRANSACTIONAL
//@VDM.usage.type : [#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_PlndIndepRqmtItemTP
  as projection on R_PlndIndepRqmtItemTP

{
  key Product,
  key Plant,
  key MRPArea,
  key PlndIndepRqmtType,
  key PlndIndepRqmtVersion,
  key RequirementPlan,
  key RequirementSegment,
  key PlndIndepRqmtPeriod,
  key PeriodType,
      PlndIndepRqmtPeriodStartDate,
      PlndIndepRqmtInternalID,
      WorkingDayDate,
      @Semantics.quantity.unitOfMeasure : 'UnitOfMeasure'
      PlannedQuantity,
      @Semantics.quantity.unitOfMeasure : 'UnitOfMeasure'
      WithdrawalQuantity,
//      @Semantics.unitOfMeasure: true
      UnitOfMeasure,
      LastChangedByUser,
      LastChangeDate,
      PlndIndepRqmtLastChgdDateTime,
      _PlndIndepRqmt : redirected to parent I_PlndIndepRqmtTP
}
```
