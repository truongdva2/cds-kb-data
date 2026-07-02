---
name: D_HANDLINGUNITMOVEUNITP
description: D Handlingunitmoveunitp
semantic_en: "handling unit movement parameters — action parameter for moving handling units specifying source handling unit, receiving plant, storage location, and storage bin."
semantic_vi: "tham số di chuyển đơn vị xử lý — tham số hành động để di chuyển đơn vị xử lý xác định đơn vị xử lý nguồn, nhà máy nhận, vị trí lưu trữ, và kho."
keywords:
  - di chuyển đơn vị
  - tham số hành động
  - kho
app_component: LO-HU-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - LO-HU-API
  - transactional-processing
  - component:LO-HU-API-2CL
  - lob:Logistics General
---
# D_HANDLINGUNITMOVEUNITP

**D Handlingunitmoveunitp**

| Property | Value |
|---|---|
| App Component | `LO-HU-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `HandlingUnitExternalID` | `exidv` |
| `HandlingUnitGoodsMovementEvent` | `huwbevent` |
| `ReceivingPlant` | `umwrk` |
| `ReceivingStorageLocation` | `umlgo` |
| `ReceivingStorageBin` | `/scwm/lgpla` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Move of Handling Units'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define root abstract entity D_HandlingUnitMoveUnitP
{
  HandlingUnitExternalID         : exidv;
  HandlingUnitGoodsMovementEvent      : huwbevent;
  ReceivingPlant            : umwrk;
  ReceivingStorageLocation  : umlgo; 
  ReceivingStorageBin       : /scwm/lgpla;
}
```
