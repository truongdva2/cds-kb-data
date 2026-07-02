---
name: I_BILLINGDOCUMENTBASICSTDVH
description: Billing DocumentUMENTBASICSTDVH
semantic_en: "billing process document value help — selection list for billing documents by type and organization."
semantic_vi: "trợ giúp tìm kiếm tài liệu quy trình hóa đơn — danh sách tìm kiếm hóa đơn theo loại và tổ chức."
keywords:
  - hóa đơn
  - danh sách tìm kiếm
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
# I_BILLINGDOCUMENTBASICSTDVH

**Billing DocumentUMENTBASICSTDVH**

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
| `BillingDocumentType` | `BillingDocumentType` |
| `SalesOrganization` | `SalesOrganization` |

## Associations

> No associations found.

## Source Code

```abap
//GENERATED:005:GlBfhyFV7kY0W}dt2HPJCm
@AbapCatalog.sqlViewName: 'ISDBILDOCBSC_VH'
@AbapCatalog: {
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocument'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, 
                                      #SEARCHABLE_ENTITY ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Billing Process Document'
@Search.searchable: true
@Consumption.ranked: true

define view I_BillingDocumentBasicStdVH as select from I_BillingDocumentBasic {
  
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key BillingDocument,

  @Consumption.hidden: true
  BillingDocumentType,
  @Consumption.hidden: true
  SalesOrganization
}
```
