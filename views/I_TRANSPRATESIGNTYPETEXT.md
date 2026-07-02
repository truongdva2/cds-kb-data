---
name: I_TRANSPRATESIGNTYPETEXT
description: Transpratesigntypetext
semantic_en: "Transportation rate sign type text — multilingual descriptions of rate sign types from domain values."
semantic_vi: "Văn bản loại ký dấu tỷ giá vận chuyển — mô tả đa ngôn ngữ của loại ký dấu tỷ giá từ giá trị miền."
keywords:
  - loại ký dấu tỷ giá
  - mô tả tỷ giá
  - ngôn ngữ
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - text-view
  - text
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPRATESIGNTYPETEXT

**Transpratesigntypetext**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspRateSignType` | `cast(substring(domvalue_l, 1, 1) as /scmtms/sign_indicator preserving type)` |
| `Language` | `ddlanguage` |
| `TranspRateSignTypeText` | `cast(ddtext as /scmtms/vdm_rate_sign_ind_text preserving type)` |
| `DomainValue` | `dd07t.domvalue_l` |
| `_TranspRateSignType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TranspRateSignType` | `I_TransportationRateSignType_2` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITRATSIGNTYPTXT'
@EndUserText:   {label: 'Transportation Rate Sign Type - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspRateSignType',
                 dataCategory:       #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspRateSignTypeText
  as select from dd07t
  association        to parent I_TransportationRateSignType_2 as _TranspRateSignType on $projection.TranspRateSignType = _TranspRateSignType.TranspRateSignType
  association [0..1] to I_Language                            as _Language           on $projection.Language = _Language.Language
{
        @ObjectModel.foreignKey.association: '_TranspRateSignType'
        @ObjectModel.text.element: ['TranspRateSignTypeText']
  key   cast(substring(domvalue_l, 1, 1) as /scmtms/sign_indicator preserving type) as TranspRateSignType,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
  key   ddlanguage                                                                  as Language,
        @Search.defaultSearchElement: true
        @Search.fuzzinessThreshold: 0.8
        @Search.ranking: #LOW
        @Semantics.text: true
        cast(ddtext as /scmtms/vdm_rate_sign_ind_text preserving type)              as TranspRateSignTypeText,
        @Analytics.hidden: true
        @Consumption.hidden: true
        dd07t.domvalue_l                                                            as DomainValue,

        /* Associations */
        _TranspRateSignType,
        _Language
}
where
       domname    = '/SCMTMS/SIGN_INDICATOR'
  and  as4local   = 'A';
```
