---
name: I_MAINTTASKLISTOPMATERIALTP
description: Maintenance Task ListOPMATERIALTP
semantic_en: "operation materials text processing — maintenance task list operation materials with quantities and MRP relevance"
semantic_vi: "vật tư hoạt động danh sách tác vụ bảo trì — danh sách vật tư với số lượng và tính liên quan ERP"
keywords:
  - vật tư hoạt động
  - số lượng
  - quy hoạch vật liệu
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - interface-view
  - transactional-processing
  - material
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
  - bo:Material
---
# I_MAINTTASKLISTOPMATERIALTP

**Maintenance Task ListOPMATERIALTP**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TaskListType` | `TaskListType` |
| `TaskListGroup` | `TaskListGroup` |
| `TaskListGroupCounter` | `TaskListGroupCounter` |
| `TaskListSequence` | `TaskListSequence` |
| `TaskListOperationInternalId` | `TaskListOperationInternalId` |
| `TaskListOpBOMItmInternalID` | `TaskListOpBOMItmInternalID` |
| `TaskListOpBOMItmIntVersCounter` | `TaskListOpBOMItmIntVersCounter` |
| `MaintenanceTaskListOperation` | `MaintenanceTaskListOperation` |
| `Material` | `Material` |
| `MaterialName` | `MaterialName` |
| `BillOfMaterialItemQuantity` | `BillOfMaterialItemQuantity` |
| `BillOfMaterialItemCategory` | `BillOfMaterialItemCategory` |
| `BillOfMaterialItemUnit` | `BillOfMaterialItemUnit` |
| `ResvnIsMRPRlvtOrPurReqnIsCrted` | `ResvnIsMRPRlvtOrPurReqnIsCrted` |
| `MatlCompIsMarkedForBackflush` | `MatlCompIsMarkedForBackflush` |
| `SafetyRelevantObject` | `SafetyRelevantObject` |
| `BillOfMaterialItemCategoryDesc` | `BillOfMaterialItemCategoryDesc` |
| `MatlsPlngRelevancyCodeName` | `MatlsPlngRelevancyCodeName` |
| `SafetyRelevanceActionDesc` | `SafetyRelevanceActionDesc` |
| `Plant` | `Plant` |
| `TaskListStatus` | `TaskListStatus` |
| `ResponsiblePlannerGroup` | `ResponsiblePlannerGroup` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `MaintenancePlanningPlant` | `MaintenancePlanningPlant` |
| `MaintenancePlannerGroup` | `MaintenancePlannerGroup` |
| `ControllingArea` | `ControllingArea` |
| `CostCenter` | `CostCenter` |
| `MaintenancePlant` | `MaintenancePlant` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Operation Materials - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   }
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MaintTaskListOpMaterialTP
  as projection on R_MaintTaskListOpMaterialTP
{
  key TaskListType,
  key TaskListGroup,
  key TaskListGroupCounter,
  key TaskListSequence,
  key TaskListOperationInternalId,
  key TaskListOpBOMItmInternalID,
  key TaskListOpBOMItmIntVersCounter,
      MaintenanceTaskListOperation,
      Material,
      MaterialName,
      @Semantics.quantity.unitOfMeasure: 'BillOfMaterialItemUnit'
      BillOfMaterialItemQuantity,
      BillOfMaterialItemCategory,
      BillOfMaterialItemUnit,
      @Semantics.booleanIndicator
      ResvnIsMRPRlvtOrPurReqnIsCrted,
      MatlCompIsMarkedForBackflush,
      SafetyRelevantObject,
      BillOfMaterialItemCategoryDesc,
      MatlsPlngRelevancyCodeName,
      SafetyRelevanceActionDesc,
      @Consumption.hidden: true
      Plant,
      @Consumption.hidden: true
      TaskListStatus,
      @Consumption.hidden: true
      ResponsiblePlannerGroup,
      @Consumption.hidden: true
      AuthorizationGroup,
      @Consumption.hidden: true
      MaintenancePlanningPlant,
      @Consumption.hidden: true
      MaintenancePlannerGroup,
      @Consumption.hidden: true
      ControllingArea,
      @Consumption.hidden: true
      CostCenter,
      @Consumption.hidden: true
      MaintenancePlant,

      _Header    : redirected to I_MaintenanceTaskListTP_2,
      _NonHistOp : redirected to parent I_MaintTaskListOperationTP_2
}
```
