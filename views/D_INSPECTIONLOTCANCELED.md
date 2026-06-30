---
name: D_INSPECTIONLOTCANCELED
description: D Inspectionlotcanceled
semantic_en: "Inspection lot canceled event signature — abstract entity carrying the Plant field that defines the payload when an inspection lot cancellation event is raised."
semantic_vi: "Chữ ký sự kiện hủy lô kiểm tra — thực thể trừu tượng mang trường Nhà máy xác định nội dung sự kiện khi một lô kiểm tra bị hủy."
keywords:
  - lô kiểm tra
  - hủy kiểm tra
  - sự kiện QM
  - quản lý chất lượng
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
  - bo:InspectionLot
---
# D_INSPECTIONLOTCANCELED

**D Inspectionlotcanceled**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Plant` | `werks_d` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'InspectionLot'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_InspectionLotCanceled {
  Plant : werks_d;
}
```
