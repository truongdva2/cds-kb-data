---
name: I_FUNCNLLOCCLFNCHARVALUETP
description: Funcnllocclfncharvaluetp
semantic_en: "functional location classification class character value — assigned characteristic values for classified functional locations including interval and numeric ranges"
semantic_vi: "giá trị đặc tính phân loại của địa điểm chức năng — các giá trị đặc tính được gán bao gồm khoảng và phạm vi số"
keywords:
  - phân loại
  - đặc tính
  - giá trị
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - transactional-processing
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_FUNCNLLOCCLFNCHARVALUETP

**Funcnllocclfncharvaluetp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FunctionalLocation` | `FunctionalLocation` |
| `ClassType` | `ClassType` |
| `CharcValuePositionNumber` | `CharcValuePositionNumber` |
| `CharcInternalID` | `CharcInternalID` |
| `FunctionalLocationLabelName` | `FunctionalLocationLabelName` |
| `Characteristic` | `Characteristic` |
| `CharcDataType` | `CharcDataType` |
| `ClassInternalID` | `ClassInternalID` |
| `KeyDate` | `KeyDate` |
| `ChangeNumber` | `ChangeNumber` |
| `CharcValueIntervalType` | `CharcValueDependency` |
| `CharcValue` | `CharcValue` |
| `CharcFromNumericValue` | `CharcFromNumericValue` |
| `CharcFromNumericValueUnit` | `CharcFromNumericValueUnit` |
| `CharcToNumericValue` | `CharcToNumericValue` |
| `CharcToNumericValueUnit` | `CharcToNumericValueUnit` |
| `CharcFromDecimalValue` | `CharcFromDecimalValue` |
| `CharcToDecimalValue` | `CharcToDecimalValue` |
| `CharcFromAmount` | `CharcFromAmount` |
| `CharcToAmount` | `CharcToAmount` |
| `Currency` | `Currency` |
| `CharcFromDate` | `CharcFromDate` |
| `CharcToDate` | `CharcToDate` |
| `CharcFromTime` | `CharcFromTime` |
| `CharcToTime` | `CharcToTime` |
| `CharcMaintAuthGrp` | `CharcMaintAuthGrp` |
| `ClassMaintAuthGrp` | `ClassMaintAuthGrp` |
| `ClassClassfctnAuthGrp` | `ClassClassfctnAuthGrp` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MASTER
   },
   semanticKey: ['FunctionalLocation']
 }
@EndUserText.label: 'FL Classification Class Character Value - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_FuncnlLocClfnCharValueTP as projection on R_FuncnlLocClfnCharValueTP
  
{
  key FunctionalLocation,
  key ClassType,
  key CharcValuePositionNumber ,
  key CharcInternalID,
      FunctionalLocationLabelName,
      Characteristic,
      CharcDataType,
      ClassInternalID as ClassInternalID,
      KeyDate,
      ChangeNumber,
      CharcValueDependency as CharcValueIntervalType,
      CharcValue,
      CharcFromNumericValue,
      CharcFromNumericValueUnit,
      CharcToNumericValue,
      CharcToNumericValueUnit,
      CharcFromDecimalValue,
      CharcToDecimalValue,
      @Semantics.amount.currencyCode: 'Currency'
      CharcFromAmount,
      @Semantics.amount.currencyCode: 'Currency'
      CharcToAmount,
      
      Currency,
      CharcFromDate,
      CharcToDate,
      CharcFromTime,
      CharcToTime,
      @Consumption.hidden: true
      CharcMaintAuthGrp,
      @Consumption.hidden: true
      ClassMaintAuthGrp,
      @Consumption.hidden: true
      ClassClassfctnAuthGrp,
     _Characteristic: redirected to parent I_FuncnlLocClfnClassCharTP,
    _FunctionalLocation: redirected to I_FunctionalLocationTP

}
```
