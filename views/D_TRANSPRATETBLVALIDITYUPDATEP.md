---
name: D_TRANSPRATETBLVALIDITYUPDATEP
description: D Transpratetblvalidityupdatep
semantic_en: "transportation rate validity update action parameter — captures percentage change, amount, currency, and sign for rate adjustments."
semantic_vi: "tham số hành động cập nhật hiệu lực bảng tỷ giá vận chuyển — ghi lại thay đổi phần trăm, số tiền, tiền tệ và dấu để điều chỉnh tỷ giá."
keywords:
  - cập nhật tỷ giá
  - điều chỉnh tỷ giá
  - phần trăm thay đổi
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - component:TM-MD-CM-2CL
  - lob:Other
---
# D_TRANSPRATETBLVALIDITYUPDATEP

**D Transpratetblvalidityupdatep**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspRateIncrDecrInPct` | `/scmtms/percentage_amt` |
| `TranspRateAmountInRateCrcy` | `/scmtms/amount` |
| `TranspRateValidityCurrency` | `/scmtms/currency` |
| `TranspRateValidityPctUnit` | `msehi` |
| `TranspRateSignIncrDecr` | `/scmtms/sign` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Action Parameter for Update Rates'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_TranspRateTblValidityUpdateP
{
  @EndUserText.label         : 'Percent'
  TranspRateIncrDecrInPct    : /scmtms/percentage_amt;

  @EndUserText.label         : 'Amount'
  TranspRateAmountInRateCrcy :  /scmtms/amount;
//  cast( TranspRateAmountInRateCrcy :  /scmtms/amount as /scmtms/vdm_amount_max_length );

  @EndUserText.label         : 'Currency'
  @UI.hidden                 : true
  @Consumption.valueHelpDefinition: [{ entity :  { name: 'I_CurrencyStdVH', element   : 'Currency' } }]
  @Semantics.currencyCode    : true
  TranspRateValidityCurrency : /scmtms/currency;

  @Semantics.unitOfMeasure   : true
  TranspRateValidityPctUnit  : msehi;

  @EndUserText.label         : 'Increase/Decrease'
  TranspRateSignIncrDecr     : /scmtms/sign; 
}
```
