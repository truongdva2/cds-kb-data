---
name: D_PINVRECOUNTPHYSINVTRYDOCITMP
description: D Pinvrecountphysinvtrydocitmp
semantic_en: "parameter entity for physical inventory recount action — includes planned count date, posting date, document flags, document status, numbers, and description."
semantic_vi: "Tham số thực hiện đếm lại kiểm kho vật lý — ngày dự kiến, ngày ghi sổ, cờ tài liệu."
keywords:
  - đếm lại
  - kiểm kho
  - ngày
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
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# D_PINVRECOUNTPHYSINVTRYDOCITMP

**D Pinvrecountphysinvtrydocitmp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PhysInventoryPlannedCountDate` | `gidat` |
| `DocumentDate` | `bldat` |
| `PostingIsBlockedForPhysInvtry` | `isper` |
| `PhysInvtryDocHasQtySnapshot` | `pi_book_inventory_freeze` |
| `PhysicalInventoryNumber` | `pi_number` |
| `PhysInventoryReferenceNumber` | `pi_reference` |
| `PhysicalInventoryDocumentDesc` | `im_pi_doc_description` |
| `_Items` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Items` | `D_PInvDocRecountItemKeysP` | [0..*] |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Parameters for recount action of item'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_PInvRecountPhysInvtryDocItmP
{
  PhysInventoryPlannedCountDate : gidat;
  DocumentDate                  : bldat;
  PostingIsBlockedForPhysInvtry : isper;
  PhysInvtryDocHasQtySnapshot   : pi_book_inventory_freeze;
  PhysicalInventoryNumber       : pi_number;
  PhysInventoryReferenceNumber  : pi_reference;
  PhysicalInventoryDocumentDesc : im_pi_doc_description;

  _Items       : composition [0..*] of D_PInvDocRecountItemKeysP;
}
```
