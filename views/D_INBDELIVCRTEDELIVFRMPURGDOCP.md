---
name: D_INBDELIVCRTEDELIVFRMPURGDOCP
description: D Inbdelivcrtedelivfrmpurgdocp
semantic_en: "Inbound delivery: create delivery from purchasing document action parameter — input structure with Supplier, DeliveryDate, DeliveryTime, supplier delivery reference, means of transport, and reference purchasing document items."
semantic_vi: "Nhận hàng nội bộ: tham số hành động tạo phiếu giao hàng từ chứng từ mua hàng — cấu trúc đầu vào gồm nhà cung cấp, ngày và giờ giao hàng, số tham chiếu giao hàng của nhà cung cấp, phương tiện vận tải và các dòng chứng từ mua tham chiếu."
keywords:
  - nhận hàng nội bộ
  - tạo giao hàng từ mua hàng
  - nhà cung cấp
  - phương tiện vận tải
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
# D_INBDELIVCRTEDELIVFRMPURGDOCP

**D Inbdelivcrtedelivfrmpurgdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Supplier` | `lifnr` |
| `DeliveryDate` | `lfdat_v` |
| `DeliveryTime` | `lfuhr` |
| `DeliveryDocumentBySupplier` | `lifex` |
| `MeansOfTransportType` | `traty` |
| `MeansOfTransport` | `traid` |
| `_ReferencePurgDocumentItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReferencePurgDocumentItem` | `D_InbDelivCrteFrmPurgDocItemP` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Inb Deliv Crte Deliv Frm Purg Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_InbDelivCrteDelivFrmPurgDocP
{
  Supplier                   : lifnr;
  DeliveryDate               : lfdat_v;
  DeliveryTime               : lfuhr;
  DeliveryDocumentBySupplier : lifex;
  MeansOfTransportType       : traty;
  MeansOfTransport           : traid;
  _ReferencePurgDocumentItem  : association [1..*] to D_InbDelivCrteFrmPurgDocItemP on 1 = 0;
}
```
