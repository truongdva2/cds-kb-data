---
name: I_SRVCCONTRITEMUSERSTATUSTP
description: Srvccontritemuserstatustp
semantic_en: "service contract item user status — tracks user-defined status with profile classification for service contract line items."
semantic_vi: "trạng thái người dùng mục hợp đồng dịch vụ — theo dõi trạng thái do người dùng xác định với phân loại hồ sơ cho các mục dòng hợp đồng dịch vụ."
keywords:
  - trạng thái người dùng
  - mục hợp đồng
  - hồ sơ
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
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRITEMUSERSTATUSTP

**Srvccontritemuserstatustp**

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
| `ServiceContractItem` | `ServiceContractItem` |
| `UserStatus` | `UserStatus` |
| `StatusProfile` | `StatusProfile` |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |
| `_UserStatusText` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Contract Item User Status - TP'
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

define view entity I_SrvcContrItemUserStatusTP
  as projection on R_SrvcContrItemUserStatusTP

{
  key ServiceContract,
  key ServiceContractItem,

      @ObjectModel.text.association: '_UserStatusText'
  key UserStatus,

      StatusProfile,
      
      /* Associations */
      _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
      _ServiceContractTP     : redirected to I_ServiceContractTP,

      _StatusCode,
      _StatusProfile,
      _UserStatusText
}
```
