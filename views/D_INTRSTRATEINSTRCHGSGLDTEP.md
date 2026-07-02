---
name: D_INTRSTRATEINSTRCHGSGLDTEP
description: D Intrstrateinstrchgsgldtep
semantic_en: "single date parameters for interest instrument changes — specifies calculation date, due date, interest rate adjustment date, amounts, and percentage rates."
semantic_vi: "tham số ngày đơn cho thay đổi công cụ lãi suất — xác định ngày tính toán, ngày đến hạn, ngày điều chỉnh lãi suất, số tiền, và tỷ lệ phần trăm."
keywords:
  - ngày tính toán
  - lãi suất
  - tham số
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# D_INTRSTRATEINSTRCHGSGLDTEP

**D Intrstrateinstrchgsgldtep**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinancialTransactionDirection` | `tb_rkondgr` |
| `FinConditionItem` | `tb_kond` |
| `ConditionItemValidityStartDate` | `dguel_kp` |
| `CalculationDate` | `dvalut` |
| `CalcDateIsAsEndDateMonthEnd` | `calc_dte_as_end_dte_month_end` |
| `FinancialConditionDueDate` | `dfaell` |
| `DueDateIsAsEndDateMonthEnd` | `due_dte_as_end_date_month_end` |
| `InterestRateAdjustmentDate` | `tbvaluza` |
| `IntrstRateAdjmtDateIsMonthEnd` | `tbultiza` |
| `FinancialConditionItemAmount` | `ftr_condition_item_amount` |
| `FinancialConditionItemCurrency` | `swhrkond` |
| `ConditionPercentageRate` | `pkond` |
| `_Condition` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Condition` | `D_IntrstRateInstrChgCndnP` | — |

## Source Code

```abap
@EndUserText.label: 'Single Date Abstract Parameter'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]

define abstract entity D_IntrstRateInstrChgSglDteP
{
//   key DummyKey                       : abap.char(1);
      //CompanyCode                    : bukrs;
      //FinancialTransaction           : tb_rfha;
      FinancialTransactionDirection  : tb_rkondgr;
      FinConditionItem               : tb_kond;
      ConditionItemValidityStartDate : dguel_kp;
      CalculationDate                : dvalut;
      CalcDateIsAsEndDateMonthEnd    : calc_dte_as_end_dte_month_end;
      FinancialConditionDueDate      : dfaell;
      DueDateIsAsEndDateMonthEnd     : due_dte_as_end_date_month_end;
      InterestRateAdjustmentDate     : tbvaluza;
      IntrstRateAdjmtDateIsMonthEnd  : tbultiza;
      @Semantics.amount.currencyCode : 'FinancialConditionItemCurrency'
      FinancialConditionItemAmount   : ftr_condition_item_amount;
      @Semantics.currencyCode        : true
      FinancialConditionItemCurrency : swhrkond;
      ConditionPercentageRate        : pkond;

      _Condition                     : association to parent D_IntrstRateInstrChgCndnP;
      //   _Condition : association to parent D_IntrstRateInstrChgCndnP on $projection.CompanyCode = _Condition.CompanyCode
      //                                                               and $projection.FinancialTransaction = _Condition.FinancialTransaction
      //                                                               and $projection.FinancialTransactionDirection = _Condition.FinancialTransactionDirection
      //                                                               and $projection.FinConditionItem = _Condition.FinConditionItem
      //                                                               and $projection.ConditionItemValidityStartDate = _Condition.ConditionItemValidityStartDate;
}
```
