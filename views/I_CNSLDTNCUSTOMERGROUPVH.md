---
name: I_CNSLDTNCUSTOMERGROUPVH
description: Cnsldtncustomergroupvh
semantic_en: "consolidation combined customer group value-help — provides lookup values of customer groups with descriptions."
semantic_vi: "trợ giúp giá trị nhóm khách hàng kết hợp — cung cấp giá trị tra cứu nhóm khách hàng."
keywords:
  - tra cứu nhóm khách hàng
  - giá trị hỗ trợ
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
  - customer
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Customer
---
# I_CNSLDTNCUSTOMERGROUPVH

**Cnsldtncustomergroupvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CustomerGroup` | `CustomerGroup` |
| `CustomerGroupName` | `expr(…)` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUSTOMERGPVH',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions: true, 
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'CustomerGroup',
  semanticKey: ['CustomerGroup'],
  dataCategory: #VALUE_HELP,
  modelingPattern: #VALUE_HELP_PROVIDER,
  supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #VALUE_HELP_PROVIDER ]
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Combined Customer Group'

define view I_CnsldtnCustomerGroupVH
  as select from I_CnsldtnCustomerGroup as _CnsldtnCustomerGroup

{
      @ObjectModel.text.element: ['CustomerGroupName']
  key CustomerGroup,

      @Semantics.text
      _CnsldtnCustomerGroup._Text[1: Language=$session.system_language].CustomerGroupName
}
```
