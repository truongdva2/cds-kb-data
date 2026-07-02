---
name: D_CALCTDNGRSGOODSPOINTSITEMR
description: D Calctdngrsgoodspointsitemr
semantic_en: "Dangerous Goods Points Item Calculation Result — records dangerous goods point calculations at item level with enclosure quantity and units."
semantic_vi: "Kết quả Tính toán Điểm Hàng nguy hiểm theo Mục — ghi nhận tính điểm ở mức mục hàng."
keywords:
  - mục hàng
  - điểm hàng nguy hiểm
  - số lượng đóng gói
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - item-level
  - component:EHS-SUS-DG
  - lob:Other
---
# D_CALCTDNGRSGOODSPOINTSITEMR

**D Calctdngrsgoodspointsitemr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProdCmplncLogsDocumentItem` | `ehfnd_log_doc_posnr` |
| `Product` | `ehfnd_mat_id` |
| `DngrsGdsCalculatedEnclosureQty` | `dngrsgdscalculatedenclosureqty` |
| `DangerousGoodsEnclosureSapUnit` | `ehfnd_vdm_component_unit_sap` |
| `DangerousGoodsEnclosureISOUnit` | `ehfnd_vdm_component_unit_iso` |
| `_Document` | *Association* |
| `_ItemRegulation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Document` | `D_CalctDangerousGoodsPointsR` | — |
| `_ItemRegulation` | `D_CalctDngrsGdsPtsItmRglnR` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Calculate Dngrs Goods Points Item R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_CalctDngrsGoodsPointsItemR  
{
    ProdCmplncLogsDocumentItem : ehfnd_log_doc_posnr;
    Product : ehfnd_mat_id;
    @Semantics.quantity.unitOfMeasure: 'DangerousGoodsEnclosureSapUnit'
    DngrsGdsCalculatedEnclosureQty : dngrsgdscalculatedenclosureqty;
    DangerousGoodsEnclosureSapUnit : ehfnd_vdm_component_unit_sap;
    DangerousGoodsEnclosureISOUnit : ehfnd_vdm_component_unit_iso;    
    _Document : association to parent D_CalctDangerousGoodsPointsR;
    _ItemRegulation : composition [0..*] of D_CalctDngrsGdsPtsItmRglnR;
}
```
