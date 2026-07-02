---
name: D_PURCHASEORDERITEMUNBLOCKED
description: D Purchase OrderITEMUNBLOCKED
semantic_en: "business event signature for unblocking purchase order items — captures removal of item block on order lines"
semantic_vi: "sự kiện kinh doanh khi khóa dòng đơn mua hàng được mở — ghi lại bỏ khóa dòng đơn hàng"
keywords:
  - mở khóa dòng đơn hàng
  - bỏ khóa
  - dòng mua hàng
  - nhà cung cấp
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
# D_PURCHASEORDERITEMUNBLOCKED

**D Purchase OrderITEMUNBLOCKED**

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
@EndUserText.label: 'Purchase Order Item Block Removed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderItemUnblocked
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
