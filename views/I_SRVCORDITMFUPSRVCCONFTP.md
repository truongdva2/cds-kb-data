---
name: I_SRVCORDITMFUPSRVCCONFTP
description: Srvcorditmfupsrvcconftp
semantic_en: "Service confirmations linked to individual service order items — confirming completion at item level granularity."
semantic_vi: "Xác nhận dịch vụ được liên kết với hạng mục đơn hàng dịch vụ riên lẻ — xác nhận hoàn thành ở mức độ chi tiết hạng mục."
keywords:
  - xác nhận dịch vụ
  - hạng mục đơn hàng
  - hoàn thành
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITMFUPSRVCCONFTP

**Srvcorditmfupsrvcconftp**

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
| `ServiceConfirmation` | `ServiceConfirmation` |
| `ServiceConfirmationItem` | `ServiceConfirmationItem` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Service Confirmation - TP'
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
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdItmFUPSrvcConfTP 
as projection on R_SrvcOrdItmFUPSrvcConfTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  /* Associations */
  _ServiceOrderItem : redirected to parent I_ServiceOrderItemTP,
  _ServiceOrderTP : redirected to I_ServiceOrderTP
}
```
