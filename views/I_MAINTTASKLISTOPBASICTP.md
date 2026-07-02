---
name: I_MAINTTASKLISTOPBASICTP
description: Maintenance Task ListOPBASICTP
semantic_en: "operations text processing — maintenance task list operations with work center and material assembly details"
semantic_vi: "hoạt động danh sách tác vụ bảo trì — các tác vụ với trung tâm công việc và chi tiết lắp ráp"
keywords:
  - tác vụ bảo trì
  - trung tâm công việc
  - lắp ráp
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
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# I_MAINTTASKLISTOPBASICTP

**Maintenance Task ListOPBASICTP**

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
| `TaskListOpBOMItmIntVersCounter` | `TaskListOpBOMItmIntVersCounter` |
| `MaintenanceTaskListOperation` | `MaintenanceTaskListOperation` |
| `MaintTaskListSubOperation` | `MaintTaskListSubOperation` |
| `MaintOperationExecStageCode` | `MaintOperationExecStageCode` |
| `OperationText` | `OperationText` |
| `OperationControlProfile` | `OperationControlProfile` |
| `WorkCenter` | `WorkCenter` |
| `Plant` | `Plant` |
| `Assembly` | `Assembly` |
| `OperationCalculationControl` | `OperationCalculationControl` |
| `OpPlannedWorkQuantity` | `OpPlannedWorkQuantity` |
| `OpWorkQuantityUnit` | `OpWorkQuantityUnit` |
| `NumberOfCapacities` | `NumberOfCapacities` |
| `PurchaseOrderQuantityUnit` | `PurchaseOrderQuantityUnit` |
| `OperationStandardDuration` | `OperationStandardDuration` |
| `OperationStandardDurationUnit` | `OperationStandardDurationUnit` |
| `CostCtrActivityType` | `CostCtrActivityType` |
| `MaterialGroup` | `MaterialGroup` |
| `OpExternalProcessingPrice` | `OpExternalProcessingPrice` |
| `OpExternalProcessingCurrency` | `OpExternalProcessingCurrency` |
| `CostElement` | `CostElement` |
| `PurchasingGroup` | `PurchasingGroup` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchaseContract` | `PurchaseContract` |
| `PurchaseContractItem` | `PurchaseContractItem` |
| `Supplier` | `Supplier` |
| `ChangeNumber` | `ChangeNumber` |
| `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `SupplierAccountGroup` | `SupplierAccountGroup` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `TaskListStatus` | `TaskListStatus` |
| `ResponsiblePlannerGroup` | `ResponsiblePlannerGroup` |
| `MaintenancePlanningPlant` | `MaintenancePlanningPlant` |
| `MaintenancePlannerGroup` | `MaintenancePlannerGroup` |
| `ControllingArea` | `ControllingArea` |
| `CostCenter` | `CostCenter` |
| `MaintenancePlant` | `MaintenancePlant` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `TechnicalObject` | `TechnicalObject` |
| `TechObjIsEquipOrFuncnlLoc` | `TechObjIsEquipOrFuncnlLoc` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Operations - TP'
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
define view entity I_MaintTaskListOpBasicTP
  as projection on R_MaintTaskListOpBasicTP
{
  key   TaskListType,
  key   TaskListGroup,
  key   TaskListGroupCounter,
  key   TaskListSequence,
  key   TaskListOperationInternalId,
  key   TaskListOpBOMItmIntVersCounter,
        MaintenanceTaskListOperation,
        @Consumption.hidden: true
        MaintTaskListSubOperation,
        MaintOperationExecStageCode,
        OperationText,
        OperationControlProfile,
        WorkCenter,
        Plant,
        Assembly,
        OperationCalculationControl,
        @Semantics.quantity.unitOfMeasure: 'OpWorkQuantityUnit'
        OpPlannedWorkQuantity,
        OpWorkQuantityUnit,
        NumberOfCapacities,
        @ Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
        PurchaseOrderQty,
        PurchaseOrderQuantityUnit,
        @Semantics.quantity.unitOfMeasure: 'OperationStandardDurationUnit'
        OperationStandardDuration,
        OperationStandardDurationUnit,
        CostCtrActivityType,
        MaterialGroup,
        @Semantics.amount.currencyCode : 'OpExternalProcessingCurrency'
        OpExternalProcessingPrice,
        OpExternalProcessingCurrency,
        CostElement,
        PurchasingGroup,
        PurchasingOrganization,
        //        //       External Data
        PurchaseContract,
        PurchaseContractItem,
        Supplier,
        ChangeNumber,
        PurchasingInfoRecord,
        @Semantics.booleanIndicator
        IsBusinessPurposeCompleted,
        SupplierAccountGroup,
        AuthorizationGroup,
        TaskListStatus,
        ResponsiblePlannerGroup,
        MaintenancePlanningPlant,
        MaintenancePlannerGroup,
        ControllingArea,
        CostCenter,
        MaintenancePlant,
        ValidityStartDate,
        ValidityEndDate,
        TechnicalObject,
        TechObjIsEquipOrFuncnlLoc,
        _Header     : redirected to I_MaintenanceTaskListTP_2,
        _NonHistOp  : redirected to parent I_MaintTaskListOperationTP_2,
        _OpMaterial : redirected to I_MaintTaskListOpMaterialTP,
        _OpRelation : redirected to I_MaintTaskListOpRelshpTP,
        _SubOp      : redirected to I_MaintTaskListSubOpTP,
        _OpLongText : redirected to I_MaintTaskListOpLongTextTP
}
```
