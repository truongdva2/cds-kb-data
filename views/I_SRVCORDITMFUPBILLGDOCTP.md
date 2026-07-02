---
name: I_SRVCORDITMFUPBILLGDOCTP
description: Srvcorditmfupbillgdoctp
semantic_en: "Billing document references linked to individual service order items with item-level detail — tracking item-based billing."
semantic_vi: "Tham chiếu tài liệu hóa đơn được liên kết với hạng mục đơn hàng dịch vụ riêng lẻ có chi tiết cấp độ hạng mục — theo dõi hóa đơn dựa trên hạng mục."
keywords:
  - hóa đơn
  - hạng mục đơn hàng
  - tham chiếu
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
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITMFUPBILLGDOCTP

**Srvcorditmfupbillgdoctp**

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
| `ServiceOrderItem` | `ServiceOrderItem` |
| `BillingDocument` | `BillingDocument` |
| `BillingDocumentItem` | `BillingDocumentItem` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Billing Document - TP'
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

define view entity I_SrvcOrdItmFUPBillgDocTP 
as projection on R_SrvcOrdItmFUPBillgDocTP {
  key ServiceOrder,
  key ServiceOrderItem,
  key BillingDocument,
  key BillingDocumentItem,
  /* Associations */
  _ServiceOrderItem : redirected to parent I_ServiceOrderItemTP,
  _ServiceOrderTP : redirected to I_ServiceOrderTP
}
```
