---
name: I_WORKFLOWSTEPTYPE
description: Workflowsteptype
semantic_en: "workflow step type — type and classification of workflow steps including system task designation"
semantic_vi: "loại bước trong luồng công việc, bao gồm phân loại và xác định công việc hệ thống"
keywords:
  - loại bước workflow
  - phân loại bước luồng
  - công việc hệ thống
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
  - workflow
  - component:BC-BMT-WFM
  - lob:Basis Components
  - bo:WorkflowStepType
---
# I_WORKFLOWSTEPTYPE

**Workflowsteptype**

| Property | Value |
|---|---|
| App Component | `BC-BMT-WFM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkflowStepType` | `WorkflowStepType` |
| `WrkflwScen` | `WrkflwScen` |
| `WrkflwScenVers` | `WrkflwScenVers` |
| `WorkflowStepIsSystemTask` | `WorkflowStepIsSystemTask` |
| `WorkflowStepTypeClassfctn` | `WorkflowStepTypeClassfctn` |
| `_WorkflowTaskStepTypeText` | *Association* |
| `_WorkflowTaskStepResult` | *Association* |
| `_WorkflowStepTypeClassfctn` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRKFLWSTPTP'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@EndUserText.label: 'Workflow Step Type'
@ObjectModel.representativeKey: 'WorkflowStepType'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
define view I_WorkflowStepType
  as select from I_WorkflowReuseStep
{
      @ObjectModel.text.association: '_WorkflowTaskStepTypeText'
  key WorkflowStepType,
  key WrkflwScen,
  key WrkflwScenVers,
      WorkflowStepIsSystemTask,
      WorkflowStepTypeClassfctn,
      _WorkflowTaskStepTypeText,
      _WorkflowTaskStepResult,
      _WorkflowStepTypeClassfctn
}
```
