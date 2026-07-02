---
name: D_SERIALIZEDMATLITMCHGMATLP
description: D Serializedmatlitmchgmatlp
semantic_en: "parameter view for serialized material item changes — filtering by material identifier"
semantic_vi: "chế độ xem tham số cho thay đổi vật liệu được quản lý theo số seri — lọc theo mã vật liệu"
keywords:
  - vật liệu quản lý số seri
  - thay đổi vật liệu
  - tham số vật liệu
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_SERIALIZEDMATLITMCHGMATLP

**D Serializedmatlitmchgmatlp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Material` | `matnr` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Change Material Action Parameters'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #NONE
define abstract entity D_SerializedMatlItmChgMatlP
{
  @Consumption.valueHelpDefinition: [
  { entity:  
    { name: 'I_MaterialStdVH',
      element: 'Material' },
    useForValidation : true
  }]
  //@ObjectModel.mandatory: true
  @EndUserText.label: 'Material'
  Material : matnr;
}
```
