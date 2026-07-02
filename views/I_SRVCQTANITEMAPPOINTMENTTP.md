---
name: I_SRVCQTANITEMAPPOINTMENTTP
description: Srvcqtanitemappointmenttp
semantic_en: "item-level appointment scheduling for service quotations — manages appointment scheduling at quotation item granularity"
semantic_vi: "lên lịch cuộc hẹn cấp mục cho báo giá dịch vụ — quản lý lập lịch cuộc hẹn ở mức chi tiết mục báo giá"
keywords:
  - cuộc hẹn
  - mục
  - báo giá
app_component: CRM-S4-SRV-SVQ-2CL
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
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANITEMAPPOINTMENTTP

**Srvcqtanitemappointmenttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceQuotation` | `ServiceQuotation` |
| `ServiceQuotationItem` | `ServiceQuotationItem` |
| `SrvcDocAppointmentType` | `SrvcDocAppointmentType` |
| `SrvcDocApptStartDateTime` | `SrvcDocApptStartDateTime` |
| `SrvcDocApptEndDateTime` | `SrvcDocApptEndDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Quotation Item Appointment - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]  
}
define view entity I_SrvcQtanItemAppointmentTP
  as projection on R_SrvcQtanItemAppointmentTP
{
  key ServiceQuotation,
  key ServiceQuotationItem,
  key SrvcDocAppointmentType,
      SrvcDocApptStartDateTime,
      SrvcDocApptEndDateTime,

      /* Associations */
      _ServiceQuotationItemTP : redirected to parent I_ServiceQuotationItemTP,
      _ServiceQuotationTP     : redirected to I_ServiceQuotationTP
}
```
