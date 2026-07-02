---
name: I_SUPLREVALSCCRDQUESTIONAPI01
description: Suplrevalsccrdquestionapi 01
semantic_en: "supplier evaluation scorecard question view — contains question details and scoring criteria for scorecard questions"
semantic_vi: "xem câu hỏi bảng điểm đánh giá nhà cung cấp — bao gồm chi tiết câu hỏi và tiêu chí điểm số"
keywords:
  - câu hỏi bảng điểm
  - tiêu chí đánh giá
  - trọng số
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
  - bo:SuplrEvalSccrdQuestionUUID
---
# I_SUPLREVALSCCRDQUESTIONAPI01

**Suplrevalsccrdquestionapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SuplrEvalSccrdQuestionUUID` | `SuplrEvalSccrdQuestionUUID` |
| `SuplrEvalSccrdUUID` | `SuplrEvalSccrdUUID` |
| `SuplrEvalSccrdSectionUUID` | `SuplrEvalSccrdSectionUUID` |
| `SuplrEvalReqQuestionUUID` | `SuplrEvalReqQuestionUUID` |
| `SupplierEvalQuestion` | `SupplierEvalQuestion` |
| `SupplierEvalRequestQuestion` | `SupplierEvalRequestQuestion` |
| `QuestionName` | `QuestionName` |
| `SLCQuestionType` | `SLCQuestionType` |
| `WeightingFactor` | `WeightingFactor` |
| `MinimalScore` | `MinimalScore` |
| `TargetScore` | `TargetScore` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISESCCRDQSTAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Question for Supplier Eval Scorecard'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.semanticKey: ['SupplierEvalRequestQuestion']
@ObjectModel.representativeKey: 'SuplrEvalSccrdQuestionUUID'
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalSccrdQuestionAPI01
  as select from I_SuplrEvalSccrdQuestion
{
  key SuplrEvalSccrdQuestionUUID,
      SuplrEvalSccrdUUID,
      SuplrEvalSccrdSectionUUID,
      SuplrEvalReqQuestionUUID,
      SupplierEvalQuestion,
      SupplierEvalRequestQuestion,
      QuestionName,
      SLCQuestionType,
      WeightingFactor,
      MinimalScore,
      TargetScore
}
```
