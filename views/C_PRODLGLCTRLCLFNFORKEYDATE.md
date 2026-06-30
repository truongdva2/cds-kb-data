---
name: C_PRODLGLCTRLCLFNFORKEYDATE
description: Prodlglctrlclfnforkeydate
semantic_en: "Product legal control classification for key date (parameterized) — resolves a product's legal regulation, control class, control grouping, and trade compliance relevance as of a given key date."
semantic_vi: "Phân loại kiểm soát pháp lý của sản phẩm theo ngày hiệu lực (có tham số) — tra cứu quy định pháp lý, lớp kiểm soát, nhóm kiểm soát và mức độ liên quan tuân thủ thương mại của sản phẩm theo ngày khóa."
keywords:
  - kiểm soát pháp lý sản phẩm
  - tuân thủ thương mại
  - legal control phân loại
  - quy định xuất nhập khẩu
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-CLS
  - consumption-view
  - component:FT-ITR-CLS
  - lob:Other
---
# C_PRODLGLCTRLCLFNFORKEYDATE

**Prodlglctrlclfnforkeydate**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Product` | `Product` |
| `LegalRegulation` | `LegalRegulation` |
| `ControlClass` | `ControlClass` |
| `IsTrdCmplncControlRelevant` | `IsTrdCmplncControlRelevant` |
| `ControlGrouping` | `ControlGrouping` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `TrdClassfctnRemark` | `TrdClassfctnRemark` |
| `_ControlGroupingText` | *Association* |
| `_Product` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Product Legal Control Classification for Key Date'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CPRLGLCLFORKDAT'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter:true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern:#NONE

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]
define view C_ProdLglCtrlClfnForKeyDate
  with parameters
    P_KeyDate : sll_validon
  as select from I_ProdLglCtrlForKeyDate   (P_KeyDate : $parameters.P_KeyDate) as _ProductLglCtrl
  association [0..1] to I_Product as _Product on _Product.Product = $projection.Product

{
  key Product,
  key LegalRegulation,
      ControlClass,
      IsTrdCmplncControlRelevant,
      @ObjectModel.text.association: '_ControlGroupingText'
      ControlGrouping,
      ValidityStartDate,
      ValidityEndDate,
      TrdClassfctnRemark,
      _ControlGroupingText,
      @Consumption.hidden: true
      _Product
}
where
      _ProductLglCtrl.ValidityStartDate <= $parameters.P_KeyDate
  and _ProductLglCtrl.ValidityEndDate   >= $parameters.P_KeyDate
```
