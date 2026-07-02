---
name: I_CAOVERDUEITEMORIGINTEXT
description: Caoverdueitemorigintext
semantic_en: "Text descriptions of overdue item origin codes in contract accounting — multilingual labels."
semantic_vi: "Mô tả văn bản của các mã nguồn gốc khoản mục quá hạn trong kế toán hợp đồng — nhãn đa ngôn ngữ."
keywords:
  - khoản mục quá hạn
  - mã nguồn gốc
  - văn bản mã
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
  - item-level
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAOVERDUEITEMORIGINTEXT

**Caoverdueitemorigintext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CAOverdueItemOrigin` | `cast( left( dd07t.domvalue_l, 1 ) as overdue_item_origin_kk preserving type )` |
| `Language` | `cast( ddlanguage as spras preserving type )` |
| `CAOverdueItemOriginText` | `cast( ddtext as overdue_item_origin_text_kk preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Overdue Item Origin - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAOverdueItemOrigin',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAOverdueItemOriginText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( dd07t.domvalue_l, 1 ) as overdue_item_origin_kk preserving type ) as CAOverdueItemOrigin,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                     as Language,
      
      @Semantics.text
      cast( ddtext as overdue_item_origin_text_kk preserving type )                 as CAOverdueItemOriginText,

      _Language
}
where
      domname  = 'OVERDUE_ITEM_ORIGIN_KK'
  and as4local = 'A'
```
