---
name: D_PRODNORDERGETMISSINGPARTSR
description: D Prodnordergetmissingpartsr
semantic_en: "missing materials check result for production order — lists BOM item requirements by plant, batch, availability, and dates."
semantic_vi: "Kết quả kiểm tra vật liệu thiếu cho lệnh sản xuất — danh sách mục BOM, nhà máy, ngày."
keywords:
  - kiểm tra
  - vật liệu thiếu
  - lệnh sản xuất
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - component:PP-SFC-2CL
  - lob:Manufacturing
---
# D_PRODNORDERGETMISSINGPARTSR

**D Prodnordergetmissingpartsr**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProductionOrder` | `aufnr` |
| `BillOfMaterialItemNumber` | `vdm_sposn` |
| `Material` | `matnr` |
| `Plant` | `werks_d` |
| `StorageLocation` | `lgort_d` |
| `Batch` | `charg_d` |
| `ProductionOrderOperation` | `vdm_vornr` |
| `RequirementDate` | `bdter` |
| `CommittedAvailabilityDate` | `dat05` |
| `BaseUnit` | `ausme` |
| `RequiredQuantity` | `bdmng` |
| `ConfirmedAvailableQuantity` | `co_vmeng` |
| `ActualAvailableQuantity` | `pp_atpmg` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Get Production Order Missing Parts Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_ProdnOrderGetMissingPartsR
{
  ProductionOrder            : aufnr;
  BillOfMaterialItemNumber   : vdm_sposn;
  Material                   : matnr;
  Plant                      : werks_d;
  StorageLocation            : lgort_d;
  Batch                      : charg_d;
  ProductionOrderOperation   : vdm_vornr;
  RequirementDate            : bdter;
  CommittedAvailabilityDate  : dat05;
  BaseUnit                   : ausme;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  RequiredQuantity           : bdmng;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  ConfirmedAvailableQuantity : co_vmeng;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  ActualAvailableQuantity    : pp_atpmg;
}
```
