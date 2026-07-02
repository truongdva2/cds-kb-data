---
name: I_SRVCORDFUPSUPLRINVCTP
description: Srvcordfupsuplrinvctp
semantic_en: "Supplier invoice references originated from service orders with fiscal year tracking — managing vendor invoice reconciliation."
semantic_vi: "Tham chiếu hóa đơn nhà cung cấp có nguồn gốc từ đơn hàng dịch vụ với theo dõi năm tài chính — quản lý điều hòa hóa đơn nhà cung cấp."
keywords:
  - hóa đơn nhà cung cấp
  - đơn hàng dịch vụ
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
# I_SRVCORDFUPSUPLRINVCTP

**Srvcordfupsuplrinvctp**

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
| `SupplierInvoice` | `SupplierInvoice` |
| `FiscalYear` | `FiscalYear` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Follow-Up Supplier Invoice - TP'
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

define view entity I_SrvcOrdFUPSuplrInvcTP 
as projection on R_SrvcOrdFUPSuplrInvcTP {
key ServiceOrder,
key SupplierInvoice,
key FiscalYear,
  /* Associations */
  _ServiceOrderTP: redirected to parent I_ServiceOrderTP
}
```
