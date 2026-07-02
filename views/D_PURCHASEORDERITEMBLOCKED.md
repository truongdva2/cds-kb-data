---
name: D_PURCHASEORDERITEMBLOCKED
description: D Purchase OrderITEMBLOCKED
semantic_en: "business event signature for purchase order item blocking — tracks order details, category, plant, product, and supplier info"
semantic_vi: "sự kiện kinh doanh khi dòng đơn mua hàng bị khóa — theo dõi chi tiết đơn, danh mục, nhà máy, sản phẩm và thông tin nhà cung cấp"
keywords:
  - dòng đơn hàng bị khóa
  - khóa dòng
  - dòng mua hàng
  - nhà cung cấp
  - sản phẩm
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-PO
  - purchase-order
  - item-level
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# D_PURCHASEORDERITEMBLOCKED

**D Purchase OrderITEMBLOCKED**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseOrderType` | `bsart` |
| `PurchasingOrganization` | `ekorg` |
| `PurchasingGroup` | `ekgrp` |
| `Supplier` | `lifnr` |
| `PurchaseOrderItemCategory` | `pstyp` |
| `Plant` | `vdm_werks_d` |
| `Product` | `matnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Purchase Order Item Blocked'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]


define abstract entity D_PurchaseOrderItemBlocked
{
    PurchaseOrderType : bsart;
    PurchasingOrganization : ekorg;
    PurchasingGroup : ekgrp;
    Supplier : lifnr;
    PurchaseOrderItemCategory : pstyp;
    Plant : vdm_werks_d;
    Product : matnr;
    
}
```
