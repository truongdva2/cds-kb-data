---
name: I_INVOICELISTSTDVH
description: Invoiceliststdvh
semantic_en: "value-help view for invoice lists filtered by type and sales organization"
semantic_vi: "chế độ xem trợ giúp giá trị cho danh sách hóa đơn được lọc theo loại và tổ chức bán hàng"
keywords:
  - danh sách hóa đơn
  - loại
  - tổ chức bán hàng
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
  - bo:InvoiceList
---
# I_INVOICELISTSTDVH

**Invoiceliststdvh**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InvoiceList` | `InvoiceList` |
| `InvoiceListType` | `InvoiceListType` |
| `SalesOrganization` | `SalesOrganization` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.technicalName: 'ISDINVOICLIST_VH'

@Consumption.ranked: true

@EndUserText.label: 'Invoice List'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'InvoiceList'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #A, sizeCategory: #L }

@Search.searchable: true

@VDM.viewType: #COMPOSITE

define view entity I_InvoiceListStdVH
  as select from I_InvoiceList

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key InvoiceList,

      @Consumption.hidden: true
      InvoiceListType,

      @Consumption.hidden: true
      SalesOrganization
}
```
