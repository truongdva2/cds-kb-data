---
name: C_CHANGERECORDHIERARCHYDEX
description: Change RecordHIERARCHYDEX
semantic_en: "DEX — change record hierarchy — delta-enabled extraction view capturing the parent-child relationship between change records via ParentChangeRecordUUID and ChangeRecordUUID."
semantic_vi: "Trích xuất dữ liệu — phân cấp phiếu thay đổi — view trích xuất (DEX) hỗ trợ delta, nắm bắt quan hệ cha-con giữa các phiếu thay đổi qua ParentChangeRecordUUID và ChangeRecordUUID."
keywords:
  - phân cấp phiếu thay đổi
  - quan hệ cha con phiếu thay đổi
  - trích xuất phân cấp thay đổi
  - DEX thay đổi
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
# C_CHANGERECORDHIERARCHYDEX

**Change RecordHIERARCHYDEX**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ParentChangeRecordUUID` | `ParentChangeRecordUUID` |
| `ChangeRecordUUID` | `ChangeRecordUUID` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Change Record Hierarchy'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
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
              table:'/PLMI/CHGRECD_R', role: #MAIN,
              viewElement: ['ParentChangeRecordUUID','ChangeRecordUUID'],
              tableElement: [ 'PARENT_KEY' ,' CHILD_KEY']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordHierarchyDEX as select from I_ChgRecHeader
//  as select from I_ChangeRecordHierNodeRltn
{
  key ParentChangeRecordUUID,
  key ChangeRecordUUID
//      @Semantics.user.createdBy: true
//      CreatedByUser,
//      @Semantics.dateTime: true
//      CreationDateTime,
//      @Semantics.user.lastChangedBy: true
//      LastChangedByUser,
//      @Semantics.dateTime: true
//      LastChangeDateTime

}
```
