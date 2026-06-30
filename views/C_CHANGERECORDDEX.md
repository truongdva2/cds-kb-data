---
name: C_CHANGERECORDDEX
description: Change RecordDEX
semantic_en: "DEX — change record header — automatic-CDC data-extraction view exposing the full change record header: UUID, type, priority, status, lifecycle status, change number, category, application, digital signature status, and audit stamps."
semantic_vi: "Trích xuất dữ liệu — tiêu đề phiếu thay đổi — view trích xuất (DEX) tự động CDC, cung cấp toàn bộ dữ liệu tiêu đề phiếu thay đổi: UUID, loại, ưu tiên, trạng thái, vòng đời, số thay đổi, danh mục, ứng dụng và trạng thái chữ ký số."
keywords:
  - trích xuất tiêu đề phiếu thay đổi
  - phiếu thay đổi DEX
  - trạng thái vòng đời thay đổi
  - số thay đổi
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
  - data-extraction
  - change-record
  - component:PLM-CR-2CL
  - lob:Other
  - bo:ChangeRecord
---
# C_CHANGERECORDDEX

**Change RecordDEX**

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
| `ParentChangeRecordUUID` | `ParentChangeRecordUUID` |
| `RootChangeRecordUUID` | `RootChangeRecordUUID` |
| `ChangeRecordPriority` | `ChangeRecordPriority` |
| `ChangeRecordStatus` | `ChangeRecordStatus` |
| `ChangeNumber` | `ChangeNumber` |
| `ChangeRecordCategory` | `ChangeRecordCategory` |
| `ChgRecordApplication` | `ChgRecordApplication` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `ChangeRecordLifecycleStatus` | `ChangeRecordLifecycleStatus` |
| `ChgRecdDigitalSignatureStatus` | `ChgRecdDigitalSignatureStatus` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel.usageType: {serviceQuality: #D,
                         dataClass: #MIXED,
                         sizeCategory: #L}
@ObjectModel :{
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern        : #ANALYTICAL_FACT
              }
@EndUserText.label: 'Data Extraction for Change Record Header'
@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

// CDC Annotation for DATA extraction

@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          automatic: true
        }
    }
}
@AccessControl.authorizationCheck: #MANDATORY
define view entity C_ChangeRecordDEX
  as select from I_ChgRecHeader
{
            @Semantics.uuid: true
  key       ChangeRecordUUID,
            ChangeRecord,
            ChangeRecordType,
            @Semantics.uuid: true
            ParentChangeRecordUUID,
            @Semantics.uuid: true
            RootChangeRecordUUID,
            ChangeRecordPriority,
            ChangeRecordStatus,
            ChangeNumber,
            ChangeRecordCategory,
            ChgRecordApplication,
            CreatedByUser,
            CreationDateTime,
            LastChangedByUser,
            LastChangeDateTime,
            ChangeRecordLifecycleStatus,
            ChgRecdDigitalSignatureStatus
}
```
