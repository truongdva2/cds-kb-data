---
name: I_SALESORDERTEXTTP
description: Sales OrderTEXTTP
semantic_en: "Sales order text - transactional processing — long text content for sales order with language and organization context for header-level editing"
semantic_vi: "Văn bản đơn hàng - xử lý giao dịch — nội dung văn bản dài cho đơn hàng với ngôn ngữ và bối cảnh tổ chức để chỉnh sửa mức tiêu đề"
keywords:
  - văn bản đơn hàng TP
  - ngôn ngữ văn bản bán hàng
  - chỉnh sửa văn bản tiêu đề
app_component: SD-SLS-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-API
  - interface-view
  - transactional-processing
  - sales-order
  - text
  - component:SD-SLS-API-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERTEXTTP

**Sales OrderTEXTTP**

| Property | Value |
|---|---|
| App Component | `SD-SLS-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesOrder` | `SalesOrderText.SalesOrder` |
| `Language` | `SalesOrderText.Language` |
| `LongTextID` | `SalesOrderText.LongTextID` |
| `LongTextIDForEdit` | `SalesOrderText.LongTextIDForEdit` |
| `LanguageForEdit` | `SalesOrderText.LanguageForEdit` |
| `LongText` | `SalesOrderText.LongText` |
| `SalesOrderType` | `SalesOrderText.SalesOrderType` |
| `SalesOrganization` | `SalesOrderText.SalesOrganization` |
| `DistributionChannel` | `SalesOrderText.DistributionChannel` |
| `OrganizationDivision` | `SalesOrderText.OrganizationDivision` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Order - Text TP'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesOrder', 'Language', 'LongTextID'],
   dataCategory: #TEXT
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SalesOrderTextTP 
  as projection on R_SalesOrderTextTP as SalesOrderText 
{
  key SalesOrderText.SalesOrder,
  @Semantics.language:true  
  key SalesOrderText.Language,
  key SalesOrderText.LongTextID, 
  
  @ObjectModel.editableFieldFor: 'LongTextID'
  SalesOrderText.LongTextIDForEdit,    
  @Semantics.language:true  
  @ObjectModel.editableFieldFor: 'Language'
  SalesOrderText.LanguageForEdit, 
  @Semantics.text:true
  SalesOrderText.LongText,       

  //    DCL
  @Consumption.hidden: true
  SalesOrderText.SalesOrderType,
  @Consumption.hidden: true
  SalesOrderText.SalesOrganization,
  @Consumption.hidden: true
  SalesOrderText.DistributionChannel,
  @Consumption.hidden: true
  SalesOrderText.OrganizationDivision,
  
  //Composition
  _SalesOrder : redirected to parent I_SalesOrderTP     
}
```
