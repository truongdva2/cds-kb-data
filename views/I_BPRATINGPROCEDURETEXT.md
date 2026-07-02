---
name: I_BPRATINGPROCEDURETEXT
description: Bpratingproceduretext
semantic_en: "business partner rating procedure multilingual text — localized descriptions of rating procedures"
semantic_vi: "mô tả đa ngôn ngữ quy trình xếp hạng của đối tác kinh doanh — bản mô tả địa phương hóa quy trình xếp hạng"
keywords:
  - xếp hạng
  - quy trình
  - ngôn ngữ
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_BPRATINGPROCEDURETEXT

**Bpratingproceduretext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `tpz21t.spras` |
| `BusinessPartnerRatingProcedure` | `tpz21t.grade_method` |
| `BPRatingProcedureDescription` | `tpz21t.text` |
| `_BPRatingProcedure` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPRatingProcedure` | `I_BPRatingProcedure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGPROCEDTXT',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerRatingProcedure',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY
                                        ],   
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT                
              }
@Analytics.dataExtraction.enabled: true              
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@EndUserText.label: 'Rating Procedure of BP - Text'

define view I_BPRatingProcedureText
  as select from tpz21t
  association [0..1] to I_BPRatingProcedure as _BPRatingProcedure on $projection.BusinessPartnerRatingProcedure = _BPRatingProcedure.BusinessPartnerRatingProcedure
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tpz21t.spras             as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BPRatingProcedure'
  key tpz21t.grade_method      as BusinessPartnerRatingProcedure,

      @Semantics.text: true
      tpz21t.text              as BPRatingProcedureDescription,
      
      _BPRatingProcedure,
      _Language

}
```
