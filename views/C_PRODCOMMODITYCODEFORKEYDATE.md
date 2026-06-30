---
name: C_PRODCOMMODITYCODEFORKEYDATE
description: Prodcommoditycodeforkeydate
semantic_en: "Product commodity code classification for key date (parameterized) — resolves a product's trade-classification number, commodity code, validity period, country, and customs units of measure as of a given key date."
semantic_vi: "Phân loại mã hàng hóa của sản phẩm theo ngày hiệu lực (có tham số) — tra cứu mã phân loại thương mại, mã hàng hóa hải quan, thời hạn hiệu lực, quốc gia và đơn vị đo lường hải quan của sản phẩm theo ngày khóa."
keywords:
  - mã hàng hóa hải quan
  - phân loại thương mại
  - mã HS sản phẩm
  - đơn vị đo lường hải quan
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
  - commodity
  - component:FT-ITR-CLS
  - lob:Other
---
# C_PRODCOMMODITYCODEFORKEYDATE

**Prodcommoditycodeforkeydate**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TrdClassfctnNmbrSchm` | `Class.TrdClassfctnNmbrSchm` |
| `TrdClassfctnNmbrSchmCntnt` | `Class.TrdClassfctnNmbrSchmCntnt` |
| `Product` | `Class.Product` |
| `ValidityStartDate` | `Class.ValidityStartDate` |
| `ValidityEndDate` | `Class.ValidityEndDate` |
| `CommodityCode` | `cast (_CommodityCode.TrdClassfctnNmbr as /sapsll/comco)` |
| `Country` | `_TrdClassfctnNmbrSchmUsge.Country` |
| `CustomsUnitOfMeasure` | `_CommodityCode.CustomsUnitOfMeasure` |
| `UnitOfMeasureSystem` | `_CommodityCode.UnitOfMeasureSystem` |
| `SecondCustomsUnitOfMeasure` | `_CommodityCode.SecondCustomsUnitOfMeasure` |
| `SecondSupplementaryUnit` | `_CommodityCode.SecondSupplementaryUnit` |
| `SupplementaryUnit` | `_CommodityCode.SupplementaryUnit` |
| `_TrdClassfctnNmbrSchm` | *Association* |
| `_CustomsUnitOfMeasure` | *Association* |
| `_SecondCustomsUnitOfMeasure` | *Association* |
| `_CommodityCodeText` | *Association* |
| `_Country` | *Association* |
| `_SupplementaryUnit` | *Association* |
| `_SecondSupplementaryUnit` | *Association* |
| `_Product` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CommodityCode` | `I_TrdClassfctnNmbr` | [0..1] |
| `_CommodityCodeText` | `I_TrdClassfctnNmbrText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Product Commodity Code Classification for Key Date'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CPRCMDTYCDFKDATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern:#NONE

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ]                                
define view C_ProdCommodityCodeForKeyDate
  with parameters  
    P_KeyDate : sll_validon
  as select from           C_ProductTrdClassfctn (P_KeyDate : $parameters.P_KeyDate) as Class
    inner join             I_TrdClassfctnNmbrSchmUsge                                as _TrdClassfctnNmbrSchmUsge on _TrdClassfctnNmbrSchmUsge.TrdClassfctnNmbrSchm = Class.TrdClassfctnNmbrSchm
    association [0..1] to  I_TrdClassfctnNmbr                                        as _CommodityCode            on  _CommodityCode.TrdClassfctnNmbr          =  Class.TrdClassfctnNmbr
                                                                                                                  and _CommodityCode.TrdClassfctnNmbrSchmCntnt =  Class.TrdClassfctnNmbrSchmCntnt
    association [0..*] to  I_TrdClassfctnNmbrText  as _CommodityCodeText on  _CommodityCodeText.TrdClassfctnNmbrSchmCntnt = $projection.TrdClassfctnNmbrSchmCntnt
                                                                         and _CommodityCodeText.TrdClassfctnNmbr          = $projection.CommodityCode
                                                                         and _CommodityCodeText.TrdClassfctnNmbrTextType  = 'A'
                                                                         and _CommodityCodeText.ValidityStartDate         = $projection.ValidityStartDate                                                                                                              
{
  key Class.TrdClassfctnNmbrSchm,
  key Class.TrdClassfctnNmbrSchmCntnt, 
  key Class.Product,
  key Class.ValidityStartDate,
      Class.ValidityEndDate, 
      @ObjectModel.text.association: '_CommodityCodeText'
      cast (_CommodityCode.TrdClassfctnNmbr as /sapsll/comco) as CommodityCode,
      _TrdClassfctnNmbrSchmUsge.Country,
      _CommodityCode.CustomsUnitOfMeasure,
      _CommodityCode.UnitOfMeasureSystem,
      _CommodityCode.SecondCustomsUnitOfMeasure,
      _CommodityCode.SecondSupplementaryUnit,
      _CommodityCode.SupplementaryUnit,
       
      _TrdClassfctnNmbrSchm,
      _CommodityCode._CustomsUnitOfMeasure,
      _CommodityCode._SecondCustomsUnitOfMeasure,
      _CommodityCodeText,
      _Country,
      _CommodityCode._SupplementaryUnit,
      _CommodityCode._SecondSupplementaryUnit,
      _Product
}
where
      Class.TrdClassfctnNmbrSchmType = '01'
  and _CommodityCode.ValidityStartDate <= Class.ValidityStartDate
  and _CommodityCode.ValidityEndDate >= Class.ValidityEndDate
```
