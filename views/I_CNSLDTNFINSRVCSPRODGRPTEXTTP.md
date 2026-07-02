---
name: I_CNSLDTNFINSRVCSPRODGRPTEXTTP
description: Cnsldtnfinsrvcsprodgrptexttp
semantic_en: "consolidation financial services product group text template/projection — multilingual group names and master data flags"
semantic_vi: "template văn bản nhóm sản phẩm dịch vụ tài chính hợp nhất — tên nhóm đa ngôn ngữ"
keywords:
  - nhóm sản phẩm
  - văn bản
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
# I_CNSLDTNFINSRVCSPRODGRPTEXTTP

**Cnsldtnfinsrvcsprodgrptexttp**

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
| `FinancialServicesProductGroup` | `_Text.FinancialServicesProductGroup` |
| `FinServicesProductGroupName` | `_Text.FinServicesProductGroupName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `_FinancialServicesProductGroup` | *Association* |

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
//    name: 'CnsldtnFinSrvcsProdGroupText'
//  },
  semanticKey: [
    'Language',
    'FinancialServicesProductGroup'
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
@EndUserText.label: 'Cnsldtn Fin Srvcs Prod Group - Text TP'
define view entity I_CnsldtnFinSrvcsProdGrpTextTP
  as projection on R_CnsldtnFinSrvcsProdGrpTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.FinancialServicesProductGroup,

      @Semantics.text
      _Text.FinServicesProductGroupName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _FinancialServicesProductGroup as _FinancialServicesProductGroup : redirected to parent I_CnsldtnFinSrvcsProdGroupTP

}
```
