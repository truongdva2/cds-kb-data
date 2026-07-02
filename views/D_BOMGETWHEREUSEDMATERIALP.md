---
name: D_BOMGETWHEREUSEDMATERIALP
description: D Bomgetwhereusedmaterialp
semantic_en: "Action parameter for finding where a material is used in BOMs — HeaderValidityEndDate, HeaderValidityStartDate, BillOfMaterialComponent, BillOfMaterialVariant, BillOfMaterialVersion, BillOfMaterialCategory, Plant"
semantic_vi: "Tham số thao tác để tìm nơi sử dụng vật liệu trong BOM — ngày kết thúc hợp lệ tiêu đề, ngày bắt đầu hợp lệ tiêu đề, thành phần BOM, biến thể BOM, phiên bản BOM, danh mục BOM, nhà máy"
keywords:
  - BOM
  - vật liệu
  - tìm kiếm
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
  - material
  - bom
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# D_BOMGETWHEREUSEDMATERIALP

**D Bomgetwhereusedmaterialp**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `HeaderValidityEndDate` | `datub` |
| `HeaderValidityStartDate` | `datuv` |
| `BillOfMaterialComponent` | `idnrk` |
| `BillOfMaterialVariant` | `stalt` |
| `BillOfMaterialVersion` | `bom_version` |
| `BillOfMaterialCategory` | `stlty` |
| `Plant` | `werks_d` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Parameters for material where-used list'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel: { 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]         
 } 
define abstract entity D_BOMGetWhereUsedMaterialP 
{
  HeaderValidityEndDate       : datub;
  HeaderValidityStartDate     : datuv;
  BillOfMaterialComponent     : idnrk;
  BillOfMaterialVariant       : stalt;
  BillOfMaterialVersion       : bom_version;
  BillOfMaterialCategory      : stlty;
  Plant                       : werks_d;
}
```
