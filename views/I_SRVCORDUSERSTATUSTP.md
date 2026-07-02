---
name: I_SRVCORDUSERSTATUSTP
description: Srvcorduserstatustp
semantic_en: "user-defined status for service orders — tracks workflow status profiles applied to service orders"
semantic_vi: "trạng thái do người dùng xác định cho đơn hàng dịch vụ — theo dõi hồ sơ trạng thái quy trình làm việc được áp dụng cho đơn hàng dịch vụ"
keywords:
  - trạng thái
  - dịch vụ
  - quy trình
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - status
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDUSERSTATUSTP

**Srvcorduserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceOrder` | `ServiceOrder` |
| `UserStatus` | `UserStatus` |
| `StatusProfile` | `StatusProfile` |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order User Status - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdUserStatusTP 
as projection on R_SrvcOrdUserStatusTP
{

  key ServiceOrder,
  key UserStatus,
      StatusProfile,

  /* Associations */
    _StatusCode,
    _StatusProfile,
    
    _ServiceOrderTP : redirected to parent I_ServiceOrderTP

}
```
