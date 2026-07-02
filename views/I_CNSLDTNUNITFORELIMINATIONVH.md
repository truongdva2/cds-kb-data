---
name: I_CNSLDTNUNITFORELIMINATIONVH
description: Cnsldtnunitforeliminationvh
semantic_en: "consolidation unit for management elimination value help — reference values for units designated for management elimination with descriptions"
semantic_vi: "trợ giúp giá trị đơn vị hợp nhất để loại bỏ quản lý — giá trị tham chiếu cho các đơn vị được chỉ định loại bỏ quản lý có mô tả"
keywords:
  - trợ giúp giá trị
  - loại bỏ
  - đơn vị
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
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITFORELIMINATIONVH

**Cnsldtnunitforeliminationvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationUnit` | `ConsolidationUnit` |
| `ConsolidationUnitMdmText` | `_Text[1: Language = $session.system_language].ConsolidationUnitMdmText` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCUNITFORELIMVH',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'ConsolidationUnit',
  semanticKey: ['ConsolidationUnit'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cnsldtn Unit for Mgmt Elimination'

define view I_CnsldtnUnitForEliminationVH
  as select from I_CnsldtnUnitForElimination_2

{

      @ObjectModel.text.element:  [ 'ConsolidationUnitMdmText' ]
  key ConsolidationUnit,

      @Semantics.text: true
      _Text[1: Language = $session.system_language].ConsolidationUnitMdmText
}
```
