---
name: I_SALESSCHEDGAGRMTTYPE
description: Salesschedgagrmttype
semantic_en: "sales scheduling agreement types — enumeration of agreement types with processing type classification"
semantic_vi: "loại thỏa thuận lên lịch bán hàng — danh mục loại thỏa thuận với phân loại kiểu xử lý"
keywords:
  - loại thỏa thuận
  - kiểu xử lý
  - phân loại
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
  - bo:SalesSchedulingAgreementType
---
# I_SALESSCHEDGAGRMTTYPE

**Salesschedgagrmttype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesSchedgAgrmtType` | `SalesDocumentType` |
| `SalesSchedgAgrmtProcessingType` | `SalesDocumentProcessingType` |
| `OrderTypeForBillingRequest` | `OrderTypeForBillingRequest` |
| `_Text` | *Association* |
| `_OrderTypeForBillingRequest` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Scheduling Agreement Types'
@VDM.viewType: #BASIC
@AbapCatalog:{
  sqlViewName: 'ISDSCHEDGAGRMTTP',
  compiler.compareFilter: true
}
@ObjectModel:{
  representativeKey: 'SalesSchedgAgrmtType',
  usageType:{
   dataClass: #MIXED,
   serviceQuality: #A,
   sizeCategory: #S
   },
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION]
}
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics:{ 
    dataCategory: #DIMENSION,
    dataExtraction.enabled: true,
    internalName: #LOCAL 
}
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreementType'
define view I_SalesSchedgAgrmtType
  as select from I_SalesDocumentType

{
      //key
      @ObjectModel.text.association: '_Text'
  key SalesDocumentType           as SalesSchedgAgrmtType,
      SalesDocumentProcessingType as SalesSchedgAgrmtProcessingType,
      OrderTypeForBillingRequest,

      //association
      _Text,
      _OrderTypeForBillingRequest
}
where
  SDDocumentCategory = 'E' or SDDocumentCategory = 'F';
```
