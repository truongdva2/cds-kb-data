---
name: I_BUEVLGBUSEVTFULLPYLDJSON
description: Buevlgbusevtfullpyldjson
semantic_en: "business event payload JSON — complete business event data with JSON-formatted payload and change timestamps."
semantic_vi: "dữ liệu tải trọng sự kiện kinh doanh — dữ liệu sự kiện kinh doanh hoàn chỉnh với tải trọng dạng JSON và dấu thời gian thay đổi."
keywords:
  - sự kiện kinh doanh
  - JSON
  - tải trọng
app_component: CA-GTF-BEL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-BEL
  - interface-view
  - component:CA-GTF-BEL
  - lob:Cross-Application Components
---
# I_BUEVLGBUSEVTFULLPYLDJSON

**Buevlgbusevtfullpyldjson**

| Property | Value |
|---|---|
| App Component | `CA-GTF-BEL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessEventUUID` | `BusinessEventUUID` |
| `SAPObjectType` | `SAPObjectType` |
| `BusEvtLogPayloadJSONString` | `BusEvtLogPayloadJSONString` |
| `BusEvtLogLastChangedDateTime` | `BusEvtLogLastChangedDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ObjectModel: {
   sapObjectNodeType:{name: 'BusEvtLogEventPayload'},
   representativeKey: 'BusinessEventUUID',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #A,
     sizeCategory:   #XXL
   }
}
@EndUserText.label: 'Business Event Data'


define view entity I_BuEvLgBusEvtFullPyldJSON as select from I_BusEvtLogEvtPayload
{
  key BusinessEventUUID,
  key SAPObjectType,
      BusEvtLogPayloadJSONString,
      BusEvtLogLastChangedDateTime
      
}
```
