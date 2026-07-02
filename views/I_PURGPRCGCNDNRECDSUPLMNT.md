---
name: I_PURGPRCGCNDNRECDSUPLMNT
description: Purgprcgcndnrecdsuplmnt
semantic_en: "condition supplement for pricing in purchasing — defines supplementary pricing conditions with quantity scales for purchasing"
semantic_vi: "bổ sung điều kiện giá trong mua hàng — xác định các điều kiện giá bổ sung với thang bậc số lượng"
keywords:
  - điều kiện giá
  - bổ sung
  - bảng giá
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_PURGPRCGCNDNRECDSUPLMNT

**Purgprcgcndnrecdsuplmnt**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionRecord` | `ConditionRecord` |
| `ConditionSequentialNumber` | `ConditionSequentialNumber` |
| `ConditionTable` | `ConditionTable` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| `ConditionValidityStartDate` | `ConditionValidityStartDate` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `ConditionTextID` | `ConditionTextID` |
| `PricingScaleType` | `PricingScaleType` |
| `PricingScaleBasis` | `PricingScaleBasis` |
| `ConditionScaleQuantity` | `ConditionScaleQuantity` |
| `ConditionScaleQuantityUnit` | `ConditionScaleQuantityUnit` |
| `ConditionScaleAmount` | `ConditionScaleAmount` |
| `ConditionScaleAmountCurrency` | `ConditionScaleAmountCurrency` |
| `ConditionCalculationType` | `ConditionCalculationType` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `ConditionRateRatio` | `ConditionRateRatio` |
| `ConditionRateRatioUnit` | `ConditionRateRatioUnit` |
| `ConditionRateAmount` | `ConditionRateAmount` |
| `ConditionCurrency` | `ConditionCurrency` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionToBaseQtyNmrtr` | `ConditionToBaseQtyNmrtr` |
| `ConditionToBaseQtyDnmntr` | `ConditionToBaseQtyDnmntr` |
| `BaseUnit` | `BaseUnit` |
| `ConditionLowerLimit` | `ConditionLowerLimit` |
| `ConditionUpperLimit` | `ConditionUpperLimit` |
| `ConditionAlternativeCurrency` | `ConditionAlternativeCurrency` |
| `ConditionExclusion` | `ConditionExclusion` |
| `ConditionIsDeleted` | `ConditionIsDeleted` |
| `AdditionalValueDays` | `AdditionalValueDays` |
| `FixedValueDate` | `FixedValueDate` |
| `PaymentTerms` | `PaymentTerms` |
| `CndnMaxNumberOfSalesOrders` | `CndnMaxNumberOfSalesOrders` |
| `MinimumConditionBasisValue` | `MinimumConditionBasisValue` |
| `MaximumConditionBasisValue` | `MaximumConditionBasisValue` |
| `MaximumConditionAmount` | `MaximumConditionAmount` |
| `IncrementalScale` | `IncrementalScale` |
| `PricingScaleLine` | `PricingScaleLine` |
| `ConditionReleaseStatus` | `ConditionReleaseStatus` |
| `_PurgPrcgCndnRecdValidity` | *Association* |
| `_PurgPrcgConditionRecord` | *Association* |
| `_PurgPrcgCndnRecordScale` | *Association* |
| `_BaseUnit` | *Association* |
| `_ConditionRateValueUnit` | *Association* |
| `_ConditionQuantityUnit` | *Association* |
| `_Currency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgPrcgCndnRecdValidity` | `I_PurgPrcgCndnRecdValidity` | [0..*] |
| `_PurgPrcgConditionRecord` | `I_PurgPrcgConditionRecord` | [0..1] |
| `_PurgPrcgCndnRecordScale` | `I_PurgPrcgCndnRecordScale` | [0..*] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ConditionQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ConditionRateValueUnit` | `I_Currency` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog:
{
  sqlViewName: 'IPURGPRCGNCDNSUP',
  compiler.compareFilter: true
}
@AccessControl:
{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}
@VDM:
{
  viewType: #BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@ObjectModel.usageType:
{
  sizeCategory: #XL,
  serviceQuality: #C,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Condition Supplement for Pricing in Purchasing'

//P_PurgPrcgCndnRecdSuplmnt:Get combined Purchasing Pricing condition data from KONH and KONP which Condition record number not equal to 1
define view I_PurgPrcgCndnRecdSuplmnt
  as select from P_PurgPrcgCndnRecdSuplmnt
  association [0..*] to I_PurgPrcgCndnRecdValidity as _PurgPrcgCndnRecdValidity on  $projection.ConditionRecord = _PurgPrcgCndnRecdValidity.ConditionRecord
  association [0..1] to I_PurgPrcgConditionRecord  as _PurgPrcgConditionRecord  on  $projection.ConditionRecord = _PurgPrcgConditionRecord.ConditionRecord
  association [0..*] to I_PurgPrcgCndnRecordScale  as _PurgPrcgCndnRecordScale  on  $projection.ConditionRecord           = _PurgPrcgCndnRecordScale.ConditionRecord
                                                                                and $projection.ConditionSequentialNumber = _PurgPrcgCndnRecordScale.ConditionSequentialNumber
  association [0..1] to I_UnitOfMeasure            as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure            as _ConditionQuantityUnit    on  $projection.ConditionQuantityUnit = _ConditionQuantityUnit.UnitOfMeasure
  association [0..1] to I_Currency                 as _ConditionRateValueUnit   on  $projection.ConditionRateValueUnit = _ConditionRateValueUnit.Currency
  association [0..1] to I_Currency                 as _Currency                 on  $projection.ConditionAlternativeCurrency = _Currency.Currency
{
  key ConditionRecord,
  key ConditionSequentialNumber,
      ConditionTable,
      ConditionApplication,
      ConditionType,
      @Semantics.businessDate.to: true
      ConditionValidityEndDate,      
      @Semantics.businessDate.from: true
      ConditionValidityStartDate,      
      CreatedByUser,
      CreationDate,
      ConditionTextID,
      PricingScaleType,
      PricingScaleBasis,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
      ConditionCalculationType,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association:  '_ConditionRateValueUnit'
      ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      ConditionRateRatio,
      @Semantics.unitOfMeasure: true
      ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true
      ConditionRateAmount,
      @Semantics.currencyCode: true
      ConditionCurrency,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association:  '_ConditionQuantityUnit'
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionUpperLimit,
      @Semantics.currencyCode:true
      ConditionAlternativeCurrency,
      ConditionExclusion,
      ConditionIsDeleted,
      AdditionalValueDays,
      FixedValueDate,
      PaymentTerms,
      CndnMaxNumberOfSalesOrders,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MinimumConditionBasisValue,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MaximumConditionBasisValue,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      MaximumConditionAmount,
      IncrementalScale,
      PricingScaleLine,
      ConditionReleaseStatus,

      _PurgPrcgCndnRecdValidity,
      _PurgPrcgConditionRecord,
      _PurgPrcgCndnRecordScale,
      _BaseUnit,
      _ConditionRateValueUnit,
      _ConditionQuantityUnit,
      _Currency
}
```
