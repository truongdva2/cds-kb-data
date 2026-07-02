---
name: I_PURGQUOTAARRGMTITEMTP_2
description: Purgquotaarrgmtitemtp 2
semantic_en: "quota arrangement item transactional projection — quota allocation by supplier, plant, and release strategy."
semantic_vi: "chiếu hình giao dịch mục thỏa thuận hạn ngạch — cấp phát hạn ngạch theo nhà cung cấp, nhà máy và chiến lược phát hành."
keywords:
  - hạn ngạch
  - mục
  - chiếu hình
app_component: MM-PUR-SQ-QTA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - transactional-processing
  - item-level
  - component:MM-PUR-SQ-QTA-2CL
  - lob:Sourcing & Procurement
  - bo:QuotaArrangementItem
---
# I_PURGQUOTAARRGMTITEMTP_2

**Purgquotaarrgmtitemtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-QTA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `QuotaArrangement` | `QuotaArrangement` |
| `QuotaArrangementItem` | `QuotaArrangementItem` |
| `MaterialProcurementCategory` | `MaterialProcurementCategory` |
| `MaterialProcurementType` | `MaterialProcurementType` |
| `Supplier` | `Supplier` |
| `SupplyingPlant` | `SupplyingPlant` |
| `PurchasingSourceQuota` | `PurchasingSourceQuota` |
| `ProductionVersion` | `ProductionVersion` |
| `MaterialRoundingProfile` | `MaterialRoundingProfile` |
| `SourceOfSupplyIsAssignedOnce` | `SourceOfSupplyIsAssignedOnce` |
| `QuotaReleasePeriodType` | `QuotaReleasePeriodType` |
| `NumberOfPeriodsPerRelQuantity` | `NumberOfPeriodsPerRelQuantity` |
| `QuotaDeterminationPriority` | `QuotaDeterminationPriority` |
| `ManufacturerMaterial` | `ManufacturerMaterial` |
| `PlannedDeliveryDurationInDays` | `PlannedDeliveryDurationInDays` |
| `Plant` | `Plant` |
| `QuotaInPercent` | `QuotaInPercent` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `QuotaBaseQuantity` | `QuotaBaseQuantity` |
| `QuotaAllocatedQuantity` | `QuotaAllocatedQuantity` |
| `QuotaMaximumQuantity` | `QuotaMaximumQuantity` |
| `MaterialMaxLotSizeQuantity` | `MaterialMaxLotSizeQuantity` |
| `MaterialMinLotSizeQuantity` | `MaterialMinLotSizeQuantity` |
| `MaximumReleaseQuantity` | `MaximumReleaseQuantity` |
| `MaterialBaseUnit` | `MaterialBaseUnit` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `IsBusinessPurposeCompleted` | `IsBusinessPurposeCompleted` |
| `_Supplier` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Quota Arrangement Item - TP'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: [ 'QuotaArrangement', 'QuotaArrangementItem' ]
//@ObjectModel.representativeKey: 'QuotaArrangementItem' 

@ObjectModel: {
    usageType: {
      sizeCategory: #M,
      serviceQuality: #C,
      dataClass: #TRANSACTIONAL
    }
  }

@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_PurgQuotaArrgmtItemTP_2
  as projection on R_PurgQuotaArrgmtItemTP as _PurgQuotaArrgmtItem
{
//      @ObjectModel.foreignKey: { association : '_PurgQuotaArrgmt' }
  key QuotaArrangement,
  key QuotaArrangementItem,
      MaterialProcurementCategory,
      MaterialProcurementType,
      @Consumption.semanticObject: 'Supplier'
      Supplier,
      SupplyingPlant,
      PurchasingSourceQuota,
      ProductionVersion,
      MaterialRoundingProfile,
      SourceOfSupplyIsAssignedOnce,
      QuotaReleasePeriodType,
      NumberOfPeriodsPerRelQuantity,
      QuotaDeterminationPriority,
      ManufacturerMaterial,
      PlannedDeliveryDurationInDays,
      Plant,
      QuotaInPercent,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      QuotaBaseQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      QuotaAllocatedQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      QuotaMaximumQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      MaterialMaxLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      MaterialMinLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit' 
      MaximumReleaseQuantity,
      MaterialBaseUnit,
      AuthorizationGroup, //This field is added for DCL and this CDS will be C1 released
      @Semantics.booleanIndicator 
      IsBusinessPurposeCompleted, //This field is added for DCL and this CDS will be C1 released
      
      _Supplier,
      /* Associations */      
      _PurgQuotaArrgmt : redirected to parent I_PurgQuotaArrgmtTP_2
}
```
