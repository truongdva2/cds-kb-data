---
name: I_CNSLDTNUNITBYTIMETP
description: Cnsldtnunitbytimetp
semantic_en: "consolidation unit by time — TP reference mapping consolidation unit validity periods, local currency, and company assignments"
semantic_vi: "đơn vị hợp nhất theo thời gian — ánh xạ tham chiếu TP với thời kỳ hiệu lực đơn vị hợp nhất, tiền tệ địa phương và gán công ty"
keywords:
  - đơn vị hợp nhất
  - thời gian hiệu lực
  - tiền tệ địa phương
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - transactional-processing
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITBYTIMETP

**Cnsldtnunitbytimetp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationUnit` | `cast ( _Source.ConsolidationUnit as fincs_consolidationunit preserving type )` |
| `FromFiscalYearPeriod` | `_Source.FromFiscalYearPeriod` |
| `ToFiscalYearPeriod` | `_Source.ToFiscalYearPeriod` |
| `ConsolidationUnitLocalCurrency` | `_Source.ConsolidationUnitLocalCurrency` |
| `Company` | `_Source.Company` |
| `_CnsldtnUnit` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: [
    'ConsolidationUnit'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Search.searchable: true
@EndUserText.label: 'Consolidation Unit by Time - TP'
define view entity I_CnsldtnUnitByTimeTP
  as projection on R_CnsldtnUnitByTimeTP as _Source
{

      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key cast ( _Source.ConsolidationUnit as fincs_consolidationunit preserving type ) as ConsolidationUnit,

      @Semantics.fiscal.yearPeriod: true
  key _Source.FromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _Source.ToFiscalYearPeriod,

      _Source.ConsolidationUnitLocalCurrency,

      _Source.Company,


      /* associations for transactional processing */
      _CnsldtnUnit                                                                  as _CnsldtnUnit : redirected to parent I_CnsldtnUnitTP
}
```
