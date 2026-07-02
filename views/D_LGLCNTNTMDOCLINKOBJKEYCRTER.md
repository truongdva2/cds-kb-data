---
name: D_LGLCNTNTMDOCLINKOBJKEYCRTER
description: D Lglcntntmdoclinkobjkeycrter
semantic_en: "abstract result structure for generating linked object keys in legal documents — returns mapped object key for document linkage."
semantic_vi: "cấu trúc kết quả trừu tượng cho tạo khóa đối tượng liên kết trong tài liệu pháp lý — trả về khóa đối tượng được ánh xạ cho liên kết tài liệu."
keywords:
  - khóa đối tượng liên kết
  - kết quả tạo
  - tài liệu pháp lý
app_component: CM-INT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-INT
  - component:CM-INT-2CL
  - lob:Other
---
# D_LGLCNTNTMDOCLINKOBJKEYCRTER

**D Lglcntntmdoclinkobjkeycrter**

| Property | Value |
|---|---|
| App Component | `CM-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocumentLinkedObjKey` | `lcm_uuid_c32` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Generate linked object key result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglCntntMDocLinkObjKeyCrteR
{
    LglCntntMDocumentLinkedObjKey : lcm_uuid_c32;
    
}
```
