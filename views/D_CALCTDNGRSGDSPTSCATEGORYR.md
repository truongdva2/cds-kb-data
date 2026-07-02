---
name: D_CALCTDNGRSGDSPTSCATEGORYR
description: D Calctdngrsgdsptscategoryr
semantic_en: "Dangerous Goods Points Category Calculation Result — records dangerous goods point calculations by transport category with quantity factors and exemption status."
semantic_vi: "Kết quả Tính toán Điểm Danh mục Hàng nguy hiểm — ghi nhận kết quả tính điểm theo danh mục vận chuyển."
keywords:
  - danh mục hàng nguy hiểm
  - điểm vận chuyển
  - miễn trừ số lượng
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
# D_CALCTDNGRSGDSPTSCATEGORYR

**D Calctdngrsgdsptscategoryr**

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
| `DangerousGoodsEnclosureSapUnit` | `ehfnd_vdm_component_unit_sap` |
| `DangerousGoodsEnclosureISOUnit` | `ehfnd_vdm_component_unit_iso` |
| `DngrsGdsEnclosureTotalQuantity` | `dngrsgdsenclosuretotalquantity` |
| `DangerousGoodsPointTotalText` | `dangerousgoodspointtotaltext` |
| `DngrsGdsQtyExemptionStatus` | `dngrsgdsqtyexemptionstatus` |
| `DngrsGdsQtyExemptionStatusName` | `dngrsgdsqtyexemptionstatusname` |
| `_Document` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Document` | `D_CalctDangerousGoodsPointsR` | — |

## Source Code

```abap
@EndUserText.label: 'Calculate Dngrs Gds Pts Category Result'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_CalctDngrsGdsPtsCategoryR
{
  ComplianceRequirement          : ehfnd_req_identifier;
  DangerousGoodsTransportCat     : dangerousgoodstransportcat;
  DangerousGoodsQtyFactorText    : dangerousgoodsqtyfactortext;
  DangerousGoodsEnclosureSapUnit : ehfnd_vdm_component_unit_sap;
  DangerousGoodsEnclosureISOUnit : ehfnd_vdm_component_unit_iso;
  @Semantics.quantity.unitOfMeasure: 'DangerousGoodsEnclosureSapUnit'
  DngrsGdsEnclosureTotalQuantity : dngrsgdsenclosuretotalquantity;
  DangerousGoodsPointTotalText   : dangerousgoodspointtotaltext;
  DngrsGdsQtyExemptionStatus     : dngrsgdsqtyexemptionstatus;
  DngrsGdsQtyExemptionStatusName : dngrsgdsqtyexemptionstatusname;
  _Document                      : association to parent D_CalctDangerousGoodsPointsR;
}
```
