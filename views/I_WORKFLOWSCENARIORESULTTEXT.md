---
name: I_WORKFLOWSCENARIORESULTTEXT
description: Workflowscenarioresulttext
semantic_en: "workflow scenario result text - multilingual descriptions of workflow scenario results for decision documentation."
semantic_vi: "văn bản kết quả kịch bản quy trình công việc - mô tả đa ngôn ngữ của kết quả kịch bản quy trình công việc để tài liệu quyết định."
keywords:
  - quy trình công việc
  - kịch bản
  - kết quả
  - mô tả
app_component: BC-BMT-WFM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-BMT
  - BC-BMT-WFM
  - interface-view
  - text-view
  - text
  - workflow
  - component:BC-BMT-WFM
  - lob:Basis Components
  - bo:WorkflowScenarioResult
---
# I_WORKFLOWSCENARIORESULTTEXT

**Workflowscenarioresulttext**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkflowScenarioDefinition` | `WorkflowResult.wfd_id` |
| `WorkflowScenarioDefinitionVers` | `WorkflowResult.version` |
| `WorkflowScenarioResult` | `WorkflowResult.normiert` |
| `Language` | `WorkflowResultText.language` |
| `WorkflowScenarioResultText` | `WorkflowResultText.text` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFSCNRESTX'
@EndUserText.label: 'Workflow Scenario Result Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel : {
  usageType : {
    dataClass: #META,
    serviceQuality: #C,
    sizeCategory: #M
  },
  dataCategory: #TEXT
}
@ObjectModel.representativeKey: 'WorkflowScenarioResult'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowScenarioResultText
    as select from swd_flxout   as WorkflowResult
    left outer join swd_flxrutx as WorkflowResultText on  WorkflowResult.wfd_id     = WorkflowResultText.wfd_id
                                                      and WorkflowResult.version    = WorkflowResultText.version
                                                      and WorkflowResult.exetyp     = WorkflowResultText.exetyp
                                                      and WorkflowResult.item_order = WorkflowResultText.item_order
                                                     
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key WorkflowResult.wfd_id        as WorkflowScenarioDefinition,
  key WorkflowResult.version       as WorkflowScenarioDefinitionVers,
  key WorkflowResult.normiert      as WorkflowScenarioResult,
      @Semantics:   { language: true }
      @ObjectModel: { foreignKey.association: '_Language' }
  key WorkflowResultText.language  as Language,
      WorkflowResultText.text      as WorkflowScenarioResultText,
      @Semantics:   { text: true }
      _Language
}
where
      WorkflowResult.exetyp         = 'E'
  and WorkflowResultText.nodeid     = '0000000001'
  and WorkflowResultText.ruse_type  = 'OUT'
  and WorkflowResultText.ruse_stype = 'WF'
  and WorkflowResultText.text_type  = 'OS'
```
