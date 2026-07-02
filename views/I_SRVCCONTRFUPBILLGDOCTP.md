---
name: I_SRVCCONTRFUPBILLGDOCTP
description: Srvccontrfupbillgdoctp
semantic_en: "service contract follow-up billing document — links service contracts to subsequent billing document references."
semantic_vi: "tài liệu hóa đơn theo dõi hợp đồng dịch vụ — liên kết các hợp đồng dịch vụ với các tham chiếu tài liệu hóa đơn sau này."
keywords:
  - hóa đơn dịch vụ
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
# I_SRVCCONTRFUPBILLGDOCTP

**Srvccontrfupbillgdoctp**

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
| `BillingDocument` | `BillingDocument` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Follow-Up Billing Document - TP'
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
define view entity I_SrvcContrFUPBillgDocTP as projection on R_SrvcContrFUPBillgDocTP {
  key ServiceContract,
  key BillingDocument,
  /* Associations */
  _ServiceContractTP : redirected to parent I_ServiceContractTP
}
```
