---
name: D_FREIGHTUNITDELETED
description: D Freightunitdeleted
semantic_en: "freight unit deletion event — change-document signature for when a FreightUnit is deleted, tracking transportation order and mode information."
semantic_vi: "sự kiện xóa đơn vị vận chuyển — chữ ký tài liệu cho khi FreightUnit bị xóa, theo dõi thông tin đơn hàng vận chuyển và chế độ."
keywords:
  - xóa đơn vị
  - sự kiện
  - vận chuyển
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - freight
  - component:TM-FRM-2CL
  - lob:Other
  - bo:FreightUnit
---
# D_FREIGHTUNITDELETED

**D Freightunitdeleted**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrder` | `/scmtms/tor_id` |
| `TransportationOrderType` | `/scmtms/tor_type` |
| `TransportationMode` | `/scmtms/trmodcode` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'FreightUnit'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_FreightUnitDeleted
{

  TransportationOrder     : /scmtms/tor_id;
  TransportationOrderType : /scmtms/tor_type;
  TransportationMode      : /scmtms/trmodcode;

}
```
