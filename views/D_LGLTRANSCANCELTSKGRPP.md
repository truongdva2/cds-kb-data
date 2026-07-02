---
name: D_LGLTRANSCANCELTSKGRPP
description: D Lgltranscanceltskgrpp
semantic_en: "abstract parameter to cancel task group in legal transaction workflow — references workflow modification instance."
semantic_vi: "tham số trừu tượng để hủy nhóm tác vụ trong quy trình giao dịch pháp lý — tham chiếu phiên bản sửa đổi quy trình."
keywords:
  - hủy nhóm tác vụ
  - giao dịch pháp lý
  - quy trình
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - component:CM-LT-2CL
  - lob:Other
---
# D_LGLTRANSCANCELTSKGRPP

**D Lgltranscanceltskgrpp**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglTransWrkflwModInstance` | `sibfboriid` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'LegalTrans Cancel TaskGroup Action Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglTransCancelTskGrpP 
{
    LglTransWrkflwModInstance : sibfboriid;
}
```
