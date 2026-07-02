---
name: I_CNSLDTNFINSRVCSBRANCHTEXTTP
description: Cnsldtnfinsrvcsbranchtexttp
semantic_en: "consolidation financial services branch text template/projection — multilingual branch names and master data flags"
semantic_vi: "template văn bản chi nhánh dịch vụ tài chính hợp nhất — tên chi nhánh đa ngôn ngữ"
keywords:
  - chi nhánh
  - văn bản hợp nhất
  - template
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
# I_CNSLDTNFINSRVCSBRANCHTEXTTP

**Cnsldtnfinsrvcsbranchtexttp**

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
| `FinancialServicesBranch` | `_Text.FinancialServicesBranch` |
| `FinancialServicesBranchName` | `_Text.FinancialServicesBranchName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `_FinancialServicesBranch` | *Association* |

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
//  sapObjectNodeType:{
//    name: 'CnsldtnFinServicesBranchText'
//  },
  semanticKey: [
    'Language',
    'FinancialServicesBranch'
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
@EndUserText.label: 'Cnsldtn Fin Services Branch - Text TP'
define view entity I_CnsldtnFinSrvcsBranchTextTP
  as projection on R_CnsldtnFinSrvcsBranchTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.FinancialServicesBranch,

      @Semantics.text
      _Text.FinancialServicesBranchName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _FinancialServicesBranch as _FinancialServicesBranch : redirected to parent I_CnsldtnFinServicesBranchTP

}
```
