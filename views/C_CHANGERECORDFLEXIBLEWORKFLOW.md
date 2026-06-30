---
name: C_CHANGERECORDFLEXIBLEWORKFLOW
description: Change RecordFLEXIBLEWORKFLOW
semantic_en: "Flexible workflow view for change record — workflow-enabled view exposing change record header attributes (type, status, lifecycle, reason, detail description, timestamps) to support responsibility management and custom task attributes."
semantic_vi: "View quy trình linh hoạt cho phiếu thay đổi — view hỗ trợ quy trình linh hoạt, cung cấp các thuộc tính tiêu đề phiếu thay đổi (loại, trạng thái, vòng đời, lý do, mô tả chi tiết, dấu thời gian) để quản lý trách nhiệm và thuộc tính nhiệm vụ tùy chỉnh."
keywords:
  - quy trình linh hoạt phiếu thay đổi
  - phê duyệt phiếu thay đổi
  - quản lý trách nhiệm thay đổi
  - trạng thái vòng đời thay đổi
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
  - change-record
  - workflow
  - component:PLM-CR-2CL
  - lob:Other
  - bo:ChangeRecord
---
# C_CHANGERECORDFLEXIBLEWORKFLOW

**Change RecordFLEXIBLEWORKFLOW**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeRecordUUID` | `ChangeRecordUUID` |
| `ChangeRecord` | `ChangeRecord` |
| `ChangeRecordType` | `ChangeRecordType` |
| `ChangeRecordStatus` | `ChangeRecordStatus` |
| `ChangeRecordLifecycleStatus` | `ChangeRecordLifecycleStatus` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `ChgRecdReasonForChange` | `ChgRecdReasonForChange` |
| `ChangeRecordDetailDescription` | `ChangeRecordDetailDescription` |
| `ChgRecordDescriptionText` | `ChgRecordDescriptionText` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Change Record Flexible Workflow'
@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ]
@Workflow.enabledFor: [ #RESPONSIBILITY_MANAGEMENT, #CUSTOM_TASK_ATTRIBUTES ]
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType:  #CONSUMPTION
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
}
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
//@VDM.lifecycle.contract.type:#NONE
define view entity C_ChangeRecordFlexibleWorkflow
  as select from R_ChangeRecordHeader
{
      @UI.hidden: true
  key ChangeRecordUUID,
      ChangeRecord,
      ChangeRecordType,

      ChangeRecordStatus,
      ChangeRecordLifecycleStatus,
      CreationDateTime,     
      LastChangeDateTime,
      ChgRecdReasonForChange,
      ChangeRecordDetailDescription,
      ChgRecordDescriptionText


}
```
