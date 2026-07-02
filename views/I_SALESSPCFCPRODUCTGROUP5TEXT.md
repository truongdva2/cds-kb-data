---
name: I_SALESSPCFCPRODUCTGROUP5TEXT
description: Salesspcfcproductgroup 5TEXT
semantic_en: "sales specific product group 5 text — language-dependent names for additional product group 5"
semantic_vi: "văn bản nhóm sản phẩm cụ thể bán hàng 5 — tên nhóm sản phẩm bổ sung cấp 5 theo ngôn ngữ"
keywords:
  - tên nhóm sản phẩm
  - ngôn ngữ
  - cấp 5
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - text-view
  - product
  - text
  - component:LO-AB
  - lob:Logistics General
---
# I_SALESSPCFCPRODUCTGROUP5TEXT

**Salesspcfcproductgroup 5TEXT**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesSpcfcProductGroup5` | `AdditionalMaterialGroup5` |
| `Language` | `Language` |
| `SalesSpcfcProductGroup5Name` | `AdditionalMaterialGroup5Name` |
| `_SalesSpcfcProductGroup5` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesSpcfcProductGroup5` | `I_SalesSpcfcProductGroup5` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Specific Product Group 5 - Text'
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SalesSpcfcProductGroup5',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,  
    #LANGUAGE_DEPENDENT_TEXT,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  technicalName: 'ISLSSPCPRODGRP5T', 
  dataExtraction.enabled: false
}
@Metadata: {
  ignorePropagatedAnnotations: true, 
  allowExtensions: false
}

define view entity I_SalesSpcfcProductGroup5Text
  as select from I_AdditionalMaterialGroup5Text

  association        to parent I_SalesSpcfcProductGroup5 as _SalesSpcfcProductGroup5 on $projection.SalesSpcfcProductGroup5 = _SalesSpcfcProductGroup5.SalesSpcfcProductGroup5
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_SalesSpcfcProductGroup5'
      @ObjectModel.text.element: ['SalesSpcfcProductGroup5Name']
  key AdditionalMaterialGroup5     as SalesSpcfcProductGroup5,
      @Semantics.language:true
      @ObjectModel.foreignKey.association: '_Language'
  key Language                     as Language,
      @Semantics.text:true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      AdditionalMaterialGroup5Name as SalesSpcfcProductGroup5Name,

      /* Associations */
      _SalesSpcfcProductGroup5, 
      _Language
};
```
