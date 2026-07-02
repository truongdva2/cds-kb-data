---
name: D_PRJBLGELMCRTEBILLGDOCREQR
description: D Prjblgelmcrtebillgdocreqr
semantic_en: "billing document request created from project billing element — captures BDR, project billing request, and element entry item flow UUID."
semantic_vi: "Yêu cầu chứng chỉ lập hóa đơn từ phần tử hóa đơn dự án — UUID dòng mục."
keywords:
  - hóa đơn
  - dự án
  - yêu cầu
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - component:PPM-SCL-BIL
  - lob:Other
---
# D_PRJBLGELMCRTEBILLGDOCREQR

**D Prjblgelmcrtebillgdocreqr**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingDocumentRequest` | `vbeln` |
| `ProjectBillingRequest` | `bdr_ref` |
| `ProjBillgElmntEntrItmFlowUUID` | `pbee_uuid` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Astract entity for BDR created from PBE'

define abstract entity D_PrjBlgElmCrteBillgDocReqR
{
  BillingDocumentRequest        : vbeln;
  ProjectBillingRequest         : bdr_ref;
  ProjBillgElmntEntrItmFlowUUID : pbee_uuid;
}
```
