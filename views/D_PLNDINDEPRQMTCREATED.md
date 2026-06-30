---
name: D_PLNDINDEPRQMTCREATED
description: D Plndindeprqmtcreated
semantic_en: "Planned independent requirement created event signature — abstract entity carrying the calling application and last-changed-by user that define the payload when a new planned independent requirement is created."
semantic_vi: "Chữ ký sự kiện tạo nhu cầu độc lập theo kế hoạch — thực thể trừu tượng mang ứng dụng gọi và người thay đổi lần cuối xác định nội dung sự kiện khi nhu cầu độc lập theo kế hoạch mới được tạo."
keywords:
  - nhu cầu độc lập theo kế hoạch
  - PIR
  - sự kiện tạo mới
  - lập kế hoạch nhu cầu
app_component: PP-MP-DEM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-MP
  - PP-MP-DEM
  - component:PP-MP-DEM-2CL
  - lob:Manufacturing
  - bo:PlannedIndependentRequirement
---
# D_PLNDINDEPRQMTCREATED

**D Plndindeprqmtcreated**

| Property | Value |
|---|---|
| App Component | `PP-MP-DEM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PlndIndepRqmtCllgAppl` | `pph_pir_calling_appl` |
| `PlndIndepRqmtLastChangedBy` | `aenam` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'PlannedIndependentRequirement'
@Metadata.allowExtensions: true
@EndUserText.label: 'Planned Independent Requirement Created'
define abstract entity D_PlndIndepRqmtCreated
{
  PlndIndepRqmtCllgAppl      : pph_pir_calling_appl;
  PlndIndepRqmtLastChangedBy : aenam;
}
```
