---
name: I_INVOICELISTTYPESTDVH
description: Invoicelisttypestdvh
semantic_en: "value-help view providing available invoice list types for selection"
semantic_vi: "chế độ xem trợ giúp giá trị cung cấp các loại danh sách hóa đơn có sẵn để lựa chọn"
keywords:
  - loại hóa đơn
  - danh sách
  - trợ giúp
app_component: SD-BIL-IL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IL
  - interface-view
  - value-help
  - standard-value-help
  - component:SD-BIL-IL-2CL
  - lob:Sales & Distribution
  - bo:InvoiceListType
---
# I_INVOICELISTTYPESTDVH

**Invoicelisttypestdvh**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InvoiceListType` | `InvoiceListType` |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.internalName: #LOCAL

@Consumption.ranked: true

@EndUserText.label: 'Invoice List Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.representativeKey: 'InvoiceListType'
@ObjectModel.supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_InvoiceListTypeStdVH
  as select from I_InvoiceListType

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key InvoiceListType,

      _Text
}
```
