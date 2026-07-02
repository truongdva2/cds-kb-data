---
name: D_SRLZDMATLITMCHGEQUIPCATP
description: D Srlzdmatlitmchgequipcatp
semantic_en: "parameterized change-document view — transmits the equipment category value for serialized material item changes during maintenance activities"
semantic_vi: "chế độ xem thay đổi tài liệu được tham số hóa — truyền giá trị danh mục thiết bị cho những thay đổi mục vật liệu được sê-ri hóa trong các hoạt động bảo trì"
keywords:
  - danh mục thiết bị
  - vật liệu sê-ri hóa
  - bảo trì
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
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# D_SRLZDMATLITMCHGEQUIPCATP

**D Srlzdmatlitmchgequipcatp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EquipmentCategory` | `eqtyp` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Change Category Action Parameters'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SrlzdMatlItmChgEquipCatP
{
  @Consumption.valueHelpDefinition: [
 { entity:  { 
      name: 'I_EquipmentCategoryStdVH',
      element: 'EquipmentCategory'  },
   useForValidation: true
  }]
 // @ObjectModel.mandatory: true
  @EndUserText.label: 'Category'
  EquipmentCategory : eqtyp;
}
```
