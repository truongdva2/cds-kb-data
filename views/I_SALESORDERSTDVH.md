---
name: I_SALESORDERSTDVH
description: Sales OrderSTDVH
semantic_en: "Sales order value help — standard lookup providing sales order header keys with organization and type information"
semantic_vi: "Trợ giúp giá trị đơn hàng bán — tra cứu tiêu chuẩn cung cấp khóa tiêu đề đơn hàng với thông tin tổ chức và loại"
keywords:
  - tra cứu đơn hàng bán
  - giá trị trợ giúp đơn hàng
  - khóa đơn hàng
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - value-help
  - standard-value-help
  - sales-order
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERSTDVH

**Sales OrderSTDVH**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesOrder` | `SalesOrder` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `SalesOrderType` | `SalesOrderType` |
| `SalesOrganization` | `SalesOrganization` |

## Associations

> No associations found.

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1w9JfZmsJU0
@AbapCatalog.sqlViewName: 'ISDSLSORDVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel: {
    dataCategory: #VALUE_HELP,
    representativeKey: 'SalesOrder',
    usageType:{
        dataClass: #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory: #L
    },
    supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
}

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Sales Order'
@Search.searchable: true
define view I_SalesOrderStdVH as select from I_SalesOrder {
  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #HIGH
  }
  key SalesOrder,

  @Consumption.hidden: true
  DistributionChannel,
  @Consumption.hidden: true
  OrganizationDivision,
  @Consumption.hidden: true
  SalesOrderType,
  @Consumption.hidden: true
  SalesOrganization
}
```
