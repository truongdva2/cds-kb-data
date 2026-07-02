---
name: D_WAREHOUSEORDERTASKCANCELED
description: D Warehouse OrderTASKCANCELED
semantic_en: "warehouse task canceled event signature — captures task, item, process type, handling unit status, queue, and ewm reference."
semantic_vi: "chữ ký sự kiện hủy bỏ nhiệm vụ kho — ghi lại nhiệm vụ, mục, loại quy trình, trạng thái đơn vị xử lý, hàng đợi và tham chiếu ewm."
keywords:
  - hủy bỏ nhiệm vụ
  - kho hàng
  - sự kiện
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - warehouse
  - component:SCM-EWM-WOP-2CL
  - lob:Other
  - bo:WarehouseTask
---
# D_WAREHOUSEORDERTASKCANCELED

**D Warehouse OrderTASKCANCELED**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WarehouseTask` | `/scwm/tanum_conv_alpha` |
| `WarehouseTaskItem` | `/scwm/tapos_noconv` |
| `WarehouseProcessType` | `/scwm/de_procty` |
| `IsHandlingUnitWarehouseTask` | `/scwm/flghuto` |
| `WarehouseOrderQueue` | `/scwm/de_queue` |
| `EWMReferenceDocumentCategory` | `/scwm/de_doccat` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Warehouse Task Canceled'

@Event.sapObjectNodeTypeKey: [
    { element: 'EWMWarehouse' },
    { element: 'WarehouseOrder'},
    { element: 'WarehouseTask'},
    { element: 'WarehouseTaskItem'} ]
    
@ObjectModel.sapObjectNodeType.name: 'WarehouseTask'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
@VDM.usage.type: [ #EVENT_SIGNATURE ]
define abstract entity D_WarehouseOrderTaskCanceled
{

  /* SONT Keys */
  WarehouseTask            : /scwm/tanum_conv_alpha;
//
  WarehouseTaskItem        : /scwm/tapos_noconv;

  /* Filter Properties */
//  WarehouseOrder               : /scwm/de_who_noconv;
  
  WarehouseProcessType         : /scwm/de_procty;

  IsHandlingUnitWarehouseTask  : /scwm/flghuto;

  WarehouseOrderQueue          : /scwm/de_queue;

  EWMReferenceDocumentCategory : /scwm/de_doccat;

}
```
