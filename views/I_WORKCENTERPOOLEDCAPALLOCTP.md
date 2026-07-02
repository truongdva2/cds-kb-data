---
name: I_WORKCENTERPOOLEDCAPALLOCTP
description: Work CenterPOOLEDCAPALLOCTP
semantic_en: "work center pooled capacity allocation interface - mapping of pooled capacities to work centers with capacity requirement formulas."
semantic_vi: "giao diện phân bổ công suất hợp nhất trung tâm công việc - ánh xạ công suất hợp nhất cho trung tâm công việc với công thức yêu cầu công suất."
keywords:
  - phân bổ
  - công suất hợp nhất
  - trung tâm công việc
  - công thức
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_WORKCENTERPOOLEDCAPALLOCTP

**Work CenterPOOLEDCAPALLOCTP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkCenterInternalID` | `WorkCenterInternalID` |
| `WorkCenterTypeCode` | `WorkCenterTypeCode` |
| `CapacityCategoryAllocation` | `CapacityCategoryAllocation` |
| `CapacityInternalID` | `CapacityInternalID` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `Plant` | `Plant` |
| `WorkCenter` | `WorkCenter` |
| `WorkCenterCategoryCode` | `WorkCenterCategoryCode` |
| `CapacityCategoryCode` | `CapacityCategoryCode` |
| `Capacity` | `Capacity` |
| `SetupCapRequirementFormula` | `SetupCapRequirementFormula` |
| `ProcgCapRequirementFormula` | `ProcgCapRequirementFormula` |
| `TeardownCapRequirementFormula` | `TeardownCapRequirementFormula` |
| `OtherCapRequirementFormula` | `OtherCapRequirementFormula` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `WorkCenterLastChangeDateTime` | `WorkCenterLastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WrkCtr PooledCapacity Allocation - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true
define view entity I_WorkCenterPooledCapAllocTP as projection on R_WorkCenterPooledCapAllocTP {
  key WorkCenterInternalID,
  key WorkCenterTypeCode,
  key CapacityCategoryAllocation,
  key CapacityInternalID,
      LastChangeDate,
      LastChangedByUser,
      Plant,
      WorkCenter,
      WorkCenterCategoryCode,
      CapacityCategoryCode,
      Capacity,
      SetupCapRequirementFormula,
      ProcgCapRequirementFormula,
      TeardownCapRequirementFormula,
      OtherCapRequirementFormula,
      ValidityStartDate,
      ValidityEndDate,
      WorkCenterLastChangeDateTime,
      /* Associations */
      _Header: redirected to parent I_WorkCenterTP
}
```
