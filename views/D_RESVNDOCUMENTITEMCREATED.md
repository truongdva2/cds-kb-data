---
name: D_RESVNDOCUMENTITEMCREATED
description: D Resvndocumentitemcreated
semantic_en: "business event signature for new reservation document items — records reservation item and record type at creation"
semantic_vi: "sự kiện kinh doanh khi dòng tài liệu đặt chỗ được tạo — ghi lại dòng đặt chỗ và loại bản ghi khi tạo"
keywords:
  - dòng đặt chỗ mới
  - tạo đặt chỗ
  - dòng tài liệu
  - tồn kho
app_component: MM-IM-RS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-RS
  - document
  - item-level
  - component:MM-IM-RS-2CL
  - lob:Sourcing & Procurement
  - bo:ReservationDocumentItem
---
# D_RESVNDOCUMENTITEMCREATED

**D Resvndocumentitemcreated**

| Property | Value |
|---|---|
| App Component | `MM-IM-RS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReservationItem` | `rspos` |
| `RecordType` | `rsart` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@EndUserText.label: 'Resvn Document Item Created Bus Event'
@ObjectModel.sapObjectNodeType.name:'ReservationDocumentItem'
@Event.sapObjectNodeTypeKey: [ {element: 'Reservation' },
                               {element: 'ReservationItem' },
                               {element: 'RecordType' } ]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ResvnDocumentItemCreated
{
  ReservationItem : rspos;
  RecordType: rsart;   
}
```
