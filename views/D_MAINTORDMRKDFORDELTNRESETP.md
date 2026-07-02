---
name: D_MAINTORDMRKDFORDELTNRESETP
description: D Maintordmrkdfordeltnresetp
semantic_en: "abstract parameter to reset deletion flag for maintenance order assigned notifications — controls deletion flag reset action."
semantic_vi: "tham số trừu tượng để đặt lại cờ xóa cho thông báo gán đơn hàng bảo trì — kiểm soát hành động đặt lại cờ xóa."
keywords:
  - đặt lại cờ xóa
  - bảo trì
  - thông báo
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - transactional-processing
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDMRKDFORDELTNRESETP

**D Maintordmrkdfordeltnresetp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `AssgdMaintNotifIsToBeResetDel` | `abap_boolean` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Maintenance Order RestDelFlag Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define abstract entity D_MaintOrdMrkdForDeltnResetP
{
  @EndUserText.label            : 'Also reset the deletion flag for the assigned notifications'
  AssgdMaintNotifIsToBeResetDel : abap_boolean;

}
```
