---
name: I_PCF_CODEVALUEHELPTEXT
description: Pcf Codevaluehelptext
semantic_en: "predefined custom fields code value text — multi-language descriptions for custom field code values keyed by node, field, language, and code."
semantic_vi: "văn bản giá trị mã trợ giúp cho các trường tùy chỉnh được xác định trước — mô tả đa ngôn ngữ cho các giá trị mã trường tùy chỉnh được khóa theo nút, trường, ngôn ngữ và mã."
keywords:
  - trường tùy chỉnh
  - mã
  - mô tả
app_component: BC-SRV-APS-EXT-FLD
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-APS
  - interface-view
  - value-help
  - text-view
  - text
  - component:BC-SRV-APS-EXT-FLD
  - lob:Basis Components
---
# I_PCF_CODEVALUEHELPTEXT

**Pcf Codevaluehelptext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-APS-EXT-FLD` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `NodeName` | `node_name` |
| `FieldName` | `field_name` |
| `Language` | `language` |
| `CodeValue` | `code_value` |
| `Description` | `description` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_ALLOWED
@EndUserText.label: 'Predefined Fields: Value Help Texts'
@Search.searchable: true
define view entity I_PCF_CodeValueHelpText
  as select from pcf_c_rep_code_t
{
  key node_name   as NodeName,
  key field_name  as FieldName,
      @Semantics.language: true
  key language    as Language,
  key code_value  as CodeValue,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      description as Description
} where version = 'A'
```
