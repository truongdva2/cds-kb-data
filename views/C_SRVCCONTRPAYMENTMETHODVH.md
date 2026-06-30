---
name: C_SRVCCONTRPAYMENTMETHODVH
description: Srvccontrpaymentmethodvh
semantic_en: "VH — service contract payment method — value help listing available payment methods per billing company code with description and name for service contract input."
semantic_vi: "VH — phương thức thanh toán hợp đồng dịch vụ — trợ giúp giá trị liệt kê các phương thức thanh toán có sẵn theo mã công ty thanh toán với mô tả và tên cho đầu vào hợp đồng dịch vụ."
keywords:
  - phương thức thanh toán hợp đồng dịch vụ
  - trợ giúp giá trị thanh toán
  - hợp đồng dịch vụ thanh toán
app_component: CRM-S4-SRV-MC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - value-help
  - payment
  - component:CRM-S4-SRV-MC-2CL
  - lob:Other
  - bo:PaymentMethod
---
# C_SRVCCONTRPAYMENTMETHODVH

**Srvccontrpaymentmethodvh**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-MC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingCompanyCode` | `_CompanyCode.CompanyCode` |
| `PaymentMethod` | `_PaymentMethod.PaymentMethod` |
| `PaymentMethodDescription` | `expr(…)` |
| `PaymentMethodName` | `_PaymentMethod.PaymentMethodName` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@Search: {
  searchable: true
}

@Consumption.ranked: true

@ObjectModel:{
  usageType:{
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L},
  dataCategory: #VALUE_HELP}

@ObjectModel.representativeKey: 'PaymentMethod'
@ObjectModel.supportedCapabilities:[#VALUE_HELP_PROVIDER]
@Metadata.ignorePropagatedAnnotations: true
@Consumption.valueHelpDefault.fetchValues:#AUTOMATICALLY_WHEN_DISPLAYED

@EndUserText.label: 'Payment Method of Service Contract'
define view entity C_SrvcContrPaymentMethodVH
  as select from I_CompanyCode              as _CompanyCode

    inner join   I_PaymentMethodInCountryVH as _PaymentMethod on _CompanyCode.Country = _PaymentMethod.Country

{
         @Search: {
          defaultSearchElement: true,
          ranking: #LOW
         }
  key    _CompanyCode.CompanyCode as BillingCompanyCode,

         @Search: {
          defaultSearchElement: true,
          ranking: #HIGH }
         @ObjectModel.text.element: ['PaymentMethodDescription']
         @UI.lineItem: [{ position: 10, importance: #HIGH }]
  key    _PaymentMethod.PaymentMethod,

         @Search: {
          defaultSearchElement: true,
          ranking: #LOW,
          fuzzinessThreshold: 0.8
         }
         @UI.lineItem: [{ position: 20, importance: #HIGH }]
         _PaymentMethod._Text[1:Language=$session.system_language].PaymentMethodDescription,

         @Search: {
          defaultSearchElement: true,
          ranking: #LOW,
          fuzzinessThreshold: 0.8
         }
         @UI.lineItem: [{ position: 30, importance: #HIGH }]
         _PaymentMethod.PaymentMethodName

}
```
