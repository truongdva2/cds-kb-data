---
name: D_SUPLRINVCCHANGEPOITEMP
description: D Suplrinvcchangepoitemp
semantic_en: "parameterized change-document view — supplier invoice item details with PO reference (item number, subsequent debit/credit flag, item text, cash discount liability, final invoice flag) for purchase order linked invoice modifications"
semantic_vi: "chế độ xem thay đổi tài liệu được tham số hóa — chi tiết mục hóa đơn nhà cung cấp có tham chiếu PO (số mục, cờ nợ/có sau, văn bản mục, trách nhiệm chiết khấu tiền mặt, cờ hóa đơn cuối) cho những sửa đổi hóa đơn được liên kết với đơn đặt hàng"
keywords:
  - mục hóa đơn
  - tham chiếu đơn đặt hàng
  - hóa đơn nhà cung cấp
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
  - item-level
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCHANGEPOITEMP

**D Suplrinvcchangepoitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SupplierInvoiceItem` | `rblgp` |
| `SuplrInvcIsSubsqntDebitCrdt` | `tbtkz` |
| `SupplierInvoiceItemText` | `sgtxt` |
| `IsNotCashDiscountLiable` | `xskrl` |
| `IsFinallyInvoiced` | `erekz` |
| `_AccountAssignments` | *Association* |
| `_SupplierInvoice` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountAssignments` | `D_SuplrInvcChangeAccAssgmtP` | [0..*] |
| `_SupplierInvoice` | `D_SuplrInvcChangeP` | — |

## Source Code

```abap
@EndUserText.label: 'Items with Purchase Order Reference'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_SuplrInvcChangePOItemP
{
      SupplierInvoiceItem            : rblgp;//not changeable
      SuplrInvcIsSubsqntDebitCrdt    : tbtkz;
      SupplierInvoiceItemText        : sgtxt;
      IsNotCashDiscountLiable        : xskrl;
      IsFinallyInvoiced              : erekz;

      _AccountAssignments            : composition [0..*] of D_SuplrInvcChangeAccAssgmtP;
      _SupplierInvoice               : association to parent D_SuplrInvcChangeP;
}
```
