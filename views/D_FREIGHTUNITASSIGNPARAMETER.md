---
name: D_FREIGHTUNITASSIGNPARAMETER
description: D Freightunitassignparameter
semantic_en: "freight unit assignment parameters — action parameter specifying freight unit UUID and transportation order item UUID for unit assignment operations."
semantic_vi: "tham số gán đơn vị vận chuyển — tham số hành động xác định UUID đơn vị vận chuyển và UUID mục đơn hàng vận chuyển để hoạt động gán đơn vị."
keywords:
  - đơn vị vận chuyển
  - gán
  - tham số
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - freight
  - component:TM-FRM-2CL
  - lob:Other
---
# D_FREIGHTUNITASSIGNPARAMETER

**D Freightunitassignparameter**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FreightUnitUUID` | `/scmtms/vdm_freight_unit_uuid` |
| `TransportationOrderItemUUID` | `/scmtms/toritmuuid` |
| `_Parent` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Parent` | `D_TranspOrdAssignFrtUnitP` | — |

## Source Code

```abap
@EndUserText.label: 'Freight Unit Assign Parameter'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_FreightUnitAssignParameter
{
  key FreightUnitUUID             : /scmtms/vdm_freight_unit_uuid;
  key TransportationOrderItemUUID : /scmtms/toritmuuid;
      _Parent                     : association to parent D_TranspOrdAssignFrtUnitP on _Parent.TransportationOrderItemUUID = $projection.TransportationOrderItemUUID;
}
```
