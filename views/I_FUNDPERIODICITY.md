---
name: I_FUNDPERIODICITY
description: Fundperiodicity
semantic_en: "fund frequency — codelist defining periodicity types for fund allocations and disbursement cycles"
semantic_vi: "tần suất quỹ — danh sách mã định nghĩa loại khoảng thời gian cho phân bổ và chu kỳ giải ngân quỹ"
keywords:
  - tần suất
  - quỹ
  - khoảng thời gian
app_component: PSM-FM-MD
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-MD
  - interface-view
  - component:PSM-FM-MD
  - lob:Other
  - bo:FundPeriodicity
---
# I_FUNDPERIODICITY

**Fundperiodicity**

| Property | Value |
|---|---|
| App Component | `PSM-FM-MD` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FundPeriodicity` | `periodicity` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FundPeriodicityText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Fund Frequency'

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.representativeKey: 'FundPeriodicity'
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        serviceQuality: #A,
        sizeCategory: #S
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE ]
}


@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@AbapCatalog.sqlViewName: 'IFUNDPERIODICITY'
define view I_FundPeriodicity
  as select from psm_d_prdicity

  association [1..*] to I_FundPeriodicityText as _Text on $projection.FundPeriodicity = _Text.FundPeriodicity
{

      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key periodicity as FundPeriodicity,

      _Text

}
```
