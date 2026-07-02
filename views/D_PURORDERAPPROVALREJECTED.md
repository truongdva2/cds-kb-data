---
name: D_PURORDERAPPROVALREJECTED
description: D Purorderapprovalrejected
semantic_en: "business event signature for rejected purchase order approvals — records rejection of orders by type, organization, group, and supplier"
semantic_vi: "sự kiện kinh doanh khi phê duyệt đơn mua hàng bị từ chối — ghi lại từ chối đơn hàng theo loại, tổ chức, nhóm và nhà cung cấp"
keywords:
  - phê duyệt đơn hàng từ chối
  - từ chối đơn hàng
  - phê duyệt
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
  - approval
  - component:MM-PUR-PO-2CL
  - lob:Sourcing & Procurement
---
# D_PURORDERAPPROVALREJECTED

**D Purorderapprovalrejected**

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
@EndUserText.label: 'Purchase Order Rejected'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_PurOrderApprovalRejected 
{
   PurchaseOrderType : vdm_esart;
   PurchasingOrganization: ekorg;
   PurchasingGroup : ekgrp;
   Supplier : vdm_supplierref; 
}
```
