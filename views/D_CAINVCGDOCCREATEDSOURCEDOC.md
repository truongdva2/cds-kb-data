---
name: D_CAINVCGDOCCREATEDSOURCEDOC
description: D Cainvcgdoccreatedsourcedoc
semantic_en: "Invoicing Document Created - Source Document — records creation of invoicing documents with source document category and reference."
semantic_vi: "Sự kiện tạo Tài liệu Hóa đơn từ Tài liệu Nguồn — ghi nhận tạo tài liệu hóa đơn từ tài liệu gốc."
keywords:
  - tài liệu hóa đơn
  - tài liệu nguồn
  - tạo tài liệu
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# D_CAINVCGDOCCREATEDSOURCEDOC

**D Cainvcgdoccreatedsourcedoc**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CAInvcgSourceDocumentCat` | `srcdoccat_kk` |
| `CAInvcgSourceDocumentNumber` | `srcdocno_kk` |
| `_Parent` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Parent` | `D_ContrAcctgInvcgDocCreated` | — |

## Source Code

```abap
@EndUserText.label: 'Invcg Doc Created - Source Document'
@ObjectModel: {
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocument',
  supportedCapabilities: [#DATA_STRUCTURE]
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions
define abstract entity D_CAInvcgDocCreatedSourceDoc
{
  CAInvcgSourceDocumentCat    : srcdoccat_kk;
  CAInvcgSourceDocumentNumber : srcdocno_kk;
  _Parent                     : association to parent D_ContrAcctgInvcgDocCreated;
}
```
