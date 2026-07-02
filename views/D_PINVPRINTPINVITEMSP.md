---
name: D_PINVPRINTPINVITEMSP
description: D Pinvprintpinvitemsp
semantic_en: "parameter entity for physical inventory item printing — controls sort order (special stock), serial number sequence, print queue."
semantic_vi: "Tham số in mục kiểm kho vật lý — sắp xếp theo kho đặc biệt, hàng loạt in."
keywords:
  - in ấn
  - kiểm kho
  - sắp xếp
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - item-level
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_PINVPRINTPINVITEMSP

**D Pinvprintpinvitemsp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PInvItmPrntIsSortedBySpclStk` | `mm_im_pi_sort_special_stock` |
| `PInvPrntSerialNumberSortOrder` | `mm_im_pi_sort_order` |
| `PrintQueue` | `apoc_print_queue` |
| `_Items` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Items` | `D_PInvDocPrintItemKeysP` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Importing Parameters for PI Items print'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_PInvPrintPInvItemsP
{
  PInvItmPrntIsSortedBySpclStk : mm_im_pi_sort_special_stock;
  PInvPrntSerialNumberSortOrder: mm_im_pi_sort_order;
  PrintQueue: apoc_print_queue;
  
  _Items       : composition [0..*] of D_PInvDocPrintItemKeysP;
}
```
