---
name: D_BOMITMDELEWITHCHANGENUMBERP
description: D Bomitmdelewithchangenumberp
semantic_en: "Action parameter for deleting BOM item with change number — EngineeringChangeDocForEdit"
semantic_vi: "Tham số thao tác để xóa mục BOM với số thay đổi — chứng từ thay đổi kỹ thuật để chỉnh sửa"
keywords:
  - BOM
  - mục
  - xóa
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# D_BOMITMDELEWITHCHANGENUMBERP

**D Bomitmdelewithchangenumberp**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EngineeringChangeDocForEdit` | `aennr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Delete BOM Item with change number'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#DATA_STRUCTURE],
  modelingPattern: #DATA_STRUCTURE      
 }
define abstract entity D_BOMItmDeleWithChangeNumberP   {
  
 
  EngineeringChangeDocForEdit : aennr;
  
}
```
