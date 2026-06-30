---
name: D_INSPLOTRECORDUSAGEDECISIONP
description: D Insplotrecordusagedecisionp
semantic_en: "Inspection lot record usage decision action parameter — input structure carrying the selected code set plant, usage decision selected set, code group, decision code, and forced-completion flag."
semantic_vi: "Tham số hành động ghi quyết định sử dụng lô kiểm tra — cấu trúc đầu vào mang nhà máy bộ mã đã chọn, tập hợp quyết định sử dụng, nhóm mã, mã quyết định và cờ hoàn thành bắt buộc."
keywords:
  - quyết định sử dụng
  - lô kiểm tra
  - mã quyết định kiểm tra
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# D_INSPLOTRECORDUSAGEDECISIONP

**D Insplotrecordusagedecisionp**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SelectedCodeSetPlant` | `qwerkausw` |
| `InspLotUsgeDcsnSelectedSet` | `qvmenge` |
| `InspLotUsageDecisionCodeGroup` | `qvgruppe` |
| `InspectionLotUsageDecisionCode` | `qvcode` |
| `InspLotIsCompletionForced` | `vdm_qinsp_completion_forced` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Insp Lot Record Usage Decision Parameter'
@ObjectModel: {
  modelingPattern: #DATA_STRUCTURE,
  supportedCapabilities: [#DATA_STRUCTURE]
  }
@VDM: {
  usage.type: [ #ACTION_PARAMETER_STRUCTURE ]
}


define root abstract entity D_InspLotRecordUsageDecisionP
{
  SelectedCodeSetPlant           : qwerkausw;
  InspLotUsgeDcsnSelectedSet     : qvmenge;
  InspLotUsageDecisionCodeGroup  : qvgruppe;
  InspectionLotUsageDecisionCode : qvcode;
  InspLotIsCompletionForced      : vdm_qinsp_completion_forced;

}
```
