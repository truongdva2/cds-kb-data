---
name: C_SALESPLANVERSIONVALUEHELP
description: Salesplanversionvaluehelp
semantic_en: "VH — value help for sales plan version selection — returns plan UUID, plan ID, version ID, version description, creator user ID, and user description for fuzzy-searchable version lookup in sales planning UIs."
semantic_vi: "Trợ giúp giá trị (value help) phiên bản kế hoạch bán hàng — trả về UUID, mã kế hoạch, mã phiên bản, mô tả phiên bản và thông tin người tạo để hỗ trợ chọn phiên bản kế hoạch trong giao diện lập kế hoạch."
keywords:
  - value help phiên bản kế hoạch bán hàng
  - sales plan version lookup
  - trợ giúp giá trị phiên bản SD
  - lập kế hoạch bán hàng phiên bản
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
# C_SALESPLANVERSIONVALUEHELP

**Salesplanversionvaluehelp**

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
| `SalesPlanVersionDescription` | `SalesPlanVersionDescription` |
| `CreatedByUser` | `CreatedByUser` |
| `UserDescription` | `cast( _CreatedByUser.UserDescription as sp_username preserving type )` |

## Associations

> No associations found.

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@EndUserText.label: 'Sales Plan Version'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'CSLSPLNVERVH'
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

define view C_SalesPlanVersionValueHelp
  as select from I_SalesPlanTP as SP
{
      @UI.hidden: true
  key SalesPlanUUID,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @UI.selectionField: [{position: 30}]  
      SalesPlan,    

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element: ['SalesPlanVersionDescription']
      @Search.ranking: #HIGH
      SalesPlanVersion,
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      @Search.ranking: #LOW 
      SalesPlanVersionDescription,       
           
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element: ['UserDescription']
      @Search.ranking: #LOW
      @UI.selectionField: [{position: 40}]       
      CreatedByUser,
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      @Search.ranking: #LOW
      @UI.selectionField: [{position: 50}]  
      cast( _CreatedByUser.UserDescription as sp_username preserving type )             as UserDescription

}
```
