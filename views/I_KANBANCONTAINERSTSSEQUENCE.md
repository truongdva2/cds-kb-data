---
name: I_KANBANCONTAINERSTSSEQUENCE
description: Kanbancontainerstssequence
semantic_en: "status sequence rules for kanban containers — defines allowed transitions and status relationships."
semantic_vi: "quy tắc trình tự trạng thái cho vùng chứa kanban — xác định các chuyển đổi được phép và mối quan hệ trạng thái."
keywords:
  - kanban
  - trình tự trạng thái
  - chuyển đổi
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
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
  - bo:KanbanContainerStatusSequence
---
# I_KANBANCONTAINERSTSSEQUENCE

**Kanbancontainerstssequence**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `KanbanContainerStatusSequence` | `pksfg` |
| `KanbanContainerWaitStatusUse` | `sfgs1` |
| `KanbanContainerEmptyStatusUse` | `sfgs2` |
| `KanbanContainerInProcStatusUse` | `sfgs3` |
| `KanbanContainerInTrnstStsUse` | `sfgs4` |
| `KanbanContainerFullStatusUse` | `sfgs5` |
| `KanbanContainerInUseStatusUse` | `sfgs6` |
| `KnbnCtnStatusTrnstnHasOwnActy` | `pkakt` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_KanbanCtnStsSequenceText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCNTSTSSEQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Kanban Container Status Sequence'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KanbanContainerStatusSequence'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name: 'KanbanContainerStatusSequence'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_KanbanContainerStsSequence
  as select from tpksf
  association [0..*] to I_KanbanCtnStsSequenceText as _Text  on  $projection.KanbanContainerStatusSequence = _Text.KanbanContainerStatusSequence
 {
   key pksfg as KanbanContainerStatusSequence,
       sfgs1 as KanbanContainerWaitStatusUse,
       sfgs2 as KanbanContainerEmptyStatusUse,
       sfgs3 as KanbanContainerInProcStatusUse,
       sfgs4 as KanbanContainerInTrnstStsUse,
       sfgs5 as KanbanContainerFullStatusUse,
       sfgs6 as KanbanContainerInUseStatusUse,
       pkakt as KnbnCtnStatusTrnstnHasOwnActy,
       
       _Text
}
```
