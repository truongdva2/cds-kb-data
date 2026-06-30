---
name: D_MATLSUPNDMNDVIEWITEMGETITEMP
description: D Matlsupndmndviewitemgetitemp
semantic_en: "Material supply and demand view item action parameter — input structure identifying a specific MRP item by Material, MRPPlant, MRPArea, planning segment, shortage definition, and supply/demand aggregation keys."
semantic_vi: "Tham số hành động dòng xem cung cầu vật liệu — cấu trúc đầu vào xác định dòng MRP theo vật liệu, nhà máy MRP, vùng MRP, phân khúc lập kế hoạch, định nghĩa thiếu hụt và khóa tổng hợp cung/cầu."
keywords:
  - cung cầu vật liệu
  - MRP
  - lập kế hoạch sản xuất
  - thiếu hụt vật tư
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
# D_MATLSUPNDMNDVIEWITEMGETITEMP

**D Matlsupndmndviewitemgetitemp**

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
| `MRPPlanningSegmentType` | `plaab` |
| `MRPPlanningSegment` | `planr` |
| `MaterialShortageDefinition` | `char15` |
| `MRPElementSupplyAggregation` | `supplyaggregation` |
| `MRPElementDemandAggregation` | `demandaggregation` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Item Input Parameter'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE] 
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
define abstract entity D_MatlSupNDmndViewItemGetItemP
{
  Material                    : matnr;
  MRPPlant                    : werks_d;
  MRPArea                     : berid;
  MRPPlanningSegmentType      : plaab;
  MRPPlanningSegment          : planr;
  MaterialShortageDefinition  : char15;
  MRPElementSupplyAggregation : supplyaggregation;
  MRPElementDemandAggregation : demandaggregation;
}
```
