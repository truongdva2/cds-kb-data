---
name: D_SUPLRINVCCREATEWITHTAXP
description: D Suplrinvccreatewithtaxp
semantic_en: "parameterized data-input view — withholding tax parameters (withholding tax type, withholding tax code, currency, base amount, manually entered amounts, manual entry flags) for supplier invoices with withholding taxes"
semantic_vi: "chế độ xem đầu vào dữ liệu được tham số hóa — tham số thuế khiếu trương (loại thuế khiếu trương, mã thuế khiếu trương, tiền tệ, số tiền cơ sở, số tiền nhập thủ công, cờ nhập thủ công) cho hóa đơn nhà cung cấp có thuế khiếu trương"
keywords:
  - thuế khiếu trương
  - hóa đơn nhà cung cấp
  - chi tiết thuế
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
  - tax
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCREATEWITHTAXP

**D Suplrinvccreatewithtaxp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WithholdingTaxType` | `witht` |
| `WithholdingTaxCode` | `wt_withcd` |
| `DocumentCurrency` | `waers` |
| `WhldgTxBaseAmtInDocCry` | `wt_bs1_cs` |
| `MnllyEnteredWhldgTxAmtInDocCry` | `wt_qbuihb_cs` |
| `WhldgTaxIsEnteredManually` | `wt_amnman` |
| `WhldgTaxBaseIsEnteredManually` | `wt_basman` |
| `_SupplierInvoice` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierInvoice` | `D_SuplrInvcCreateP` | — |

## Source Code

```abap
@EndUserText.label: 'Withholding Taxes'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define abstract entity D_SuplrInvcCreateWithTaxP
{
      WithholdingTaxType             : witht;
      WithholdingTaxCode             : wt_withcd;
      @Semantics.currencyCode        : true
      DocumentCurrency               : waers;
      @Semantics                     : { amount : {currencyCode: 'DocumentCurrency'} }
      WhldgTxBaseAmtInDocCry         : wt_bs1_cs;
      @Semantics                     : { amount : {currencyCode: 'DocumentCurrency'} }
      MnllyEnteredWhldgTxAmtInDocCry : wt_qbuihb_cs;
      WhldgTaxIsEnteredManually      : wt_amnman;
      WhldgTaxBaseIsEnteredManually  : wt_basman;

      _SupplierInvoice               : association to parent D_SuplrInvcCreateP;
}
```
