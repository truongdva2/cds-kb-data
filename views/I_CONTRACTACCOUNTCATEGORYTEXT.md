---
name: I_CONTRACTACCOUNTCATEGORYTEXT
description: Contractaccountcategorytext
semantic_en: "contract account category text — localized descriptions of contract account categories by language and application area."
semantic_vi: "tên danh mục tài khoản hợp đồng — mô tả danh mục tài khoản hợp đồng đã được dịch theo ngôn ngữ và vùng ứng dụng."
keywords:
  - danh mục tài khoản
  - tên danh mục
  - mô tả ngôn ngữ
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - contract
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACTACCOUNTCATEGORYTEXT

**Contractaccountcategorytext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ContractAccountCategory` | `vktyp` |
| `CAApplicationArea` | `applk` |
| `Language` | `spras` |
| `ContractAccountCategoryName` | `text` |
| `_Language` | *Association* |
| `_CAApplicationArea` | *Association* |
| `_ApplArea` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics.technicalName: 'ICTRACCCATT'

@EndUserText.label: 'Contract Account Category - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'ContractAccountCategory',
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ContractAccountCategoryText
  as select from tfk002at

  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
  association [1..1] to I_CAApplicationArea as _CAApplicationArea on $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea

{
  key vktyp as ContractAccountCategory,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
  key applk as CAApplicationArea,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text
      text  as ContractAccountCategoryName,

      _Language,
      _CAApplicationArea,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAApplicationArea'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAApplicationArea'
      _CAApplicationArea as _ApplArea 
}
```
