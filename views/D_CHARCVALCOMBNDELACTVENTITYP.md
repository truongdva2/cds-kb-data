---
name: D_CHARCVALCOMBNDELACTVENTITYP
description: D Charcvalcombndelactventityp
semantic_en: "Characteristic Value Combination Delete Active Entity Parameter — parameter for managing deletion of characteristic value combinations."
semantic_vi: "Tham số Xóa Kết hợp Giá trị Đặc tính Thực thể Hoạt động — tham số xóa kết hợp giá trị đặc tính."
keywords:
  - đặc tính giá trị
  - kết hợp giá trị
  - xóa
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# D_CHARCVALCOMBNDELACTVENTITYP

**D Charcvalcombndelactventityp**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CharcValCombnWthAssgmtIsDeltd` | `charcvalcombnwthassgmtisdeltd` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Value Combination Delete Active Entity Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_CharcValCombnDelActvEntityP
{
  CharcValCombnWthAssgmtIsDeltd : charcvalcombnwthassgmtisdeltd;
}
```
