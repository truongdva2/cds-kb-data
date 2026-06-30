---
name: C_PURORDERITEMDOCUMENTCHANGES
description: Purorderitemdocumentchanges
semantic_en: "Purchase order item document changes (parameterized) — change-document log for PO item fields covering previous/new values, change type, user, and date within a selectable date range."
semantic_vi: "Lịch sử thay đổi dòng đơn đặt hàng mua — nhật ký tài liệu thay đổi cho các trường dòng đơn hàng mua, bao gồm giá trị cũ/mới, loại thay đổi, người dùng và ngày trong khoảng thời gian chọn."
keywords:
  - lịch sử thay đổi đơn hàng mua
  - nhật ký thay đổi dòng PO
  - tài liệu thay đổi mua hàng
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - document
  - item-level
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURORDERITEMDOCUMENTCHANGES

**Purorderitemdocumentchanges**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeDocObject` | `ChangeDocObject` |
| `ChangeDocument` | `ChangeDocument` |
| `DatabaseTable` | `DatabaseTable` |
| `ChangeDocTableKey` | `ChangeDocTableKey` |
| `ChangeDocDatabaseTableField` | `ChangeDocDatabaseTableField` |
| `ChangeDocPreviousUnit` | `ChangeDocPreviousUnit` |
| `ChangeDocNewUnit` | `ChangeDocNewUnit` |
| `ChangeDocPreviousCurrency` | `ChangeDocPreviousCurrency` |
| `ChangeDocNewCurrency` | `ChangeDocNewCurrency` |
| `ChangeDocNewFieldValue` | `ChangeDocNewFieldValue` |
| `ChangeDocPreviousFieldValue` | `ChangeDocPreviousFieldValue` |
| `ChangeDocTextIsChanged` | `ChangeDocTextIsChanged` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `ChangeTransactionCode` | `ChangeTransactionCode` |
| `ChangeDocChangeType` | `ChangeDocChangeType` |
| `ChangeDocObjectClass` | `ChangeDocObjectClass` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPOIDOCCHNG'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality:  #B
@ObjectModel.usageType.sizeCategory: #L
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType.dataClass : #MASTER
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Consumption view for PO Item Document Changes'
define view C_PurOrderItemDocumentChanges 

  with parameters        
    @Consumption.defaultValue: 'PREVIOUS30DAYS'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction    : datefunctionid,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_StartDate       : vdm_validitystart,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate         : vdm_validityend

  as select from    P_PurOrderItemDocumentChanges(  P_StartDate: $parameters.P_StartDate, P_EndDate: $parameters.P_EndDate ) as POIChanges


{
  key ChangeDocObject,
  key ChangeDocument,
  key DatabaseTable,
  key ChangeDocTableKey,
  key ChangeDocDatabaseTableField,

      //  key ChangeDocItemChangeType,

      ChangeDocPreviousUnit,
      ChangeDocNewUnit,
      ChangeDocPreviousCurrency,
      ChangeDocNewCurrency,
      ChangeDocNewFieldValue,
      ChangeDocPreviousFieldValue,
      ChangeDocTextIsChanged,

      CreatedByUser,
      CreationDate,
      CreationTime,
      ChangeTransactionCode,
      ChangeDocChangeType,
      
      // Added for DCL
      ChangeDocObjectClass 
}
```
