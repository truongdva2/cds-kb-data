---
name: D_MATERIALDOCUMENTITEMCANCLD_2
description: D Materialdocumentitemcancld 2
semantic_en: "event signature for material document item cancellation — captures item number, movement type, and location when item is canceled."
semantic_vi: "chữ ký sự kiện cho hủy dòng tài liệu vật liệu — ghi lại số dòng, loại chuyển động và vị trí khi dòng bị hủy."
keywords:
  - dòng vật liệu hủy
  - sự kiện
  - vị trí kho
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
  - item-level
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# D_MATERIALDOCUMENTITEMCANCLD_2

**D Materialdocumentitemcancld 2**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaterialDocumentItem` | `mblpo` |
| `GoodsMovementType` | `bwart` |
| `Plant` | `werks_d` |
| `StorageLocation` | `lgort_d` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_MaterialDocumentCanceled_2` | — |

## Source Code

```abap
@EndUserText.label: 'Entity for MaterialDocumentItem Canceled'
@ObjectModel: { sapObjectNodeType.name: 'MaterialDocumentItem' }
@ObjectModel: { supportedCapabilities: [#DATA_STRUCTURE]  }
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_MaterialDocumentItemCancld_2  
{
  MaterialDocumentItem        : mblpo;
  
  @Event.qualifiesEventType: true   
  GoodsMovementType         : bwart;
  Plant                     : werks_d;
  StorageLocation           : lgort_d;
  
  _DummyAssociation         : association to parent D_MaterialDocumentCanceled_2;
    
}
```
