---
name: D_CONTRACCTGDOCUMENTCHANGED
description: D Contracctgdocumentchanged
semantic_en: "Contract Accounting Document Changed — records modifications to contract accounting documents including document type and posting date."
semantic_vi: "Sự kiện Thay đổi Tài liệu Kế toán Hợp đồng — ghi nhận thay đổi tài liệu kế toán."
keywords:
  - kế toán hợp đồng
  - thay đổi tài liệu
  - ngày ghi sổ
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
# D_CONTRACCTGDOCUMENTCHANGED

**D Contracctgdocumentchanged**

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
@EndUserText.label: 'Contract Accounting Document Changed'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContrAcctgDocumentChanged
{
  CAReconciliationKey  : fikey_kk;
  CADocumentType       : blart_kk;
  CADocumentOriginCode : herkf_kk;
  DocumentDate         : bldat;
  CAPostingDate        : budat_kk;
  CAReferenceDocument  : xblnr_kk;
}
```
