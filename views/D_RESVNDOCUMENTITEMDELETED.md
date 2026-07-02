---
name: D_RESVNDOCUMENTITEMDELETED
description: D Resvndocumentitemdeleted
semantic_en: "business event signature for deleted reservation document items — tracks deletion of reservation items with record type context"
semantic_vi: "sự kiện kinh doanh khi dòng tài liệu đặt chỗ bị xóa — theo dõi xóa dòng đặt chỗ với ngữ cảnh loại bản ghi"
keywords:
  - dòng đặt chỗ xóa
  - xóa đặt chỗ
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
# D_RESVNDOCUMENTITEMDELETED

**D Resvndocumentitemdeleted**

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
@EndUserText.label: 'Resvn Document Item Deleted Bus Event'
@Event.type: 'Deleted'
@ObjectModel.sapObjectNodeType.name:'ReservationDocumentItem'
@Event.sapObjectNodeTypeKey: [ {element: 'Reservation' },
                               {element: 'ReservationItem' },
                               {element: 'RecordType' } ]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ResvnDocumentItemDeleted
{
  ReservationItem : rspos;
  RecordType: rsart; 
}
```
