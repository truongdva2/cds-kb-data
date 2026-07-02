---
name: I_PURGINFORECDCNDNSUPLMNTTP
description: Purginforecdcndnsuplmnttp
semantic_en: "purchasing information record condition supplement — defines supplementary pricing conditions and applications for info records"
semantic_vi: "bổ sung điều kiện thông tin mua hàng — xác định các điều kiện giá bổ sung cho thông tin mua hàng"
keywords:
  - điều kiện bổ sung
  - giá
  - thông tin mua
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-VM
  - interface-view
  - transactional-processing
  - component:MM-PUR-VM-REC-2CL
  - lob:Sourcing & Procurement
---
# I_PURGINFORECDCNDNSUPLMNTTP

**Purginforecdcndnsuplmnttp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| `PurchasingInfoRecordCategory` | `PurchasingInfoRecordCategory` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `Plant` | `Plant` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| `ConditionSequentialNumber` | `ConditionSequentialNumber` |
| `ConditionTable` | `ConditionTable` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
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
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_BaseUnit` | *Association* |
| `_ConditionQuantityUnit` | *Association* |
| `_ConditionRateValueUnit` | *Association* |
| `_Currency` | *Association* |
| `_PurgPrcgCndnRecordScale` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Purchase Info Rec Cndn Suplmnt - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
define view entity I_PurgInfoRecdCndnSuplmntTP as projection on R_PurgInfoRecdCndnSuplmntTP {
 key PurchasingInfoRecord,
  key PurchasingInfoRecordCategory,
  key PurchasingOrganization,
  key Plant,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumber,
      ConditionTable,
      ConditionApplication,
      ConditionType,
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
      ConditionRateValueUnit,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'      
      ConditionRateRatio,
      ConditionRateRatioUnit,  
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionLowerLimit,
      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionUpperLimit,
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
      LastChangeDateTime,
      //    Composition Entities
      _PurgInfoRecdCndnRecord : redirected to parent I_PurgInfoRecdCndnRecordTP ,
      _PurgInfoRecd : redirected to I_PurchasingInfoRecordTP,
      _PurgInfoRecdOrgPlntData : redirected to I_PurgInfoRecdOrgPlntDataTP,

      //     Association Entities
      _BaseUnit,
      _ConditionQuantityUnit,
      _ConditionRateValueUnit,
      _Currency,
      _PurgPrcgCndnRecordScale
   
 
}
```
