---
name: D_PRODUCTIONORDERCREATED
description: D Production OrderCREATED
semantic_en: "business event signature for production order creation — records manufacturing order, type, and plant assignment"
semantic_vi: "sự kiện kinh doanh khi lệnh sản xuất được tạo — ghi lại lệnh sản xuất, loại và gán nhà máy"
keywords:
  - lệnh sản xuất mới
  - tạo lệnh sản xuất
  - loại lệnh sản xuất
  - nhà máy sản xuất
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - product
  - production-order
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# D_PRODUCTIONORDERCREATED

**D Production OrderCREATED**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ManufacturingOrder` | `manufacturingorder` |
| `ProductionOrderType` | `aufart` |
| `ProductionPlant` | `werks_d` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'ProductionOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
@EndUserText.label: 'Production Order Created'
define abstract entity D_ProductionOrderCreated 
{
// no key for RAP events - key derived implicitly from root node
      ManufacturingOrder          : manufacturingorder;
      ProductionOrderType         : aufart;
      ProductionPlant             : werks_d;
}
```
