---
name: I_FINANCIALPOSITION
description: Financialposition
semantic_en: "financial position — financial status position definitions with group, data source, and asset/liability classification"
semantic_vi: "vị trí tài chính — định nghĩa vị trí trạng thái tài chính với nhóm, nguồn dữ liệu và phân loại tài sản/nợ"
keywords:
  - vị trí tài chính
  - trạng thái tài chính
  - tài sản nợ
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
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
  - bo:FinancialPosition
---
# I_FINANCIALPOSITION

**Financialposition**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinancialPosition` | `FinancialPositionDef.fin_pos` |
| `FinancialPositionName` | `FinancialPositionDef.fin_pos_name` |
| `FinancialPositionGroup` | `FinancialPositionDef.fin_pos_grp` |
| `FinancialPositionDataSource` | `FinancialPositionDef.datasource` |
| `FinPositionAssetLiabilityCode` | `FinancialPositionGroupDef.FinPositionAssetLiabilityCode` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@ObjectModel.representativeKey: 'FinancialPosition'
@Analytics.technicalName: 'IFSFINPOS'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.sapObjectNodeType.name: 'FinancialPosition'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@EndUserText.label: 'Financial Status Financial Position'
@Metadata.ignorePropagatedAnnotations:true 
define view entity I_FinancialPosition
  as select from ftr_fp_def               as FinancialPositionDef
 
    association[0..1] to I_FinancialPositionGroup as FinancialPositionGroupDef on FinancialPositionDef.fin_pos_grp = FinancialPositionGroupDef.FinancialPositionGroup

{    
      @ObjectModel.text.element: [ 'FinancialPositionName']
  key FinancialPositionDef.fin_pos                                  as FinancialPosition,
      @Semantics.text: true
      FinancialPositionDef.fin_pos_name                             as FinancialPositionName,
      FinancialPositionDef.fin_pos_grp                              as FinancialPositionGroup,
      FinancialPositionDef.datasource                               as FinancialPositionDataSource,
      FinancialPositionGroupDef.FinPositionAssetLiabilityCode       as FinPositionAssetLiabilityCode
}
```
