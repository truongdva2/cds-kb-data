---
name: I_CEPUCOITMCNDNSCALESTP_2
description: Cepucoitmcndnscalestp 2
semantic_en: "central purchase contract item condition scales transactional view — displays pricing scale lines for contract items with quantities, amounts, rates, and deletion flags."
semantic_vi: "Xem tỷ lệ điều kiện mục hợp đồng mua hàng trung tâm — hiển thị các dòng tỷ lệ giá cho các mục hợp đồng với số lượng, số tiền, tỷ giá và cờ xóa."
keywords:
  - tỷ lệ giá
  - mục hợp đồng
  - điều kiện
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
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CEPUCOITMCNDNSCALESTP_2

**Cepucoitmcndnscalestp 2**

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
| `CentralPurchaseContractItem` | `CentralPurchaseContractItem` |
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
@EndUserText.label: 'CCTR Item Condition Scales- TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','CentralPurchaseContractItem','ConditionRecord','ConditionValidityEndDate','ConditionSequentialNumberShort','ConditionScaleLine' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MIXED
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_CePuCoItmCndnScalesTP_2
  as projection on R_CntrlPurContrItmCndnScalesTP
{
      
  key CentralPurchaseContract,
  key CentralPurchaseContractItem,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,
  key ConditionScaleLine,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionScaleQuantity,
      ConditionScaleQuantityUnit,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionScaleAmount,
      ConditionScaleAmountCurrency,
      @Semantics.amount.currencyCode: 'ConditionScaleAmountCurrency'
      ConditionRateValue,
      ConditionRateValueUnit,
      ConditionScaleIsDeleted,
      PricingScaleType,
      @Semantics.quantity.unitOfMeasure: 'ConditionScaleQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,
      
      /* Associations */
      _CentralPurchaseContract    : redirected to I_CntrlPurchaseContractTP_2,
      _CntrlPurContrItmCndnAmount : redirected to parent I_CntrlPurContrItmCndnAmtTP_2
}
```
