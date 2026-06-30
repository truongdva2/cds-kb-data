---
name: C_CHANGERECORDITEMDEX_2
description: Change RecordITEMDEX 2
semantic_en: "DEX (v2) — change record general item — delta-enabled extraction view for change record items, exposing the item reference UUID (ChangeRecordReferenceUUID) and parent change record UUID."
semantic_vi: "Trích xuất dữ liệu (v2) — hạng mục chung của phiếu thay đổi — view trích xuất (DEX) hỗ trợ delta, cung cấp UUID tham chiếu hạng mục và UUID phiếu thay đổi cha."
keywords:
  - hạng mục phiếu thay đổi
  - trích xuất hạng mục thay đổi
  - DEX hạng mục thay đổi
  - UUID hạng mục
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
  - item-level
  - component:PLM-CR-2CL
  - lob:Other
  - bo:ChangeRecordItem
---
# C_CHANGERECORDITEMDEX_2

**Change RecordITEMDEX 2**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeRecordReferenceUUID` | `ChangeRecordReferenceUUID` |
| `ChangeRecordUUID` | `ChangeRecordUUID` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@EndUserText.label: 'Change Record General Item Details'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #L,
  dataClass:      #TRANSACTIONAL
}
@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordItem'
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
              table:'/PLMI/CHGRECD_I', role: #MAIN,
              viewElement: ['ChangeRecordReferenceUUID'],
              tableElement: [ 'DB_KEY']
             }
           ]
        }
    }
}
define view entity C_ChangeRecordItemDEX_2  as select from I_ChangeRecordItem
//  as select from I_ChangeRecordItem_2
{
  key ChangeRecordReferenceUUID,
      ChangeRecordUUID
//      ChangeRecordItemType,
//      ChangeRecordReferenceSubtype,
//      @Semantics.booleanIndicator: true
//      ChangeRecordVirtualRefInd,
//      ChangeRecordItemProcgStatus,
//      ChangeRecordItemRelevance,
//      ChangeNumber,
//      ChgRecdAuthznGrpText,
//      ExpdCompltnDte,
//      CreatedByUser,
//      CreationDateTime,
//      LastChangedByUser,
//      LastChangeDateTime,
//      ChgRecdReasonForChange
}
```
