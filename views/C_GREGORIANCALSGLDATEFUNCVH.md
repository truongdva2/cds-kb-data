---
name: C_GREGORIANCALSGLDATEFUNCVH
description: Gregoriancalsgldatefuncvh
semantic_en: "VH: Single Gregorian calendar date functions — value help listing only single-type (DateFunctionType = '01') Gregorian calendar date functions active as of the current session date."
semantic_vi: "VH: Hàm ngày đơn lịch Gregorian — danh sách trợ giúp giá trị chỉ dành cho các hàm ngày lịch Gregorian thuộc loại đơn (DateFunctionType = '01') còn hiệu lực tại ngày phiên làm việc hiện tại."
keywords:
  - hàm ngày đơn lịch Gregorian
  - trợ giúp giá trị ngày đơn
  - lịch dương đơn
  - chức năng ngày tháng SAP
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
  - consumption-view
  - value-help
  - component:CA-GTF-DF
  - lob:Cross-Application Components
---
# C_GREGORIANCALSGLDATEFUNCVH

**Gregoriancalsgldatefuncvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-DF` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DateFunction` | `DateFunction` |
| `DateFunctionName` | `expr(…)` |
| `DateFunctionDescription` | `expr(…)` |
| `DateFunctionStartDate` | `DateFunctionStartDate` |
| `DateFunctionEndDate` | `DateFunctionEndDate` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CGCALSGLDFVH'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Value Help for Single Gregorian Calendar Date Functions'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality:  #C
@ObjectModel.usageType.sizeCategory:  #S
@ObjectModel.dataCategory: #VALUE_HELP
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION 
@Search.searchable: true

define view C_GregorianCalSglDateFuncVH as select from I_DateFunctionValue {
    @Search.defaultSearchElement : true
    @ObjectModel.text.element: ['DateFunctionName']
    key DateFunction, 
    @Search.defaultSearchElement : true
    _Datefunction._DateFunctionText[1: Language = $session.system_language].DateFunctionName,
    @Search.defaultSearchElement : true
    _Datefunction._DateFunctionText[1: Language = $session.system_language].DateFunctionDescription,
    DateFunctionStartDate, 
    DateFunctionEndDate
}
where
      DateFunctionValidityDate = $session.system_date and
      _Datefunction.DateFunctionType = '01'
```
