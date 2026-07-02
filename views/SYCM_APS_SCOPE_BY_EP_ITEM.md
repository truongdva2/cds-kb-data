---
name: SYCM_APS_SCOPE_BY_EP_ITEM
description: Sycm Aps Scope BY EP Item
semantic_en: "CCM scope view — defines scope coverage for entry point items with development class, contact person, and usage information."
semantic_vi: "khung nhìn phạm vi CCM — xác định phạm vi bảo phủ cho các mục điểm vào với lớp phát triển, người liên hệ, và thông tin sử dụng."
keywords:
  - phạm vi dự án
  - điểm vào
  - lớp phát triển
app_component: BC-DWB-CEX-CCM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-DWB
  - BC-DWB-CEX
  - item-level
  - component:BC-DWB-CEX-CCM
  - lob:Basis Components
---
# SYCM_APS_SCOPE_BY_EP_ITEM

**Sycm Aps Scope BY EP Item**

| Property | Value |
|---|---|
| App Component | `BC-DWB-CEX-CCM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `project_id` | `project_id` |
| `object` | `object` |
| `obj_name` | `obj_name` |
| `entry_point_type` | `entry_point_type` |
| `entry_point_name` | `entry_point_name` |
| `devclass` | `devclass` |
| `contact_person` | `contact_person` |
| `usage_information` | `usage_information` |
| `scope_information` | `scope_information` |
| `_project` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_project` | `SYCM_APS_PROJECT` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Scope for entry point items'
define view entity SYCM_APS_SCOPE_BY_EP_ITEM
  as select from sycm_aps_c_scp_by_ep_item_e
  association [1..1] to SYCM_APS_PROJECT as _project on _project.project_id = $projection.project_id
{
  key project_id,
  key object,
  key obj_name,
  key entry_point_type,
  key entry_point_name,
      devclass,
      contact_person,
      usage_information,
      scope_information,

      _project
}
```
