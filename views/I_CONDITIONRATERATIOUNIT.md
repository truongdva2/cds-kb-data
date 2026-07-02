---
name: I_CONDITIONRATERATIOUNIT
description: Conditionrateratiounit
semantic_en: "condition rate ratio units — unit of measure mapping for condition ratios"
semantic_vi: "đơn vị tỷ lệ tỷ giá điều kiện — ánh xạ đơn vị đo cho tỷ lệ điều kiện"
keywords:
  - đơn vị tỷ lệ
  - tỷ giá
  - điều kiện
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - pricing-condition
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
  - bo:ConditionRateRatioUnit
---
# I_CONDITIONRATERATIOUNIT

**Conditionrateratiounit**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionRateRatioUnit` | `ConditionRateRatioUnit.ConditionRateRatioUnit` |
| `UnitOfMeasureISOCode` | `ConditionRateRatioUnit.UnitOfMeasureISOCode` |
| `_ISOCode` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Condition Rate Ratio Unit'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@Analytics.internalName: #LOCAL
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'ConditionRateRatioUnit'

@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
define view entity I_ConditionRateRatioUnit
  as select from R_ConditionRateRatioUnit as ConditionRateRatioUnit
{
  key ConditionRateRatioUnit.ConditionRateRatioUnit,
      @ObjectModel.foreignKey.association: '_ISOCode'
      ConditionRateRatioUnit.UnitOfMeasureISOCode,
      ConditionRateRatioUnit._ISOCode
}
```
