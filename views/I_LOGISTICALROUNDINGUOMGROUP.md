---
name: I_LOGISTICALROUNDINGUOMGROUP
description: Logisticalroundinguomgroup
semantic_en: "logistical rounding UoM group — defines unit of measure grouping for logistical rounding."
semantic_vi: "nhóm UoM làm tròn logistic — xác định nhóm đơn vị đo lường cho làm tròn logistic."
keywords:
  - làm tròn logistic
  - đơn vị đo
  - nhóm UoM
app_component: LO-RFM-MD-ART
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - unit-of-measure
  - component:LO-RFM-MD-ART
  - lob:Logistics General
---
# I_LOGISTICALROUNDINGUOMGROUP

**Logisticalroundinguomgroup**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LogisticalRoundingUoMGroup` | `megru` |
| `_LogisticalRoundingUoMGrpUoM` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LogisticalRoundingUoMGrpUoM` | `I_LogisticalRoundingUoMGrpUoM` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Logistical Rounding UoM Group'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel: {
    supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
    representativeKey: 'LogisticalRoundingUoMGroup',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define root view entity I_LogisticalRoundingUoMGroup

as select distinct from twmeg
composition [1..*] of I_LogisticalRoundingUoMGrpUoM as _LogisticalRoundingUoMGrpUoM
  {
   key megru as LogisticalRoundingUoMGroup,
   _LogisticalRoundingUoMGrpUoM
};
```
