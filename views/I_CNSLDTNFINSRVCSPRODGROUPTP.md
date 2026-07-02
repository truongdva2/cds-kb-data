---
name: I_CNSLDTNFINSRVCSPRODGROUPTP
description: Cnsldtnfinsrvcsprodgrouptp
semantic_en: "consolidation financial services product group template/projection — product group codes and master data flags"
semantic_vi: "template nhóm sản phẩm dịch vụ tài chính hợp nhất — mã nhóm và cờ dữ liệu chính"
keywords:
  - nhóm sản phẩm
  - hợp nhất
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSRVCSPRODGROUPTP

**Cnsldtnfinsrvcsprodgrouptp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinancialServicesProductGroup` | `_Source.FinancialServicesProductGroup` |
| `CnsldtnIsAdditionalMasterData` | `_Source.CnsldtnIsAdditionalMasterData` |
| `_Text` | *Association* |

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
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType:{
    name: 'CnsldtnFinServicesProductGroup'
  },
  semanticKey: [
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
@EndUserText.label: 'Cnsldtn Fin Services Product Group - TP'
define root view entity I_CnsldtnFinSrvcsProdGroupTP
  provider contract transactional_interface
  as projection on R_CnsldtnFinSrvcsProdGroupTP as _Source

{

  key _Source.FinancialServicesProductGroup,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnFinSrvcsProdGrpTextTP

}
```
