---
name: D_TRANSPORDASSIGNFRTUNITP
description: D Transpordassignfrtunitp
semantic_en: "parameterized workflow view — assign freight unit action parameter carrying the transportation order item UUID"
semantic_vi: "chế độ xem quy trình công việc được tham số hóa — tham số hành động gán đơn vị hàng hóa mang UUID mục đơn hàng vận chuyển"
keywords:
  - gán đơn vị hàng hóa
  - đơn hàng vận chuyển
  - quy trình công việc
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - transactional-processing
  - component:TM-FRM-2CL
  - lob:Other
---
# D_TRANSPORDASSIGNFRTUNITP

**D Transpordassignfrtunitp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrderItemUUID` | `/scmtms/toritmuuid` |
| `_FreightUnits` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FreightUnits` | `D_FreightUnitAssignParameter` | [0..*] |

## Source Code

```abap
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'AssignFreightUnit Action Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_TranspOrdAssignFrtUnitP
{
  key TransportationOrderItemUUID : /scmtms/toritmuuid;
      _FreightUnits               : composition [0..*] of D_FreightUnitAssignParameter;
}
```
