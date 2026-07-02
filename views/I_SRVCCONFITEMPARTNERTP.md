---
name: I_SRVCCONFITEMPARTNERTP
description: Srvcconfitempartnertp
semantic_en: "service confirmation item partner — links business partners with defined partner functions to service confirmation items."
semantic_vi: "đối tác mục xác nhận dịch vụ — liên kết các đối tác kinh doanh với các chức năng đối tác được xác định cho các mục xác nhận dịch vụ."
keywords:
  - đối tác dịch vụ
  - chức năng đối tác
  - xác nhận
app_component: CRM-S4-SRV-SCO-2CL
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
  - partner
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITEMPARTNERTP

**Srvcconfitempartnertp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceConfirmation` | `ServiceConfirmation` |
| `ServiceConfirmationItem` | `ServiceConfirmationItem` |
| `CustMgmtPartnerFunction` | `CustMgmtPartnerFunction` |
| `CustMgmtBusinessPartner` | `CustMgmtBusinessPartner` |
| `CustMgmtPartnerIsMainPartner` | `CustMgmtPartnerIsMainPartner` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Item Partner - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {

   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}
//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@VDM.viewType: #TRANSACTIONAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfItemPartnerTP
  as projection on R_SrvcConfItemPartnerTP
{

  key  ServiceConfirmation,
  key  ServiceConfirmationItem,
  key  CustMgmtPartnerFunction,
  key  CustMgmtBusinessPartner,

       CustMgmtPartnerIsMainPartner,

       _SrvcConfItemPartnerAddressTP : redirected to composition child I_SrvcConfItemPartnerAddressTP,

       _ServiceConfirmationItemTP    : redirected to parent I_ServiceConfirmationItemTP,

       _ServiceConfirmationTP        : redirected to I_ServiceConfirmationTP
}
```
