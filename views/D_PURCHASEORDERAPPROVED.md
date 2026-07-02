---
name: D_PURCHASEORDERAPPROVED
description: D Purchase OrderAPPROVED
semantic_en: "business event signature for approved purchase orders — records order type, purchasing organization, group, and supplier"
semantic_vi: "sự kiện kinh doanh khi đơn mua hàng được phê duyệt — ghi lại loại đơn, tổ chức mua hàng, nhóm và nhà cung cấp"
keywords:
  - đơn mua hàng phê duyệt
  - phê duyệt
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
# D_PURCHASEORDERAPPROVED

**D Purchase OrderAPPROVED**

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
@EndUserText.label: 'Purchase Order Approved'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurchaseOrderApproved
{
   PurchaseOrderType : vdm_esart;
   PurchasingOrganization: ekorg;
   PurchasingGroup : ekgrp;
   Supplier : vdm_supplierref; 
}
```
