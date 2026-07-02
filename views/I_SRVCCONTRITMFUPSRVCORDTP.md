---
name: I_SRVCCONTRITMFUPSRVCORDTP
description: Srvccontritmfupsrvcordtp
semantic_en: "service contract item follow-up service order — links service contract line items to generated service orders."
semantic_vi: "đơn dịch vụ theo dõi mục hợp đồng dịch vụ — liên kết các mục dòng hợp đồng dịch vụ với các đơn dịch vụ được tạo."
keywords:
  - đơn dịch vụ mục
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
# I_SRVCCONTRITMFUPSRVCORDTP

**Srvccontritmfupsrvcordtp**

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
| `ServiceContractItem` | `ServiceContractItem` |
| `ServiceOrder` | `ServiceOrder` |
| `ServiceOrderItem` | `ServiceOrderItem` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Service Order - TP'
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

define view entity I_SrvcContrItmFUPSrvcOrdTP as projection on R_SrvcContrItmFUPSrvcOrdTP {
  key ServiceContract,
  key ServiceContractItem,
  key ServiceOrder,
  key ServiceOrderItem,
  
  /* Associations */
  _ServiceContractItemTP : redirected to parent I_ServiceContractItemTP,
  _ServiceContractTP     : redirected to I_ServiceContractTP
}
```
