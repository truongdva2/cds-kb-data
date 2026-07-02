---
name: I_LEGALDOCAGREEMENTTP
description: Legaldocagreementtp
semantic_en: "Legal document agreement transactional proxy — tracks agreement versions, statuses, and change history for documents linked to legal agreements."
semantic_vi: "ủy quyền giao dịch thỏa thuận tài liệu pháp lý — theo dõi phiên bản thỏa thuận, trạng thái và lịch sử thay đổi cho các tài liệu được liên kết với các thỏa thuận pháp lý."
keywords:
  - thỏa thuận pháp lý
  - phiên bản tài liệu
  - quản lý hợp đồng
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
# I_LEGALDOCAGREEMENTTP

**Legaldocagreementtp**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMAgreementUUID` | `LglCntntMAgreementUUID` |
| `LglCntntMDocumentUUID` | `LglCntntMDocumentUUID` |
| `LglCntntMContractTypeName` | `LglCntntMContractTypeName` |
| `LglCntntMAgreementTemplateName` | `LglCntntMAgreementTemplateName` |
| `LglCntntMAgreementSystemID` | `LglCntntMAgreementSystemID` |
| `LglCntntMDocAgrmtVersion` | `LglCntntMDocAgrmtVersion` |
| `LglCntntMDocAgrmtCoreStatus` | `LglCntntMDocAgrmtCoreStatus` |
| `LglCntntMDocAgrmtBizStatus` | `LglCntntMDocAgrmtBizStatus` |
| `LglCntntMCreatedUTCDateTime` | `LglCntntMCreatedUTCDateTime` |
| `LglCntntMCreatedByUser` | `LglCntntMCreatedByUser` |
| `LglCntntMChangedUTCDateTime` | `LglCntntMChangedUTCDateTime` |
| `LglCntntMChangedByUser` | `LglCntntMChangedByUser` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl:{    
    authorizationCheck: #MANDATORY,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED 
    }
@EndUserText.label: 'Legal Document Agreement - TP'
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

define view entity I_LegalDocAgreementTP
  as projection on R_LegalDocAgreementTP as LegalDocAgreement
{
  key LglCntntMAgreementUUID,
      LglCntntMDocumentUUID,
      LglCntntMContractTypeName,
      LglCntntMAgreementTemplateName,
      LglCntntMAgreementSystemID,
      LglCntntMDocAgrmtVersion,
      LglCntntMDocAgrmtCoreStatus,
      LglCntntMDocAgrmtBizStatus,       
      LglCntntMCreatedUTCDateTime,
      LglCntntMCreatedByUser,
      LglCntntMChangedUTCDateTime,
      LglCntntMChangedByUser,

      /* Associations */
      _Document : redirected to parent I_LegalDocumentTP
}
```
