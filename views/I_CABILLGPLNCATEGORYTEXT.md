---
name: I_CABILLGPLNCATEGORYTEXT
description: Cabillgplncategorytext
semantic_en: "billing plan type category descriptions — multilingual labels for billing plan classifications"
semantic_vi: "mô tả danh mục loại kế hoạch hóa đơn — nhãn đa ngôn ngữ cho phân loại kế hoạch hóa đơn"
keywords:
  - mô tả danh mục
  - kế hoạch hóa đơn
  - đa ngôn ngữ
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNCATEGORYTEXT

**Cabillgplncategorytext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CABillgPlnCategory` | `_tfk8210t.bipcat` |
| `Language` | `_tfk8210t.langu` |
| `CABillgPlnCategoryText` | `cast( _tfk8210t.text as bipcat_txt_gfn_kk preserving type )` |
| `_CABillgPlnCategory` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPlnCategory` | `I_CABillgPlnCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Typ des Abrechnungsplans (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CABillgPlnCategory',
  sapObjectNodeType.name: 'ContrAcctgBillgPlnCategoryText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CABillgPlnCategoryText
  as select from tfk8210t as _tfk8210t
  association [0..1] to I_CABillgPlnCategory as _CABillgPlnCategory on $projection.CABillgPlnCategory = _CABillgPlnCategory.CABillgPlnCategory
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CABillgPlnCategory'
  key _tfk8210t.bipcat                                            as CABillgPlnCategory,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8210t.langu                                             as Language,
      @Semantics.text: true
      cast( _tfk8210t.text as bipcat_txt_gfn_kk preserving type ) as CABillgPlnCategoryText,

      _CABillgPlnCategory,
      _Language
}
```
