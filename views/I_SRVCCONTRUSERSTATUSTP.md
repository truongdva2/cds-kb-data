---
name: I_SRVCCONTRUSERSTATUSTP
description: Srvccontruserstatustp
semantic_en: "service contract user status — tracks user-defined status with profile classification for service contract documents."
semantic_vi: "trạng thái người dùng hợp đồng dịch vụ — theo dõi trạng thái do người dùng xác định với phân loại hồ sơ cho các tài liệu hợp đồng dịch vụ."
keywords:
  - trạng thái người dùng hợp đồng
  - hồ sơ
  - trạng thái
app_component: CRM-S4-SRV-CTR-2CL
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
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRUSERSTATUSTP

**Srvccontruserstatustp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceContract` | `ServiceContract` |
| `UserStatus` | `UserStatus` |
| `StatusProfile` | `StatusProfile` |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |
| `_UserStatusText` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Contract User Status - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcContrUserStatusTP
  as projection on R_SrvcContrUserStatusTP

{
  key ServiceContract,

      @ObjectModel.text.association: '_UserStatusText'
  key UserStatus,

      StatusProfile,
      /* Associations */
      _ServiceContractTP : redirected to parent I_ServiceContractTP,

      _StatusCode,
      _StatusProfile,
      _UserStatusText
}
```
