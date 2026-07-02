---
name: I_LEGALCONTEXTRELATIONSHIPTP
description: Legalcontextrelationshiptp
semantic_en: "Legal context relationships — defines relationship types and legal transaction links within legal contexts with mandatory and integration flags."
semantic_vi: "mối quan hệ ngữ cảnh pháp lý — định nghĩa các loại quan hệ và liên kết giao dịch pháp lý trong các ngữ cảnh pháp lý với cờ bắt buộc và tích hợp."
keywords:
  - mối quan hệ pháp lý
  - liên kết giao dịch
  - quản lý quan hệ
app_component: CM-CTX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-CTX
  - interface-view
  - transactional-processing
  - text
  - component:CM-CTX-2CL
  - lob:Other
---
# I_LEGALCONTEXTRELATIONSHIPTP

**Legalcontextrelationshiptp**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMCntxtRelshpUUID` | `LglCntntMCntxtRelshpUUID` |
| `LglCntntMContextUUID` | `LglCntntMContextUUID` |
| `LglCntntMRelshpType` | `LglCntntMRelshpType` |
| `LglCntntMCntxtRelshpLglTrans` | `LglCntntMCntxtRelshpLglTrans` |
| `LglCntntMIsMandatory` | `LglCntntMIsMandatory` |
| `LglCntntMIsIntegRelevant` | `LglCntntMIsIntegRelevant` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED
    }
@EndUserText.label: 'Legal Context Relationships - TP'
@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    },
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true

define view entity I_LegalContextRelationshipTP
  as projection on I_LCMContextRelationshipTP as LegalContextRelationship

{
  key LglCntntMCntxtRelshpUUID,
      LglCntntMContextUUID,
      LglCntntMRelshpType, 
      LglCntntMCntxtRelshpLglTrans,
      LglCntntMIsMandatory,
      LglCntntMIsIntegRelevant,

      _LCMContextTP : redirected to parent I_LegalContextTP
}
```
