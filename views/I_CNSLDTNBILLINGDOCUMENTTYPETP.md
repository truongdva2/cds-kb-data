---
name: I_CNSLDTNBILLINGDOCUMENTTYPETP
description: CNSLDTNBilling DocumentUMENTTYPETP
semantic_en: "consolidation billing document type transfer/posting records — BillingDocumentType and master data indicator"
semantic_vi: "loại tài liệu hóa đơn gộp dành cho chuyển/ghi sổ — chứa mã loại hóa đơn và chỉ báo dữ liệu tổng hợp"
keywords:
  - loại tài liệu hóa đơn
  - gộp doanh nghiệp
  - chuyển hóa đơn
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
  - billing-document
  - billing
  - document
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:BillingDocument
---
# I_CNSLDTNBILLINGDOCUMENTTYPETP

**CNSLDTNBilling DocumentUMENTTYPETP**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingDocumentType` | `_CnsldtnBillingDocumentType.BillingDocumentType` |
| `CnsldtnIsAdditionalMasterData` | `_CnsldtnBillingDocumentType.CnsldtnIsAdditionalMasterData` |
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
    name: 'CnsldtnBillingDocumentType'
  },
  semanticKey: [
    'BillingDocumentType'
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
@EndUserText.label: 'Consolidation Billing Document Type - TP'
define root view entity I_CnsldtnBillingDocumentTypeTP
  provider contract transactional_interface
  as projection on R_CnsldtnBillingDocumentTypeTP as _CnsldtnBillingDocumentType

{

  key _CnsldtnBillingDocumentType.BillingDocumentType,

      _CnsldtnBillingDocumentType.CnsldtnIsAdditionalMasterData,


      /* associations for transactional processing */
      _Text as _Text : redirected to composition child I_CnsldtnBillingDocTypeTextTP

}
```
