---
name: I_CAOUTGOINGPAYMENTMETHOD
description: Caoutgoingpaymentmethod
semantic_en: "Payment methods for outgoing payments — defining method requirements and processing characteristics."
semantic_vi: "Các phương thức thanh toán cho các khoản thanh toán gửi đi — xác định yêu cầu phương thức và đặc điểm xử lý."
keywords:
  - phương thức thanh toán
  - thanh toán gửi đi
  - hình thức thanh toán
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - payment
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOUTGOINGPAYMENTMETHOD

**Caoutgoingpaymentmethod**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Country` | `Country` |
| `CAOutgoingPaymentMethod` | `CAPaymentMethod` |
| `BankDetailsOfBPAreRequired` | `BankDetailsOfBPAreRequired` |
| `AddressDetailsAreRequired` | `AddressDetailsAreRequired` |
| `IsPaytMethForIncomingPayments` | `IsPaytMethForIncomingPayments` |
| `CAIsPaytMethForPostOffcBkAcct` | `CAIsPaytMethForPostOffcBkAcct` |
| `ChequeIsCreatedWithPaytMeth` | `ChequeIsCreatedWithPaytMeth` |
| `IsPaytMethForEUInternalTransf` | `IsPaytMethForEUInternalTransf` |
| `CAPaymentMethodProcessingType` | `CAPaymentMethodProcessingType` |
| `CAPaymentMediumFormat` | `CAPaymentMediumFormat` |
| `CAPaytMediumFormatSupplement` | `CAPaytMediumFormatSupplement` |
| `CAPaymentOrderIsCreated` | `CAPaymentOrderIsCreated` |
| `CAPaytMethForBillerDirect` | `CAPaytMethForBillerDirect` |
| `CAIsPaytSlipWithRefNmbrProced` | `CAIsPaytSlipWithRefNmbrProced` |
| `CAPaytMethAddressIsNotRequired` | `CAPaytMethAddressIsNotRequired` |
| `BR_CABoletoAssignmentType` | `BR_CABoletoAssignmentType` |
| `CAPaymentMethodNotificationCat` | `CAPaymentMethodNotificationCat` |
| `ContrAcctgIBANOrSWIFTRqmtCode` | `ContrAcctgIBANOrSWIFTRqmtCode` |
| `CASEPAMandateIsRequired` | `CASEPAMandateIsRequired` |
| `CASEPAPrenotificationIsCreated` | `CASEPAPrenotificationIsCreated` |
| `CARealTimePaymentCategory` | `CARealTimePaymentCategory` |
| `_Country` | *Association* |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Outgoing Payment Method'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAOutgoingPaymentMethod',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@Search.searchable: false

@VDM.viewType: #COMPOSITE

define view entity I_CAOutgoingPaymentMethod
  as select from I_CAPaymentMethod
{
      @ObjectModel.foreignKey.association: '_Country'
  key Country,
  key CAPaymentMethod as CAOutgoingPaymentMethod,

      BankDetailsOfBPAreRequired,
      AddressDetailsAreRequired,
      IsPaytMethForIncomingPayments,
      CAIsPaytMethForPostOffcBkAcct,
      ChequeIsCreatedWithPaytMeth,
      IsPaytMethForEUInternalTransf,
      CAPaymentMethodProcessingType,
      CAPaymentMediumFormat,
      CAPaytMediumFormatSupplement,
      CAPaymentOrderIsCreated,
      CAPaytMethForBillerDirect,
      CAIsPaytSlipWithRefNmbrProced,
      CAPaytMethAddressIsNotRequired,
      BR_CABoletoAssignmentType,
      CAPaymentMethodNotificationCat,
      ContrAcctgIBANOrSWIFTRqmtCode,
      CASEPAMandateIsRequired,
      CASEPAPrenotificationIsCreated,
      CARealTimePaymentCategory,

      /* Associations */
      _Country,
      _Text
}
where
  IsPaytMethForIncomingPayments = ''
```
