---
name: I_CALENDARMONTHVH
description: Calendarmonthvh
semantic_en: "Value help view for calendar month selection — supporting user input and lookups."
semantic_vi: "Chế độ xem hỗ trợ giá trị cho việc chọn tháng lịch — hỗ trợ nhập liệu và tra cứu của người dùng."
keywords:
  - tháng lịch
  - trợ giúp giá trị
  - tra cứu tháng
app_component: CA-GTF-DF
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-DF
  - interface-view
  - value-help
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# I_CALENDARMONTHVH

**Calendarmonthvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CalendarMonth` | `CalendarMonth` |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICALENDARMONTHVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@EndUserText.label: 'Value Help CDS for Calendar Month'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #L
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@ObjectModel.dataCategory: #VALUE_HELP
define view I_CalendarMonthVH
  as select from I_CalendarMonth
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key CalendarMonth,
      _Text
}
```
