---
name: D_OUTBDELIVCRTEDELIVFRMSLSDOCP
description: D Outbdelivcrtedelivfrmslsdocp
semantic_en: "abstract parameter to create outbound delivery from sales document — controls shipping point, selection date, and delivery type."
semantic_vi: "tham số trừu tượng để tạo giao hàng đi từ tài liệu bán hàng — kiểm soát điểm vận chuyển, ngày lựa chọn và loại giao hàng."
keywords:
  - tạo giao hàng đi
  - bán hàng
  - điểm vận chuyển
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
# D_OUTBDELIVCRTEDELIVFRMSLSDOCP

**D Outbdelivcrtedelivfrmslsdocp**

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
| `_ReferenceSDDocumentItem` | `D_OutbDelivCrteFrmSlsDocItemP` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Outb Deliv Crte Deliv Frm Sls Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_OutbDelivCrteDelivFrmSlsDocP
{
  ShippingPoint             : vstel;
  DeliverySelectionDate     : lfdat_a;
  DeliveryDocumentType      : lfart;
  _ReferenceSDDocumentItem : association [1..*] to D_OutbDelivCrteFrmSlsDocItemP on 1 = 0;
}
```
