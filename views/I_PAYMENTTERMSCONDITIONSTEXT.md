---
name: I_PAYMENTTERMSCONDITIONSTEXT
description: Paymenttermsconditionstext
semantic_en: "payment terms conditions text — multi-language condition descriptions for payment terms keyed by terms code, validity month-day, and language."
semantic_vi: "văn bản điều kiện thanh toán — mô tả điều kiện đa ngôn ngữ cho điều khoản thanh toán được khóa theo mã điều khoản, ngày tháng hiệu lực và ngôn ngữ."
keywords:
  - điều kiện thanh toán
  - mô tả
  - ngôn ngữ
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - text-view
  - pricing-condition
  - payment
  - text
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTTERMSCONDITIONSTEXT

**Paymenttermsconditionstext**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PaymentTerms` | `cast( zterm as farp_dzterm preserving type )` |
| `PaymentTermsValidityMonthDay` | `ztagg` |
| `Language` | `spras` |
| `PaymentTermsConditionDesc` | `cast( text1 as fis_payment_terms_cndns_desc preserving type )` |
| `_PaymentTerms` | *Association* |
| `_PaymentTermsConditions` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [1..1] |
| `_PaymentTermsConditions` | `I_PaymentTermsConditions` | [1..1] |

## Source Code

```abap
@AccessControl:{
    authorizationCheck: #NOT_REQUIRED
    }
@Analytics:{
    dataExtraction.enabled: true,
    internalName: #LOCAL
    }
@EndUserText: {
    label: 'Payment Terms Conditions - Text'
    }
@ClientHandling.clientSafe: true
@Metadata: {
    ignorePropagatedAnnotations: true
    }
@ObjectModel: {
    dataCategory: #TEXT,
    modelingPattern:  #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'PaymentTermsValidityMonthDay',
    supportedCapabilities: [
                            #LANGUAGE_DEPENDENT_TEXT,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #SQL_DATA_SOURCE
                            ],
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #M,
    usageType.dataClass: #CUSTOMIZING
    }
@Analytics.technicalName: 'IPAYTTRMSCNDNST'
@VDM: {
    lifecycle.contract.type: #PUBLIC_LOCAL_API,
    viewType: #BASIC
    }
define view entity I_PaymentTermsConditionsText
  as select from t052u
  association [0..1] to I_Language               as _Language               on  $projection.Language = _Language.Language
  association [1..1] to I_PaymentTerms           as _PaymentTerms           on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms
  association [1..1] to I_PaymentTermsConditions as _PaymentTermsConditions on  $projection.PaymentTerms                 = _PaymentTermsConditions.PaymentTerms
                                                                            and $projection.PaymentTermsValidityMonthDay = _PaymentTermsConditions.PaymentTermsValidityMonthDay
{
      @ObjectModel.foreignKey.association: '_PaymentTerms'
  key cast( zterm as farp_dzterm preserving type )                  as PaymentTerms,
      @ObjectModel.foreignKey.association: '_PaymentTermsConditions'
  key ztagg                                                         as PaymentTermsValidityMonthDay,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                         as Language,

      @Semantics.text: true
      cast( text1 as fis_payment_terms_cndns_desc preserving type ) as PaymentTermsConditionDesc,

      _PaymentTerms,
      _PaymentTermsConditions,
      _Language

}
```
