---
name: I_SRVCORDITMFUPSUPLRINVCTP
description: Srvcorditmfupsuplrinvctp
semantic_en: "Supplier invoices linked to specific service order items with fiscal year identification — managing vendor invoice detail reconciliation."
semantic_vi: "Hóa đơn nhà cung cấp được liên kết với hạng mục đơn hàng dịch vụ cụ thể có xác định năm tài chính — quản lý điều hòa chi tiết hóa đơn nhà cung cấp."
keywords:
  - hóa đơn nhà cung cấp
  - hạng mục đơn hàng
  - tài chính
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
# I_SRVCORDITMFUPSUPLRINVCTP

**Srvcorditmfupsuplrinvctp**

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
| `SupplierInvoice` | `SupplierInvoice` |
| `SupplierInvoiceItem` | `SupplierInvoiceItem` |
| `FiscalYear` | `FiscalYear` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Supplier Invoice - TP'
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

define view entity I_SrvcOrdItmFUPSuplrInvcTP
as projection on R_SrvcOrdItmFUPSuplrInvcTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key SupplierInvoice,
  key SupplierInvoiceItem,
  key FiscalYear,
  /* Associations */
  _ServiceOrderItem : redirected to parent I_ServiceOrderItemTP,
  _ServiceOrderTP   : redirected to I_ServiceOrderTP
}
```
