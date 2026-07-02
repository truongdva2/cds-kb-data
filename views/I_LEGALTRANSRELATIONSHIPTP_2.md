---
name: I_LEGALTRANSRELATIONSHIPTP_2
description: Legaltransrelationshiptp 2
semantic_en: "Legal transaction relationships — defines relationships between legal transactions and their reference transactions."
semantic_vi: "Mối quan hệ giữa các giao dịch pháp lý — xác định mối liên hệ giữa các giao dịch pháp lý và các giao dịch tham chiếu của chúng."
keywords:
  - mối quan hệ pháp lý
  - giao dịch tham chiếu
  - liên kết giao dịch
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - transactional-processing
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSRELATIONSHIPTP_2

**Legaltransrelationshiptp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LegalTransactionRelshpUUID` | `LegalTransactionRelshpUUID` |
| `LegalTransactionUUID` | `LegalTransactionUUID` |
| `RelshpLegalTransaction` | `RelshpLegalTransaction` |
| `RelshpLegalTransactionUUID` | `RelshpLegalTransactionUUID` |
| `LglCntntMRelshpType` | `LglCntntMRelshpType` |
| `LegalTransactionMandatoryFlag` | `LegalTransactionMandatoryFlag` |
| `LglCntntMIsIntegRelevant` | `LglCntntMIsIntegRelevant` |
| `LglCntntMIsAddedByIntegVarbl` | `LglCntntMIsAddedByIntegVarbl` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Legal Transaction Relationships'
@ObjectModel: {
  usageType: {
    sizeCategory: #L,
    serviceQuality: #B,
    dataClass:#TRANSACTIONAL
  },
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define view entity I_LegalTransRelationshipTP_2
  as projection on R_LegalTransRelationshipTP
{
  key LegalTransactionRelshpUUID,
      LegalTransactionUUID,
      RelshpLegalTransaction,
      RelshpLegalTransactionUUID,
      LglCntntMRelshpType,
      LegalTransactionMandatoryFlag,
      @Semantics.booleanIndicator: true
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction  : redirected to parent I_LegalTransactionTP_2
//      _RelshpLegalTransaction
}
```
