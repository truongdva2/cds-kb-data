---
name: D_SUPPLYDEMANDITEMGETITEMR
description: D Supplydemanditemgetitemr
semantic_en: "data-extraction projection — retrieves supply and demand item data (row index, material, MRP plant, area, segment type, segment, external ID, MRP element, schedule line, category, category short name, availability/requirement date, available quantity) for supply-demand matching"
semantic_vi: "phép chiếu trích xuất dữ liệu — truy xuất dữ liệu cung cầu (chỉ mục hàng, vật liệu, nhà máy quy hoạch tài nguyên, khu vực, loại phân đoạn, phân đoạn, ID bên ngoài, phần tử quy hoạch, dòng lịch, danh mục, tên viết tắt danh mục, ngày sẵn dùng/yêu cầu, số lượng sẵn dùng) để ghép cung cầu"
keywords:
  - ghép cung cầu
  - quy hoạch vật liệu tài nguyên
  - cung cấp vật liệu
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
# D_SUPPLYDEMANDITEMGETITEMR

**D Supplydemanditemgetitemr**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RowIndex` | `abap.int4` |
| `Material` | `matnr` |
| `MRPPlant` | `werks_d` |
| `MRPArea` | `berid` |
| `MRPPlanningSegmentType` | `plaab` |
| `MRPPlanningSegment` | `planr` |
| `MaterialExternalID` | `matnr` |
| `MRPElement` | `del12` |
| `MRPElementItem` | `delps` |
| `MRPElementScheduleLine` | `delet` |
| `MRPElementCategory` | `delkz` |
| `MRPElementCategoryShortName` | `delb0` |
| `MRPElementAvailyOrRqmtDate` | `dat00` |
| `MRPAvailableQuantity` | `lmeng` |
| `MRPElementOpenQuantity` | `lmeng` |
| `MRPElementQuantityIsFirm` | `flag` |
| `MRPElementDocumentType` | `char4` |
| `MRPElementDocumentTypeName` | `char60` |
| `ProductionPlant` | `werks_d` |
| `StorageLocation` | `char4` |
| `Assembly` | `baugr` |
| `ProductionVersion` | `verid` |
| `SourceMRPElement` | `del12` |
| `SourceMRPElementItem` | `posvr` |
| `SourceMRPElementCategory` | `delkz` |
| `MRPElementBusinessPartner` | `char10` |
| `MRPElementBusinessPartnerName` | `bpname` |
| `MRPElementBusinessPartnerType` | `char1` |
| `MaterialBaseUnit` | `meins` |
| `UnitOfMeasureCommercialName` | `mseh3` |
| `TargetQuantityUnitDisplayDcmls` | `andec` |
| `TargetQuantityUnitDcmls` | `decan` |
| `MaterialBaseUnitDesc` | `mseh6` |
| `UnitOfMeasureName` | `mseh3` |
| `MRPElementIsReleased` | `char1` |
| `MRPElementIsPartiallyDelivered` | `char1` |
| `MRPRequestStatus` | `char2` |
| `MRPRequestSupplierResponse` | `char2` |
| `MRPAvailability` | `vrfkz` |
| `MaterialSafetyStockQty` | `lmeng` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_SupDmndItmGetPggngWthItemsR` | — |

## Source Code

```abap
@EndUserText.label: 'Supply and Demand Items'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_SupplyDemandItemGetItemR
{

  RowIndex                       : abap.int4;
  Material                       : matnr;
  MRPPlant                       : werks_d;
  MRPArea                        : berid;
  MRPPlanningSegmentType         : plaab;
  MRPPlanningSegment             : planr;
  MaterialExternalID             : matnr;
  MRPElement                     : del12;
  MRPElementItem                 : delps;
  MRPElementScheduleLine         : delet;
  MRPElementCategory             : delkz;
  MRPElementCategoryShortName    : delb0;
  MRPElementAvailyOrRqmtDate     : dat00;
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MRPAvailableQuantity           : lmeng;
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MRPElementOpenQuantity         : lmeng;
  MRPElementQuantityIsFirm       : flag;
  MRPElementDocumentType         : char4;
  MRPElementDocumentTypeName     : char60;
  ProductionPlant                : werks_d;
  StorageLocation                : char4;
  Assembly                       : baugr;
  ProductionVersion              : verid;
  SourceMRPElement               : del12;
  SourceMRPElementItem           : posvr;
  SourceMRPElementCategory       : delkz;
  MRPElementBusinessPartner      : char10;
  MRPElementBusinessPartnerName  : bpname;
  MRPElementBusinessPartnerType  : char1;
  MaterialBaseUnit               : meins;
  UnitOfMeasureCommercialName    : mseh3;
  TargetQuantityUnitDisplayDcmls : andec;
  TargetQuantityUnitDcmls        : decan;
  MaterialBaseUnitDesc           : mseh6;
  UnitOfMeasureName              : mseh3;
  @Semantics.booleanIndicator
  MRPElementIsReleased           : char1;
  @Semantics.booleanIndicator
  MRPElementIsPartiallyDelivered : char1;
  MRPRequestStatus               : char2;
  MRPRequestSupplierResponse     : char2;
  MRPAvailability                : vrfkz;
  @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
  MaterialSafetyStockQty         : lmeng;
  _DummyAssociation              : association to parent D_SupDmndItmGetPggngWthItemsR;


}
```
