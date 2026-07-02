---
name: I_LEGALTRANSLINKEDOBJECTSTP_2
description: Legaltranslinkedobjectstp 2
semantic_en: "Legal transaction linked objects — references related business objects and documents linked to legal transactions."
semantic_vi: "Các đối tượng liên kết trong giao dịch pháp lý — tham chiếu các đối tượng kinh doanh và tài liệu có liên quan được liên kết với giao dịch pháp lý."
keywords:
  - đối tượng liên kết
  - tài liệu liên kết
  - giao dịch pháp lý
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
# I_LEGALTRANSLINKEDOBJECTSTP_2

**Legaltranslinkedobjectstp 2**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LegalTransactionLinkdObjUUID` | `LegalTransactionLinkdObjUUID` |
| `LglCntntMLinkdObjType` | `LglCntntMLinkdObjType` |
| `LglCntntMLinkdObj` | `LglCntntMLinkdObj` |
| `LegalTransactionUUID` | `LegalTransactionUUID` |
| `LegalTransactionMandatoryFlag` | `LegalTransactionMandatoryFlag` |
| `LegalTransactionIsTriggerObj` | `LegalTransactionIsTriggerObj` |
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
@EndUserText.label: 'Legal Transaction Linked Objects'
@ObjectModel: {
  usageType: {
    sizeCategory: #L,
    serviceQuality: #A,
    dataClass:#TRANSACTIONAL
  },
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
define view entity I_LegalTransLinkedObjectsTP_2
  as projection on R_LegalTransLinkedObjectsTP as LegalTransactionLinkedObject
{
  key LegalTransactionLinkdObjUUID,
      LglCntntMLinkdObjType,
      LglCntntMLinkdObj,
      LegalTransactionUUID,
      LegalTransactionMandatoryFlag,
      @Semantics.booleanIndicator: true
      LegalTransactionIsTriggerObj,
      @Semantics.booleanIndicator: true
      LglCntntMIsIntegRelevant,
      @Semantics.booleanIndicator: true
      LglCntntMIsAddedByIntegVarbl,
      /* Associations */
      _LegalTransaction : redirected to parent I_LegalTransactionTP_2
}
```
