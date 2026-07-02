---
name: I_FUNCNLLOCCLFNCLASSTP
description: Funcnllocclfnclasstp
semantic_en: "functional location classification class — classification assignments including class type, validity, and authorization group for functional locations"
semantic_vi: "lớp phân loại của địa điểm chức năng — phân công phân loại bao gồm loại lớp, giá trị và nhóm quyền hạn"
keywords:
  - phân loại
  - lớp
  - quyền hạn
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
# I_FUNCNLLOCCLFNCLASSTP

**Funcnllocclfnclasstp**

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
| `ClassInternalID` | `ClassInternalID` |
| `ClassType` | `ClassType` |
| `FunctionalLocationLabelName` | `FunctionalLocationLabelName` |
| `KeyDate` | `KeyDate` |
| `Class` | `Class` |
| `ClfnStatus` | `ClfnStatus` |
| `ClassPositionNumber` | `ClassPositionNumber` |
| `ClassIsStandardClass` | `ClassIsStandardClass` |
| `ClfnObjectInternalID` | `ClfnObjectInternalID` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ClassMaintAuthGrp` | `ClassMaintAuthGrp` |
| `ClassClassfctnAuthGrp` | `ClassClassfctnAuthGrp` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'FL Classification Class - TP'
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

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Metadata.ignorePropagatedAnnotations:true

define view entity I_FuncnlLocClfnClassTP as projection on R_FuncnlLocClfnClassTP
{
  key FunctionalLocation,
  key ClassInternalID,
  key ClassType,
      FunctionalLocationLabelName,
      KeyDate,
      Class,
      ClfnStatus,
      
      
      
      ClassPositionNumber,
      @Semantics.booleanIndicator: true
      ClassIsStandardClass,
      ClfnObjectInternalID,
      ValidityEndDate,
      @Consumption.hidden: true
      ClassMaintAuthGrp,
      @Consumption.hidden: true
      ClassClassfctnAuthGrp,
      _Characteristic: redirected to composition child I_FuncnlLocClfnClassCharTP,
      _FunctionalLocation: redirected to parent I_FunctionalLocationTP
      
}
```
