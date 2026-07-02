---
name: I_SRVCDOCITEMPRICEELEMENT
description: Srvcdocitempriceelement
semantic_en: "Pricing elements for service transaction items — capturing condition details, rate values, and quantity-based calculation parameters."
semantic_vi: "Các phần tử giá cho hạng mục giao dịch dịch vụ — ghi lại chi tiết điều kiện, giá trị tỷ lệ và các tham số tính toán dựa trên số lượng."
keywords:
  - giá cả
  - hạng mục dịch vụ
  - điều kiện
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCDOCITEMPRICEELEMENT

**Srvcdocitempriceelement**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceDocument` | `ServiceDocument.ServiceDocument` |
| `ServiceDocumentItem` | `cast(PricingElement.PricingDocumentItem as crms4_number_int preserving type)` |
| `PricingProcedureStep` | `PricingElement.PricingProcedureStep` |
| `PricingProcedureCounter` | `PricingElement.PricingProcedureCounter` |
| `ServiceObjectType` | `ServiceDocument.ServiceObjectType` |
| `ConditionApplication` | `PricingElement.ConditionApplication` |
| `ConditionType` | `PricingElement.ConditionType` |
| `PriceConditionDeterminationDte` | `PricingElement.PriceConditionDeterminationDte` |
| `ConditionCalculationType` | `PricingElement.ConditionCalculationType` |
| `ConditionBaseValue` | `PricingElement.ConditionBaseValue` |
| `ConditionRateValue` | `PricingElement.ConditionRateValue` |
| `ConditionCurrency` | `PricingElement.ConditionCurrency` |
| `ConditionQuantity` | `PricingElement.ConditionQuantity` |
| `ConditionQuantityUnit` | `PricingElement.ConditionQuantityUnit` |
| `ConditionCategory` | `PricingElement.ConditionCategory` |
| `ConditionIsForStatistics` | `PricingElement.ConditionIsForStatistics` |
| `PricingScaleType` | `PricingElement.PricingScaleType` |
| `IsRelevantForAccrual` | `PricingElement.IsRelevantForAccrual` |
| `CndnIsRelevantForInvoiceList` | `PricingElement.CndnIsRelevantForInvoiceList` |
| `ConditionOrigin` | `PricingElement.ConditionOrigin` |
| `IsGroupCondition` | `PricingElement.IsGroupCondition` |
| `ConditionRecord` | `PricingElement.ConditionRecord` |
| `ConditionSequentialNumber` | `PricingElement.ConditionSequentialNumber` |
| `TaxCode` | `PricingElement.TaxCode` |
| `WithholdingTaxCode` | `PricingElement.WithholdingTaxCode` |
| `CndnRoundingOffDiffAmount` | `PricingElement.CndnRoundingOffDiffAmount` |
| `ConditionAmount` | `PricingElement.ConditionAmount` |
| `TransactionCurrency` | `PricingElement.TransactionCurrency` |
| `ConditionControl` | `PricingElement.ConditionControl` |
| `ConditionInactiveReason` | `PricingElement.ConditionInactiveReason` |
| `ConditionClass` | `PricingElement.ConditionClass` |
| `PrcgProcedureCounterForHeader` | `PricingElement.PrcgProcedureCounterForHeader` |
| `FactorForConditionBasisValue` | `PricingElement.FactorForConditionBasisValue` |
| `StructureCondition` | `PricingElement.StructureCondition` |
| `PeriodFactorForCndnBasisValue` | `PricingElement.PeriodFactorForCndnBasisValue` |
| `PricingScaleBasis` | `PricingElement.PricingScaleBasis` |
| `ConditionScaleBasisValue` | `PricingElement.ConditionScaleBasisValue` |
| `ConditionScaleBasisUnit` | `PricingElement.ConditionScaleBasisUnit` |
| `ConditionScaleBasisCurrency` | `PricingElement.ConditionScaleBasisCurrency` |
| `CndnIsRelevantForIntcoBilling` | `PricingElement.CndnIsRelevantForIntcoBilling` |
| `ConditionIsManuallyChanged` | `PricingElement.ConditionIsManuallyChanged` |
| `ConditionIsForConfiguration` | `PricingElement.ConditionIsForConfiguration` |
| `VariantCondition` | `PricingElement.VariantCondition` |
| `ConditionRateAmount` | `PricingElement.ConditionRateAmount` |
| `ConditionRateRatio` | `PricingElement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `PricingElement.ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `PricingElement.ConditionBaseAmount` |
| `ConditionBaseQuantity` | `PricingElement.ConditionBaseQuantity` |
| `_ServiceDocument` | *Association* |
| `_ServiceDocumentItem` | *Association* |
| `_ConditionApplication` | *Association* |
| `_PricingConditionType` | *Association* |
| `_ConditionCalculationType` | *Association* |
| `_ConditionCurrency` | *Association* |
| `_Currency` | *Association* |
| `_ConditionQuantityUnit` | *Association* |
| `_ConditionCategory` | *Association* |
| `_ConditionOrigin` | *Association* |
| `_ConditionControl` | *Association* |
| `_ConditionInactiveReason` | *Association* |
| `_ConditionClass` | *Association* |
| `_PricingScaleBasis` | *Association* |
| `_ScaleUnitOfMeasure` | *Association* |
| `_ScaleCurrency` | *Association* |
| `_VariantCondition` | *Association* |
| `_StructureCondition` | *Association* |
| `_ConditionRateRatioUnit` | *Association* |
| `_ServiceObjType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocument` | `I_ServiceDocument` | [1..1] |
| `_ServiceDocumentItem` | `I_ServiceDocumentItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Service Transaction Item Pricing Element'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #A,
        sizeCategory:   #XL
    },
    supportedCapabilities: [ #SQL_DATA_SOURCE, 
                             #CDS_MODELING_DATA_SOURCE, 
                             #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_SrvcDocItemPriceElement 
  as select from I_PricingElement   as PricingElement
  inner join     I_ServiceDocument  as ServiceDocument on  PricingElement.PricingDocument        =  ServiceDocument.PricingDocument
                                                       and PricingElement.PricingDocumentItem    != '000000'
      
    association[1..1] to I_ServiceDocument      as _ServiceDocument  on _ServiceDocument.ServiceObjectType = $projection.ServiceObjectType
                                                                    and _ServiceDocument.ServiceDocument   = $projection.ServiceDocument

    association[1..1] to I_ServiceDocumentItem  as _ServiceDocumentItem   on $projection.ServiceObjectType   = _ServiceDocumentItem.ServiceObjectType
                                                                         and $projection.ServiceDocument     = _ServiceDocumentItem.ServiceDocument
                                                                         and $projection.ServiceDocumentItem = _ServiceDocumentItem.ServiceDocumentItem
{
      @ObjectModel.foreignKey.association: '_ServiceDocument'                                                                                                   
  key ServiceDocument.ServiceDocument,  
      @ObjectModel.foreignKey.association: '_ServiceDocumentItem'   
  key cast(PricingElement.PricingDocumentItem as crms4_number_int preserving type) as ServiceDocumentItem,
  key PricingElement.PricingProcedureStep,
  key PricingElement.PricingProcedureCounter, // decision from pricing colleagues: keep wrong name, do not rename to PricingElementCounter
      @ObjectModel.foreignKey.association: '_ServiceObjType'
      ServiceDocument.ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
      PricingElement.ConditionApplication, // required for foreign key association of condition type
      @ObjectModel.foreignKey.association: '_PricingConditionType'
      PricingElement.ConditionType,
      PricingElement.PriceConditionDeterminationDte,
      @ObjectModel.foreignKey.association: '_ConditionCalculationType'
      PricingElement.ConditionCalculationType,
      PricingElement.ConditionBaseValue,
      PricingElement.ConditionRateValue,
      @ObjectModel.foreignKey.association: '_ConditionCurrency'
      PricingElement.ConditionCurrency,
      @Aggregation.default: #NONE
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionQuantity,
      @ObjectModel.foreignKey.association: '_ConditionQuantityUnit'
      PricingElement.ConditionQuantityUnit,
      @ObjectModel.foreignKey.association: '_ConditionCategory'
      PricingElement.ConditionCategory,
      PricingElement.ConditionIsForStatistics,
      PricingElement.PricingScaleType,
      PricingElement.IsRelevantForAccrual,
      @Semantics.booleanIndicator: true
      PricingElement.CndnIsRelevantForInvoiceList,
      @ObjectModel.foreignKey.association: '_ConditionOrigin'
      PricingElement.ConditionOrigin,
      @Semantics.booleanIndicator: true
      PricingElement.IsGroupCondition,
      PricingElement.ConditionRecord,
      PricingElement.ConditionSequentialNumber,
      PricingElement.TaxCode,
      PricingElement.WithholdingTaxCode,
      @Aggregation.default: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.CndnRoundingOffDiffAmount,
      @Aggregation.default: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PricingElement.ConditionAmount,
      @ObjectModel.foreignKey.association: '_Currency'
      PricingElement.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_ConditionControl'
      PricingElement.ConditionControl,
      @ObjectModel.foreignKey.association: '_ConditionInactiveReason'
      PricingElement.ConditionInactiveReason,
      @ObjectModel.foreignKey.association: '_ConditionClass'
      PricingElement.ConditionClass,
      PricingElement.PrcgProcedureCounterForHeader,
      PricingElement.FactorForConditionBasisValue,
      @ObjectModel.foreignKey.association: '_StructureCondition'
      PricingElement.StructureCondition,
      PricingElement.PeriodFactorForCndnBasisValue,
      @ObjectModel.foreignKey.association: '_PricingScaleBasis'
      PricingElement.PricingScaleBasis,
      PricingElement.ConditionScaleBasisValue,
      @ObjectModel.foreignKey.association: '_ScaleUnitOfMeasure'
      PricingElement.ConditionScaleBasisUnit,
      @ObjectModel.foreignKey.association: '_ScaleCurrency'
      PricingElement.ConditionScaleBasisCurrency,
      PricingElement.CndnIsRelevantForIntcoBilling,
      PricingElement.ConditionIsManuallyChanged,
      PricingElement.ConditionIsForConfiguration,
      PricingElement.VariantCondition, 
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      @OData.v2.amount.noDecimalShift: true
      PricingElement.ConditionRateAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
      PricingElement.ConditionRateRatio,
      @ObjectModel.foreignKey.association: '_ConditionRateRatioUnit'
      PricingElement.ConditionRateRatioUnit,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @OData.v2.amount.noDecimalShift: true
      PricingElement.ConditionBaseAmount,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      PricingElement.ConditionBaseQuantity,

      //Association
      _ServiceDocument,
      _ServiceDocumentItem,
      PricingElement._ConditionApplication,
      PricingElement._PricingConditionType, // naming could be better: _ConditionType
      PricingElement._ConditionCalculationType,
      PricingElement._ConditionCurrency,
      PricingElement._Currency, // naming could be better: _TransactionCurrency
      PricingElement._ConditionQuantityUnit,
      PricingElement._ConditionCategory,
      PricingElement._ConditionOrigin,
      PricingElement._ConditionControl,
      PricingElement._ConditionInactiveReason,
      PricingElement._ConditionClass,
      PricingElement._PricingScaleBasis,
      PricingElement._ScaleUnitOfMeasure, // naming could be better: ConditionScaleBasisUnit
      PricingElement._ScaleCurrency, // naming could be better: _ConditionScaleBasisCurrency
      PricingElement._VariantCondition,
      PricingElement._StructureCondition,
      PricingElement._ConditionRateRatioUnit,
      ServiceDocument._ServiceObjType
}
```
