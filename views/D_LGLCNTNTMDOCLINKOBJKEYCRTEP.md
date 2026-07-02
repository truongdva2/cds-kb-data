---
name: D_LGLCNTNTMDOCLINKOBJKEYCRTEP
description: D Lglcntntmdoclinkobjkeycrtep
semantic_en: "abstract parameter to generate linked object key for legal documents — creates reference mapping for legal document linkage."
semantic_vi: "tham số trừu tượng để tạo khóa đối tượng liên kết cho tài liệu pháp lý — tạo ánh xạ tham chiếu cho liên kết tài liệu pháp lý."
keywords:
  - liên kết tài liệu
  - khóa đối tượng
  - pháp lý
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
# D_LGLCNTNTMDOCLINKOBJKEYCRTEP

**D Lglcntntmdoclinkobjkeycrtep**

| Property | Value |
|---|---|
| App Component | `CM-INT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocument` | `lcm_document_id` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Generate linked object key'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LglCntntMDocLinkObjKeyCrteP
{
    LglCntntMDocument  : lcm_document_id ;
   
}
```
