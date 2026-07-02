---
name: D_CALCTDNGRSGDSPTSITMRGLNR
description: D Calctdngrsgdsptsitmrglnr
semantic_en: "Dangerous Goods Points Item Regulation Calculation Result — captures dangerous goods point calculations by item and regulation with transport category and quantity factor."
semantic_vi: "Kết quả Tính toán Điểm Mục Quy định Hàng nguy hiểm — ghi nhận tính điểm theo quy định vận chuyển."
keywords:
  - quy định hàng nguy hiểm
  - mục hàng
  - tính điểm
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
  - component:EHS-SUS-DG
  - lob:Other
---
# D_CALCTDNGRSGDSPTSITMRGLNR

**D Calctdngrsgdsptsitmrglnr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ComplianceRequirement` | `ehfnd_req_identifier` |
| `DangerousGoodsTransportCat` | `dangerousgoodstransportcat` |
| `DangerousGoodsQtyFactorText` | `dangerousgoodsqtyfactortext` |
| `DangerousGoodsPointText` | `dangerousgoodspointtext` |
| `_Item` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Item` | `D_CalctDngrsGoodsPointsItemR` | — |

## Source Code

```abap
@EndUserText.label: 'Calculate Dngrs Gds Pts Itm Regulation R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_CalctDngrsGdsPtsItmRglnR
{
  ComplianceRequirement       : ehfnd_req_identifier;
  DangerousGoodsTransportCat  : dangerousgoodstransportcat;
  DangerousGoodsQtyFactorText : dangerousgoodsqtyfactortext;
  DangerousGoodsPointText     : dangerousgoodspointtext;
  _Item                       : association to parent D_CalctDngrsGoodsPointsItemR;
}
```
