---
name: I_CABUSTRANSOBJECTTEXT
description: Cabustransobjecttext
semantic_en: "translated business transaction object descriptions — multilingual labels for transaction object codes."
semantic_vi: "mô tả đối tượng giao dịch kinh doanh dịch ngữ — nhãn đa ngôn ngữ cho mã đối tượng giao dịch."
keywords:
  - nhãn đối tượng giao dịch
  - văn bản object
  - dịch ngữ
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
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CABUSTRANSOBJECTTEXT

**Cabustransobjecttext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CABusinessTransactionObject` | `cast ( left( dd07t.domvalue_l,8 ) as evl_objid_kk preserving type )` |
| `Language` | `cast ( ddlanguage as spras preserving type )` |
| `CABusTransObjectName` | `cast ( ddtext as evl_objid_text_kk preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Transaction Object - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CABusinessTransactionObject',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusTransObjectText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast ( left( dd07t.domvalue_l,8 ) as evl_objid_kk preserving type ) as CABusinessTransactionObject,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                        as Language,

      @Semantics.text
      cast ( ddtext as evl_objid_text_kk preserving type )                as CABusTransObjectName,

      _Language
}
where
      domname        = 'EVL_OBJID_KK'
  and dd07t.as4local = 'A'
```
