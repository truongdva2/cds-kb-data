---
name: D_BUSSOLNORDDELETED
description: D Bussolnorddeleted
semantic_en: "Event: Business Solution Order deleted — records order type and description at deletion"
semantic_vi: "Sự kiện: Đơn hàng Giải pháp Kinh doanh bị xóa — ghi lại loại đơn hàng và mô tả khi xóa"
keywords:
  - đơn hàng
  - xóa
  - sự kiện
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
  - bo:BusinessSolutionOrder
---
# D_BUSSOLNORDDELETED

**D Bussolnorddeleted**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CustMgmtObjectType` | `crmt_subobject_category_db` |
| `BusinessSolutionOrderUUID` | `crmt_object_guid` |
| `BusSolnOrdType` | `crmt_process_type_db` |
| `BusSolnOrdDescription` | `crmt_process_description` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Business Solution Order Deleted'
@Event: {
   implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.sapObjectNodeType.name: 'BusinessSolutionOrder'
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_BusSolnOrdDeleted
{
  CustMgmtObjectType        : crmt_subobject_category_db;
  BusinessSolutionOrderUUID : crmt_object_guid;
  BusSolnOrdType            : crmt_process_type_db;
  BusSolnOrdDescription     : crmt_process_description;
}
```
