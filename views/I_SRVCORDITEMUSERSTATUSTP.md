---
name: I_SRVCORDITEMUSERSTATUSTP
description: Srvcorditemuserstatustp
semantic_en: "User-defined status assignments for service order items with status profile tracking — enabling custom item state management."
semantic_vi: "Gán trạng thái được xác định bởi người dùng cho hạng mục đơn hàng dịch vụ với theo dõi hồ sơ trạng thái — cho phép quản lý trạng thái hạng mục tùy chỉnh."
keywords:
  - trạng thái người dùng
  - hạng mục đơn hàng
  - hồ sơ
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
  - item-level
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITEMUSERSTATUSTP

**Srvcorditemuserstatustp**

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
| `ServiceOrderItem` | `ServiceOrderItem` |
| `UserStatus` | `UserStatus` |
| `StatusProfile` | `StatusProfile` |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Order Item User Status - TP'
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
define view entity I_SrvcOrdItemUserStatusTP
  as projection on R_SrvcOrdItemUserStatusTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key UserStatus,
      StatusProfile,

      /* Associations */
      _StatusCode,
      _StatusProfile,

      _ServiceOrderItemTP : redirected to parent I_ServiceOrderItemTP,
      _ServiceOrderTP     : redirected to I_ServiceOrderTP
}
```
