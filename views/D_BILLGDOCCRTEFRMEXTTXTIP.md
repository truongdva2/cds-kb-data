---
name: D_BILLGDOCCRTEFRMEXTTXTIP
description: D Billgdoccrtefrmexttxtip
semantic_en: "Action parameter for creating billing document from external data with text — LongTextID, Language, LongText"
semantic_vi: "Tham số thao tác để tạo chứng từ lập hóa đơn từ dữ liệu bên ngoài với văn bản — mã định danh văn bản dài, ngôn ngữ, nội dung văn bản dài"
keywords:
  - lập hóa đơn
  - văn bản
  - bên ngoài
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMEXTTXTIP

**D Billgdoccrtefrmexttxtip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
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
@EndUserText.label: 'Bill Doc Create From Ext Data Text - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_BillgDocCrteFrmExtTxtIP
{
  LongTextID : tdid;
  Language   : spras;
  LongText   : systring;
}
```
