---
name: I_CRDTMACCTCRDTINSURANCETP
description: Crdtmacctcrdtinsurancetp
semantic_en: "Credit management account credit insurance transactional projection — credit insurance documents with validity dates and exception flags for credit check."
semantic_vi: "Hình chiếu giao dịch bảo hiểm tín dụng tài khoản quản lý tín dụng — tài liệu bảo hiểm tín dụng với ngày hiệu lực."
keywords:
  - bảo hiểm tín dụng
  - quản lý tín dụng
  - hình chiếu giao dịch
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - interface-view
  - transactional-processing
  - component:FIN-FIO-CCD-CR-2CL
  - lob:Other
---
# I_CRDTMACCTCRDTINSURANCETP

**Crdtmacctcrdtinsurancetp**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessPartner` | `BusinessPartner` |
| `CreditSegment` | `CreditSegment` |
| `CrdtAcctInformationCategory` | `CrdtAcctInformationCategory` |
| `CrdtAcctInformationType` | `CrdtAcctInformationType` |
| `AdditionalCreditDocSequence` | `cast ( SequenceNumber as bp_counter preserving type )` |
| `ExceptionIsCreditCheckRelevant` | `ExceptionIsCreditCheckRelevant` |
| `AddlCreditDocAmtInTransacCrcy` | `AddlCreditDocAmtInTransacCrcy` |
| `TransactionCurrency` | `TransactionCurrency` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `AdditionalCreditDocComment` | `AdditionalCreditDocComment` |
| `_BusinessPartner` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Credit Mgmt Acct Credit Insurance - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType: { dataClass:      #TRANSACTIONAL,
                             sizeCategory:   #L,
                             serviceQuality: #A
                           },
                modelingPattern:        #TRANSACTIONAL_INTERFACE,
                supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
              }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_CrdtMAcctCrdtInsuranceTP
  as projection on R_CrdtMAcctCrdtInsuranceTP as CrdtMAcctCreditInsurance
{
  key BusinessPartner,
  key CreditSegment,
  key CrdtAcctInformationCategory,
  key CrdtAcctInformationType,
  key cast ( SequenceNumber as bp_counter preserving type ) as AdditionalCreditDocSequence,
      ExceptionIsCreditCheckRelevant,
      @Semantics: { amount: { currencyCode: 'TransactionCurrency' } }
      AddlCreditDocAmtInTransacCrcy,
      TransactionCurrency,
      ValidityStartDate,
      ValidityEndDate,
      AdditionalCreditDocComment,

      // BO Composition
      _CreditMgmtAccountTP    : redirected to parent I_CreditMgmtAccountTP,
      _CrdtMBusinessPartnerTP : redirected to I_CrdtMBusinessPartnerTP,

      // Exposed Associations
      _BusinessPartner
}
```
