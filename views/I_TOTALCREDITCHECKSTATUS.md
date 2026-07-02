---
name: I_TOTALCREDITCHECKSTATUS
description: Totalcreditcheckstatus
semantic_en: "total credit check status — indicates the overall credit limit check status for sales orders"
semantic_vi: "trạng thái kiểm tra tín dụng tổng cộng — biểu thị trạng thái kiểm tra hạn mức tín dụng tổng thể cho các đơn hàng bán"
keywords:
  - kiểm tra tín dụng
  - hạn mức tín dụng
  - đơn hàng bán
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - status
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
  - bo:TotalCreditCheckStatus
---
# I_TOTALCREDITCHECKSTATUS

**Totalcreditcheckstatus**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TotalCreditCheckStatus` | `cast(substring(dd07l.domvalue_l, 1, 1)as cmgst preserving type )` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TotalCreditCheckStatusText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'TotalCreditCheckStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #SEARCHABLE_ENTITY]
@EndUserText.label: 'Total Credit Check Status'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDTOTCRDTCKSTS'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'TotalCreditCheckStatus'
@Search.searchable: true
@Consumption.ranked: true

define view I_TotalCreditCheckStatus 
as select from dd07l

association [0..*] to I_TotalCreditCheckStatusText as _Text on $projection.TotalCreditCheckStatus = _Text.TotalCreditCheckStatus
{
    @ObjectModel.text.association: '_Text'
    key cast(substring(dd07l.domvalue_l, 1, 1)as cmgst preserving type ) as TotalCreditCheckStatus,
    
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,   
   
    _Text
}
where (dd07l.domname = 'CMGST') and (dd07l.as4local = 'A');
```
