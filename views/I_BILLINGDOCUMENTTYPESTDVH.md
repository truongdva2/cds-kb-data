---
name: I_BILLINGDOCUMENTTYPESTDVH
description: Billing DocumentUMENTTYPESTDVH
semantic_en: "billing document type value help — standardized lookup for billing document types"
semantic_vi: "trợ giúp giá trị loại hóa đơn — danh sách tra cứu tiêu chuẩn cho loại hóa đơn"
keywords:
  - loại hóa đơn
  - tra cứu
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
  - value-help
  - standard-value-help
  - billing-document
  - billing
  - document
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTTYPESTDVH

**Billing DocumentUMENTTYPESTDVH**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingDocumentType` | `BillingDocumentType` |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Billing Document Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.representativeKey: 'BillingDocumentType'
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_BillingDocumentTypeStdVH
  as select from I_BillingDocumentType_2
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key BillingDocumentType,
      _Text
}
```
