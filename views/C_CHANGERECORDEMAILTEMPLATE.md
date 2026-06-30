---
name: C_CHANGERECORDEMAILTEMPLATE
description: Change RecordEMAILTEMPLATE
semantic_en: "Email template helper for change record — email/workflow template combining change record header, process route, type description, user status description, contact person, and expected completion date for outbound workflow emails."
semantic_vi: "Mẫu email trợ lý cho phiếu thay đổi — mẫu email/quy trình kết hợp tiêu đề phiếu thay đổi, tuyến quy trình, mô tả loại, mô tả trạng thái người dùng, người liên lạc và ngày hoàn thành dự kiến để gửi email quy trình."
keywords:
  - mẫu email phiếu thay đổi
  - thông báo quy trình thay đổi
  - tuyến quy trình thay đổi
  - trạng thái phiếu thay đổi
app_component: PLM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-CR
  - consumption-view
  - workflow
  - change-record
  - email
  - component:PLM-CR-2CL
  - lob:Other
---
# C_CHANGERECORDEMAILTEMPLATE

**Change RecordEMAILTEMPLATE**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeRecordUUID` | `P_ChangeRecordMyInboxTask.ChangeRecordUUID` |
| `ProcessRouteTask` | `_ProcessRouteTask.ProcessRouteTask` |
| `ChangeRecord` | `P_ChangeRecordMyInboxTask.ChangeRecord` |
| `ProcessRoute` | `ProcessRoute` |
| `ProcessRouteActivityArea` | `ProcessRouteActivityArea` |
| `ChgRecordDescriptionText` | `P_ChangeRecordMyInboxTask.ChgRecordDescriptionText` |
| `ChangeRecordType` | `P_ChangeRecordMyInboxTask.ChangeRecordType` |
| `ChangeRecordTypeDesc` | `_ChangeRecordTypeVH.ChangeRecordTypeDesc` |
| `ChangeRecordStatus` | `P_ChangeRecordMyInboxTask.ChangeRecordStatus` |
| `ChangeRecordStatusDescription` | `_UserStatusVH.ChangeRecordStatusDescription` |
| `PersonFullName` | `_ChangeRecordContactPerson.PersonFullName` |
| `ChgRecdExpectedCompletionDate` | `ChgRecdExpectedCompletionDate` |
| `ChgRecdAddlAttribDetailDesc` | `ChangeRecordDetailDescription` |
| `Partner` | `P_ChangeRecordMyInboxTask.Partner` |
| `_ChangeRecordType` | *Association* |
| `_ChangeRecordTypeVH` | *Association* |
| `_UserStatusVH` | *Association* |
| `_ChangeRecordContactPerson` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeRecordType` | `I_ChangeRecordType` | [1..1] |
| `_ChangeRecordTypeVH` | `C_ChangeRecordTypeVH` | [0..1] |
| `_UserStatusVH` | `C_UserStatusVH` | [0..1] |
| `_ChangeRecordContactPerson` | `I_ChangeRecordContactPerson` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CHGRECPREMAIL'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Change record email template helper'
@ObjectModel.usageType: { serviceQuality: #D,
                          dataClass: #MIXED,
                          sizeCategory: #XL }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #KEY_USER_COPYING_TEMPLATE ]
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@UI.headerInfo: {
        typeName: 'ChangeRecord',
        typeNamePlural: 'ChangeRecord',
        title: {
            type: #STANDARD,
            label: 'Change Record',
            value: 'ChgRecordDescriptionText'
        },
        description: {
            type: #STANDARD,
//            label: 'Change Record Description',
            value: 'ChangeRecord'
        }
}
define view C_ChangeRecordEmailTemplate
  as select from P_ChangeRecordMyInboxTask 
  association [1..1] to I_ChangeRecordType          as _ChangeRecordType          on  $projection.ChangeRecordType = _ChangeRecordType.ChangeRecordType
  association [0..1] to C_ChangeRecordTypeVH        as _ChangeRecordTypeVH        on  $projection.ChangeRecordType = _ChangeRecordTypeVH.ChangeRecordType
  association [0..1] to C_UserStatusVH              as _UserStatusVH              on  $projection.ChangeRecordType   = _UserStatusVH.ChangeRecordType
                                                                                  and $projection.ChangeRecordStatus = _UserStatusVH.ChangeRecordStatus
  association [0..1] to I_ChangeRecordContactPerson as _ChangeRecordContactPerson on  $projection.Partner = _ChangeRecordContactPerson.Partner
{
      @Consumption.semanticObject: 'ChangeRecord'
  key P_ChangeRecordMyInboxTask.ChangeRecordUUID,
  key _ProcessRouteTask.ProcessRouteTask,
      P_ChangeRecordMyInboxTask.ChangeRecord,
      ProcessRoute,
      ProcessRouteActivityArea,
      P_ChangeRecordMyInboxTask.ChgRecordDescriptionText,

      @ObjectModel.text.element: ['ChangeRecordTypeDesc']
      P_ChangeRecordMyInboxTask.ChangeRecordType,
      _ChangeRecordTypeVH.ChangeRecordTypeDesc,

      @ObjectModel.text.element: ['ChangeRecordStatusDescription']
      P_ChangeRecordMyInboxTask.ChangeRecordStatus,
      _UserStatusVH.ChangeRecordStatusDescription,


      _ChangeRecordContactPerson.PersonFullName,



      ChgRecdExpectedCompletionDate,
      ChangeRecordDetailDescription   as ChgRecdAddlAttribDetailDesc,
      P_ChangeRecordMyInboxTask.Partner,

//      _ProcessRouteTask.WorkflowTaskInternalID as WorkflowTaskInternalID,
//      _ProcessRouteTask._WorkflowTask._TaskTitle[1:Language=$session.system_language].WorkflowTaskName as WorkflowTaskName,
//      _ProcessRouteTask._WorkflowTask._TaskPriority._Text[1:Language=$session.system_language].WorkflowTaskPriorityDesc as WorkflowTaskPriorityDesc,
//      P_ChangeRecordMyInboxTask.ChangeRecordUUID,

      _ChangeRecordType,
      
      _ChangeRecordTypeVH,
      _UserStatusVH,
      _ChangeRecordContactPerson
}
```
