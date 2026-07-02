---
name: I_CNSLDTNBUSINESSAREATP
description: Cnsldtnbusinessareatp
semantic_en: "consolidation business area transfer/posting records — BusinessArea with master data consolidation indicator"
semantic_vi: "bản ghi chuyển/ghi khu vực kinh doanh gộp — khu vực với chỉ báo gộp dữ liệu master"
keywords:
  - khu vực kinh doanh
  - chuyển dữ liệu
  - gộp
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
# I_CNSLDTNBUSINESSAREATP

**Cnsldtnbusinessareatp**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessArea` | `_CnsldtnBusinessArea.BusinessArea` |
| `CnsldtnIsAdditionalMasterData` | `_CnsldtnBusinessArea.CnsldtnIsAdditionalMasterData` |
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
    name: 'CnsldtnBusinessArea'
  },
  semanticKey: [
    'BusinessArea'
  ],
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER
  ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@EndUserText.label: 'Consolidation Business Area - TP'
define root view entity I_CnsldtnBusinessAreaTP
  provider contract transactional_interface
  as projection on R_CnsldtnBusinessAreaTP as _CnsldtnBusinessArea

{

  key _CnsldtnBusinessArea.BusinessArea,

      _CnsldtnBusinessArea.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnBusinessAreaTextTP

}
```
