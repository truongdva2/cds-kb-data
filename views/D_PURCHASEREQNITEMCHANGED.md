---
name: D_PURCHASEREQNITEMCHANGED
description: D Purchase RequisitionNITEMCHANGED
semantic_en: "business event signature for purchase requisition item changes — tracks requisition type, item category, material group, and organizational data"
semantic_vi: "sự kiện kinh doanh khi dòng yêu cầu mua hàng thay đổi — theo dõi loại yêu cầu, danh mục dòng, nhóm vật liệu và dữ liệu tổ chức"
keywords:
  - dòng yêu cầu mua thay đổi
  - yêu cầu mua hàng
  - danh mục dòng
  - nhóm vật liệu
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - purchase-requisition
  - item-level
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseRequisitionItem
---
# D_PURCHASEREQNITEMCHANGED

**D Purchase RequisitionNITEMCHANGED**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseRequisitionType` | `bbsrt` |
| `PurchasingDocumentItemCategory` | `pstyp` |
| `MaterialGroup` | `matkl` |
| `PurchasingOrganization` | `ekorg` |
| `PurchasingGroup` | `ekgrp` |
| `Plant` | `ewerk` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Purchase Requisition Item Changed'
@Event: { description: 'This event is raised when a purchase requisition item instance has been Changed',
          implementedBy:['ABAP:RAP_EVENT']}
//@Event.sapObjectNodeTypeKey:[{element:'PurchaseRequisition'},
//                            {element:'PurchaseRequisitionItem'}]   
@ObjectModel.sapObjectNodeType.name: 'PurchaseRequisitionItem'  
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]                                 
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_PurchaseReqnItemChanged
{
//  PurchaseRequisitionItem        : vdm_purchaserequisitionitem;
  PurchaseRequisitionType        : bbsrt;
  PurchasingDocumentItemCategory : pstyp;
  MaterialGroup                  : matkl;  
  PurchasingOrganization         : ekorg;
  PurchasingGroup                : ekgrp;
  Plant                          : ewerk;
}
```
