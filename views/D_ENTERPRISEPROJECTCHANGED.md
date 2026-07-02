---
name: D_ENTERPRISEPROJECTCHANGED
description: D Enterpriseprojectchanged
semantic_en: "Enterprise Project Changed — event tracking for modifications to enterprise projects."
semantic_vi: "Dự án Doanh nghiệp Đã thay đổi — theo dõi sự kiện cho các sửa đổi của dự án doanh nghiệp."
keywords:
  - dự án doanh nghiệp
  - enterprise project
  - thay đổi
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
# D_ENTERPRISEPROJECTCHANGED

**D Enterpriseprojectchanged**

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
@EndUserText.label: 'Enterprise Project Changed'
@Event:{
    sapObjectNodeType: 'EnterpriseProject',
    implementedBy: ['ABAP:RAP_EVENT']
}
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_EnterpriseProjectChanged 
{
    Project : /s4ppm/tv_external_id;
}
```
