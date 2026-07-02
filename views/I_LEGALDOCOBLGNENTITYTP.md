---
name: I_LEGALDOCOBLGNENTITYTP
description: Legaldocoblgnentitytp
semantic_en: "Legal document obligation entities transactional proxy — links entities subject to legal document obligations with entity type specifications for obligation tracking."
semantic_vi: "ủy quyền giao dịch thực thể nghĩa vụ tài liệu pháp lý — liên kết các thực thể phải tuân theo các nghĩa vụ tài liệu pháp lý với thông số loại thực thể để theo dõi nghĩa vụ."
keywords:
  - thực thể nghĩa vụ
  - quản lý nghĩa vụ pháp lý
  - theo dõi tài liệu
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - interface-view
  - transactional-processing
  - component:CM-DOC-2CL
  - lob:Other
---
# I_LEGALDOCOBLGNENTITYTP

**Legaldocoblgnentitytp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocOblgnEntityUUID` | `LglCntntMDocOblgnEntityUUID` |
| `LglCntntMDocOblgnUUID` | `LglCntntMDocOblgnUUID` |
| `LglCntntMDocumentUUID` | `LglCntntMDocumentUUID` |
| `LglCntntMDocObligation` | `LglCntntMDocObligation` |
| `LglCntntMEntity` | `LglCntntMEntity` |
| `LglCntntMEntityType` | `LglCntntMEntityType` |
| `LglCntntMTechEntityType` | `LglCntntMTechEntityType` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Obligation Entities - TP'

@ObjectModel:{
             usageType:{
                          dataClass:  #TRANSACTIONAL,
                          serviceQuality: #C,
                          sizeCategory: #L
                        },
             modelingPattern: #TRANSACTIONAL_INTERFACE,
             supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
             }

@VDM.viewType: #TRANSACTIONAL
@VDM.usage.type:[#TRANSACTIONAL_PROCESSING_SERVICE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true

define view entity I_LegalDocOblgnEntityTP
  as projection on R_LegalDocOblgnEntityTP as LegalDocOblgnEntity
{
  key LglCntntMDocOblgnEntityUUID as LglCntntMDocOblgnEntityUUID,
      LglCntntMDocOblgnUUID       as LglCntntMDocOblgnUUID,
      LglCntntMDocumentUUID       as LglCntntMDocumentUUID,
      LglCntntMDocObligation      as LglCntntMDocObligation,
      LglCntntMEntity             as LglCntntMEntity,
      LglCntntMEntityType         as LglCntntMEntityType,
      LglCntntMTechEntityType     as LglCntntMTechEntityType,
//      LglCntntMChangedUTCDateTime as LglCntntMChangedUTCDateTime,

      /* Associations */
      _Document           : redirected to I_LegalDocumentTP,
      _LegalDocObligation : redirected to parent I_LegalDocObligationTP
}
```
