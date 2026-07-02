---
name: D_PROCESSORDERCHANGED
description: D Processorderchanged
semantic_en: "process order changed event — triggered when manufacturing order, order type, or production plant changes."
semantic_vi: "Sự kiện thay đổi lệnh công nghiệp — cập nhật loại lệnh, nhà máy sản xuất."
keywords:
  - sự kiện thay đổi
  - lệnh công nghiệp
  - nhà máy
app_component: PP-PI-POR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PI
  - PP-PI-POR
  - component:PP-PI-POR-2CL
  - lob:Manufacturing
  - bo:ProcessOrder
---
# D_PROCESSORDERCHANGED

**D Processorderchanged**

| Property | Value |
|---|---|
| App Component | `PP-PI-POR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ManufacturingOrder` | `manufacturingorder` |
| `ProcessOrderType` | `aufart` |
| `ProductionPlant` | `pwwrk` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'ProcessOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
@EndUserText.label: 'Process Order Changed'
define abstract entity D_ProcessOrderChanged 
{
// no key for RAP events - key derived implicitly from root node
      ManufacturingOrder          : manufacturingorder;
      ProcessOrderType            : aufart;
      ProductionPlant             : pwwrk;
}
```
