---
name: I_BPRATINGPROCEDURE
description: Bpratingprocedure
semantic_en: "business partner rating procedure — master data defining rating methodologies including requirement flag and access cycle parameters"
semantic_vi: "quy trình xếp hạng của đối tác kinh doanh — dữ liệu chính định nghĩa các phương pháp xếp hạng bao gồm cờ yêu cầu và thông số chu kỳ truy cập"
keywords:
  - xếp hạng
  - quy trình
  - đối tác kinh doanh
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
# I_BPRATINGPROCEDURE

**Bpratingprocedure**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessPartnerRatingProcedure` | `tpz21.grade_method` |
| `BPRatingIsRequired` | `tpz21.flg_required` |
| `BusinessPartnerRatingIsDefault` | `tpz21.flg_default` |
| `BPRatingStandardAccessDays` | `tpz21.grade_meth_permitted_period` |
| `BPRatgPermittedPerdIsRelevant` | `''` |
| `_Text` | *Association* |
| `_BPRating` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BPRatingProcedureText` | [0..*] |
| `_BPRating` | `I_BusinessPartnerRating` | [0..*] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'IBPRATGPROCED',
                compiler.compareFilter: true,
                buffering.status: #NOT_ALLOWED
              }
@ObjectModel: { representativeKey: 'BusinessPartnerRatingProcedure',
                usageType: { dataClass: #MASTER,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },  
                sapObjectNodeType.name: 'BPRatingProcedureCode',
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
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Rating Procedure of Business Partner'

define view I_BPRatingProcedure
  as select from tpz21

  association [0..*] to I_BPRatingProcedureText as _Text     on $projection.BusinessPartnerRatingProcedure = _Text.BusinessPartnerRatingProcedure
  association [0..*] to I_BusinessPartnerRating as _BPRating on $projection.BusinessPartnerRatingProcedure = _BPRating.BusinessPartnerRatingProcedure

{
      @ObjectModel.text.association: '_Text'
  key tpz21.grade_method                as BusinessPartnerRatingProcedure,
      tpz21.flg_required                as BPRatingIsRequired,
      tpz21.flg_default                 as BusinessPartnerRatingIsDefault,
      tpz21.grade_meth_permitted_period as BPRatingStandardAccessDays,

      //obsolete
      '' as BPRatgPermittedPerdIsRelevant,

      _Text,
      _BPRating
}
```
