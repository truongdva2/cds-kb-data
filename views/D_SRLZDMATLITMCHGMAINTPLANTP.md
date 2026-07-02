---
name: D_SRLZDMATLITMCHGMAINTPLANTP
description: D Srlzdmatlitmchgmaintplantp
semantic_en: "parameterized change-document view — specifies the maintenance plant (maintenance location) for serialized material item changes"
semantic_vi: "chế độ xem thay đổi tài liệu được tham số hóa — chỉ định nhà máy bảo trì (vị trí bảo trì) cho những thay đổi mục vật liệu được sê-ri hóa"
keywords:
  - nhà máy bảo trì
  - vật liệu sê-ri
  - kế hoạch bảo trì
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
  - transactional-processing
  - plant
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
  - bo:Plant
---
# D_SRLZDMATLITMCHGMAINTPLANTP

**D Srlzdmatlitmchgmaintplantp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaintenancePlant` | `swerk` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Change Maint. Plant Action Parameters'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SrlzdMatlItmChgMaintPlantP
{
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_PlantStdVH',
                 element: 'Plant' },
      useForValidation: true           
    }]
  @EndUserText.label: 'Maintenance Plant'
  //@ObjectModel.mandatory: true
  MaintenancePlant : swerk;
}
```
