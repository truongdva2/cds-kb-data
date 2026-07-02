---
name: I_LOGLRNDNGUOMGRPUOMSTDVH
description: Loglrndnguomgrpuomstdvh
semantic_en: "logistical rounding UoM group UoM value help — reference for rounding unit of measure lookup."
semantic_vi: "trợ giúp giá trị UoM nhóm làm tròn logistic — tham chiếu cho tra cứu đơn vị đo."
keywords:
  - làm tròn UoM
  - đơn vị đo
  - tra cứu
app_component: LO-RFM-MD-ART
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - value-help
  - standard-value-help
  - unit-of-measure
  - component:LO-RFM-MD-ART
  - lob:Logistics General
---
# I_LOGLRNDNGUOMGRPUOMSTDVH

**Loglrndnguomgrpuomstdvh**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LogisticalRoundingUoMGroup` | `LogisticalRoundingUoMGroup` |
| `LogisticalRoundingUoMGroupUoM` | `LogisticalRoundingUoMGroupUoM` |
| `_UnitOfMeasure` | *Association* |
| `_LogisticalRoundingUoMGroup` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
    modelingPattern: #VALUE_HELP_PROVIDER,
    dataCategory: #VALUE_HELP,
    representativeKey: 'LogisticalRoundingUoMGroupUoM',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Logistical Rounding UoM Group UoM'

define view entity I_LoglRndngUoMGrpUoMStdVH
  as select from I_LogisticalRoundingUoMGrpUoM
{
      @ObjectModel.foreignKey.association: '_LogisticalRoundingUoMGroup'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key LogisticalRoundingUoMGroup,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key LogisticalRoundingUoMGroupUoM,
  
  _UnitOfMeasure,
  _LogisticalRoundingUoMGroup

};
```
