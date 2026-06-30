---
name: C_EWM_WHSEORDERPARAMDET
description: Ewm Whseorderparamdet
semantic_en: "EWM warehouse order output parameter determination data source (deprecated) — exposes warehouse order status, activity area, and storage type alongside empty placeholder fields for process type, work center, task event, and wave category used to derive output parameters."
semantic_vi: "Nguồn dữ liệu xác định tham số đầu ra cho lệnh kho EWM (đã ngừng sử dụng) — cung cấp trạng thái lệnh kho, khu vực hoạt động, loại kho cùng các trường giả định cho loại quy trình, trung tâm làm việc và loại sóng để suy diễn tham số đầu ra."
keywords:
  - lệnh kho EWM
  - xác định tham số đầu ra
  - quản lý kho nâng cao
  - warehouse order
app_component: SCM-EWM-PRN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-PRN
  - consumption-view
  - component:SCM-EWM-PRN-2CL
  - lob:Other
---
# C_EWM_WHSEORDERPARAMDET

**Ewm Whseorderparamdet**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-PRN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Warehouse` | `who.Warehouse` |
| `WarehouseOrder` | `who.WarehouseOrder` |
| `WarehouseOrderStatus` | `who.WarehouseOrderStatus` |
| `ActivityArea` | `who.ActivityArea` |
| `StorageType` | `who.StorageType` |
| `WarehouseOrderHasPhysInvtryDoc` | `who.WarehouseOrderHasPhysInvtryDoc` |
| `WarehouseOrderHasWhseTask` | `who.WarehouseOrderHasWhseTask` |
| `WarehouseProcessType` | `cast ( ' ' as /scwm/de_procty preserving type)` |
| `WarehouseTaskEvent` | `cast ( ' ' as abap.numc( 1 ))` |
| `WarehouseProcessCategory` | `cast ( ' ' as /scwm/lvs_trart preserving type)` |
| `WorkCenter` | `cast ( ' ' as /scwm/de_workstation preserving type)` |
| `WarehouseTaskExceptionCode` | `cast ( ' ' as /scwm/de_exccode preserving type)` |
| `StockOwner` | `cast ( ' ' as /scwm/de_owner preserving type)` |
| `EntitledToDisposeParty` | `cast ( ' ' as /scwm/de_entitled preserving type)` |
| `IsHandlingUnitWarehouseTask` | `cast ( ' ' as /scwm/flghuto preserving type)` |
| `WarehouseActivityType` | `cast ( ' ' as /scwm/de_actty preserving type)` |
| `WarehouseTaskStatus` | `cast ( ' ' as /scwm/de_tostat preserving type)` |
| `HomogeneousFullPalletPick` | `cast ( ' ' as /scwm/de_movehu preserving type)` |
| `EWMWaveCategory` | `cast ( ' ' as /scwm/de_wavecat preserving type)` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_EWM_WarehouseOrder` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CEWMWOPRMDET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Outp Param Determination for Whse Order'

@VDM.viewType: #CONSUMPTION

@ObjectModel.supportedCapabilities: [ #OUTPUT_PARAMETER_DETERMINATION_DATA_SOURCE ]
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass:      #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory:   #M

@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'C_EWM_WhseOrderParamDet_2'
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

define view C_EWM_WhseOrderParamDet as select from I_EWM_WarehouseOrder as who
//Extensibility
  association [0..1] to E_EWM_WarehouseOrder  as _Extension  on  $projection.Warehouse = _Extension.EWMWarehouse 
                                                             and $projection.WarehouseOrder = _Extension.WarehouseOrder

{
 key who.Warehouse,
 key who.WarehouseOrder,
 who.WarehouseOrderStatus,
 who.ActivityArea,
 who.StorageType,
 who.WarehouseOrderHasPhysInvtryDoc,
 who.WarehouseOrderHasWhseTask,
  
 cast ( '    '                as /scwm/de_procty preserving type)             as WarehouseProcessType,
 cast ( ' '                   as abap.numc( 1 ))                              as WarehouseTaskEvent, 
 cast ( ' '                   as /scwm/lvs_trart preserving type)             as WarehouseProcessCategory,
 cast ( '    '                as /scwm/de_workstation preserving type)        as WorkCenter,
 cast ( '    '                as /scwm/de_exccode preserving type)            as WarehouseTaskExceptionCode,
 cast ( '          '          as /scwm/de_owner preserving type)              as StockOwner,
 cast ( '          '          as /scwm/de_entitled preserving type)           as EntitledToDisposeParty,
 cast ( ' '                   as /scwm/flghuto preserving type)               as IsHandlingUnitWarehouseTask,
 cast ( '    '                as /scwm/de_actty preserving type)              as WarehouseActivityType,
 cast ( ' '                   as /scwm/de_tostat preserving type)             as WarehouseTaskStatus,
 cast ( ' '                   as /scwm/de_movehu preserving type)             as HomogeneousFullPalletPick,
 cast ( '  '                  as /scwm/de_wavecat preserving type)            as EWMWaveCategory
               
  
}
```
