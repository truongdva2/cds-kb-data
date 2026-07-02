---
name: D_ENTPROJENTPROJELMNTCRTED
description: D Entprojentprojelmntcrted
semantic_en: "Enterprise Project Element Created — event tracking for creation of new enterprise project elements."
semantic_vi: "Phần tử Dự án Doanh nghiệp Đã tạo — theo dõi sự kiện cho việc tạo phần tử dự án doanh nghiệp mới."
keywords:
  - phần tử dự án
  - project element
  - tạo mới
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
# D_ENTPROJENTPROJELMNTCRTED

**D Entprojentprojelmntcrted**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProjectElementUUID` | `/s4ppm/tv_entity_guid` |
| `ProjectElement` | `/s4ppm/tv_external_id` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Enterprise Project Element Created'
@Event:{
    sapObjectNodeType: 'EnterpriseProjectElement',
    sapObjectNodeTypeKey: [{ element: 'ProjectElementUUID' }],
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_EntProjEntProjElmntCrted {
  ProjectElementUUID : /s4ppm/tv_entity_guid;
  ProjectElement : /s4ppm/tv_external_id;
}
```
