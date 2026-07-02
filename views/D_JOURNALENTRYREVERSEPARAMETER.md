---
name: D_JOURNALENTRYREVERSEPARAMETER
description: D Journal EntryREVERSEPARAMETER
semantic_en: "abstract parameter structure for journal entry reversal — defines posting date, reversal reason, and user creating reversal."
semantic_vi: "cấu trúc tham số trừu tượng cho đảo ngược ghi nhập nhật ký — định nghĩa ngày ghi nhập, lý do đảo ngược và người dùng tạo."
keywords:
  - đảo ngược nhật ký
  - tham số đảo ngược
  - lý do đảo ngược
app_component: AC-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - journal-entry
  - component:AC-INT-2CL
  - lob:Other
  - bo:JournalEntry
---
# D_JOURNALENTRYREVERSEPARAMETER

**D Journal EntryREVERSEPARAMETER**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PostingDate` | `budat` |
| `ReversalReason` | `acpi_stgrd` |
| `CreatedByUser` | `usnam` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE] 
@EndUserText.label: 'Journal Entry Reverse Parameter'
define abstract entity D_JournalEntryReverseParameter 
{
    PostingDate                : budat;
    ReversalReason             : acpi_stgrd;
    CreatedByUser              : usnam;
}
```
