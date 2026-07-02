---
name: D_CHGMSTRASSIGNALTVDATEIDP
description: D Chgmstrassignaltvdateidp
semantic_en: "Change Master Alternative Date ID Parameter — parameter view for managing alternative date identifiers in change master records."
semantic_vi: "Tham số ID Ngày Thay thế Gán Chính bản Thay đổi — tham số quản lý ID ngày thay thế."
keywords:
  - chính bản thay đổi
  - ID ngày
  - thay thế
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# D_CHGMSTRASSIGNALTVDATEIDP

**D Chgmstrassignaltvdateidp**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChgNmbrAlternativeDateID` | `cc_aedtn` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Change Master Alternative Date ID'
define root abstract entity D_ChgMstrAssignAltvDateIDP
{
  ChgNmbrAlternativeDateID : cc_aedtn;
}
```
