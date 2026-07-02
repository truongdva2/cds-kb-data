---
name: D_RESVNDOCUMENTITEMCHANGED
description: D Resvndocumentitemchanged
semantic_en: "business event signature for reservation document item changes — tracks item modifications and record type for inventory reservations"
semantic_vi: "sự kiện kinh doanh khi dòng tài liệu đặt chỗ thay đổi — theo dõi sửa đổi dòng và loại bản ghi cho việc đặt chỗ tồn kho"
keywords:
  - dòng đặt chỗ thay đổi
  - đặt chỗ
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
# D_RESVNDOCUMENTITEMCHANGED

**D Resvndocumentitemchanged**

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
@EndUserText.label: 'Resvn Document Item Changed Bus Event'
@Event.type: 'Changed'
@ObjectModel.sapObjectNodeType.name:'ReservationDocumentItem'
@Event.sapObjectNodeTypeKey: [ {element: 'Reservation' },
                               {element: 'ReservationItem' },
                               {element: 'RecordType' } ]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ResvnDocumentItemChanged
{
  ReservationItem : rspos;
  RecordType: rsart;   
}
```
