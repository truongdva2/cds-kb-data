---
name: I_RAPERFOBLIGATIONEVENTTYPE
description: Raperfobligationeventtype
semantic_en: "performance obligation event type — master data for event types triggering revenue obligation changes."
semantic_vi: "loại sự kiện nghĩa vụ hiệu suất — dữ liệu chính cho loại sự kiện."
keywords:
  - sự kiện
  - nghĩa vụ
  - loại
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - component:FI-RA-2CL
  - lob:Finance
  - bo:PerfOblgnEventType
---
# I_RAPERFOBLIGATIONEVENTTYPE

**Raperfobligationeventtype**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PerfOblgnEventType` | `event_type` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RAPerfOblgnEventTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRAEVENTTYPE'

@EndUserText.label: 'Event Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'PerfOblgnEventType'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }

@VDM.viewType: #BASIC

define view entity I_RAPerfObligationEventType
  as select from farr_c_evnt_ty

  association [0..*] to I_RAPerfOblgnEventTypeText as _Text
    on $projection.PerfOblgnEventType = _Text.PerfOblgnEventType

{
      @ObjectModel.text.association: '_Text'
  key event_type as PerfOblgnEventType,

      _Text

}
```
