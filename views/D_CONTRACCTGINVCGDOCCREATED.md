---
name: D_CONTRACCTGINVCGDOCCREATED
description: D Contracctginvcgdoccreated
semantic_en: "Contract Accounting Invoicing Document Created — tracks creation of invoicing documents for contract accounts."
semantic_vi: "Sự kiện Tạo Tài liệu Hóa đơn Kế toán Hợp đồng — ghi nhận tạo tài liệu hóa đơn kế toán."
keywords:
  - hợp đồng tài chính
  - tài liệu hóa đơn
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
# D_CONTRACCTGINVCGDOCCREATED

**D Contracctginvcgdoccreated**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ContractAccount` | `vkont_kk` |
| `_SourceDocument` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceDocument` | `D_CAInvcgDocCreatedSourceDoc` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Invoicing Document Created'
@ObjectModel: {
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocument',
  supportedCapabilities: [#DATA_STRUCTURE]
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions
define root abstract entity D_ContrAcctgInvcgDocCreated
{
  ContractAccount : vkont_kk;
  _SourceDocument : composition [0..*] of D_CAInvcgDocCreatedSourceDoc;
}
```
