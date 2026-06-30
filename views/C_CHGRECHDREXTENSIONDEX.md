---
name: C_CHGRECHDREXTENSIONDEX
description: Chgrechdrextensiondex
semantic_en: "DEX — change record header extension — automatic-CDC extraction view for the extended header attributes of a change record: reason, change status, expected/engineering/manufacturing effective dates, profile, detail description, and item edit mode."
semantic_vi: "Trích xuất dữ liệu — phần mở rộng tiêu đề phiếu thay đổi — view trích xuất CDC tự động, cung cấp các thuộc tính mở rộng của tiêu đề phiếu thay đổi: lý do, trạng thái thay đổi, ngày hiệu lực kỹ thuật/sản xuất, hồ sơ cấu hình và chế độ chỉnh sửa hạng mục."
keywords:
  - mở rộng tiêu đề phiếu thay đổi
  - ngày hiệu lực thay đổi
  - trích xuất mở rộng thay đổi
  - DEX header extension
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
  - header-level
  - component:PLM-CR-2CL
  - lob:Other
  - bo:ChangeRecord
---
# C_CHGRECHDREXTENSIONDEX

**Chgrechdrextensiondex**

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
| `ParentChangeRecordUUID` | `ParentChangeRecordUUID` |
| `ChgRecdHdrExtnUUID` | `ChgRecdHdrExtnUUID` |
| `ChgRecdReasonForChange` | `ChgRecdReasonForChange` |
| `ChgRecdChangeStatus` | `ChgRecdChangeStatus` |
| `ChgRecdExpectedCompletionDate` | `ChgRecdExpectedCompletionDate` |
| `ChgRecdPrflIdn` | `ChgRecdPrflIdn` |
| `ChangeRecordDetailDescription` | `ChangeRecordDetailDescription` |
| `ChgRecdEngEffectiveDate` | `ChgRecdEngEffectiveDate` |
| `ChgRecdMfgEffectiveDate` | `ChgRecdMfgEffectiveDate` |
| `ChgRecdInitiatedStatusAction` | `ChgRecdInitiatedStatusAction` |
| `ChangeRecordItemEditMode` | `ChangeRecordItemEditMode` |

## Associations

> No associations found.

## Source Code

```abap
@Metadata:          {allowExtensions:             true,
                     ignorePropagatedAnnotations: true}

@ObjectModel:       {usageType:                   {serviceQuality: #D,
                                                   sizeCategory:   #L,
                                                   dataClass:      #MIXED},
                     modelingPattern:             #NONE,
                     supportedCapabilities:      [
                                                  #EXTRACTION_DATA_SOURCE]}

@VDM:               {viewType:                    #CONSUMPTION,
                     lifecycle.contract.type:     #PUBLIC_LOCAL_API}

@Analytics:         {dataCategory:                #FACT,
                     dataExtraction:              {enabled: true,
                                                   delta.changeDataCapture: {
                                                   automatic: true                                                            }
                                                  },                                                  
                     internalName:                #LOCAL}
                                                  

@ObjectModel.sapObjectNodeType.name: 'ChangeRecord'
@EndUserText.label: 'Change Record Header Ext for DEX'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

define view entity C_ChgRecHdrExtensionDEX as select from I_ChgRecHdrExtension
{
       @Semantics.uuid: true
  key  ChangeRecordUUID,
       @Semantics.uuid: true
       ParentChangeRecordUUID,
       @Semantics.uuid: true
       ChgRecdHdrExtnUUID,
       ChgRecdReasonForChange,
       ChgRecdChangeStatus,
       ChgRecdExpectedCompletionDate,
       ChgRecdPrflIdn,
       ChangeRecordDetailDescription,
       ChgRecdEngEffectiveDate,
       ChgRecdMfgEffectiveDate,
       ChgRecdInitiatedStatusAction,
       ChangeRecordItemEditMode

}
```
