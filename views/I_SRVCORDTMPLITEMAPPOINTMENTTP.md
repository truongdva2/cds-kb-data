---
name: I_SRVCORDTMPLITEMAPPOINTMENTTP
description: Srvcordtmplitemappointmenttp
semantic_en: "item-level appointment scheduling for service order templates — manages appointment scheduling at template item granularity"
semantic_vi: "lên lịch cuộc hẹn cấp mục cho mẫu đơn hàng dịch vụ — quản lý lập lịch cuộc hẹn ở mức chi tiết mục mẫu"
keywords:
  - cuộc hẹn
  - mục
  - lịch biểu
app_component: CRM-S4-SRV-SVT-2CL
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
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLITEMAPPOINTMENTTP

**Srvcordtmplitemappointmenttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceOrderTemplate` | `ServiceOrderTemplate` |
| `ServiceOrderTemplateItem` | `ServiceOrderTemplateItem` |
| `SrvcDocAppointmentType` | `SrvcDocAppointmentType` |
| `SrvcDocApptStartDateTime` | `SrvcDocApptStartDateTime` |
| `SrvcDocApptEndDateTime` | `SrvcDocApptEndDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Tmpl Item Appointment - TP'
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

define view entity I_SrvcOrdTmplItemAppointmentTP
  as projection on R_SrvcOrdTmplItemAppointmentTP
{
  key ServiceOrderTemplate,
  key ServiceOrderTemplateItem,
  key SrvcDocAppointmentType,
      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,
      /* Associations */
      _ServiceOrderTemplateItemTP : redirected to parent I_ServiceOrderTemplateItemTP,
      _ServiceOrderTemplateTP     : redirected to I_ServiceOrderTemplateTP
}
```
