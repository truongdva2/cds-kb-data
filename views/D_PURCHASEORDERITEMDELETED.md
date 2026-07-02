---
name: D_PURCHASEORDERITEMDELETED
description: D Purchase OrderITEMDELETED
semantic_en: "business event signature for deleted purchase order items — tracks deleted item category, plant, product, and supplier"
semantic_vi: "sự kiện kinh doanh khi dòng đơn mua hàng bị xóa — theo dõi danh mục dòng xóa, nhà máy, sản phẩm và nhà cung cấp"
keywords:
  - dòng đơn hàng xóa
  - xóa dòng
  - danh mục dòng
  - sản phẩm
  - nhà máy
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
# D_PURCHASEORDERITEMDELETED

**D Purchase OrderITEMDELETED**

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
@EndUserText.label: 'Purchase Order Item Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderItemDeleted
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
