---
name: D_INBDELIVCRTEFRMPURGDOCITEMP
description: D Inbdelivcrtefrmpurgdocitemp
semantic_en: "inbound delivery creation from purchase document item parameters — action parameter capturing sales document reference for creating inbound delivery from purchase order items."
semantic_vi: "tham số tạo giao hàng nhập từ mục tài liệu mua — tham số hành động ghi lại tham chiếu tài liệu bán để tạo giao hàng nhập từ mục đơn hàng mua."
keywords:
  - giao hàng nhập
  - tạo
  - đơn hàng mua
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_INBDELIVCRTEFRMPURGDOCITEMP

**D Inbdelivcrtefrmpurgdocitemp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferenceSDDocument` | `vgbel` |
| `ReferenceSDDocumentItem` | `vgpos` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Inb Deliv Crte Frm Purg Doc Item P'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_InbDelivCrteFrmPurgDocItemP
{
  ReferenceSDDocument             : vgbel;
  ReferenceSDDocumentItem         : vgpos;
}
```
