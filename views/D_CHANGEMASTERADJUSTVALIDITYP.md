---
name: D_CHANGEMASTERADJUSTVALIDITYP
description: D Change MasterERADJUSTVALIDITYP
semantic_en: "Change Master Adjust Validity Date Parameter — parameter view for adjusting validity start dates in change management."
semantic_vi: "Tham số Điều chỉnh Ngày Hiệu lực Chính bản Thay đổi — tham số điều chỉnh ngày bắt đầu hiệu lực."
keywords:
  - chính bản thay đổi
  - ngày hiệu lực
  - điều chỉnh
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
  - change-master
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# D_CHANGEMASTERADJUSTVALIDITYP

**D Change MasterERADJUSTVALIDITYP**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ValidityStartDate` | `cc_ccdat` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Change Master Adjust Validity Date'
define root abstract entity D_ChangeMasterAdjustValidityP
{
  ValidityStartDate : cc_ccdat;
}
```
