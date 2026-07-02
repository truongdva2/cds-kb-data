---
name: D_JOURNALENTRYCREATED
description: D Journal EntryCREATED
semantic_en: "journal entry creation event — change-document signature triggered when a new JournalEntry is created, capturing the entry identifier."
semantic_vi: "sự kiện tạo ghi chép nhật ký — chữ ký tài liệu thay đổi được kích hoạt khi tạo JournalEntry mới, ghi lại mã định danh mục."
keywords:
  - tạo ghi chép
  - nhật ký
  - sự kiện
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
# D_JOURNALENTRYCREATED

**D Journal EntryCREATED**

| Property | Value |
|---|---|
| App Component | `AC-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `JournalEntry` | `belnr_d` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Journal Entry Created'
@Event.description: 'This event is raised if a journal entry document was successfully created'
//@Event.sapObjectType: 'JournalEntry'
//@Event.sapObjectNodeType: 'JournalEntry'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name:'JournalEntry'
@Event.type: 'Created'
@Event.implementedBy: ['ABAP:RAP_EVENT']
@Event.sapObjectNodeTypeKey:[{element:'CompanyCode'},
                             {element:'FiscalYear'},
                             {element:'AccountingDocument'}]
@Metadata.allowExtensions: true
define abstract entity D_JournalEntryCreated
{
  //  key CompanyCode        : bukrs;
  //  key FiscalYear         : gjahr;
  //      //  key JournalEntry       : belnr_d;
  //  key AccountingDocument : belnr_d;
  JournalEntry : belnr_d;
}
```
