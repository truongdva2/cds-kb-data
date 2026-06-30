---
name: D_PLNDINDEPRQMTCHANGED
description: D Plndindeprqmtchanged
semantic_en: "Planned independent requirement changed event signature — abstract entity carrying the calling application and last-changed-by user that define the payload when a planned independent requirement is modified."
semantic_vi: "Chữ ký sự kiện thay đổi nhu cầu độc lập theo kế hoạch — thực thể trừu tượng mang ứng dụng gọi và người thay đổi lần cuối xác định nội dung sự kiện khi nhu cầu độc lập theo kế hoạch được cập nhật."
keywords:
  - nhu cầu độc lập theo kế hoạch
  - PIR
  - sự kiện sản xuất
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
# D_PLNDINDEPRQMTCHANGED

**D Plndindeprqmtchanged**

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
@EndUserText.label: 'Planned Independent Requirement Changed'
define abstract entity D_PlndIndepRqmtChanged
{
  PlndIndepRqmtCllgAppl      : pph_pir_calling_appl;
  PlndIndepRqmtLastChangedBy : aenam;
}
```
