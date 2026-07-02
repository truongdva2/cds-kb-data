---
name: D_SUPDMNDITMGETPGGNGWTHITEMSR
description: D Supdmnditmgetpggngwthitemsr
semantic_en: "data-extraction projection — retrieves supply and demand item and pegging data (material, MRP plant, MRP area) for matching requirements with available supply"
semantic_vi: "phép chiếu trích xuất dữ liệu — truy xuất cung cầu và dữ liệu ghép (vật liệu, nhà máy quy hoạch tài nguyên vật liệu, khu vực quy hoạch) để ghép nhu cầu với cung có sẵn"
keywords:
  - ghép cung cầu
  - quy hoạch vật liệu tài nguyên
  - dữ liệu cung cầu
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - item-level
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# D_SUPDMNDITMGETPGGNGWTHITEMSR

**D Supdmnditmgetpggngwthitemsr**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Material` | `matnr` |
| `MRPPlant` | `werks_d` |
| `MRPArea` | `berid` |
| `_SupplyDemandItemGetItemR` | *Association* |
| `_SupplyDemandItemGetPeggingR` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplyDemandItemGetItemR` | `D_SupplyDemandItemGetItemR` | [0..*] |
| `_SupplyDemandItemGetPeggingR` | `D_SupplyDemandItemGetPeggingR` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Item and Pegging Data'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define root abstract entity D_SupDmndItmGetPggngWthItemsR
{
  Material                     : matnr;
  MRPPlant                     : werks_d;
  MRPArea                      : berid;
  
  _SupplyDemandItemGetItemR    : composition [0..*] of D_SupplyDemandItemGetItemR;
  _SupplyDemandItemGetPeggingR : composition [0..*] of D_SupplyDemandItemGetPeggingR;
}
```
