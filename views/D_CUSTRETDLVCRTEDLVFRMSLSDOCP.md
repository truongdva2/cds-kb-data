---
name: D_CUSTRETDLVCRTEDLVFRMSLSDOCP
description: D Custretdlvcrtedlvfrmslsdocp
semantic_en: "Customer return: create delivery from sales document action parameter — input structure with ShippingPoint, DeliverySelectionDate, DeliveryDocumentType, and reference SD document items."
semantic_vi: "Trả hàng khách hàng: tham số hành động tạo giao hàng từ chứng từ bán hàng — cấu trúc đầu vào gồm điểm giao hàng, ngày chọn giao hàng, loại chứng từ giao hàng và các dòng chứng từ SD tham chiếu."
keywords:
  - trả hàng khách hàng
  - tạo giao hàng
  - điểm giao hàng
  - chứng từ bán hàng
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
# D_CUSTRETDLVCRTEDLVFRMSLSDOCP

**D Custretdlvcrtedlvfrmslsdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ShippingPoint` | `vstel` |
| `DeliverySelectionDate` | `lfdat_a` |
| `DeliveryDocumentType` | `lfart` |
| `_ReferenceSDDocumentItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReferenceSDDocumentItem` | `D_CustRetDlvCrteFrmSlsDocItemP` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'CustRetDel Crte Deliv Frm Sls Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetDlvCrteDlvFrmSlsDocP {
  ShippingPoint             : vstel;
  DeliverySelectionDate     : lfdat_a;
  DeliveryDocumentType      : lfart;
  _ReferenceSDDocumentItem  : association [1..*] to D_CustRetDlvCrteFrmSlsDocItemP on 1 = 0;
}
```
