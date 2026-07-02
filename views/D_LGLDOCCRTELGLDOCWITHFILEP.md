---
name: D_LGLDOCCRTELGLDOCWITHFILEP
description: D Lgldoccrtelgldocwithfilep
semantic_en: "abstract parameter to create legal document with file — specifies linked object key, file name, language, and access level."
semantic_vi: "tham số trừu tượng để tạo tài liệu pháp lý với tập tin — xác định khóa đối tượng liên kết, tên tập tin, ngôn ngữ và mức truy cập."
keywords:
  - tạo tài liệu
  - tập tin pháp lý
  - liên kết đối tượng
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
# D_LGLDOCCRTELGLDOCWITHFILEP

**D Lgldoccrtelgldocwithfilep**

| Property | Value |
|---|---|
| App Component | `CM-DOC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMDocumentLinkedObjKey` | `lcm_uuid_c32` |
| `DocumentDescription` | `lcm_description` |
| `FileName` | `abap.char(255)` |
| `LglCntntMLanguage` | `lcm_language` |
| `LglCntntMDocAccessLvl` | `lcm_access_lvl` |
| `LglCntntMDocPaperType` | `lcm_doc_paper_type` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Create Legal Doc With File Action Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_LglDocCrteLglDocWithFileP
{
  LglCntntMDocumentLinkedObjKey : lcm_uuid_c32;
  DocumentDescription           : lcm_description;
  FileName                      : abap.char(255);
  LglCntntMLanguage             : lcm_language;
  LglCntntMDocAccessLvl         : lcm_access_lvl;
  LglCntntMDocPaperType         : lcm_doc_paper_type;
}
```
