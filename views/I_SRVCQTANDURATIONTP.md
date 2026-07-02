---
name: I_SRVCQTANDURATIONTP
description: Srvcqtandurationtp
semantic_en: "duration specifications for service quotations — defines duration types, values and units at quotation level"
semantic_vi: "thông số kỹ thuật thời gian cho báo giá dịch vụ — xác định loại, giá trị và đơn vị thời gian ở cấp báo giá"
keywords:
  - thời gian
  - khoảng thời gian
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
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANDURATIONTP

**Srvcqtandurationtp**

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
| `SrvcDocDurationType` | `SrvcDocDurationType` |
| `SrvcDocDurationValue` | `SrvcDocDurationValue` |
| `SrvcDocDurationUnit` | `SrvcDocDurationUnit` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Quotation Duration - TP'
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
  usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L},
  modelingPattern:        #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]                  
}

define view entity I_SrvcQtanDurationTP
  as projection on R_SrvcQtanDurationTP
{
  key ServiceQuotation,
  key SrvcDocDurationType,
      SrvcDocDurationValue,
      SrvcDocDurationUnit,

      /* Associations */
      _ServiceQuotationTP : redirected to parent I_ServiceQuotationTP
}
```
