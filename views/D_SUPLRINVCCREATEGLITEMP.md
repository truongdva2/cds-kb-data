---
name: D_SUPLRINVCCREATEGLITEMP
description: D Suplrinvccreateglitemp
semantic_en: "parameterized data-input view — GL account posting parameters (supplier invoice item, GL account, currency, amount, debit/credit code, company code, tax code, jurisdiction, item text, cost center, sales order, internal order, profit center) for direct GL account postings during invoice creation"
semantic_vi: "chế độ xem đầu vào dữ liệu được tham số hóa — tham số hạch toán tài khoản GL (mục hóa đơn nhà cung cấp, tài khoản GL, tiền tệ, số tiền, mã nợ/có, mã công ty, mã thuế, khu vực pháp lý, văn bản mục, trung tâm chi phí, đơn bán, đơn đặt hàng nội bộ, trung tâm lợi nhuận) cho hạch toán tài khoản GL trực tiếp trong quá trình tạo hóa đơn"
keywords:
  - hạch toán tài khoản GL
  - tạo hóa đơn
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
# D_SUPLRINVCCREATEGLITEMP

**D Suplrinvccreateglitemp**

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
| `DocumentCurrency` | `waers` |
| `SupplierInvoiceItemAmount` | `wrbtr_cs` |
| `DebitCreditCode` | `shkzg` |
| `CompanyCode` | `bukrs` |
| `TaxCode` | `mwskz` |
| `TaxJurisdiction` | `txjcd` |
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
| `GrantID` | `gm_grant_nbr` |
| `QuantityUnit` | `meins` |
| `Quantity` | `menge_d` |
| `AssignmentReference` | `dzuonr` |
| `IsNotCashDiscountLiable` | `xskrl` |
| `TaxBaseAmountInDocCry` | `fwbas_cs` |
| `WorkItem` | `/cpd/pfp_workitem_id` |
| `TaxCountry` | `fot_tax_country` |
| `FinancialTransactionType` | `rmvct` |
| `BudgetPeriod` | `fm_budget_period` |
| `_SupplierInvoice` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoice` | `D_SuplrInvcCreateP` | — |

## Source Code

```abap
@EndUserText.label: 'Direct Postings to GL account'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@AbapCatalog.extensibility.extensible: true

define abstract entity D_SuplrInvcCreateGLItemP
{
      SupplierInvoiceItem       : cobl_nr;
      GLAccount                 : saknr;
      @Semantics.currencyCode   : true
      DocumentCurrency          : waers;
      @Semantics                : { amount : {currencyCode: 'DocumentCurrency'} }
      SupplierInvoiceItemAmount : wrbtr_cs;
      DebitCreditCode           : shkzg;
      CompanyCode               : bukrs;
      TaxCode                   : mwskz;
      TaxJurisdiction           : txjcd;
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
      GrantID                   : gm_grant_nbr;
      @Semantics.unitOfMeasure  : true
      QuantityUnit              : meins;
      @Semantics                : { quantity : {unitOfMeasure: 'QuantityUnit'} }
      Quantity                  : menge_d;
      AssignmentReference       : dzuonr;
      IsNotCashDiscountLiable   : xskrl;
      @Semantics                : { amount : {currencyCode: 'DocumentCurrency'} }
      TaxBaseAmountInDocCry     : fwbas_cs;
      WorkItem                  : /cpd/pfp_workitem_id;
      TaxCountry                : fot_tax_country;
      FinancialTransactionType  : rmvct;
      BudgetPeriod              : fm_budget_period;

      _SupplierInvoice          : association to parent D_SuplrInvcCreateP;
}
```
