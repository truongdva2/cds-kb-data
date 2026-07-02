---
name: D_PROJBILLGREQDELETER
description: D Projbillgreqdeleter
semantic_en: "deletion result entity for project billing requests — returns status outcome of deletion action"
semantic_vi: "thực thể kết quả xóa yêu cầu hóa đơn dự án — trả về kết quả trạng thái của hành động xóa"
keywords:
  - xóa yêu cầu hóa đơn
  - dự án
  - trạng thái
  - hóa đơn
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - component:PPM-SCL-BIL
  - lob:Other
---
# D_PROJBILLGREQDELETER

**D Projbillgreqdeleter**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Status` | `boolean` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
//@ObjectModel.modelingPattern: #DATA_STRUCTURE
@EndUserText.label: 'Delete Project Billing Request Result'

define abstract entity D_ProjBillgReqDeleteR
{
  Status : boolean;
}
```
