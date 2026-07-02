---
name: I_PROCMTHUBBACKENDSOURCESYSTEM
description: Procmthubbackendsourcesystem
semantic_en: "connected source systems in central procurement — system registration with logical and backend business system details"
semantic_vi: "hệ thống nguồn được kết nối trong mua hàng tập trung — đăng ký hệ thống với chi tiết hệ thống kinh doanh back-end và logic"
keywords:
  - hệ thống nguồn
  - mua hàng tập trung
  - kết nối hệ thống
app_component: MM-PUR-HUB-REQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - component:MM-PUR-HUB-REQ-2CL
  - lob:Sourcing & Procurement
  - bo:ProcurementHubSourceSystem
---
# I_PROCMTHUBBACKENDSOURCESYSTEM

**Procmthubbackendsourcesystem**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProcurementHubSourceSystem` | `be_source_sys` |
| `ProcurementHubSourceSystemName` | `be_source_sys_name` |
| `ProcmtHubLogicalSystem` | `logsys` |
| `ProcmtHubBackendBusSyst` | `be_business_system` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPROCHUBCKENDSYS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Connected System in Central Procurement'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION]
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.modelingPattern: #NONE
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'ProcurementHubSourceSystem'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

define view I_ProcmtHubBackendSourceSystem as select from mmpur_c_be_syreg 

{
  @ObjectModel.text.element : 'ProcurementHubSourceSystemName'
  @Consumption.labelElement: 'ProcurementHubSourceSystemName'
  key be_source_sys as ProcurementHubSourceSystem,
  @Semantics.text: true
  be_source_sys_name as ProcurementHubSourceSystemName,
  logsys as ProcmtHubLogicalSystem,
  be_business_system as ProcmtHubBackendBusSyst
 
}
```
