---
name: C_CHANGERECORDDEX_2
description: Change RecordDEX 2
semantic_en: "DEX (v2) — change record header extraction — minimal delta-CDC extraction view for the change record header, exposing only the primary key ChangeRecordUUID."
semantic_vi: "Trích xuất dữ liệu (v2) — tiêu đề phiếu thay đổi — view trích xuất tối giản hỗ trợ CDC delta, chỉ cung cấp khóa chính ChangeRecordUUID của phiếu thay đổi."
keywords:
  - trích xuất phiếu thay đổi
  - DEX tiêu đề thay đổi
  - UUID phiếu thay đổi
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
# C_CHANGERECORDDEX_2

**Change RecordDEX 2**

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

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record Header Extraction'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #S,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_FACT
@Analytics:{
    internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:[
            {
              table:'/plmi/chgrecd_h', role: #MAIN,
              viewElement: ['ChangeRecordUUID'],
              tableElement: [ 'DB_KEY']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordDEX_2 as select from I_ChgRecHeader
{
  key ChangeRecordUUID
//  ChangeRecord,
//  ChangeRecordType,
//  ChangeRecordStatus,
//  ChangeRecordLifecycleStatus,
//  ChgRecdEngEffectiveDate,
//  ChgRecdMfgEffectiveDate,
//  ChgRecdExpectedCompletionDate,
//  ChangeNumber,
//  ChgRecdReasonForChange,
//  CreatedByUser,
//  CreationDateTime,
//  LastChangedByUser,
//  LastChangeDateTime
}
```
