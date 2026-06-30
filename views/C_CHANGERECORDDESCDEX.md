---
name: C_CHANGERECORDDESCDEX
description: Change RecordDESCDEX
semantic_en: "DEX — change record description text — delta-enabled data-extraction view exposing the multilingual short description (UUID, language, ChgRecordDescriptionText) of a change record."
semantic_vi: "Trích xuất dữ liệu — mô tả phiếu thay đổi — view trích xuất (DEX) hỗ trợ delta, cung cấp văn bản mô tả ngắn đa ngôn ngữ của phiếu thay đổi theo UUID và ngôn ngữ."
keywords:
  - mô tả phiếu thay đổi
  - văn bản phiếu thay đổi
  - trích xuất mô tả
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
  - bo:ChangeRecordText
---
# C_CHANGERECORDDESCDEX

**Change RecordDESCDEX**

| Property | Value |
|---|---|
| App Component | `PLM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeRecordUUID` | `ChangeRecordReferenceTextUUID` |
| `Language` | `Language` |
| `ChgRecordDescriptionText` | `ChgRecordDescriptionText` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Extraction for change record description'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory:   #M,
  dataClass:      #TRANSACTIONAL
}

@VDM.viewType: #CONSUMPTION

@ObjectModel.sapObjectNodeType.name: 'ChangeRecordText'
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
              table:'/PLMI/CHGRECD_T', role: #MAIN,
              viewElement: ['ChangeRecordUUID', 'Language'],
              tableElement: [ 'DB_KEY','LANGU']
             }
           ]
        }
    }
}

define view entity C_ChangeRecordDescDEX as select from I_ChgRecDescriptionText
//  as select from I_ChgRecDescriptionText_2
{
  key ChangeRecordReferenceTextUUID as ChangeRecordUUID,
  key Language,
      ChgRecordDescriptionText
   
}
```
