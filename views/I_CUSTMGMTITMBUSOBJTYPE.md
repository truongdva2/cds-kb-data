---
name: I_CUSTMGMTITMBUSOBJTYPE
description: Custmgmtitmbusobjtype
semantic_en: "Business object type of service transaction item — classification of item-level transaction types in customer management."
semantic_vi: "Loại đối tượng kinh doanh của mục giao dịch dịch vụ — phân loại các loại giao dịch cấp mục trong quản lý khách hàng."
keywords:
  - mục giao dịch
  - loại đối tượng mục
  - quản lý dịch vụ
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
---
# I_CUSTMGMTITMBUSOBJTYPE

**Custmgmtitmbusobjtype**

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
| `_Text` | `I_CustMgmtItmBusObjTypeText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Bus Obj Type of Srvc Transaction Item'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ICUSTMGTITMBOTYP',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   representativeKey: 'BusinessObjectType',
   sapObjectNodeType.name: 'CustMgmtItmBusObjType',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #D,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                           #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
      dataCategory: #DIMENSION,
      internalName:#LOCAL,
      dataExtraction.enabled: true
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true

define view I_CustMgmtItmBusObjType
  as select from crmc_subob_cat_i
  association [1..*] to I_CustMgmtItmBusObjTypeText as _Text on $projection.BusinessObjectType = _Text.BusinessObjectType
{
      @ObjectModel.text.association: '_Text'
  key subobj_category as BusinessObjectType,

      _Text
}
```
