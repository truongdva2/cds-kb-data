---
name: I_LEGALDOCOBLGNRCPNTTP
description: Legaldocoblgnrcpnttp
semantic_en: "Legal document obligation recipient transactional proxy — specifies recipients responsible for legal document obligations."
semantic_vi: "ủy quyền giao dịch người nhận nghĩa vụ tài liệu pháp lý — chỉ định người nhận chịu trách nhiệm về các nghĩa vụ tài liệu pháp lý."
keywords:
  - người nhận nghĩa vụ
  - quản lý trách nhiệm
  - nghĩa vụ pháp lý
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
# I_LEGALDOCOBLGNRCPNTTP

**Legaldocoblgnrcpnttp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocOblgnRcpntUUID` | `LglCntntMDocOblgnRcpntUUID` |
| `LglCntntMDocOblgnUUID` | `LglCntntMDocOblgnUUID` |
| `LglCntntMDocumentUUID` | `LglCntntMDocumentUUID` |
| `LglCntntMDocOblgnRcpnt` | `LglCntntMDocOblgnRcpnt` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #CHECK,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Obligation Recipient - TP'

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
define view entity I_LegalDocOblgnRcpntTP
  as projection on R_LegalDocOblgnRcpntTP as LegalDocOblgnRcpnt
{
  key LglCntntMDocOblgnRcpntUUID  as LglCntntMDocOblgnRcpntUUID,
      LglCntntMDocOblgnUUID       as LglCntntMDocOblgnUUID,
      LglCntntMDocumentUUID       as LglCntntMDocumentUUID,
      LglCntntMDocOblgnRcpnt      as LglCntntMDocOblgnRcpnt,
//      LglCntntMChangedUTCDateTime as LglCntntMChangedUTCDateTime,
      
      /* Associations */
      _Document           : redirected to I_LegalDocumentTP,
      _LegalDocObligation : redirected to parent I_LegalDocObligationTP
}
```
