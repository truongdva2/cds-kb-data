---
name: I_DOCUMENTINFORECORDACCMACTV
description: Documentinforecordaccmactv
semantic_en: "logging and access control view indicating whether log access module object types are active for document records"
semantic_vi: "khung nhìn kiểm soát truy cập ghi nhật ký chỉ rõ liệu các loại đối tượng mô-đun truy cập nhật ký có hoạt động cho bản ghi tài liệu không"
keywords:
  - kiểm soát truy cập
  - trạng thái hoạt động
  - mô-đun ghi nhật ký
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDACCMACTV

**Documentinforecordaccmactv**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LogAccMObjectType` | `LogAccMObjectType` |
| `LogAccMObjectTypeIsActive` | `LogAccMObjectTypeIsActive` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCACCMACTV'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE ]

@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Document Info Record LogAccM Active'
define view I_DocumentInfoRecordAccMActv as select from I_LogAccMObjectTypeActive
{
  key LogAccMObjectType,
      LogAccMObjectTypeIsActive
}
```
