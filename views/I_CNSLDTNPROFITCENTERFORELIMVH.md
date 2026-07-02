---
name: I_CNSLDTNPROFITCENTERFORELIMVH
description: CNSLDTNProfit CenterFORELIMVH
semantic_en: "consolidation profit center for elimination value help — profit center list with names for elimination selection"
semantic_vi: "trợ giúp giá trị trung tâm lợi nhuận để loại bỏ hợp nhất — danh sách trung tâm lợi nhuận với tên"
keywords:
  - trung tâm lợi nhuận
  - loại bỏ
  - danh sách chọn
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
  - profit-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:ProfitCenter
---
# I_CNSLDTNPROFITCENTERFORELIMVH

**CNSLDTNProfit CenterFORELIMVH**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ControllingArea` | `ControllingArea` |
| `ProfitCenter` | `ProfitCenter` |
| `ProfitCenterName` | `expr(…)` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICCPCFORELIMVH',
  compiler.compareFilter: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions: true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #D,
    sizeCategory: #M},
  representativeKey: 'ProfitCenter',
  semanticKey: ['ControllingArea', 'ProfitCenter'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Profit Center for Elimination'

define view I_CnsldtnProfitCenterForElimVH
  as select from I_CnsldtnProfitCenterForElim as _CnsldtnProfitCenterForElim

{
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key ControllingArea,

      @ObjectModel.text.element: ['ProfitCenterName']
  key ProfitCenter,

      @Semantics.text
      _CnsldtnProfitCenterForElim._Text_2[1: Language=$session.system_language].ProfitCenterName
}
```
