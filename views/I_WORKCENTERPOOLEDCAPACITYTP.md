---
name: I_WORKCENTERPOOLEDCAPACITYTP
description: Work CenterPOOLEDCAPACITYTP
semantic_en: "work center pooled capacity interface - transactional view of shared capacity resources with finiteness and utilization planning attributes."
semantic_vi: "giao diện công suất hợp nhất trung tâm công việc - chế độ xem giao dịch của tài nguyên công suất được chia sẻ với các thuộc tính hữu hạn và lập kế hoạch sử dụng."
keywords:
  - công suất hợp nhất
  - chia sẻ
  - tài nguyên
  - lập kế hoạch
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
  - bo:PooledCapacity
---
# I_WORKCENTERPOOLEDCAPACITYTP

**Work CenterPOOLEDCAPACITYTP**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CapacityInternalID` | `CapacityInternalID` |
| `Plant` | `Plant` |
| `Capacity` | `Capacity` |
| `CapacityCategoryCode` | `CapacityCategoryCode` |
| `CapacityActiveVersion` | `CapacityActiveVersion` |
| `CapacityIsFinite` | `CapacityIsFinite` |
| `CapacityIsPooled` | `CapacityIsPooled` |
| `CapacityHasIndivCapacities` | `CapacityHasIndivCapacities` |
| `CapacityIsExcldFrmLongTermPlng` | `CapacityIsExcldFrmLongTermPlng` |
| `CapacityNumberOfCapacities` | `CapacityNumberOfCapacities` |
| `CapacityResponsiblePlanner` | `CapacityResponsiblePlanner` |
| `CapacityPlanUtilizationPercent` | `CapacityPlanUtilizationPercent` |
| `CapacityBreakDuration` | `CapacityBreakDuration` |
| `CapIsUsedInMultiOperations` | `CapIsUsedInMultiOperations` |
| `ReferencedCapacityInternalID` | `ReferencedCapacityInternalID` |
| `CapOverloadThresholdInPercent` | `CapOverloadThresholdInPercent` |
| `FactoryCalendar` | `FactoryCalendar` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `ShiftGroup` | `ShiftGroup` |
| `CapacityStartTimeID` | `CapacityStartTimeID` |
| `CapacityEndTimeID` | `CapacityEndTimeID` |
| `CapacityQuantityUnit` | `CapacityQuantityUnit` |
| `CapacityBaseQtyUnit` | `CapacityBaseQtyUnit` |
| `CapacityLastChangeDateTime` | `CapacityLastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Interface for the BO WorkCenter Pooled Capacity - TP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'PooledCapacity'
define root view entity I_WorkCenterPooledCapacityTP 
 provider contract transactional_interface
 as projection on R_WorkCenterPooledCapacityTP {
  key CapacityInternalID,
      Plant,
      Capacity,
      CapacityCategoryCode,
      CapacityActiveVersion,
      CapacityIsFinite,
      CapacityIsPooled,
      CapacityHasIndivCapacities,
      CapacityIsExcldFrmLongTermPlng,
      CapacityNumberOfCapacities,
      CapacityResponsiblePlanner,
      CapacityPlanUtilizationPercent,
      CapacityBreakDuration,
      CapIsUsedInMultiOperations,
      ReferencedCapacityInternalID,
      CapOverloadThresholdInPercent,
      FactoryCalendar,
      AuthorizationGroup,
      ShiftGroup,
      // Times
      @Semantics.durationInSeconds:true
      CapacityStartTimeID,
      @Semantics.durationInSeconds:true
      CapacityEndTimeID,
      CapacityQuantityUnit,
      CapacityBaseQtyUnit,
      CapacityLastChangeDateTime,
      /* Associations */
      _Interval    : redirected to composition child I_WrkCtrPooledCapIntervalTP,
      _Description : redirected to composition child I_WorkCtrPooledCapacityTextTP
  
}
```
