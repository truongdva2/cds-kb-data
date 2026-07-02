---
name: D_BUSSOLNORDITMCREATED
description: D Bussolnorditmcreated
semantic_en: "Business Solution Order Item Created — tracks creation of business solution order items with category and description information."
semantic_vi: "Sự kiện tạo Mục đơn đặt hàng Giải pháp Kinh doanh — ghi nhận tạo mục đơn đặt hàng mới."
keywords:
  - tạo mục đơn đặt hàng
  - danh mục sản phẩm
  - giải pháp kinh doanh
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SOL-SLO
  - lob:Other
  - bo:BusinessSolutionOrderItem
---
# D_BUSSOLNORDITMCREATED

**D Bussolnorditmcreated**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessSolutionOrderItemUUID` | `crmt_object_guid` |
| `BusSolnOrdItmCategory` | `crmt_item_type_db` |
| `BusSolnOrdItmDescription` | `crms4_solo_item_desc` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Business Solution Order Item Created'
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrderItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_BusSolnOrdItmCreated
{
  BusinessSolutionOrderItemUUID : crmt_object_guid;
  BusSolnOrdItmCategory         : crmt_item_type_db;
  BusSolnOrdItmDescription      : crms4_solo_item_desc;
}
```
