---
name: I_BSORDITMRATEELEMENTTP
description: Bsorditmrateelementtp
semantic_en: "projection for business solution order item rate element — stores rate element details by currency including net, gross, and tax amounts (BusinessSolutionOrder, BusinessSolutionOrderItem, SubscriptionRateElementNumber, Currency, SubscriptionRateElement, SubscriptionRateElementType, SubscrpnRateElementNetAmount, SubscrpnRateElementGrossAmount, SubscrpnRateElementTaxAmount)."
semantic_vi: "phép chiếu cho phần tử tỷ lệ mục đơn hàng giải pháp kinh doanh — lưu trữ chi tiết phần tử tỷ lệ theo loại tiền tệ bao gồm số tiền ròng, tổng số tiền và thuế (BusinessSolutionOrder, BusinessSolutionOrderItem, SubscriptionRateElementNumber, Currency, SubscriptionRateElement, SubscriptionRateElementType, SubscrpnRateElementNetAmount, SubscrpnRateElementGrossAmount, SubscrpnRateElementTaxAmount)."
keywords:
  - phần tử tỷ lệ
  - đơn hàng giải pháp
  - số tiền ròng, tổng, thuế
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BSORDITMRATEELEMENTTP

**Bsorditmrateelementtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| `SubscriptionRateElementNumber` | `SubscriptionRateElementNumber` |
| `Currency` | `Currency` |
| `SubscriptionRateElement` | `SubscriptionRateElement` |
| `SubscriptionRateElementType` | `SubscriptionRateElementType` |
| `SubscrpnRateElementNetAmount` | `SubscrpnRateElementNetAmount` |
| `SubscrpnRateElementGrossAmount` | `SubscrpnRateElementGrossAmount` |
| `SubscrpnRateElementTaxAmount` | `SubscrpnRateElementTaxAmount` |
| `_SubscriptionBilling` | *Association* |
| `_SubscriptionBillingItem` | *Association* |
| `_SubscrpnRateElementTypeText` | *Association* |
| `_TransactionCurrency` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Business Solution Order Item Rate Element - TP'

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_BSOrdItmRateElementTP
  as projection on R_BSOrdItmRateElementTP
{
      @ObjectModel.foreignKey.association: '_SubscriptionBilling'
  key BusinessSolutionOrder,
      @ObjectModel.foreignKey.association: '_SubscriptionBillingItem'
  key BusinessSolutionOrderItem,
  key SubscriptionRateElementNumber,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      Currency,

      SubscriptionRateElement,
      @ObjectModel.text.association: '_SubscrpnRateElementTypeText'
      @ObjectModel.sapObjectNodeTypeReference: 'SrvcSubscrpnRateElmntType'
      SubscriptionRateElementType,
      //SubscrpnRateElementTypeText,

      @Semantics.amount.currencyCode: 'Currency'
      SubscrpnRateElementNetAmount,

      @Semantics.amount.currencyCode: 'Currency'
      SubscrpnRateElementGrossAmount,

      @Semantics.amount.currencyCode: 'Currency'
      SubscrpnRateElementTaxAmount,

      // Associations
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP,
      _SubscriptionBilling,
      _SubscriptionBillingItem,
      _SubscrpnRateElementTypeText,
      _TransactionCurrency
}
```
