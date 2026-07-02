---
name: D_ENTPROJELMNTMOVEINHIERARCHYP
description: D Entprojelmntmoveinhierarchyp
semantic_en: "ProjectElementAction Change Element Position — parameter set for repositioning enterprise project elements within the hierarchy."
semantic_vi: "Hành động Phần tử Dự án - Thay đổi Vị trí Phần tử — tập tham số cho thay đổi vị trí phần tử dự án doanh nghiệp trong phân cấp."
keywords:
  - phần tử dự án
  - project element
  - hierarchy
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - component:PPM-SCL-STR
  - lob:Other
---
# D_ENTPROJELMNTMOVEINHIERARCHYP

**D Entprojelmntmoveinhierarchyp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ParentObjectUUID` | `/s4ppm/tv_task_guid` |
| `LeftSiblingUUID` | `/s4ppm/tv_task_guid` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'ProjectElementAction Chg Elem Position'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define abstract entity D_EntProjElmntMoveInHierarchyP
{
  ParentObjectUUID : /s4ppm/tv_task_guid;
  LeftSiblingUUID  : /s4ppm/tv_task_guid;
}
```
