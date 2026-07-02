---
name: I_PRODUCTSTORAGETP_2
description: Productstoragetp 2
semantic_en: "product storage data extract — storage conditions, temperature requirements, hazmat data, and shelf life parameters for products"
semantic_vi: "dữ liệu lưu trữ sản phẩm — điều kiện lưu trữ, yêu cầu nhiệt độ, dữ liệu hàng nguy hiểm và các tham số tuổi thọ kệ"
keywords:
  - lưu trữ sản phẩm
  - điều kiện lưu trữ
  - tuổi thọ kệ
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
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTSTORAGETP_2

**Productstoragetp 2**

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
| `StorageConditions` | `StorageConditions` |
| `ProdTemperatureConditionCode` | `ProdTemperatureConditionCode` |
| `HazardousProduct` | `HazardousProduct` |
| `NmbrOfGROrGISlipsToPrintQty` | `NmbrOfGROrGISlipsToPrintQty` |
| `LabelType` | `LabelType` |
| `LabelForm` | `LabelForm` |
| `MinRemainingShelfLife` | `MinRemainingShelfLife` |
| `ProductExpirationDateType` | `ProductExpirationDateType` |
| `StorageBinInstruction` | `StorageBinInstruction` |
| `ShelfLifeExpirationDatePeriod` | `ShelfLifeExpirationDatePeriod` |
| `ShelfLifeExprtnDateRndngRule` | `ShelfLifeExprtnDateRndngRule` |
| `TotalShelfLifeStoragePercent` | `TotalShelfLifeStoragePercent` |
| `TotalShelfLife` | `TotalShelfLife` |
| `BaseUnit` | `BaseUnit` |
| `_TemperatureConditionText` | *Association* |
| `_LabelType` | *Association* |
| `_LabelForm` | *Association* |
| `_BaseUnitOfMeasure` | *Association* |
| `_ShelfLifeExpirationDatePeriod` | *Association* |
| `_ProductDescription` | *Association* |
| `_BaseUnitOfMeasureText` | *Association* |
| `_ShelfLifeExprtnDatePeriodText` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Storage - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductStorageTP_2
  as projection on R_ProductStorageTP as ProductStorage
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
      StorageConditions,
      @ObjectModel.text.association: '_TemperatureConditionText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_Tempindcndn', element : 'TemperatureConditionInd'} , useAsTemplate: true }]
      ProdTemperatureConditionCode,
      HazardousProduct,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      NmbrOfGROrGISlipsToPrintQty,
//      @ObjectModel.text.association: '_LabelType._Text'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_LABELTYPE', element : 'LabelType'} , useAsTemplate: true }]
      LabelType,
//      @ObjectModel.text.association: '_LabelForm._Text'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_LABELFORM', element : 'LabelForm'} , useAsTemplate: true }]
      LabelForm,
      MinRemainingShelfLife,
      ProductExpirationDateType,
      StorageBinInstruction,
      @ObjectModel.text.association: '_ShelfLifeExprtnDatePeriodText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProdShelfLifeExprtnDtePerdVH', element : 'ShelfLifeExpirationDatePeriod'} , useAsTemplate: true }]
      ShelfLifeExpirationDatePeriod,
      ShelfLifeExprtnDateRndngRule,
      TotalShelfLifeStoragePercent,
      TotalShelfLife,
      @ObjectModel.text.association: '_BaseUnitOfMeasureText'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_UnitOfMeasureStdVH', element : 'UnitOfMeasure'} , useAsTemplate: true }]
      BaseUnit,
      /* Associations */
      _Product : redirected to parent I_ProductTP_2,
      _TemperatureConditionText,
      _LabelType,
      _LabelForm,
      _BaseUnitOfMeasure,
      _ShelfLifeExpirationDatePeriod,
      _ProductDescription,
      _BaseUnitOfMeasureText,
      _ShelfLifeExprtnDatePeriodText
}
```
