---
name: I_STATISTICALKEYFIGURESTDVH
description: Statisticalkeyfigurestdvh
semantic_en: "Standard value help for statistical key figures — displays key figure codes with category and controlling area."
semantic_vi: "Danh sách giúp chọn giá trị cho chỉ tiêu thống kê — hiển thị mã chỉ tiêu, danh mục và lĩnh vực kiểm soát."
keywords:
  - chỉ tiêu thống kê
  - giá trị danh sách
  - kiểm soát
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - value-help
  - standard-value-help
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:StatisticalKeyFigure
---
# I_STATISTICALKEYFIGURESTDVH

**Statisticalkeyfigurestdvh**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `StatisticalKeyFigure` | `StatisticalKeyFigure` |
| `ControllingArea` | `ControllingArea` |
| `StstcKeyFigCategory` | `cast(StstcKeyFigCategory as fis_ui_grtyp preserving type)` |
| `StstcKeyFigCategoryDesc` | `expr(…)` |
| `_Text` | *Association* |
| `_ControllingArea` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
//GENERATED:001:GlBfhyFV7jUzaDT}MP9DVm
@AbapCatalog.sqlViewName: 'IFISKF__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'StatisticalKeyFigure'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #VALUE_HELP_PROVIDER ]
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

@EndUserText.label: 'Statistical Key Figure'
define view I_StatisticalKeyFigureStdVH as select from I_StatisticalKeyFigure {
  
  @Search: { defaultSearchElement:  true, ranking: #HIGH, fuzzinessThreshold: 0.9 }
  @ObjectModel.text.association: '_Text'
  key StatisticalKeyFigure,
  @ObjectModel.foreignKey.association: '_ControllingArea'
  key ControllingArea,
  
  cast(StstcKeyFigCategory as fis_ui_grtyp preserving type) as StstcKeyFigCategory,
  
  @Search: { defaultSearchElement:  true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  @Semantics.text
  _StatisticalKeyFigureCat._Text[1:Language = $session.system_language].StstcKeyFigCategoryDesc,
  
  _Text,

  @Consumption.hidden: true
  _ControllingArea
}
```
