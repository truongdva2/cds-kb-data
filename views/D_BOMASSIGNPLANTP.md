---
name: D_BOMASSIGNPLANTP
description: D Bomassignplantp
semantic_en: "Action parameter for assigning BOM to plant — PlantToBeAssigned, BillOfMaterialVariantUsage"
semantic_vi: "Tham số thao tác để gán BOM cho nhà máy — nhà máy cần gán, cách sử dụng biến thể BOM"
keywords:
  - BOM
  - nhà máy
  - gán
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
  - transactional-processing
  - plant
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Plant
---
# D_BOMASSIGNPLANTP

**D Bomassignplantp**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PlantToBeAssigned` | `werks_d` |
| `BillOfMaterialVariantUsage` | `stlan` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Parameters for Assign Plant'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]         
 }   
define abstract entity D_BOMAssignPlantP 
   {
    
    PlantToBeAssigned : werks_d;
    BillOfMaterialVariantUsage : stlan;
   
}
```
