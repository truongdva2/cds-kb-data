---
name: D_OUTBDELIVCRTDLVITMFRMSLSDOCP
description: D Outbdelivcrtdlvitmfrmslsdocp
semantic_en: "abstract parameter to create delivery item from sales document — specifies delivery selection date."
semantic_vi: "tham số trừu tượng để tạo dòng giao hàng từ tài liệu bán hàng — xác định ngày lựa chọn giao hàng."
keywords:
  - tạo dòng giao hàng
  - tài liệu bán hàng
  - ngày lựa chọn
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
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_OUTBDELIVCRTDLVITMFRMSLSDOCP

**D Outbdelivcrtdlvitmfrmslsdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DeliverySelectionDate` | `lfdat_a` |
| `_ReferenceSDDocumentItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReferenceSDDocumentItem` | `D_OutbDelivCrteFrmSlsDocItemP` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Outb Deliv Crt Dlv Itm Frm Sls Doc P'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_OutbDelivCrtDlvItmFrmSlsDocP
{
  DeliverySelectionDate     : lfdat_a;
  _ReferenceSDDocumentItem : association [1..*] to D_OutbDelivCrteFrmSlsDocItemP on 1 = 0;
}
```
