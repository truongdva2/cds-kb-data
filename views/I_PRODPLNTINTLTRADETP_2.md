---
name: I_PRODPLNTINTLTRADETP_2
description: Prodplntintltradetp 2
semantic_en: "international trade parameters for products in plants — capturing country of origin, trade classifications, and regulatory identifiers for customs and compliance purposes"
semantic_vi: "tham số thương mại quốc tế cho sản phẩm trong nhà máy — ghi lại xuất xứ, phân loại thương mại và định danh quy định cho hải quan và mục đích tuân thủ"
keywords:
  - thương mại quốc tế
  - xuất xứ
  - phân loại
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODPLNTINTLTRADETP_2

**Prodplntintltradetp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Product` | `Product` |
| `Plant` | `Plant` |
| `CountryOfOrigin` | `CountryOfOrigin` |
| `RegionOfOrigin` | `RegionOfOrigin` |
| `ConsumptionTaxCtrlCode` | `ConsumptionTaxCtrlCode` |
| `ExportAndImportProductGroup` | `ExportAndImportProductGroup` |
| `ProductCASNumber` | `ProductCASNumber` |
| `ProdIntlTradeClassification` | `ProdIntlTradeClassification` |
| `_CountryOfOrigin` | *Association* |
| `_RegionOfOrigin` | *Association* |
| `_ProductDescription` | *Association* |
| `_CountryOfOriginText` | *Association* |
| `_RegionText` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant International Trade - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
define view entity I_ProdPlntIntlTradeTP_2
  as projection on R_ProdPlntInternationalTradeTP as ProductPlantInternationalTrade
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_RegionVH', element : 'Region'} , useAsTemplate: true }]
  key Product,
  key Plant,
      @ObjectModel.text.association: '_CountryOfOriginText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_CountryVH', element : 'Country'} , useAsTemplate: true }]
      CountryOfOrigin,
      @ObjectModel.text.association: '_RegionText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_RegionVH', element : 'Region'} , useAsTemplate: true }]
      RegionOfOrigin,
      ConsumptionTaxCtrlCode,
      ExportAndImportProductGroup,
      ProductCASNumber,
      ProdIntlTradeClassification,
      /* Associations */
      _Product      : redirected to I_ProductTP_2,
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _CountryOfOrigin,
      _RegionOfOrigin,
      _ProductDescription,
      _CountryOfOriginText,
      _RegionText
      
}
```
