---
name: I_SLSPRCGCNDNRECDSUPLMNT
description: Slsprcgcndnrecdsuplmnt
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
# I_SLSPRCGCNDNRECDSUPLMNT

**Slsprcgcndnrecdsuplmnt**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionRecord` | `Supplement.ConditionRecord` |
| `ConditionSequentialNumber` | `Supplement.ConditionSequentialNumber` |
| `ConditionTable` | `Supplement.ConditionTable` |
| `ConditionApplication` | `Supplement.ConditionApplication` |
| `ConditionType` | `Supplement.ConditionType` |
| `ConditionValidityEndDate` | `Supplement.ConditionValidityEndDate` |
| `ConditionValidityStartDate` | `Supplement.ConditionValidityStartDate` |
| `CreatedByUser` | `Supplement.CreatedByUser` |
| `CreationDate` | `Supplement.CreationDate` |
| `ConditionTextID` | `Supplement.ConditionTextID` |
| `PricingScaleType` | `Supplement.PricingScaleType` |
| `PricingScaleBasis` | `Supplement.PricingScaleBasis` |
| `ConditionScaleQuantity` | `Supplement.ConditionScaleQuantity` |
| `ConditionScaleQuantityUnit` | `Supplement.ConditionScaleQuantityUnit` |
| `ConditionScaleAmount` | `Supplement.ConditionScaleAmount` |
| `ConditionScaleAmountCurrency` | `Supplement.ConditionScaleAmountCurrency` |
| `ConditionCalculationType` | `Supplement.ConditionCalculationType` |
| `ConditionRateValue` | `Supplement.ConditionRateValue` |
| `ConditionRateValueUnit` | `Supplement.ConditionRateValueUnit` |
| `ConditionRateRatio` | `Supplement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `Supplement.ConditionRateRatioUnit` |
| `ConditionRateAmount` | `Supplement.ConditionRateAmount` |
| `ConditionCurrency` | `Supplement.ConditionCurrency` |
| `ConditionQuantity` | `Supplement.ConditionQuantity` |
| `ConditionQuantityUnit` | `Supplement.ConditionQuantityUnit` |
| `ConditionToBaseQtyNmrtr` | `Supplement.ConditionToBaseQtyNmrtr` |
| `ConditionToBaseQtyDnmntr` | `Supplement.ConditionToBaseQtyDnmntr` |
| `BaseUnit` | `Supplement.BaseUnit` |
| `ConditionLowerLimit` | `Supplement.ConditionLowerLimit` |
| `ConditionLowerLimitAmount` | `Supplement.ConditionLowerLimitAmount` |
| `ConditionLowerLimitRatio` | `Supplement.ConditionLowerLimitRatio` |
| `ConditionUpperLimit` | `Supplement.ConditionUpperLimit` |
| `ConditionUpperLimitAmount` | `Supplement.ConditionUpperLimitAmount` |
| `ConditionUpperLimitRatio` | `Supplement.ConditionUpperLimitRatio` |
| `ConditionAlternativeCurrency` | `Supplement.ConditionAlternativeCurrency` |
| `ConditionExclusion` | `Supplement.ConditionExclusion` |
| `ConditionIsDeleted` | `Supplement.ConditionIsDeleted` |
| `AdditionalValueDays` | `Supplement.AdditionalValueDays` |
| `FixedValueDate` | `Supplement.FixedValueDate` |
| `PaymentTerms` | `Supplement.PaymentTerms` |
| `CndnMaxNumberOfSalesOrders` | `Supplement.CndnMaxNumberOfSalesOrders` |
| `MinimumConditionBasisValue` | `Supplement.MinimumConditionBasisValue` |
| `MaximumConditionBasisValue` | `Supplement.MaximumConditionBasisValue` |
| `MaximumConditionAmount` | `Supplement.MaximumConditionAmount` |
| `IncrementalScale` | `Supplement.IncrementalScale` |
| `PricingScaleLine` | `Supplement.PricingScaleLine` |
| `ConditionReleaseStatus` | `Supplement.ConditionReleaseStatus` |
| `SalesPriceApprovalRequest` | `Supplement.SalesPriceApprovalRequest` |
| `ConditionChangeReason` | `Supplement.ConditionChangeReason` |
| `PrevApprovedConditionRecord` | `Supplement.PrevApprovedConditionRecord` |
| `_SlsPrcgCndnRecdValidity` | *Association* |
| `_SlsPrcgConditionRecord` | *Association* |
| `_SlsPricingCndnRecdScale` | *Association* |
| `_SlsPrcgCndnSupplementText` | *Association* |
| `_BaseUnit` | *Association* |
| `_RateValueUnit` | *Association* |
| `_QuantityUnit` | *Association* |
| `_AlternativeCurrency` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SlsPrcgCndnRecdValidity` | `I_SlsPrcgCndnRecdValidity` | [0..*] |
| `_SlsPrcgConditionRecord` | `I_SlsPrcgConditionRecord` | [0..1] |
| `_SlsPricingCndnRecdScale` | `I_SlsPrcgCndnRecordScale` | [0..*] |
| `_SlsPrcgCndnSupplementText` | `I_SlsPrcgCndnSupplementText` | [0..*] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_RateValueUnit` | `I_Currency` | [0..1] |
| `_AlternativeCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog:
{
  sqlViewName: 'ISLSPRCGCNDNMNT',
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
@EndUserText.label: 'Condition Supplement for Pricing in Sales'

//P_SlsPrcgCndnRecdSuplmnt:Get combined Sales Pricing condition data from KONH and KONP which Condition record number not equal to 1
define view I_SlsPrcgCndnRecdSuplmnt
  as select from P_SlsPrcgCndnRecdSuplmnt as Supplement
  association [0..*] to I_SlsPrcgCndnRecdValidity as _SlsPrcgCndnRecdValidity on  $projection.ConditionRecord = _SlsPrcgCndnRecdValidity.ConditionRecord
  association [0..1] to I_SlsPrcgConditionRecord  as _SlsPrcgConditionRecord  on  $projection.ConditionRecord = _SlsPrcgConditionRecord.ConditionRecord
  association [0..*] to I_SlsPrcgCndnRecordScale  as _SlsPricingCndnRecdScale on  $projection.ConditionRecord           = _SlsPricingCndnRecdScale.ConditionRecord
                                                                              and $projection.ConditionSequentialNumber = _SlsPricingCndnRecdScale.ConditionSequentialNumber
  association [0..*] to I_SlsPrcgCndnSupplementText as _SlsPrcgCndnSupplementText on  $projection.ConditionRecord       = _SlsPrcgCndnSupplementText.ConditionRecord
                                                                              and $projection.ConditionSequentialNumber = _SlsPrcgCndnSupplementText.ConditionSequentialNumber
  association [0..1] to I_UnitOfMeasure           as _BaseUnit                on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure           as _QuantityUnit            on  $projection.ConditionQuantityUnit = _QuantityUnit.UnitOfMeasure
  association [0..1] to I_Currency                as _RateValueUnit           on  $projection.ConditionRateValueUnit = _RateValueUnit.Currency
  association [0..1] to I_Currency                as _AlternativeCurrency     on  $projection.ConditionAlternativeCurrency = _AlternativeCurrency.Currency
{
  key Supplement.ConditionRecord,
  key Supplement.ConditionSequentialNumber,
      Supplement.ConditionTable,
      Supplement.ConditionApplication,
      Supplement.ConditionType,
      @Semantics.businessDate.to: true
      Supplement.ConditionValidityEndDate,
      @Semantics.businessDate.from: true
      Supplement.ConditionValidityStartDate,
      Supplement.CreatedByUser,
      Supplement.CreationDate,
      Supplement.ConditionTextID,
      Supplement.PricingScaleType,
      Supplement.PricingScaleBasis,
      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      Supplement.ConditionScaleQuantity,
      Supplement.ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      Supplement.ConditionScaleAmount,
      Supplement.ConditionScaleAmountCurrency,
      Supplement.ConditionCalculationType,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      Supplement.ConditionRateValue,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_RateValueUnit'
      Supplement.ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      Supplement.ConditionRateRatio,
      @Semantics.unitOfMeasure: true
      Supplement.ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true
      Supplement.ConditionRateAmount,
      @Semantics.currencyCode: true
      Supplement.ConditionCurrency,
      
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      Supplement.ConditionQuantity,
      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      Supplement.ConditionQuantityUnit,
      Supplement.ConditionToBaseQtyNmrtr,
      Supplement.ConditionToBaseQtyDnmntr,
      @Semantics.unitOfMeasure:true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      Supplement.BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      Supplement.ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true      
      Supplement.ConditionLowerLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      Supplement.ConditionLowerLimitRatio,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      Supplement.ConditionUpperLimit,
      @Semantics.amount.currencyCode: 'ConditionCurrency' 
      @OData.v2.amount.noDecimalShift: true     
      Supplement.ConditionUpperLimitAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      Supplement.ConditionUpperLimitRatio,
      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_AlternativeCurrency'
      Supplement.ConditionAlternativeCurrency,
      Supplement.ConditionExclusion,
      Supplement.ConditionIsDeleted,
      Supplement.AdditionalValueDays,
      Supplement.FixedValueDate,
      Supplement.PaymentTerms,
      Supplement.CndnMaxNumberOfSalesOrders,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Supplement.MinimumConditionBasisValue,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      Supplement.MaximumConditionBasisValue,
      @Semantics.amount.currencyCode: 'ConditionAlternativeCurrency'
      Supplement.MaximumConditionAmount,
      Supplement.IncrementalScale,
      Supplement.PricingScaleLine,
      Supplement.ConditionReleaseStatus,
      Supplement.SalesPriceApprovalRequest,
      Supplement.ConditionChangeReason,
      Supplement.PrevApprovedConditionRecord,

      _SlsPrcgCndnRecdValidity,
      _SlsPrcgConditionRecord,
      _SlsPricingCndnRecdScale,
      _SlsPrcgCndnSupplementText,
      _BaseUnit,
      _RateValueUnit,
      _QuantityUnit,
      _AlternativeCurrency
}
```
