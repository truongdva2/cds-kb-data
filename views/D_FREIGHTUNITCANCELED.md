---
name: D_FREIGHTUNITCANCELED
description: D Freightunitcanceled
semantic_en: "freight unit cancellation event — change-document signature triggered when a FreightUnit is canceled, capturing transportation order and mode details."
semantic_vi: "sự kiện hủy đơn vị vận chuyển — chữ ký tài liệu được kích hoạt khi FreightUnit bị hủy, ghi lại chi tiết đơn hàng vận chuyển và chế độ."
keywords:
  - hủy đơn vị
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
# D_FREIGHTUNITCANCELED

**D Freightunitcanceled**

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
define abstract entity D_FreightUnitCanceled
{

  TransportationOrder     : /scmtms/tor_id;
  TransportationOrderType : /scmtms/tor_type;
  TransportationMode      : /scmtms/trmodcode;

}
```
