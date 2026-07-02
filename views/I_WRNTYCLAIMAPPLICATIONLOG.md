---
name: I_WRNTYCLAIMAPPLICATIONLOG
description: Wrntyclaimapplicationlog
semantic_en: "warranty claim application log — application logs for warranty claim processing with alert and error counts"
semantic_vi: "nhật ký ứng dụng xử lý yêu cầu bảo hành với thông tin cảnh báo và lỗi"
keywords:
  - nhật ký xử lý bảo hành
  - log ứng dụng bảo hành
  - lỗi yêu cầu bảo hành
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - component:LO-WTY-FIO
  - lob:Logistics General
  - bo:WarrantyClaim
---
# I_WRNTYCLAIMAPPLICATIONLOG

**Wrntyclaimapplicationlog**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ApplicationLog` | `log.lognumber` |
| `ApplicationLogHandle` | `log.log_handle` |
| `ApplicationLogObject` | `log.object` |
| `ApplicationLogSubobject` | `log.subobject` |
| `ApplicationJobDescription` | `log.extnumber` |
| `NumberOfAlerts` | `log.msg_cnt_al` |
| `NumberOfErrorMessages` | `log.msg_cnt_e` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Warranty claim application log'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
  //viewType: #BASIC,*******Modernization Task********
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  usageType.dataClass: #TRANSACTIONAL,
  //usageType.serviceQuality: #C,*******Modernization Task********
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #XXL,
  representativeKey: 'ApplicationLog',
 supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #SQL_DATA_SOURCE, 
                          #CDS_MODELING_DATA_SOURCE, 
                          #EXTRACTION_DATA_SOURCE ],
                          
  modelingPattern: #ANALYTICAL_DIMENSION
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL 
}
@Analytics.technicalName: 'IWRNTYCLMAPPLOG'             
@Metadata.ignorePropagatedAnnotations:true

define view entity I_WrntyClaimApplicationLog
  as select from balhdr as log
{
  key log.lognumber                                                                        as ApplicationLog,
      log.log_handle                                                                       as ApplicationLogHandle,
      log.object                                                                           as ApplicationLogObject,
      log.subobject                                                                        as ApplicationLogSubobject,
      log.extnumber                                                                        as ApplicationJobDescription,
      log.msg_cnt_al                                                                       as NumberOfAlerts,
      log.msg_cnt_e                                                                        as NumberOfErrorMessages
}
where
  object = 'WTY' or
  object = 'WTY_RULE'
```
