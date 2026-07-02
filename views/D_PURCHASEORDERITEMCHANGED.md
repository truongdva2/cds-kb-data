---
name: D_PURCHASEORDERITEMCHANGED
description: D Purchase OrderITEMCHANGED
semantic_en: "business event signature for purchase order item changes — captures item category, plant, product, and supplier modifications"
semantic_vi: "sự kiện kinh doanh khi dòng đơn mua hàng thay đổi — ghi lại danh mục dòng, nhà máy, sản phẩm và thay đổi nhà cung cấp"
keywords:
  - dòng đơn hàng thay đổi
  - sự kiện dòng
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
# D_PURCHASEORDERITEMCHANGED

**D Purchase OrderITEMCHANGED**

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
@EndUserText.label: 'Purchase Order Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderItemChanged
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
