---
name: I_SRVCORDPARTNERTP
description: Srvcordpartnertp
semantic_en: "service order partner — links service orders to customer management partners with role indicators"
semantic_vi: "đối tác đơn hàng dịch vụ — liên kết các đơn hàng dịch vụ đến đối tác quản lý khách hàng với chỉ báo vai trò"
keywords:
  - đối tác
  - dịch vụ
  - vai trò
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
  - partner
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDPARTNERTP

**Srvcordpartnertp**

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
| `CustMgmtPartnerFunction` | `CustMgmtPartnerFunction` |
| `CustMgmtBusinessPartner` | `CustMgmtBusinessPartner` |
| `CustMgmtPartnerIsMainPartner` | `CustMgmtPartnerIsMainPartner` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Partner - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdPartnerTP
  as projection on R_SrvcOrdPartnerTP
{
  key ServiceOrder,
  key CustMgmtPartnerFunction,
  key CustMgmtBusinessPartner,
      CustMgmtPartnerIsMainPartner,
      /* Associations */
      _ServiceOrderTP          : redirected to parent I_ServiceOrderTP,

      _SrvcOrdPartnerAddressTP : redirected to composition child I_SrvcOrdPartnerAddressTP
      
}
```
