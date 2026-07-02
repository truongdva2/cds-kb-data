---
name: I_PROJDMNDSOURCEOFSUPPLY
description: Projdmndsourceofsupply
semantic_en: "domain value list — source of supply classification codes for resource assignments to project demands."
semantic_vi: "danh sách giá trị miền — các mã phân loại nguồn cung cấp cho gán tài nguyên trên nhu cầu dự án."
keywords:
  - nguồn cung cấp
  - gán tài nguyên
  - phân loại
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDSOURCEOFSUPPLY

**Projdmndsourceofsupply**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProjectDemandSourceOfSupply` | `cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_source_of_supply )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_SourceOfSupplyText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SourceOfSupplyText` | `I_ProjDmndSourceOfSupplyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{ representativeKey: 'ProjectDemandSourceOfSupply',
               usageType.dataClass: #CUSTOMIZING,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S,
               supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
               sapObjectNodeType.name: 'ProjectDemandSourceOfSupply'
              }
@Metadata.ignorePropagatedAnnotations:true
@VDM:{ viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }
@EndUserText.label: 'Resource Assignment Source for Proj Dmnds'

define root view entity I_ProjDmndSourceOfSupply
  as select from dd07l
  composition [0..*] of I_ProjDmndSourceOfSupplyText as _SourceOfSupplyText
{
      @ObjectModel.text.association: '_SourceOfSupplyText'
  key cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_source_of_supply ) as ProjectDemandSourceOfSupply,
      @Consumption.hidden: true
      dd07l.domvalue_l                                                      as DomainValue,

      _SourceOfSupplyText
}
where
      domname  = 'PROJ_DMND_SOURCE_OF_SUPPLY'
  and as4local = 'A'
```
