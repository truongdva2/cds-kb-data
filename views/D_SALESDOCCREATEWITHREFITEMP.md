---
name: D_SALESDOCCREATEWITHREFITEMP
description: D Salesdoccreatewithrefitemp
semantic_en: "sales document item creation with reference parameter — specifies referenced item and requested quantity/unit for line creation"
semantic_vi: "tham số tạo dòng tài liệu bán hàng với tham chiếu — chỉ định dòng tham chiếu và số lượng/đơn vị yêu cầu để tạo dòng"
keywords:
  - tạo dòng bán hàng
  - tham chiếu dòng
  - số lượng yêu cầu
  - đơn vị
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
  - item-level
  - component:SD-SLS-SO-RAP-2CL
  - lob:Sales & Distribution
---
# D_SALESDOCCREATEWITHREFITEMP

**D Salesdoccreatewithrefitemp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-RAP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferenceSDDocumentItem` | `vgpos` |
| `RequestedQuantity` | `reqd_qty` |
| `RequestedQuantityUnit` | `reqd_qty_unit` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Actn Param Cr with Ref Item in Sls Doc'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define root abstract entity D_SalesDocCreateWithRefItemP
{
  ReferenceSDDocumentItem : vgpos;

  @Semantics.quantity.unitOfMeasure: 'RequestedQuantityUnit'
  @Semantics.valueRange.minimum: '0'
  RequestedQuantity       : reqd_qty;

  RequestedQuantityUnit   : reqd_qty_unit;

}
```
