---
name: I_LEGALCONTEXTEXTCONTACTTP
description: Legalcontextextcontacttp
semantic_en: "Legal context external contacts — maintains external business partner contacts within legal contexts with ranking and mandatory flags for integration."
semantic_vi: "liên hệ bên ngoài ngữ cảnh pháp lý — duy trì các liên hệ đối tác kinh doanh bên ngoài trong các ngữ cảnh pháp lý với xếp hạng và cờ bắt buộc cho tích hợp."
keywords:
  - liên hệ bên ngoài
  - liên hệ kinh doanh
  - quản lý liên hệ
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
# I_LEGALCONTEXTEXTCONTACTTP

**Legalcontextextcontacttp**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMCntxtExtCntctUUID` | `LglCntntMCntxtExtCntctUUID` |
| `LglCntntMContextUUID` | `LglCntntMContextUUID` |
| `LglCntntMRank` | `LglCntntMRank` |
| `LglCntntMExtCntctBP` | `LglCntntMExtCntctBP` |
| `LglCntntMExtCntctType` | `LglCntntMExtCntctType` |
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
@EndUserText.label: 'Legal Context External Contacts - TP'
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
define view entity I_LegalContextExtContactTP
  as projection on I_LCMCtxExtContactTP as LegalContextExternalContact
{
  key     LglCntntMCntxtExtCntctUUID,
          LglCntntMContextUUID, 
          LglCntntMRank,
          LglCntntMExtCntctBP,
          LglCntntMExtCntctType, 
          LglCntntMIsMandatory, 
          LglCntntMIsIntegRelevant,
          
//          _BusinessPartner,
          
          _LCMContextTP : redirected to parent I_LegalContextTP
}
```
