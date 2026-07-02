---
name: I_SRVCCONFITMFUPBILLGDOCTP
description: Srvcconfitmfupbillgdoctp
semantic_en: "service confirmation item follow-up billing document — links service confirmation line items to subsequent billing document references."
semantic_vi: "tài liệu hóa đơn theo dõi mục xác nhận dịch vụ — liên kết các mục dòng xác nhận dịch vụ với các tham chiếu tài liệu hóa đơn sau này."
keywords:
  - hóa đơn dịch vụ
  - theo dõi
  - tài liệu
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
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITMFUPBILLGDOCTP

**Srvcconfitmfupbillgdoctp**

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
| `BillingDocument` | `BillingDocument` |
| `BillingDocumentItem` | `BillingDocumentItem` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Billing Document - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
   
   usageType: { dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfItmFUPBillgDocTP as projection on R_SrvcConfItmFUPBillgDocTP {
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  key BillingDocument,
  key BillingDocumentItem,
  
  /* Associations */
  _ServiceConfirmationItem : redirected to parent I_ServiceConfirmationItemTP,
  _ServiceConfirmationTP   : redirected to I_ServiceConfirmationTP
  
}
```
