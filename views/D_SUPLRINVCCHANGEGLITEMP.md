---
name: D_SUPLRINVCCHANGEGLITEMP
description: D Suplrinvcchangeglitemp
semantic_en: "parameterized change-document view — GL account posting details (supplier invoice item, GL account, company code, text, cost center, sales order, internal order, profit center, business area, cost object, WBS element, activity type, personnel) for direct GL postings"
semantic_vi: "chế độ xem thay đổi tài liệu được tham số hóa — chi tiết hạch toán tài khoản GL (mục hóa đơn nhà cung cấp, tài khoản GL, mã công ty, văn bản, trung tâm chi phí, đơn bán, đơn đặt hàng nội bộ, trung tâm lợi nhuận, lĩnh vực kinh doanh, đối tượng chi phí, phần tử WBS, loại hoạt động, nhân viên) cho hạch toán GL trực tiếp"
keywords:
  - hạch toán tài khoản GL
  - hóa đơn nhà cung cấp
  - chi tiết hạch toán
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
# D_SUPLRINVCCHANGEGLITEMP

**D Suplrinvcchangeglitemp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SupplierInvoiceItem` | `cobl_nr` |
| `GLAccount` | `saknr` |
| `CompanyCode` | `bukrs` |
| `SupplierInvoiceItemText` | `sgtxt` |
| `CostCenter` | `kostl` |
| `SalesOrder` | `vbeln` |
| `SalesOrderItem` | `vbelp` |
| `InternalOrder` | `aufnr` |
| `ProfitCenter` | `prctr` |
| `BusinessArea` | `gsber` |
| `CostObject` | `kstrg` |
| `WBSElementInternalID` | `ps_s4_pspnr` |
| `CostCtrActivityType` | `lstar` |
| `PersonnelNumber` | `pernr_d` |
| `BusinessProcess` | `co_prznr` |
| `AssignmentReference` | `dzuonr` |
| `IsNotCashDiscountLiable` | `xskrl` |
| `WorkItem` | `/cpd/pfp_workitem_id` |
| `FinancialTransactionType` | `rmvct` |
| `_SupplierInvoice` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoice` | `D_SuplrInvcChangeP` | — |

## Source Code

```abap
@EndUserText.label: 'Direct Postings to GL account'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_SuplrInvcChangeGLItemP
{
      SupplierInvoiceItem       : cobl_nr;
      GLAccount                 : saknr;
      CompanyCode               : bukrs;
      SupplierInvoiceItemText   : sgtxt;
      CostCenter                : kostl;
      SalesOrder                : vbeln;
      SalesOrderItem            : vbelp;
      InternalOrder             : aufnr;
      ProfitCenter              : prctr;
      BusinessArea              : gsber;
      CostObject                : kstrg;
      WBSElementInternalID      : ps_s4_pspnr;
      CostCtrActivityType       : lstar;
      PersonnelNumber           : pernr_d;
      BusinessProcess           : co_prznr;
      AssignmentReference       : dzuonr;
      IsNotCashDiscountLiable   : xskrl;
      WorkItem                  : /cpd/pfp_workitem_id;
      FinancialTransactionType  : rmvct;

      _SupplierInvoice          : association to parent D_SuplrInvcChangeP;
}
```
