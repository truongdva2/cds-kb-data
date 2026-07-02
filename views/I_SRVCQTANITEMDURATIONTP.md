---
name: I_SRVCQTANITEMDURATIONTP
description: Srvcqtanitemdurationtp
semantic_en: "item-level duration specifications for service quotations — captures duration details for individual quotation items"
semantic_vi: "thông số kỹ thuật thời gian cấp mục cho báo giá dịch vụ — ghi lại chi tiết thời gian cho các mục báo giá riêng lẻ"
keywords:
  - thời gian
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
# I_SRVCQTANITEMDURATIONTP

**Srvcqtanitemdurationtp**

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
| `SrvcDocDurationType` | `SrvcDocDurationType` |
| `SrvcDocDurationValue` | `SrvcDocDurationValue` |
| `SrvcDocDurationUnit` | `SrvcDocDurationUnit` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Quotation Item Duration - TP'
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
define view entity I_SrvcQtanItemDurationTP
  as projection on R_SrvcQtanItemDurationTP
{
  key ServiceQuotation,
  key ServiceQuotationItem,
  key SrvcDocDurationType,
      SrvcDocDurationValue,
      SrvcDocDurationUnit,

      /* Associations */
      _ServiceQuotationItemTP : redirected to parent I_ServiceQuotationItemTP,
      _ServiceQuotationTP     : redirected to I_ServiceQuotationTP
}
```
