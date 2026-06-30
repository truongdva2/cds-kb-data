---
name: C_REARCHTROBJTIMELINEDEX
description: Rearchtrobjtimelinedex
semantic_en: "Real estate architecture object timeline (DEX) — data-extraction view for RE architecture object time slices showing status and active flag per validity period."
semantic_vi: "Dòng thời gian đối tượng kiến trúc bất động sản (DEX) — trích xuất dữ liệu phân đoạn thời gian đối tượng kiến trúc RE với trạng thái và cờ hoạt động theo thời hạn hiệu lực."
keywords:
  - dòng thời gian đối tượng kiến trúc RE
  - trạng thái đối tượng bất động sản
  - lịch sử hiệu lực RE-FX
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - consumption-view
  - data-extraction
  - component:RE-FX-BD-2CL
  - lob:Other
  - bo:REArchitectureObjTimelineUUID
---
# C_REARCHTROBJTIMELINEDEX

**Rearchtrobjtimelinedex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `REArchitectureObjTimelineUUID` | `REArchitectureObjTimelineUUID` |
| `REArchitectureObjectUUID` | `REArchitectureObjectUUID` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `REArchitectureObjectStatus` | `REArchitectureObjectStatus` |
| `REArchitectureObjectIsActive` | `REArchitectureObjectIsActive` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extraction for Architect Obj Timeline'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjTimelineUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
                                       
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjTimelineDEX     
  as select from I_REArchitectureObjectTimeline

{
    
  key REArchitectureObjTimelineUUID,
      REArchitectureObjectUUID,
      ValidityStartDate,
      ValidityEndDate,
      REArchitectureObjectStatus,
      REArchitectureObjectIsActive

//      _REArchitectureObject      
}
```
