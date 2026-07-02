---
name: I_BPRATINGPROCEDUREGRADE
description: Bpratingproceduregrade
semantic_en: "business partner rating procedure grade — grade levels within a rating procedure with ranking order"
semantic_vi: "mức đánh giá trong quy trình xếp hạng của đối tác kinh doanh — các mức đánh giá trong quy trình xếp hạng với thứ tự xếp hạng"
keywords:
  - mức đánh giá
  - xếp hạng
  - quy trình
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
  - component:FS-BP
  - lob:Other
---
# I_BPRATINGPROCEDUREGRADE

**Bpratingproceduregrade**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessPartnerRatingProcedure` | `tpz22.grade_method` |
| `BusinessPartnerRatingGrade` | `tpz22.grade` |
| `BusinessPartnerRatingRanking` | `tpz22.ranking` |
| `_BPRating` | *Association* |
| `_RatingProcedure` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPRatgProcedureGradeText` | [0..*] |
| `_RatingProcedure` | `I_BPRatingProcedure` | [0..1] |
| `_BPRating` | `I_BusinessPartnerRating` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGPROCGRADE',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingGrade',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BusinessPartnerRatingGradeCode',
                supportedCapabilities: [  #ANALYTICAL_DIMENSION,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE ],
                modelingPattern: #ANALYTICAL_DIMENSION                
              }
@Analytics: { dataExtraction.enabled: true,
              dataCategory: #DIMENSION,
              internalName: #LOCAL 
            }
@Metadata: { allowExtensions:true, 
             ignorePropagatedAnnotations: true // For C1-Release
           }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rating Procedure Grade of BP'

define view I_BPRatingProcedureGrade
  as select from tpz22

  association [0..*] to I_BPRatgProcedureGradeText   as _Text            on  $projection.BusinessPartnerRatingProcedure = _Text.BusinessPartnerRatingProcedure
                                                                         and $projection.BusinessPartnerRatingGrade     = _Text.BusinessPartnerRatingGrade

  association [0..1] to I_BPRatingProcedure          as _RatingProcedure on  $projection.BusinessPartnerRatingProcedure = _RatingProcedure.BusinessPartnerRatingProcedure

  association [0..*] to I_BusinessPartnerRating      as _BPRating        on  $projection.BusinessPartnerRatingProcedure = _BPRating.BusinessPartnerRatingProcedure
                                                                         and $projection.BusinessPartnerRatingGrade     = _BPRating.BusinessPartnerRatingGrade

{      
      @ObjectModel.foreignKey.association: '_RatingProcedure'
  key tpz22.grade_method as BusinessPartnerRatingProcedure,
      @ObjectModel.text.association: '_Text'
  key tpz22.grade        as BusinessPartnerRatingGrade,

      tpz22.ranking      as BusinessPartnerRatingRanking,

      _BPRating,
      _RatingProcedure,
      _Text
}
```
