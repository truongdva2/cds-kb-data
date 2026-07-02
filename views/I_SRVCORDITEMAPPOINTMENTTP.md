---
name: I_SRVCORDITEMAPPOINTMENTTP
description: Srvcorditemappointmenttp
semantic_en: "Service order item-level appointment scheduling with start and end times — enabling granular service execution planning."
semantic_vi: "Lên lịch cuộc hẹn cấp độ hạng mục đơn hàng dịch vụ với thời gian bắt đầu và kết thúc — cho phép lập kế hoạch thực hiện dịch vụ chi tiết."
keywords:
  - cuộc hẹn
  - hạng mục đơn hàng
  - lịch
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
  - item-level
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITEMAPPOINTMENTTP

**Srvcorditemappointmenttp**

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
| `SrvcDocAppointmentType` | `SrvcDocAppointmentType` |
| `SrvcDocApptStartDateTime` | `SrvcDocApptStartDateTime` |
| `SrvcDocApptEndDateTime` | `SrvcDocApptEndDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Item Appointment - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdItemAppointmentTP
  as projection on R_SrvcOrdItemAppointmentTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key SrvcDocAppointmentType,
      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,
      /* Associations */
      _ServiceOrderItemTP : redirected to parent I_ServiceOrderItemTP,
      _ServiceOrderTP     : redirected to I_ServiceOrderTP
}
```
