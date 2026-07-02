---
name: I_CREDITMEMOREQAPPRVLRSNTXT
description: Creditmemoreqapprvlrsntxt
semantic_en: "credit memo request approval reason description — provides localized texts for approval justifications"
semantic_vi: "mô tả lý do phê duyệt yêu cầu hoàn trả tín dụng — cung cấp văn bản lý do phê duyệt đa ngôn ngữ"
keywords:
  - lý do phê duyệt
  - hoàn trả
  - mô tả
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - credit
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
  - bo:CreditMemoReqApprovalReason
---
# I_CREDITMEMOREQAPPRVLRSNTXT

**Creditmemoreqapprvlrsntxt**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `CreditMemoReqApprvlRsnText.Language` |
| `CreditMemoReqApprovalReason` | `CreditMemoReqApprvlRsnText.SalesDocApprovalReason` |
| `CreditMemoReqApprvlRsnName` | `CreditMemoReqApprvlRsnText.SalesDocApprovalReasonName` |
| `_CreditMemoReqApprvlRsnText` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditMemoReqApprvlRsnText` | `I_CreditMemoReqApprovalReason` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Apprvl Reason for Credit Memo Req - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'CreditMemoReqApprovalReason'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_CreditMemoReqApprvlRsnTxt
  as select from I_SalesDocApprovalReasonText  as CreditMemoReqApprvlRsnText
    inner join   I_CreditMemoReqApprovalReason as CreditMemoReqApprovalReason on CreditMemoReqApprovalReason.CreditMemoReqApprovalReason = CreditMemoReqApprvlRsnText.SalesDocApprovalReason

  association [0..1] to I_CreditMemoReqApprovalReason as _CreditMemoReqApprvlRsnText on $projection.CreditMemoReqApprovalReason = _CreditMemoReqApprvlRsnText.CreditMemoReqApprovalReason

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key CreditMemoReqApprvlRsnText.Language,

      @Search: {
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.9
      }
      @ObjectModel.foreignKey.association: '_CreditMemoReqApprvlRsnText'
  key CreditMemoReqApprvlRsnText.SalesDocApprovalReason     as CreditMemoReqApprovalReason,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      CreditMemoReqApprvlRsnText.SalesDocApprovalReasonName as CreditMemoReqApprvlRsnName,

      _CreditMemoReqApprvlRsnText,
      CreditMemoReqApprvlRsnText._Language

} where CreditMemoReqApprvlRsnText.SDDocumentCategory = 'K';
```
