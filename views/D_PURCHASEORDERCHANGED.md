---
name: D_PURCHASEORDERCHANGED
description: D Purchase OrderCHANGED
semantic_en: "business event signature for purchase order modifications — captures order type, purchasing organization, group, and supplier changes"
semantic_vi: "sự kiện kinh doanh khi đơn mua hàng thay đổi — ghi lại loại đơn, tổ chức mua hàng, nhóm và nhà cung cấp"
keywords:
  - đơn mua hàng thay đổi
  - sự kiện thay đổi
  - nhà cung cấp
  - tổ chức mua hàng
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
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseOrder
---
# D_PURCHASEORDERCHANGED

**D Purchase OrderCHANGED**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseOrderType` | `vdm_esart` |
| `PurchasingOrganization` | `ekorg` |
| `PurchasingGroup` | `ekgrp` |
| `Supplier` | `vdm_supplierref` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Purchase Order Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderChanged
{
   PurchaseOrderType : vdm_esart;
   PurchasingOrganization: ekorg;
   PurchasingGroup : ekgrp;
   Supplier : vdm_supplierref; 
}
```
