---
name: I_BILLGDOCITMBSCSTDVH
description: Billgdocitmbscstdvh
semantic_en: "billing document item value help — selection list of line items in billing documents with key identifiers."
semantic_vi: "trợ giúp tìm kiếm mục hóa đơn — danh sách các mục dòng trong tài liệu hóa đơn với các định danh chính."
keywords:
  - mục hóa đơn
  - danh sách tìm kiếm
  - hóa đơn
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
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocumentItem
---
# I_BILLGDOCITMBSCSTDVH

**Billgdocitmbscstdvh**

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
| `BillingDocumentItemText` | `BillingDocumentItemText` |
| `BillingDocumentType` | `BillingDocumentType` |
| `SalesOrganization` | `SalesOrganization` |
| `_BillingDocumentBasic` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILDOCITBC_VH'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Item in Billing Process Document'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'BillingDocumentItem'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #XL }

@VDM.viewType: #COMPOSITE

define view I_BillgDocItmBscStdVH
  as select from I_BillingDocumentItemBasic

{
      @ObjectModel.foreignKey.association: '_BillingDocumentBasic'
  key BillingDocument,

      @ObjectModel.text.element: [ 'BillingDocumentItemText' ]
  key BillingDocumentItem,

      BillingDocumentItemText,

      @Consumption.hidden: true
      BillingDocumentType,

      @Consumption.hidden: true
      SalesOrganization,

      @Consumption.hidden: true
      _BillingDocumentBasic
}
```
