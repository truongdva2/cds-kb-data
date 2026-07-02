---
name: D_SUPPLIERINVOICEPOSTED
description: D Supplier InvoicePOSTED
semantic_en: "business-event signature for supplier invoices — records posting event with supplier entity and fiscal year"
semantic_vi: "chữ ký sự kiện kinh doanh cho hóa đơn nhà cung cấp — ghi lại sự kiện hạch toán với thực thể nhà cung cấp và năm tài chính"
keywords:
  - hóa đơn nhà cung cấp
  - hạch toán hóa đơn
  - sự kiện hạch toán
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - supplier
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# D_SUPPLIERINVOICEPOSTED

**D Supplier InvoicePOSTED**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FiscalYear` | `gjahr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Supplier Invoice Posted'
@ObjectModel.sapObjectNodeType.name: 'SupplierInvoice'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_SupplierInvoicePosted
{
      FiscalYear : gjahr;
}
```
