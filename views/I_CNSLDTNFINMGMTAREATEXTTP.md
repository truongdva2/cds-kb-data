---
name: I_CNSLDTNFINMGMTAREATEXTTP
description: Cnsldtnfinmgmtareatexttp
semantic_en: "consolidation financial management area text translation template/projection — multilingual area names and master data flags"
semantic_vi: "bản dịch văn bản vùng quản lý tài chính hợp nhất (template) — tên vùng đa ngôn ngữ"
keywords:
  - dịch văn bản vùng tài chính
  - tên vùng hợp nhất
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - transactional-processing
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINMGMTAREATEXTTP

**Cnsldtnfinmgmtareatexttp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `_Text.Language` |
| `FinancialManagementArea` | `_Text.FinancialManagementArea` |
| `FinancialManagementAreaName` | `_Text.FinancialManagementAreaName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `_FinancialManagementArea` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  semanticKey: [
    'Language',
    'FinancialManagementArea'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@EndUserText.label: 'Cnsldtn Fin Management Area - Text TP'
define view entity I_CnsldtnFinMgmtAreaTextTP
  as projection on R_CnsldtnFinMgmtAreaTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.FinancialManagementArea,

      @Semantics.text
      _Text.FinancialManagementAreaName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _FinancialManagementArea as _FinancialManagementArea : redirected to parent I_CnsldtnFinManagementAreaTP

}
```
