---
name: I_MAINTORDEROPPHASECONTROLTP
description: Maintorderopphasecontroltp
semantic_en: "maintenance order operation phase control in target projection with process phase reference — key columns: MaintenanceOrder, MaintenancePhaseControl, EAMProcessPhaseCode, EAMProcessSubPhaseCode"
semantic_vi: "điều khiển giai đoạn hoạt động đơn hàng bảo trì trong hình chiếu đích với tham chiếu giai đoạn quy trình — cột chính: đơn hàng, điều khiển giai đoạn, mã giai đoạn, mã giai đoạn phụ"
keywords:
  - giai đoạn điều khiển bảo trì
  - quy trình bảo trì
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
# I_MAINTORDEROPPHASECONTROLTP

**Maintorderopphasecontroltp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaintenanceOrder` | `MaintenanceOrder` |
| `MaintenanceOrderOperation` | `MaintenanceOrderOperation` |
| `MaintenanceOrderSubOperation` | `MaintenanceOrderSubOperation` |
| `MaintenancePhaseControl` | `MaintenancePhaseControl` |
| `MaintenancePhaseControlName` | `MaintenancePhaseControlName` |
| `MaintenancePhaseControlText` | `MaintenancePhaseControlText` |
| `MaintPhseCtrlIsSetAutomly` | `MaintPhseCtrlIsSetAutomly` |
| `MaintPhaseControlAuthorityCode` | `MaintPhaseControlAuthorityCode` |
| `MaintProcgPhseCtrlActvtnCode` | `MaintProcgPhseCtrlActvtnCode` |
| `EAMProcessPhaseCode` | `EAMProcessPhaseCode` |
| `EAMProcessSubPhaseCode` | `EAMProcessSubPhaseCode` |
| `MaintObjPhseCtrlStatusIsActive` | `MaintObjPhseCtrlStatusIsActive` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Op Phase Control - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintOrderOpPhaseControlTP
  as projection on R_MaintOrderOpPhaseControlTP
{
  key MaintenanceOrder,
  key MaintenanceOrderOperation,
  key MaintenanceOrderSubOperation,
  key MaintenancePhaseControl,
  
      MaintenancePhaseControlName,
      MaintenancePhaseControlText,
      MaintPhseCtrlIsSetAutomly,
      MaintPhaseControlAuthorityCode,
      MaintProcgPhseCtrlActvtnCode,
      EAMProcessPhaseCode,
      EAMProcessSubPhaseCode,
      @Semantics.booleanIndicator:true
      MaintObjPhseCtrlStatusIsActive,

      _MaintenanceOrder          : redirected to I_MaintenanceOrderTP,
      _MaintenanceOrderOperation : redirected to parent I_MaintenanceOrderOperationTP
}
```
