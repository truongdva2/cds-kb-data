---
name: I_BILLINGDOCUMENTITEMTEXTTP
description: Billing DocumentUMENTITEMTEXTTP
semantic_en: "billing document item text transparent — long text and descriptions for invoice line items in multiple languages."
semantic_vi: "văn bản mục tài liệu hóa đơn trong suốt — văn bản dài và mô tả cho mục dòng hóa đơn đa ngôn ngữ."
keywords:
  - văn bản dài
  - mục hóa đơn
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - transactional-processing
  - billing-document
  - billing
  - document
  - text
  - item-level
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTITEMTEXTTP

**Billing DocumentUMENTITEMTEXTTP**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingDocument` | `BillingDocument` |
| `BillingDocumentItem` | `BillingDocumentItem` |
| `Language` | `Language` |
| `LongTextID` | `LongTextID` |
| `LongText` | `LongText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Billing Document Item - Text TP'

@AccessControl: {
  authorizationCheck: #MANDATORY,  
  personalData.blocking: #('TRANSACTIONAL_DATA')

}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #C,
      sizeCategory:   #L
    },
    semanticKey: ['BillingDocument', 'BillingDocumentItem', 'Language', 'LongTextID'],
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_BillingDocumentItemTextTP 
  as projection on R_BillingDocumentItemTextTP
{
  key BillingDocument,
  key BillingDocumentItem,
  @Semantics.language:true
  key Language,
  key LongTextID,

  @Semantics.text:true
  LongText,

  _Item               : redirected to parent I_BillingDocumentItemTP,
  _BillingDocument    : redirected to I_BillingDocumentTP
}
```
