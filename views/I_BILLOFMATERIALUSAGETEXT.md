---
name: I_BILLOFMATERIALUSAGETEXT
description: Bill of MaterialUSAGETEXT
semantic_en: "bill of material variant usage text — translations of BOM usage type descriptions across languages."
semantic_vi: "văn bản cách sử dụng biến thể danh sách vật liệu — dịch mô tả loại sử dụng BOM qua các ngôn ngữ."
keywords:
  - danh sách vật liệu
  - cách sử dụng
  - văn bản đa ngôn ngữ
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - text-view
  - material
  - bill-of-material
  - text
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALUSAGETEXT

**Bill of MaterialUSAGETEXT**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `spras` |
| `_Language` | *Association* |
| `BillOfMaterialVariantUsage` | `stlan` |
| `BillOfMaterialVariantUsageDesc` | `antxt` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bill of Material Usage - Text'
@ObjectModel.dataCategory:#TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@Analytics.technicalName: 'IBOMUSAGETEXT'
@VDM.viewType: #BASIC
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #CUSTOMIZING}
@ObjectModel.representativeKey: 'BillOfMaterialVariantUsage'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_BillOfMaterialUsageText
  as select from t416t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
      _Language,

  key stlan as BillOfMaterialVariantUsage,
      @EndUserText.label: 'Usage Text'
      @Semantics.text: true
      antxt as BillOfMaterialVariantUsageDesc

}
```
