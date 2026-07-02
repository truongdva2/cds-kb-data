---
name: D_CONTRACCTGDOCUMENTCANCELED
description: D Contracctgdocumentcanceled
semantic_en: "Contract Accounting Document Canceled — records cancellation of contract accounting documents with document type and dating information."
semantic_vi: "Sự kiện Hủy Tài liệu Kế toán Hợp đồng — ghi nhận hủy tài liệu kế toán hợp đồng."
keywords:
  - kế toán hợp đồng
  - hủy tài liệu
  - ngày tháng
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
# D_CONTRACCTGDOCUMENTCANCELED

**D Contracctgdocumentcanceled**

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
@EndUserText.label: 'Contract Accounting Document Canceled'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContrAcctgDocumentCanceled
{
  CAReconciliationKey  : fikey_kk;
  CADocumentType       : blart_kk;
  CADocumentOriginCode : herkf_kk;
  DocumentDate         : bldat;
  CAPostingDate        : budat_kk;
  CAReferenceDocument  : xblnr_kk;
}
```
