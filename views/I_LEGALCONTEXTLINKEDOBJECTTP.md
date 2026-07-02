---
name: I_LEGALCONTEXTLINKEDOBJECTTP
description: Legalcontextlinkedobjecttp
semantic_en: "Legal context linked objects — establishes relationships between legal contexts and associated external objects with mandatory and integration flags."
semantic_vi: "đối tượng được liên kết của ngữ cảnh pháp lý — thiết lập mối quan hệ giữa các ngữ cảnh pháp lý và các đối tượng bên ngoài liên quan với cờ bắt buộc và tích hợp."
keywords:
  - liên kết đối tượng
  - quản lý quan hệ
  - tích hợp
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
# I_LEGALCONTEXTLINKEDOBJECTTP

**Legalcontextlinkedobjecttp**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMCntxtLinkObjUUID` | `LglCntntMCntxtLinkObjUUID` |
| `LglCntntMContextUUID` | `LglCntntMContextUUID` |
| `LglCntntMLinkdObjType` | `LglCntntMLinkdObjType` |
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
@EndUserText.label: 'Legal Context Linked Objects - TP'
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

define view entity I_LegalContextLinkedObjectTP
  as projection on I_LCMContextObjectLinksTP as LegalContextLinkedObject

{
  key LglCntntMCntxtLinkObjUUID,
      LglCntntMContextUUID,
      LglCntntMLinkdObjType,
      LglCntntMIsMandatory,
      LglCntntMIsIntegRelevant,

      _LCMContextTP : redirected to parent I_LegalContextTP
}
```
