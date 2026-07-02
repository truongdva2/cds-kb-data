---
name: I_CEPUCOHDRCNDNSCALESTP_2
description: Cepucohdrcndnscalestp 2
semantic_en: "central purchase contract header condition scales transactional view — displays pricing scale lines with quantities, amounts, rates, and validity for contract conditions."
semantic_vi: "Xem tỷ lệ điều kiện tiêu đề hợp đồng mua hàng trung tâm — hiển thị các dòng tỷ lệ giá với số lượng, số tiền, tỷ giá và hiệu lực của điều kiện hợp đồng."
keywords:
  - tỷ lệ giá
  - điều kiện hợp đồng
  - hợp đồng mua hàng
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - header-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CEPUCOHDRCNDNSCALESTP_2

**Cepucohdrcndnscalestp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CentralPurchaseContract` | `CentralPurchaseContract` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| `ConditionSequentialNumberShort` | `ConditionSequentialNumberShort` |
| `ConditionScaleLine` | `ConditionScaleLine` |
| `ConditionScaleQuantity` | `ConditionScaleQuantity` |
| `ConditionScaleQuantityUnit` | `ConditionScaleQuantityUnit` |
| `ConditionScaleAmount` | `ConditionScaleAmount` |
| `ConditionScaleAmountCurrency` | `ConditionScaleAmountCurrency` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `ConditionScaleIsDeleted` | `ConditionScaleIsDeleted` |
| `PricingScaleType` | `PricingScaleType` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'CCTR Header Condition Scales - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','ConditionRecord','ConditionValidityEndDate','ConditionSequentialNumberShort','ConditionScaleLine' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CePuCoHdrCndnScalesTP_2
  as projection on R_CntrlPurContrHdrCndnScalesTP
{
  key CentralPurchaseContract,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,
  key ConditionScaleLine,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
      @Semantics.amount.currencyCode: 'ConditionRateValueunit'
      ConditionRateValue,
      ConditionRateValueUnit,
      ConditionScaleIsDeleted,
      PricingScaleType,
      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,   
     
      /* Associations  */
      _CentralPurchaseContract    : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurContrHdrCndnAmount : redirected to parent I_CntrlPurContrHdrCndnAmtTP_2
}
```
