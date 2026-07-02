---
name: D_BDRCRTEFRMEXTTEXTP
description: D Bdrcrtefrmexttextp
semantic_en: "Action parameter for creating BDR from external data with text — LongTextID, Language, LongText"
semantic_vi: "Tham số thao tác để tạo BDR từ dữ liệu bên ngoài với văn bản — mã định danh văn bản dài, ngôn ngữ, nội dung văn bản dài"
keywords:
  - BDR
  - văn bản
  - bên ngoài
  - tạo
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - transactional-processing
  - text
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTTEXTP

**D Bdrcrtefrmexttextp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LongTextID` | `tdid` |
| `Language` | `spras` |
| `LongText` | `systring` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Text Param'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtTextP { 

  LongTextID  : tdid;
  Language    : spras;
  LongText    : systring;

}
```
