---
name: D_CONTRACCTGDOCUMENTCREATED
description: D Contracctgdocumentcreated
semantic_en: "Contract Accounting Document Created — tracks creation of contract accounting documents with reconciliation and origin information."
semantic_vi: "Sự kiện Tạo Tài liệu Kế toán Hợp đồng — ghi nhận tạo tài liệu kế toán hợp đồng."
keywords:
  - kế toán hợp đồng
  - tài liệu mới
  - tạo tài liệu
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# D_CONTRACCTGDOCUMENTCREATED

**D Contracctgdocumentcreated**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CAReconciliationKey` | `fikey_kk` |
| `CADocumentType` | `blart_kk` |
| `CADocumentOriginCode` | `herkf_kk` |
| `DocumentDate` | `bldat` |
| `CAPostingDate` | `budat_kk` |
| `CAReferenceDocument` | `xblnr_kk` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Contract Accounting Document Created'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContrAcctgDocumentCreated
{
  CAReconciliationKey  : fikey_kk;
  CADocumentType       : blart_kk;
  CADocumentOriginCode : herkf_kk;
  DocumentDate         : bldat;
  CAPostingDate        : budat_kk;
  CAReferenceDocument  : xblnr_kk;
}
```
