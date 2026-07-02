---
name: D_ENTERPRISEPROJECTCREATED
description: D Enterpriseprojectcreated
semantic_en: "Enterprise Project Created — event tracking for creation of new enterprise projects."
semantic_vi: "Dự án Doanh nghiệp Đã tạo — theo dõi sự kiện cho việc tạo dự án doanh nghiệp mới."
keywords:
  - dự án doanh nghiệp
  - enterprise project
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
  - project
  - component:PPM-SCL-STR
  - lob:Other
  - bo:Project
---
# D_ENTERPRISEPROJECTCREATED

**D Enterpriseprojectcreated**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Project` | `/s4ppm/tv_external_id` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Enterprise Project Created'
@Event:{
    sapObjectNodeType: 'EnterpriseProject',
    implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_EnterpriseProjectCreated 
{
    Project : /s4ppm/tv_external_id;
}
```
