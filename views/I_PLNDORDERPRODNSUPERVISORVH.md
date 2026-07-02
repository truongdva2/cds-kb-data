---
name: I_PLNDORDERPRODNSUPERVISORVH
description: Plndorderprodnsupervisorvh
semantic_en: "production supervisor value help — reference data for selecting production supervisors by plant with identifier and name"
semantic_vi: "trợ giúp giá trị giám sát sản xuất — dữ liệu tham chiếu để lựa chọn giám sát sản xuất theo nhà máy"
keywords:
  - giám sát sản xuất
  - quản lý nhà máy
  - chọn giám sát
app_component: PP-PLO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PLO
  - interface-view
  - value-help
  - component:PP-PLO-2CL
  - lob:Manufacturing
  - bo:ProductionSupervisor
---
# I_PLNDORDERPRODNSUPERVISORVH

**Plndorderprodnsupervisorvh**

| Property | Value |
|---|---|
| App Component | `PP-PLO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Plant` | `ProductionSupervisor.Plant` |
| `ProductionSupervisor` | `ProductionSupervisor.ProductionSupervisor` |
| `ProductionSupervisorName` | `ProductionSupervisor.ProductionSupervisorName` |
| `_Plant` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.representativeKey: 'ProductionSupervisor'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.dataCategory: #VALUE_HELP
@Consumption.ranked: true
@EndUserText.label: 'Production Supervisor'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]

define view entity I_PlndOrderProdnSupervisorVH 
as select from I_ProductionSupervisor as ProductionSupervisor
{
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      @ObjectModel.foreignKey.association: '_Plant'
  key ProductionSupervisor.Plant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.element:[ 'ProductionSupervisorName' ] 
  key ProductionSupervisor.ProductionSupervisor,      
      @Semantics.text: true
      ProductionSupervisor.ProductionSupervisorName,

      @Consumption.hidden: true
      _Plant

}
```
