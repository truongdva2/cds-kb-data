---
name: I_SUPLREVALRSPSECTIONAPI01
description: Suplrevalrspsectionapi 01
semantic_en: "supplier evaluation response section view — organizes response sections with scoring, weighting, and response counts"
semantic_vi: "xem phần phẩn ứng đánh giá nhà cung cấp — tổ chức các phần phản hồi với điểm số, trọng số và số lượng"
keywords:
  - phần đánh giá
  - phản hồi nhà cung cấp
  - trọng số
  - điểm số
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
  - bo:SuplrEvalRspSectionUUID
---
# I_SUPLREVALRSPSECTIONAPI01

**Suplrevalrspsectionapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SuplrEvalRspSectionUUID` | `SuplrEvalRspSectionUUID` |
| `SuplrEvalRspUUID` | `SuplrEvalRspUUID` |
| `SuplrEvalRspQuestionnaireUUID` | `SuplrEvalRspQuestionnaireUUID` |
| `SupplierEvalResponseSection` | `SupplierEvalResponseSection` |
| `SupplierEvalResponseSctnAltv` | `SupplierEvalResponseSctnAltv` |
| `QuestionnaireSectionName` | `QuestionnaireSectionName` |
| `WeightingFactor` | `WeightingFactor` |
| `MinimalScore` | `MinimalScore` |
| `TargetScore` | `TargetScore` |
| `CalculatedScore` | `CalculatedScore` |
| `NumberOfResponses` | `NumberOfResponses` |
| `SuplrEvalReqSectionUUID` | `SuplrEvalReqSectionUUID` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISERESPSECAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Section in Supplier Evaluation Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'SuplrEvalRspSectionUUID'
@ObjectModel.semanticKey:  [ 'SupplierEvalResponseSection' ]
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspSectionAPI01
  as select from I_SupplierEvalResponseSection
{
  key SuplrEvalRspSectionUUID,
      SuplrEvalRspUUID,
      SuplrEvalRspQuestionnaireUUID,
      SupplierEvalResponseSection,
      SupplierEvalResponseSctnAltv,
      QuestionnaireSectionName,
      WeightingFactor,
      MinimalScore,
      TargetScore,
      CalculatedScore,
      NumberOfResponses,
      SuplrEvalReqSectionUUID
}
```
