---
name: I_LEGALTRANSCATEGORYTP_2
description: Legaltranscategorytp 2
semantic_en: "Legal transaction categories — maintains parent-child category hierarchies with mandatory flags for nested transaction classification."
semantic_vi: "danh mục giao dịch pháp lý — duy trì các phân cấp danh mục cha-con với cờ bắt buộc cho phân loại giao dịch lồng nhau."
keywords:
  - danh mục giao dịch
  - phân cấp danh mục
  - phân loại pháp lý
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
# I_LEGALTRANSCATEGORYTP_2

**Legaltranscategorytp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LegalTransactionCategoryUUID` | `LegalTransactionCategoryUUID` |
| `LegalTransactionParCatUUID` | `LegalTransactionParCatUUID` |
| `LegalTransactionUUID` | `LegalTransactionUUID` |
| `LglCntntMCategory` | `LglCntntMCategory` |
| `LglCntntMIsMandatory` | `LglCntntMIsMandatory` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{
  authorizationCheck: #CHECK,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@EndUserText.label: 'Legal Transaction Categories'
@ObjectModel: {
  usageType: {
    sizeCategory: #L,
    serviceQuality: #A,
    dataClass:#TRANSACTIONAL
  },
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define view entity I_LegalTransCategoryTP_2
  as projection on R_LegalTransCategoryTP
{
  key LegalTransactionCategoryUUID,
      LegalTransactionParCatUUID,
      LegalTransactionUUID,
      LglCntntMCategory,
      LglCntntMIsMandatory,
      /* Associations */
      _LegalTransaction         : redirected to I_LegalTransactionTP_2,
      _LegalTransParentCategory : redirected to parent I_LegalTransParentCatTP_2
}
```
