---
name: I_MAINTNOTIFITEMACTIVITYTP
description: Maintnotifitemactivitytp
semantic_en: "maintenance notification item activity in target projection with planning dates and activity codes — key columns: MaintNotificationActivity, MaintenanceNotification, MaintNotifActivityCodeGroup"
semantic_vi: "hoạt động mục thông báo bảo trì trong hình chiếu đích với ngày lập kế hoạch và mã hoạt động — cột chính: hoạt động thông báo, thông báo, nhóm mã hoạt động"
keywords:
  - hoạt động bảo trì
  - thông báo bảo trì
  - lịch hoạt động
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - transactional-processing
  - item-level
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_MAINTNOTIFITEMACTIVITYTP

**Maintnotifitemactivitytp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaintNotificationActivity` | `MaintNotificationActivity` |
| `MaintenanceNotification` | `MaintenanceNotification` |
| `MaintenanceNotificationItem` | `MaintenanceNotificationItem` |
| `MaintNotifActivitySortNumber` | `MaintNotifActivitySortNumber` |
| `MaintNotifActyTxt` | `MaintNotifActyTxt` |
| `MaintNotifActivityCodeGroup` | `MaintNotifActivityCodeGroup` |
| `MaintNotificationActivityCode` | `MaintNotificationActivityCode` |
| `PlannedStartDate` | `PlannedStartDate` |
| `PlannedStartTime` | `PlannedStartTime` |
| `PlannedEndDate` | `PlannedEndDate` |
| `PlannedEndTime` | `PlannedEndTime` |
| `MaintNotifActivityCodeCatalog` | `MaintNotifActivityCodeCatalog` |
| `IsDeleted` | `IsDeleted` |
| `_MaintNotifActivityCodeGroup` | *Association* |
| `_MaintNotificationActivityCode` | *Association* |
| `_MaintenanceNotification` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Notification Item Activity - TP'
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #A,
     sizeCategory:   #M,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintNotificationActivity']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_MaintNotifItemActivityTP as projection on R_MaintNotifItemActivityTP as MaintNotifItemActivity {


 key MaintNotificationActivity,
 key MaintenanceNotification,
 key MaintenanceNotificationItem,   //Damages Number (Sort number for Item)
 MaintNotifActivitySortNumber,      //Activity Number (Sort number for Activity)
 MaintNotifActyTxt,                 //Activity Description
 MaintNotifActivityCodeGroup,       //Code Group - Activities
 MaintNotificationActivityCode,     //Activity Code
 PlannedStartDate,                  //Activity Start Date
 PlannedStartTime,                  //Start Time of Activity
 PlannedEndDate,                    //Activity End Date
 PlannedEndTime,                     //End Time of Activity
 MaintNotifActivityCodeCatalog,
 @Semantics.booleanIndicator: true
 IsDeleted,
    
// Assocociation 
   _MaintNotifActivityCodeGroup,
   _MaintNotificationActivityCode,
   @Consumption.hidden: true
   _MaintenanceNotification,
   
   _Item : redirected to parent I_MaintNotificationItemTP_2,
   _Notif: redirected to I_MaintenanceNotificationTP_2
   
  
}
```
