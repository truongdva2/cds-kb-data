---
name: I_CUSTRETITEMPRICINGELEMENTTP
description: Custretitempricingelementtp
semantic_en: "Returns order item pricing element — price conditions and amounts for individual return items including rates and currencies."
semantic_vi: "Thành phần giá mục hàng đơn hàng trả về — định giá từng mục hàng trả về gồm loại điều kiện, tỷ lệ, số tiền và đơn vị tiền tệ."
keywords:
  - Giá hàng trả về
  - Mục hàng
  - Điều kiện giá
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - transactional-processing
  - pricing
  - item-level
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
---
# I_CUSTRETITEMPRICINGELEMENTTP

**Custretitempricingelementtp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CustomerReturn` | `CustReturnItemPricingElement.CustomerReturn` |
| `CustomerReturnItem` | `CustReturnItemPricingElement.CustomerReturnItem` |
| `PricingProcedureStep` | `CustReturnItemPricingElement.PricingProcedureStep` |
| `PricingProcedureCounter` | `CustReturnItemPricingElement.PricingProcedureCounter` |
| `ConditionApplication` | `CustReturnItemPricingElement.ConditionApplication` |
| `ConditionType` | `CustReturnItemPricingElement.ConditionType` |
| `ConditionCalculationType` | `CustReturnItemPricingElement.ConditionCalculationType` |
| `ConditionRateAmount` | `CustReturnItemPricingElement.ConditionRateAmount` |
| `ConditionCurrency` | `CustReturnItemPricingElement.ConditionCurrency` |
| `ConditionRateRatio` | `CustReturnItemPricingElement.ConditionRateRatio` |
| `ConditionRateRatioUnit` | `CustReturnItemPricingElement.ConditionRateRatioUnit` |
| `ConditionBaseAmount` | `CustReturnItemPricingElement.ConditionBaseAmount` |
| `ConditionAmount` | `CustReturnItemPricingElement.ConditionAmount` |
| `TransactionCurrency` | `CustReturnItemPricingElement.TransactionCurrency` |
| `ConditionBaseQuantity` | `CustReturnItemPricingElement.ConditionBaseQuantity` |
| `ConditionQuantity` | `CustReturnItemPricingElement.ConditionQuantity` |
| `ConditionQuantityUnit` | `CustReturnItemPricingElement.ConditionQuantityUnit` |
| `ConditionIsForStatistics` | `CustReturnItemPricingElement.ConditionIsForStatistics` |
| `ConditionIsManuallyChanged` | `CustReturnItemPricingElement.ConditionIsManuallyChanged` |
| `ConditionInactiveReason` | `CustReturnItemPricingElement.ConditionInactiveReason` |
| `CustomerReturnType` | `CustReturnItemPricingElement.CustomerReturnType` |
| `SalesOrganization` | `CustReturnItemPricingElement.SalesOrganization` |
| `DistributionChannel` | `CustReturnItemPricingElement.DistributionChannel` |
| `OrganizationDivision` | `CustReturnItemPricingElement.OrganizationDivision` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Returns Order Item Pricing Element - TP'

@AccessControl.authorizationCheck: #CHECK

@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['CustomerReturn', 'CustomerReturnItem', 'PricingProcedureStep', 'PricingProcedureCounter']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_CustRetItemPricingElementTP 
  as projection on R_CustRetItemPricingElementTP as CustReturnItemPricingElement  
{
  key CustReturnItemPricingElement.CustomerReturn,
  key CustReturnItemPricingElement.CustomerReturnItem,
  key CustReturnItemPricingElement.PricingProcedureStep,
  key CustReturnItemPricingElement.PricingProcedureCounter,
  
  CustReturnItemPricingElement.ConditionApplication,
  CustReturnItemPricingElement.ConditionType,
  CustReturnItemPricingElement.ConditionCalculationType,
  
  @Semantics.amount.currencyCode: 'ConditionCurrency'
  @OData.v2.amount.noDecimalShift: true
  CustReturnItemPricingElement.ConditionRateAmount,
  CustReturnItemPricingElement.ConditionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
  CustReturnItemPricingElement.ConditionRateRatio,
  CustReturnItemPricingElement.ConditionRateRatioUnit,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  @OData.v2.amount.noDecimalShift: true
  CustReturnItemPricingElement.ConditionBaseAmount,
  @Semantics.amount.currencyCode: 'TransactionCurrency'  
  CustReturnItemPricingElement.ConditionAmount,
  CustReturnItemPricingElement.TransactionCurrency,
  
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CustReturnItemPricingElement.ConditionBaseQuantity,
  @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'  
  CustReturnItemPricingElement.ConditionQuantity,
  CustReturnItemPricingElement.ConditionQuantityUnit,
  
  CustReturnItemPricingElement.ConditionIsForStatistics,
  CustReturnItemPricingElement.ConditionIsManuallyChanged,
  CustReturnItemPricingElement.ConditionInactiveReason,
  
  //for DCL
  @Consumption.hidden: true
  CustReturnItemPricingElement.CustomerReturnType,
  @Consumption.hidden: true
  CustReturnItemPricingElement.SalesOrganization,
  @Consumption.hidden: true
  CustReturnItemPricingElement.DistributionChannel,
  @Consumption.hidden: true
  CustReturnItemPricingElement.OrganizationDivision,
  
  //Association
  _Item           : redirected to parent I_CustomerReturnItemTP,
  _CustomerReturn : redirected to I_CustomerReturnTP   
}
```
