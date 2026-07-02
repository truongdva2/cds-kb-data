---
name: D_MATERIALDOCUMENTCREATED_2
description: D Materialdocumentcreated 2
semantic_en: "event signature for material document creation — captures goods movement type when material document is created."
semantic_vi: "chữ ký sự kiện cho tạo tài liệu vật liệu — ghi lại loại chuyển động hàng khi tài liệu vật liệu được tạo."
keywords:
  - tài liệu vật liệu tạo
  - sự kiện
  - chuyển động hàng
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - material
  - document
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# D_MATERIALDOCUMENTCREATED_2

**D Materialdocumentcreated 2**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InventoryTransactionType` | `vgart` |
| `_MaterialDocumentItemCreated` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialDocumentItemCreated` | `D_MaterialDocumentItemCrted_2` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Entity for Material Document Created'

@ObjectModel: { sapObjectNodeType.name: 'MaterialDocument' }
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[ #DATA_STRUCTURE]
define root abstract entity D_MaterialDocumentCreated_2
  
{
    InventoryTransactionType     : vgart;
    _MaterialDocumentItemCreated : composition [1..*] of D_MaterialDocumentItemCrted_2;
    
}
```
