---
name: D_ENTPROJENTPROJELMNTCHGD
description: D Entprojentprojelmntchgd
semantic_en: "Enterprise Project Element Changed — event tracking for modifications to enterprise project elements by project element identifier."
semantic_vi: "Phần tử Dự án Doanh nghiệp Đã thay đổi — theo dõi sự kiện cho các sửa đổi của phần tử dự án doanh nghiệp."
keywords:
  - phần tử dự án
  - project element
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
  - component:PPM-SCL-STR
  - lob:Other
---
# D_ENTPROJENTPROJELMNTCHGD

**D Entprojentprojelmntchgd**

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
@EndUserText.label: 'Enterprise Project Element Changed'
@Event:{
    sapObjectNodeType: 'EnterpriseProjectElement',
    sapObjectNodeTypeKey: [{ element: 'ProjectElementUUID' }],
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_EntProjEntProjElmntChgd {
    ProjectElementUUID : /s4ppm/tv_entity_guid;
    ProjectElement : /s4ppm/tv_external_id;
}
```
