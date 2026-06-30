---
name: D_CUSTRETDLVCRTEFRMSLSDOCITEMP
description: D Custretdlvcrtefrmslsdocitemp
semantic_en: "Customer return: create delivery from sales document item action parameter — input structure identifying a specific sales document item by ReferenceSDDocument and ReferenceSDDocumentItem."
semantic_vi: "Trả hàng khách hàng: tham số dòng chứng từ khi tạo giao hàng từ chứng từ bán hàng — cấu trúc đầu vào xác định dòng chứng từ bán hàng bằng số chứng từ và số dòng SD."
keywords:
  - trả hàng khách hàng
  - dòng chứng từ bán hàng
  - tạo giao hàng
  - tham số dòng
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
# D_CUSTRETDLVCRTEFRMSLSDOCITEMP

**D Custretdlvcrtefrmslsdocitemp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferenceSDDocument` | `vbeln` |
| `ReferenceSDDocumentItem` | `posnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'CustRetDel Crte Frm Sls Doc Item P'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_CustRetDlvCrteFrmSlsDocItemP {
    ReferenceSDDocument : vbeln;
    ReferenceSDDocumentItem : posnr;
}
```
