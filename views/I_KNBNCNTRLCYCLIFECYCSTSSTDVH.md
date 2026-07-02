---
name: I_KNBNCNTRLCYCLIFECYCSTSSTDVH
description: Knbncntrlcyclifecycstsstdvh
semantic_en: "kanban control cycle lifecycle status value help — standard value list for kanban control cycle lifecycle status selection"
semantic_vi: "trợ giúp giá trị trạng thái vòng đời chu kỳ điều khiển Kanban — danh sách giá trị tiêu chuẩn để chọn trạng thái vòng đời chu kỳ điều khiển"
keywords:
  - giá trị trợ giúp
  - trạng thái vòng đời
  - chu kỳ Kanban
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - value-help
  - standard-value-help
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
  - bo:KanbanCtrlCycleLifeCycleStatus
---
# I_KNBNCNTRLCYCLIFECYCSTSSTDVH

**Knbncntrlcyclifecycstsstdvh**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `KanbanCtrlCycleLifeCycleStatus` | `KanbanCtrlCycleLifeCycleStatus` |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCCLFSTSVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Control Cycle Lifecycle Status'

@Metadata.ignorePropagatedAnnotations:true

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel.representativeKey: 'KanbanCtrlCycleLifeCycleStatus'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType: { sizeCategory: #S, serviceQuality: #A, dataClass: #CUSTOMIZING }
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.resultSet.sizeCategory: #XS
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #COMPOSITE

define view I_KnbnCntrlCycLifeCycStsStdVH as select from I_KnbnControlCycLifeCycSts {
  @ObjectModel.text.association: '_Text'
  @UI.textArrangement: #TEXT_ONLY
  key KanbanCtrlCycleLifeCycleStatus,
      _Text
 }
```
