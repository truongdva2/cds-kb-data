---
name: I_MEASURINGPOINTLONGTEXTTP
description: Measuringpointlongtexttp
semantic_en: "Measuring point long text for technical processing — multilingual long text descriptions for measuring points."
semantic_vi: "Văn bản dài điểm đo cho xử lý kỹ thuật — mô tả văn bản dài đa ngôn ngữ cho các điểm đo."
keywords:
  - điểm đo
  - văn bản dài
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
  - text
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MEASURINGPOINTLONGTEXTTP

**Measuringpointlongtexttp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MeasuringPoint` | `MeasuringPoint` |
| `Language` | `Language` |
| `MeasuringPointLongText` | `MeasuringPointLongText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Measuring Point Long Text - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #MIXED
   },
   semanticKey: ['MeasuringPoint']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_MeasuringPointLongTextTP
  as projection on R_MeasuringPointLongTextTP
{
  key MeasuringPoint,

      @Semantics.language: true
      @Consumption.hidden: true
      Language,

      MeasuringPointLongText,

      _MeasuringPoint : redirected to parent I_MeasuringPointTP_2

}
```
