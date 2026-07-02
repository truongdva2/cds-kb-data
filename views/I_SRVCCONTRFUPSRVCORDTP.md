---
name: I_SRVCCONTRFUPSRVCORDTP
description: Srvccontrfupsrvcordtp
semantic_en: "service contract follow-up service order — links service contracts to generated service orders."
semantic_vi: "đơn dịch vụ theo dõi hợp đồng dịch vụ — liên kết các hợp đồng dịch vụ với các đơn dịch vụ được tạo."
keywords:
  - đơn dịch vụ
  - theo dõi
  - hợp đồng
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
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRFUPSRVCORDTP

**Srvccontrfupsrvcordtp**

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
| `ServiceOrder` | `ServiceOrder` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Follow-Up Service Order - TP'
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
define view entity I_SrvcContrFUPSrvcOrdTP as projection on R_SrvcContrFUPSrvcOrdTP {
  key ServiceContract,
  key ServiceOrder,
  /* Associations */
  _ServiceContractTP : redirected to parent I_ServiceContractTP
}
```
