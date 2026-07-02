---
name: I_SUPLREVALREQUESTSECTIONAPI01
description: Suplrevalrequestsectionapi 01
semantic_en: "supplier evaluation request section — defines questionnaire sections in evaluation requests with scoring and weighting details"
semantic_vi: "phần yêu cầu đánh giá cung cấp — định nghĩa các phần khảo sát trong yêu cầu đánh giá với chi tiết chấm điểm và trọng lượng"
keywords:
  - cung cấp
  - đánh giá
  - phần
  - khảo sát
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
  - bo:SuplrEvalReqSectionUUID
---
# I_SUPLREVALREQUESTSECTIONAPI01

**Suplrevalrequestsectionapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SuplrEvalReqSectionUUID` | `SuplrEvalReqSectionUUID` |
| `SuplrEvalReqUUID` | `SuplrEvalReqUUID` |
| `SuplrEvalReqQuestionnaireUUID` | `SuplrEvalReqQuestionnaireUUID` |
| `SupplierEvalRequestSection` | `SupplierEvalRequestSection` |
| `QuestionnaireSectionName` | `QuestionnaireSectionName` |
| `WeightingFactor` | `WeightingFactor` |
| `MinimalScore` | `MinimalScore` |
| `TargetScore` | `TargetScore` |
| `CalculatedScore` | `CalculatedScore` |
| `NumberOfResponses` | `NumberOfResponses` |

## Associations

> No associations found.

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Section in Supplier Evaluation Request'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SuplrEvalReqSectionUUID'
@AbapCatalog.sqlViewName: 'ISEVREQSECAPI01'
define view I_SuplrEvalRequestSectionAPI01
  as select from I_SupplierEvalRequestSection
{
  key SuplrEvalReqSectionUUID,
      SuplrEvalReqUUID,
      SuplrEvalReqQuestionnaireUUID,
      SupplierEvalRequestSection,
      QuestionnaireSectionName,
      WeightingFactor,
      MinimalScore,
      TargetScore,
      CalculatedScore,
      NumberOfResponses
}
```
