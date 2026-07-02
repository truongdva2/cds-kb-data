---
name: D_HIERMOVEPRODTOANOTHERNDEP
description: D Hiermoveprodtoanotherndep
semantic_en: "product hierarchy move action parameter — specifies target node in product hierarchy for moving products between hierarchy levels."
semantic_vi: "tham số hành động di chuyển sản phẩm trong phân cấp — xác định nút đích trong phân cấp sản phẩm để di chuyển sản phẩm giữa các cấp."
keywords:
  - phân cấp sản phẩm
  - di chuyển
  - tham số
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# D_HIERMOVEPRODTOANOTHERNDEP

**D Hiermoveprodtoanotherndep**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProductHierarchyTargetNode` | `parnode` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'ActionParameter:ProdHier MoveProduct'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_HierMoveProdToAnotherNdeP
{
  ProductHierarchyTargetNode : parnode;  
}
```
