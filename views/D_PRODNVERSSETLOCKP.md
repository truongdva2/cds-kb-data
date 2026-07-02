---
name: D_PRODNVERSSETLOCKP
description: D Prodnverssetlockp
semantic_en: "production version locking parameter — establishes lock status (ProductionVersionLock) for production version changes"
semantic_vi: "tham số khóa phiên bản sản xuất — thiết lập trạng thái khóa cho các thay đổi phiên bản sản xuất"
keywords:
  - khóa phiên bản sản xuất
  - trạng thái khóa
  - tham số
  - sản xuất
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# D_PRODNVERSSETLOCKP

**D Prodnverssetlockp**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProductionVersionLock` | `mksp` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Set Lock Status in Prodn Vers BO'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[ #TRANSACTIONAL_PROVIDER ]
define abstract entity D_ProdnVersSetLockP
{
  //  @ObjectModel.mandatory: true
  ProductionVersionLock : mksp;
}
```
