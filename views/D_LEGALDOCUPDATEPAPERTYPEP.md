---
name: D_LEGALDOCUPDATEPAPERTYPEP
description: D Legaldocupdatepapertypep
semantic_en: "abstract parameter for legal document paper type updates — controls paper type classification in legal content management."
semantic_vi: "tham số trừu tượng cho cập nhật loại giấy tài liệu pháp lý — kiểm soát phân loại loại giấy trong quản lý nội dung pháp lý."
keywords:
  - tài liệu pháp lý
  - loại giấy
  - quản lý nội dung
app_component: CM-DOC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-DOC
  - component:CM-DOC-2CL
  - lob:Other
---
# D_LEGALDOCUPDATEPAPERTYPEP

**D Legaldocupdatepapertypep**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocPaperType` | `lcm_doc_paper_type` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Legal document Paper Type'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_LegalDocUpdatePaperTypeP
{
  LglCntntMDocPaperType : lcm_doc_paper_type;

}
```
