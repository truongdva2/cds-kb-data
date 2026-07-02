---
name: I_CNSLDTNSALESORGANIZATIONVH
description: CNSLDTNSales OrganizationVH
semantic_en: "consolidation combined sales organization value-help — organization identifiers and names for search and dropdown lists"
semantic_vi: "trợ giúp giá trị tổ chức bán hàng hợp nhất kết hợp — mã định danh tổ chức và tên cho tìm kiếm và danh sách thả xuống"
keywords:
  - tổ chức bán hàng
  - trợ giúp giá trị
  - danh sách tìm kiếm
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
  - value-help
  - sales-organization
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:SalesOrganization
---
# I_CNSLDTNSALESORGANIZATIONVH

**CNSLDTNSales OrganizationVH**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesOrganization` | `SalesOrganization` |
| `SalesOrganizationName` | `_Text[1: Language=$session.system_language].SalesOrganizationName` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSALESORGVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S },
  representativeKey: 'SalesOrganization',
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Combined Sales Organization'

define view I_CnsldtnSalesOrganizationVH
  as select distinct from I_CnsldtnSalesOrganization

{
      @ObjectModel.text.element: ['SalesOrganizationName']
  key SalesOrganization,

      @Semantics.text
      _Text[1: Language=$session.system_language].SalesOrganizationName
}
```
