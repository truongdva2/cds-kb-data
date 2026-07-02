---
name: I_PRODDEPDNTRQMTSTYPETEXT
description: Proddepdntrqmtstypetext
semantic_en: "Dependent requirements type text — localized descriptions for dependent requirements types by language."
semantic_vi: "Văn bản loại yêu cầu phụ thuộc — mô tả địa phương cho các loại yêu cầu phụ thuộc theo ngôn ngữ."
keywords:
  - yêu cầu phụ thuộc
  - loại yêu cầu
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:DependentRequirementsType
---
# I_PRODDEPDNTRQMTSTYPETEXT

**Proddepdntrqmtstypetext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `cast( ddlanguage as spras preserving type )` |
| `DependentRequirementsType` | `cast ( domvalue_l as sbdkz )` |
| `Name` | `cast ( ddtext as val_text )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODDEPRQMTSTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Dependent Requirements Type - Text'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #META
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Search.searchable: true
@ObjectModel.representativeKey: 'DependentRequirementsType'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_ProdDepdntRqmtsTypeText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @Semantics.language : true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.text.element: ['Name']
  key cast ( domvalue_l as sbdkz )                as DependentRequirementsType,
      @Semantics.text: true
      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW
      }
      cast ( ddtext as val_text )                 as Name,
      _Language
}
where
  dd07t.domname = 'SBDKZ'
```
