---
name: I_CNSLDTNSALESORGTEXTTP
description: CNSLDTNSales OrganizationTEXTTP
semantic_en: "consolidation sales organization text transfer partner — organization names for transfer pricing in multiple languages"
semantic_vi: "văn bản tổ chức bán hàng hợp nhất đối tác chuyển giao — tên tổ chức cho định giá chuyển giao ở nhiều ngôn ngữ"
keywords:
  - tổ chức bán hàng
  - định giá chuyển giao
  - văn bản tên
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
  - sales-organization
  - text
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNSALESORGTEXTTP

**CNSLDTNSales OrganizationTEXTTP**

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
| `SalesOrganization` | `_Text.SalesOrganization` |
| `SalesOrganizationName` | `_Text.SalesOrganizationName` |
| `CnsldtnIsAdditionalMasterData` | `_Text.CnsldtnIsAdditionalMasterData` |
| `_SalesOrganization` | *Association* |

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
//    name: 'CnsldtnSalesOrganizationText'
//  },
  semanticKey: [
    'Language',
    'SalesOrganization'
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
@EndUserText.label: 'Cnsldtn Sales Organization - Text TP'
define view entity I_CnsldtnSalesOrgTextTP
  as projection on R_CnsldtnSalesOrgTextTP as _Text

{
      @Semantics.language
  key _Text.Language,

  key _Text.SalesOrganization,

      @Semantics.text
      _Text.SalesOrganizationName,

      _Text.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _SalesOrganization as _SalesOrganization : redirected to parent I_CnsldtnSalesOrganizationTP

}
```
