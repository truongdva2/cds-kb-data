---
name: I_MYSESSIONCONTEXT
description: Mysessioncontext
semantic_en: "session context of current user — capturing user ID, local date, and local time in Malaysia"
semantic_vi: "bối cảnh phiên làm việc của người dùng hiện tại — ghi nhận ID người dùng, ngày giờ địa phương"
keywords:
  - phiên người dùng
  - ngày giờ địa phương
  - bối cảnh phiên
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - text-view
  - text
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_MYSESSIONCONTEXT

**Mysessioncontext**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `UserID` | `$session.user` |
| `UserLocalDate` | `tstmp_to_dats(…)` |
| `UserLocalTime` | `tstmp_to_tims(…)` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @Metadata.ignorePropagatedAnnotations: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #B
@AccessControl.personalData.blocking:#NOT_REQUIRED
@EndUserText.label: 'Session Context of the current user'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view entity I_MySessionContext as select from I_SAPClient {

  key $session.user as UserID,

  tstmp_to_dats(tstmp_current_utctimestamp(), abap_user_timezone($session.user, $session.client, 'NULL'), $session.client, 'NULL') as UserLocalDate,
  tstmp_to_tims(tstmp_current_utctimestamp(), abap_user_timezone($session.user, $session.client, 'NULL'), $session.client, 'NULL') as UserLocalTime    
    
}
```
