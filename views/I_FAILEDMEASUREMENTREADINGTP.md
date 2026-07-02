---
name: I_FAILEDMEASUREMENTREADINGTP
description: Failedmeasurementreadingtp
semantic_en: "failed measurement reading transformation proxy — measurement readings with failed transfer identification through measurement document source"
semantic_vi: "proxy chuyển đổi kỳ đọc đo lường thất bại — kỳ đọc đo lường với định danh chuyển giao thất bại thông qua nguồn tài liệu đo lường"
keywords:
  - kỳ đọc đo lường
  - chuyển giao lỗi
  - điểm đo lường
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - transactional-processing
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_FAILEDMEASUREMENTREADINGTP

**Failedmeasurementreadingtp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MsmtRdngDate` | `MsmtRdngDate` |
| `MsmtRdngTime` | `MsmtRdngTime` |
| `MsmtRdngSourceMeasurementDoc` | `MsmtRdngSourceMeasurementDoc` |
| `MeasuringPoint` | `MeasuringPoint` |
| `MsmtRdngTransfFailedMsgNumber` | `MsmtRdngTransfFailedMsgNumber` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Failed Measurement Reading - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:      #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #M,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MsmtRdngSourceMeasurementDoc']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_FailedMeasurementReadingTP
  as projection on R_FailedMeasurementReadingTP as FailedMeasurementReading
{

  key MsmtRdngDate,

  key MsmtRdngTime,

  key MsmtRdngSourceMeasurementDoc,

  key MeasuringPoint,

      MsmtRdngTransfFailedMsgNumber,

      /* Associations */
      _MeasurementDocument : redirected to parent I_MeasurementDocumentTP_2

}
```
