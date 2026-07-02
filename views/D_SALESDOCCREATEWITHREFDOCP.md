---
name: D_SALESDOCCREATEWITHREFDOCP
description: D Salesdoccreatewithrefdocp
semantic_en: "sales document creation parameter with reference — specifies document type and reference source for creating derived sales documents"
semantic_vi: "tham số tạo tài liệu bán hàng với tham chiếu — chỉ định loại tài liệu và nguồn tham chiếu để tạo tài liệu bán hàng dẫn xuất"
keywords:
  - tạo tài liệu bán hàng
  - tham chiếu
  - loại tài liệu
  - tạo với tham chiếu
app_component: SD-SLS-SO-RAP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# D_SALESDOCCREATEWITHREFDOCP

**D Salesdoccreatewithrefdocp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesDocumentType` | `auart` |
| `ReferenceSDDocument` | `vgbel` |
| `_ReferenceSDDocumentItems` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReferenceSDDocumentItems` | `D_SalesDocCreateWithRefItemP` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Sls Doc Create with Ref action param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_SalesDocCreateWithRefDocP
{

  SalesDocumentType        : auart;
  ReferenceSDDocument      : vgbel;

  _ReferenceSDDocumentItems : association [0..*] to D_SalesDocCreateWithRefItemP on 1 = 0; //reuse
  
}
```
