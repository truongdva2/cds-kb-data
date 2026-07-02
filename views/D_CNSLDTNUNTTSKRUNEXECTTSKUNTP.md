---
name: D_CNSLDTNUNTTSKRUNEXECTTSKUNTP
description: D Cnsldtnunttskrunexecttskuntp
semantic_en: "Consolidation Unit Task Run Execute Unit Parameter — parameter specifying the consolidation unit for task execution."
semantic_vi: "Tham số Đơn vị Thực hiện Thực hiện Nhiệm vụ Đơn vị Hợp nhất — tham số chỉ định đơn vị hợp nhất."
keywords:
  - hợp nhất
  - đơn vị
  - thực hiện
app_component: FIN-CS-COR-MON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - transactional-processing
  - component:FIN-CS-COR-MON-2CL
  - lob:Other
---
# D_CNSLDTNUNTTSKRUNEXECTTSKUNTP

**D Cnsldtnunttskrunexecttskuntp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-MON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationUnit` | `fincs_consolidationunit` |
| `_ExecuteTask` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExecuteTask` | `D_CnsldtnUnitTskRunExectTaskP` | — |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@EndUserText.label: 'Cnsldtn Unit Task Run Exec Unit Param'
define abstract entity D_CnsldtnUntTskRunExectTskUntP
{
  ConsolidationUnit                     : fincs_consolidationunit;
  _ExecuteTask                          : association to parent D_CnsldtnUnitTskRunExectTaskP;
}
```
