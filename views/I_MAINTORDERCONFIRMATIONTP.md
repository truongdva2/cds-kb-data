---
name: I_MAINTORDERCONFIRMATIONTP
description: Maintorderconfirmationtp
semantic_en: "maintenance order confirmation in target projection with actual work timing and quantity — key columns: MaintOrderConf, MaintenanceOrder, ActualWorkQuantity, OperationConfirmedStartDate"
semantic_vi: "xác nhận đơn hàng bảo trì trong hình chiếu đích với thời gian hoạt động và số lượng công việc — cột chính: xác nhận, đơn hàng, số lượng công việc, ngày bắt đầu xác nhận"
keywords:
  - xác nhận đơn hàng
  - hoạt động bảo trì
  - số lượng công việc
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDERCONFIRMATIONTP

**Maintorderconfirmationtp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaintOrderConf` | `MaintOrderConf` |
| `MaintOrderConfCntrValue` | `MaintOrderConfCntrValue` |
| `MaintenanceOrder` | `MaintenanceOrder` |
| `MaintenanceOrderOperation` | `MaintenanceOrderOperation` |
| `MaintenanceOrderSubOperation` | `MaintenanceOrderSubOperation` |
| `PersonnelNumber` | `PersonnelNumber` |
| `ActualWorkQuantity` | `ActualWorkQuantity` |
| `ActualWorkQuantityUnit` | `ActualWorkQuantityUnit` |
| `ActualDuration` | `ActualDuration` |
| `ActualDurationUnit` | `ActualDurationUnit` |
| `OperationConfirmedStartDate` | `OperationConfirmedStartDate` |
| `OperationConfirmedStartTime` | `OperationConfirmedStartTime` |
| `OperationConfirmedEndDate` | `OperationConfirmedEndDate` |
| `OperationConfirmedEndTime` | `OperationConfirmedEndTime` |
| `IsFinalConfirmation` | `IsFinalConfirmation` |
| `NoFurtherWorkQuantityIsExpd` | `NoFurtherWorkQuantityIsExpd` |
| `RemainingWorkQuantity` | `RemainingWorkQuantity` |
| `RemainingWorkQuantityUnit` | `RemainingWorkQuantityUnit` |
| `PostingDate` | `PostingDate` |
| `ActivityType` | `ActivityType` |
| `OpenReservationsIsCleared` | `OpenReservationsIsCleared` |
| `ConfirmationText` | `ConfirmationText` |
| `EmployeeWageType` | `EmployeeWageType` |
| `EmployeeWageGroup` | `EmployeeWageGroup` |
| `VarianceReasonCode` | `VarianceReasonCode` |
| `CapacityInternalID` | `CapacityInternalID` |
| `NmbrOfMaintTechnicianCapSplits` | `NmbrOfMaintTechnicianCapSplits` |
| `MaterialDocument` | `MaterialDocument` |
| `AccountingIndicatorCode` | `AccountingIndicatorCode` |
| `ActyConfFcstdEndDate` | `ActyConfFcstdEndDate` |
| `ActyConfFcstdEndTime` | `ActyConfFcstdEndTime` |
| `IsReversed` | `IsReversed` |
| `IsReversal` | `IsReversal` |
| `CancldMaintOrderConfCntrValue` | `CancldMaintOrderConfCntrValue` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Order Confirmation - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   sapObjectNodeType:{
      name: 'MaintenanceOrderConfirmation'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #M,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintOrderConf','MaintOrderConfCntrValue']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_MaintOrderConfirmationTP
  provider contract transactional_interface
  as projection on R_MaintOrderConfirmationTP as MaintOrderConfirmation
{

  key MaintOrderConf,
  key MaintOrderConfCntrValue,

      MaintenanceOrder,
      MaintenanceOrderOperation,

      MaintenanceOrderSubOperation,

      PersonnelNumber,

      @Semantics.quantity.unitOfMeasure: 'ActualWorkQuantityUnit'
      ActualWorkQuantity,
      ActualWorkQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'ActualDurationUnit'
      ActualDuration,
      ActualDurationUnit,

      OperationConfirmedStartDate,
      OperationConfirmedStartTime,
      OperationConfirmedEndDate,
      OperationConfirmedEndTime,

      IsFinalConfirmation,
      NoFurtherWorkQuantityIsExpd,

      @Semantics.quantity.unitOfMeasure: 'RemainingWorkQuantityUnit'
      RemainingWorkQuantity,
      RemainingWorkQuantityUnit,

      PostingDate,
      ActivityType,
      OpenReservationsIsCleared,
      ConfirmationText,

      EmployeeWageType,
      EmployeeWageGroup,
      VarianceReasonCode,
      CapacityInternalID,
      NmbrOfMaintTechnicianCapSplits,
      MaterialDocument,

      AccountingIndicatorCode,
      ActyConfFcstdEndDate,
      ActyConfFcstdEndTime,
      //      "Exposing the reversal fields to this API
      IsReversed,
      IsReversal,
      CancldMaintOrderConfCntrValue,
      //Exposing Cancel Longtext field
//      MaintOrdConfCanclnLongText,

      _LongText : redirected to composition child I_MaintOrdConfLongTextTP

}
```
