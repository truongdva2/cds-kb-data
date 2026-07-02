---
name: I_VARCONFIGNTABLEVALUETP
description: Varconfigntablevaluetp
semantic_en: "variant configuration table values – storing characteristic values with numeric ranges and intervals for table cells."
semantic_vi: "giá trị bảng cấu hình biến thể – lưu trữ giá trị đặc tính với phạm vi số và khoảng cho ô bảng."
keywords:
  - giá trị
  - bảng cấu hình
  - đặc tính
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - interface-view
  - transactional-processing
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCONFIGNTABLEVALUETP

**Varconfigntablevaluetp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `VarConfignTblName` | `VarConfignTblName` |
| `VarConfignTblLineNumber` | `VarConfignTblLineNumber` |
| `ChangeNumber` | `ChangeNumber` |
| `Characteristic` | `Characteristic` |
| `VarConfignTblValueNumber` | `VarConfignTblValueNumber` |
| `CharcValue` | `CharcValue` |
| `CharcValueIntervalType` | `CharcValueIntervalType` |
| `CharcFromNumericValue` | `CharcFromNumericValue` |
| `CharcToNumericValue` | `CharcToNumericValue` |
| `CharcFromNumericValueUnit` | `CharcFromNumericValueUnit` |
| `CharcToNumericValueUnit` | `CharcToNumericValueUnit` |
| `VarConfignTblAnyValueIsAllowed` | `VarConfignTblAnyValueIsAllowed` |
| `CharcInternalID` | `CharcInternalID` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Variant Configuration Table Value - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #S }
}
define view entity I_VarConfignTableValueTP
  as projection on R_VarConfignTableValueTP
{
  key VarConfignTblName,
  key VarConfignTblLineNumber,
  key ChangeNumber,
  key Characteristic,
  key VarConfignTblValueNumber,
      CharcValue,
      CharcValueIntervalType,
      CharcFromNumericValue,
      CharcToNumericValue,
      CharcFromNumericValueUnit,
      CharcToNumericValueUnit,
      @Semantics.booleanIndicator: true
      VarConfignTblAnyValueIsAllowed,
      CharcInternalID,
      
      /* Associations */
      _Table : redirected to I_VarConfignTableContentTP,
      _TableLine : redirected to parent I_VarConfignTableLineTP
}
```
