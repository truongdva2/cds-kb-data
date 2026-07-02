---
name: D_SRLNMBRCHANGESERIALNUMBERP
description: D SRLNMBRCHANGESerial NumberP
semantic_en: "parameterized change-document view — carries the new serial number value for serial number change actions on equipment or materials"
semantic_vi: "chế độ xem thay đổi tài liệu được tham số hóa — mang giá trị số sê-ri mới cho các hành động thay đổi số sê-ri trên thiết bị hoặc vật liệu"
keywords:
  - số sê-ri mới
  - thay đổi sê-ri
  - tham số thay đổi
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - serial-number
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_SRLNMBRCHANGESERIALNUMBERP

**D SRLNMBRCHANGESerial NumberP**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `NewSerialNumber` | `gernr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'New SerialNumber value for change action'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_SrlNmbrChangeSerialNumberP
{
  NewSerialNumber : gernr;
}
```
