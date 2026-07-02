---
name: I_DEPENDENTRQMTSTYPETEXT
description: Dependentrqmtstypetext
semantic_en: "multilingual names for dependent requirements types — provides localized type labels for dependent materials."
semantic_vi: "tên đa ngôn ngữ cho loại yêu cầu phụ thuộc — cung cấp nhãn loại địa phương cho vật liệu phụ thuộc."
keywords:
  - yêu cầu phụ thuộc
  - loại yêu cầu
  - tên đa ngôn ngữ
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:DependentRequirementsType
---
# I_DEPENDENTRQMTSTYPETEXT

**Dependentrqmtstypetext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `cast(t.ddlanguage as spras preserving type)` |
| `DependentRequirementsType` | `cast(substring( domvalue_l, 1, 1) as vdm_sbdkz preserving type)` |
| `DomainValue` | `t.domvalue_l` |
| `DependentRequirementsTypeName` | `t.ddtext` |
| `_DependentRequirementsType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DependentRequirementsType` | `I_DependentRequirementsType` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IDPDTRQMTTYTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'DependentRequirementsType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Dependent Requirements Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_DependentRqmtsTypeText as select from dd07t as t
  association to parent I_DependentRequirementsType as _DependentRequirementsType on $projection.DependentRequirementsType = _DependentRequirementsType.DependentRequirementsType
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                     as Language,
      @ObjectModel.foreignKey.association: '_DependentRequirementsType'  
      @ObjectModel.text.element: ['DependentRequirementsTypeName']
  key cast(substring( domvalue_l, 1, 1) as vdm_sbdkz preserving type) as DependentRequirementsType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                    as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      t.ddtext                                                        as DependentRequirementsTypeName,
  
      // Associations
      _DependentRequirementsType,
      _Language
}
  where t.domname = 'SBDKZ'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
