---
name: D_MAINTORDTECHNICALCOMPLETEP
description: D Maintordtechnicalcompletep
semantic_en: "abstract parameter for maintenance order technical completion — manages completion date/time and notification closure."
semantic_vi: "tham số trừu tượng cho hoàn thành kỹ thuật đơn hàng bảo trì — quản lý ngày/giờ hoàn thành và đóng thông báo."
keywords:
  - hoàn thành kỹ thuật
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
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# D_MAINTORDTECHNICALCOMPLETEP

**D Maintordtechnicalcompletep**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MainWrkCmpltdDateTimeIsUsed` | `abap_boolean` |
| `MaintOrderReferenceDateTime` | `timestamp` |
| `AssignedMaintNotifIsToBeClosed` | `abap_boolean` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'MaintOrder TechCompleted Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define root abstract entity D_MaintOrdTechnicalCompleteP
{
  @EndUserText.label             : 'Use Main Work Completed Date and Time'
  MainWrkCmpltdDateTimeIsUsed    : abap_boolean;
  @EndUserText.label             : 'Completion Date/Time'
  //@ObjectModel.mandatory         : true //incompatable changes for public API
  MaintOrderReferenceDateTime    : timestamp;
  @EndUserText.label             : 'Complete Assigned Notifications'
  AssignedMaintNotifIsToBeClosed : abap_boolean;

}
```
