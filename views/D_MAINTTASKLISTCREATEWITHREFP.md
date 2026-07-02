---
name: D_MAINTTASKLISTCREATEWITHREFP
description: D Maintenance Task ListCREATEWITHREFP
semantic_en: "abstract parameter to create maintenance task list with reference — controls document/relation/description copy and validity start date."
semantic_vi: "tham số trừu tượng để tạo danh sách tác vụ bảo trì với tham chiếu — kiểm soát sao chép tài liệu/quan hệ/mô tả và ngày bắt đầu hiệu lực."
keywords:
  - tạo danh sách tác vụ
  - bảo trì
  - tham chiếu
app_component: PM-PRM-TL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-TL
  - component:PM-PRM-TL-2CL
  - lob:Plant Maintenance
---
# D_MAINTTASKLISTCREATEWITHREFP

**D Maintenance Task ListCREATEWITHREFP**

| Property | Value |
|---|---|
| App Component | `PM-PRM-TL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DocumentCopyIsRequested` | `flag` |
| `RelationshipCopyIsRequested` | `flag` |
| `DescriptionCopyIsRequested` | `flag` |
| `MaintTskListValidityStartDate` | `datuv` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Copy Reference TL'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_MaintTaskListCreateWithRefP
{
  DocumentCopyIsRequested       : flag;
  RelationshipCopyIsRequested   : flag;
  DescriptionCopyIsRequested    : flag;
  MaintTskListValidityStartDate : datuv;
}
```
