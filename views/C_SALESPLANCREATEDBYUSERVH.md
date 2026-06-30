---
name: C_SALESPLANCREATEDBYUSERVH
description: Salesplancreatedbyuservh
semantic_en: "VH — value help for sales plan created-by user — returns sales plan UUID, plan ID, version, creator user ID, and user description for fuzzy-search selection in sales planning UIs."
semantic_vi: "Trợ giúp giá trị (value help) người tạo kế hoạch bán hàng — trả về UUID, mã kế hoạch, phiên bản, ID người dùng tạo và tên mô tả người dùng để hỗ trợ tìm kiếm trong giao diện lập kế hoạch bán hàng."
keywords:
  - value help người tạo kế hoạch bán hàng
  - sales plan created by user
  - trợ giúp giá trị kế hoạch SD
  - lập kế hoạch bán hàng
app_component: SD-ANA-SP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - SD-ANA-SP
  - consumption-view
  - value-help
  - component:SD-ANA-SP-2CL
  - lob:Sales & Distribution
---
# C_SALESPLANCREATEDBYUSERVH

**Salesplancreatedbyuservh**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesPlanUUID` | `SalesPlanUUID` |
| `SalesPlan` | `SalesPlan` |
| `SalesPlanVersion` | `SalesPlanVersion` |
| `CreatedByUser` | `CreatedByUser` |
| `UserDescription` | `cast( _CreatedByUser.UserDescription as sp_username preserving type )` |

## Associations

> No associations found.

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Sales Plan Created By'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'CSLSPLNUSERVH'
@AbapCatalog.dbHints: [{dbSystem: #HDB, hint: 'NO_SUBPLAN_SHARING'}]
@ObjectModel.dataCategory:#VALUE_HELP 
@Search.searchable: true
@Consumption.ranked: true 
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY]
define view C_SalesPlanCreatedByUserVH 
  as select from I_SalesPlanTP as SP
{
      @UI.hidden: true
  key SalesPlanUUID,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW      
      SalesPlan,
           
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW      
      SalesPlanVersion,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element: ['UserDescription']
      @Search.ranking: #HIGH       
      CreatedByUser,
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      @Search.ranking: #LOW      
      cast( _CreatedByUser.UserDescription as sp_username preserving type )             as UserDescription
}
```
