---
name: I_MAINTTASKLISTOPLONGTEXTTP
description: Maintenance Task ListOPLONGTEXTTP
semantic_en: "operation long text text processing — language-dependent long text descriptions for maintenance task list operations"
semantic_vi: "mô tả văn bản dài đa ngôn ngữ cho hoạt động danh sách tác vụ bảo trì"
keywords:
  - danh sách tác vụ
  - mô tả dài
  - ngôn ngữ
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - interface-view
  - transactional-processing
  - text
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# I_MAINTTASKLISTOPLONGTEXTTP

**Maintenance Task ListOPLONGTEXTTP**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TaskListType` | `TaskListType` |
| `TaskListGroup` | `TaskListGroup` |
| `TaskListGroupCounter` | `TaskListGroupCounter` |
| `TaskListSequence` | `TaskListSequence` |
| `TaskListOperationInternalId` | `TaskListOperationInternalId` |
| `TaskListOpBOMItmIntVersCounter` | `TaskListOpBOMItmIntVersCounter` |
| `MaintenanceTaskListOperation` | `MaintenanceTaskListOperation` |
| `TextObjectKey` | `TextObjectKey` |
| `Language` | `Language` |
| `PlainLongText` | `PlainLongText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Operation Long Text - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory:#TEXT 
@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   }
 }
 
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MaintTaskListOpLongTextTP 
  as projection on R_MaintTaskListOpLongTextTP as TasListOpLongText
{

  key  TaskListType,
  key  TaskListGroup,
  key  TaskListGroupCounter,
  key  TaskListSequence,
  key  TaskListOperationInternalId,
  key  TaskListOpBOMItmIntVersCounter,
       MaintenanceTaskListOperation,
       TextObjectKey,
       @Semantics.language: true
       Language,   
       @Semantics.text:true    
       PlainLongText,
       _Header    : redirected to I_MaintenanceTaskListTP_2,
       _Operation : redirected to I_MaintTaskListOpBasicTP,
       _NonHistOp : redirected to parent I_MaintTaskListOperationTP_2
}
```
