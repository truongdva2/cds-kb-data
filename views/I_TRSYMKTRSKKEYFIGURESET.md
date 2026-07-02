---
name: I_TRSYMKTRSKKEYFIGURESET
description: Trsymktrskkeyfigureset
semantic_en: "treasury market risk key figure set — market risk key figure configurations with scenarios and data shifts"
semantic_vi: "bộ chỉ tiêu chủ chốt rủi ro thị trường kho bạc — cấu hình chỉ tiêu chủ chốt rủi ro thị trường kèm kịch bản và dịch chuyển dữ liệu"
keywords:
  - chỉ tiêu rủi ro thị trường
  - kịch bản thị trường
  - định giá rủi ro
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-MR-2CL
  - lob:Other
---
# I_TRSYMKTRSKKEYFIGURESET

**Trsymktrskkeyfigureset**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MarketRiskKeyFigureSet` | `KeyFigureSet.mra_kf_set` |
| `EvaluationCurrency` | `KeyFigureSet.currency` |
| `TreasuryEvaluationType` | `KeyFigureSet.eval_type` |
| `MarketDataScenario` | `KeyFigureSet.md_scenario` |
| `MarketDataShift` | `KeyFigureSet.md_shift_id` |
| `_KeyFigureSetText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KeyFigureSetText` | `I_TrsyMktRskKeyFigureSetText` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName:            'ITRSYMRAKFSET',
                compiler.compareFilter: true,
                preserveKey:            true,
                buffering: { status:    #ACTIVE,
                             type:      #FULL } }

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations:true 

@ObjectModel: { representativeKey:       'MarketRiskKeyFigureSet',
                usageType.dataClass:      #CUSTOMIZING,
                usageType.serviceQuality: #D,
                usageType.sizeCategory:   #S,
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ],
                modelingPattern: #ANALYTICAL_DIMENSION }

@VDM: { viewType: #BASIC}

@EndUserText.label: 'Treasury Market Risk Key Figure Set'

define view I_TrsyMktRskKeyFigureSet
  as select from afwgo_mrakfset as KeyFigureSet

  association [0..*] to I_TrsyMktRskKeyFigureSetText as _KeyFigureSetText on _KeyFigureSetText.MarketRiskKeyFigureSet = $projection.MarketRiskKeyFigureSet
{
      //KeyFigureSet
      @ObjectModel.text.association: '_KeyFigureSetText'
  key KeyFigureSet.mra_kf_set  as MarketRiskKeyFigureSet,
      KeyFigureSet.currency    as EvaluationCurrency,
      KeyFigureSet.eval_type   as TreasuryEvaluationType,
      KeyFigureSet.md_scenario as MarketDataScenario,
      KeyFigureSet.md_shift_id as MarketDataShift,

      /* Associations */
      _KeyFigureSetText
}
```
