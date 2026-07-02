---
name: D_SUPLRINVCCANCELP
description: D Suplrinvccancelp
semantic_en: "parameterized workflow view — supplier invoice reversal parameters including reversal reason and posting date"
semantic_vi: "chế độ xem quy trình công việc được tham số hóa — tham số hoàn ngược hóa đơn nhà cung cấp bao gồm lý do hoàn ngược và ngày hạch toán"
keywords:
  - hoàn ngược hóa đơn
  - nhà cung cấp
  - lý do hoàn ngược
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCANCELP

**D Suplrinvccancelp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReversalReason` | `stgrd` |
| `PostingDate` | `budat` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Supplier Invoice Reversal Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_SuplrInvcCancelP
{
  //key DummyKey        : abap.char(1);
      ReversalReason  : stgrd;
      PostingDate     : budat;
}
```
