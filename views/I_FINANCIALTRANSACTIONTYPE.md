---
name: I_FINANCIALTRANSACTIONTYPE
description: Financialtransactiontype
semantic_en: "financial transaction type configuration — defines transaction type groups, carry-forward rules, and formula text for balance calculations"
semantic_vi: "cấu hình loại giao dịch tài chính — xác định nhóm loại giao dịch, quy tắc chuyển tiếp năm, và công thức tính toán số dư"
keywords:
  - loại giao dịch
  - chuyển năm
  - công thức
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FINANCIALTRANSACTIONTYPE

**Financialtransactiontype**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinancialTransactionType` | `cast( trtyp as fis_rmvct preserving type )` |
| `FinancialTransactionTypeGroup` | `cast( ttgrp as fis_rmvct_grp preserving type )` |
| `CarryForwardTransactionType` | `ttcfo` |
| `TransactionTypeIsDerived` | `toind` |
| `TransacTypeTotalsFormulaText` | `sumru` |
| `BalanceCarryForwardIsFixed` | `cfind` |
| `AcquisitionIsCurrentYearOnly` | `cyind` |
| `BrkdwnByYearsIsNotApplicable` | `cydbi` |
| `RetirementTransactionType` | `ttret` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinancialTransactionTypeT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Financial Transaction Type'
@AbapCatalog.sqlViewName: 'IFITRANSTYPE'
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@ObjectModel: {representativeKey: 'FinancialTransactionType', 
               sapObjectNodeType.name: 'FinancialTransactionType', 
               modelingPattern: #ANALYTICAL_DIMENSION,
               supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE],
               usageType: { sizeCategory: #S,
                            dataClass:  #MASTER,
                            serviceQuality: #A }
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.numberOfKeyFields: 1

@Search.searchable: true
define view I_FinancialTransactionType
  as select from t856
  association [0..*] to I_FinancialTransactionTypeT as _Text on $projection.FinancialTransactionType = _Text.FinancialTransactionType
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key cast( trtyp as fis_rmvct preserving type ) as FinancialTransactionType,

      cast( ttgrp as fis_rmvct_grp preserving type ) as FinancialTransactionTypeGroup,

      ttcfo as CarryForwardTransactionType,

      //sign,

      toind as TransactionTypeIsDerived,

      sumru as TransacTypeTotalsFormulaText,

      cfind as BalanceCarryForwardIsFixed,

      cyind as AcquisitionIsCurrentYearOnly,

      cydbi as BrkdwnByYearsIsNotApplicable,

      ttret as RetirementTransactionType,
      
      _Text

};
```
