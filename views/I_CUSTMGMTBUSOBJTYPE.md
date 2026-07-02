---
name: I_CUSTMGMTBUSOBJTYPE
description: Custmgmtbusobjtype
semantic_en: "Business object type of service transaction — classification of transaction types in customer management applications."
semantic_vi: "Loại đối tượng kinh doanh của giao dịch dịch vụ — phân loại các loại giao dịch trong ứng dụng quản lý khách hàng."
keywords:
  - loại giao dịch dịch vụ
  - quản lý khách hàng
  - phân loại
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - component:CRM-S4-REP-RFW
  - lob:Other
  - bo:CustMgmtBusObjType
---
# I_CUSTMGMTBUSOBJTYPE

**Custmgmtbusobjtype**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessObjectType` | `subobj_category` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustMgmtBusObjTypeText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Bus Object Type of Service Transaction'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ICUSTMGMTBOTYPE',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel:{
  usageType.serviceQuality: #D,
  usageType.sizeCategory: #S ,
  usageType.dataClass: #CUSTOMIZING,
  representativeKey: 'BusinessObjectType',
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET,
  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'CustMgmtBusObjType'

@Search: {
  searchable: true
}

define view I_CustMgmtBusObjType
  as select from crmc_subob_cat

  association [1..*] to I_CustMgmtBusObjTypeText as _Text on $projection.BusinessObjectType = _Text.BusinessObjectType


{
      @ObjectModel.text.association: '_Text'
      @Search:{ defaultSearchElement: true }
  key subobj_category as BusinessObjectType,
      @Search:{ defaultSearchElement: true }
      _Text
}
```
