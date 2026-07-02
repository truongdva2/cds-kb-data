---
name: I_VARCONFIGNTABLETP
description: Varconfigntabletp
semantic_en: "variant configuration table master – defining configuration table structure with status, group, and custom storage links."
semantic_vi: "bảng cấu hình biến thể chính – xác định cấu trúc bảng cấu hình với trạng thái, nhóm và liên kết lưu trữ tùy chỉnh."
keywords:
  - bảng cấu hình
  - trạng thái
  - lưu trữ
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
# I_VARCONFIGNTABLETP

**Varconfigntabletp**

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
| `VarConfignTblStatus` | `VarConfignTblStatus` |
| `VarConfignTblGroup` | `VarConfignTblGroup` |
| `VarConfignTblCustomStorageName` | `VarConfignTblCustomStorageName` |
| `VarConfignTblCstmStorIsActive` | `VarConfignTblCstmStorIsActive` |
| `VarConfignTblIsDecisionTable` | `VarConfignTblIsDecisionTable` |
| `EngineProcessingMode` | `EngineProcessingMode` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `VarCnfTblCstmStorLnkLstChgDate` | `VarCnfTblCstmStorLnkLstChgDate` |
| `VarCnfTblCstmStorLnkLstChgTime` | `VarCnfTblCstmStorLnkLstChgTime` |
| `VarCnfTblCstmStorLnkLastChgdBy` | `VarCnfTblCstmStorLnkLastChgdBy` |
| `VarConfignTblLstChgDateTime` | `VarConfignTblLstChgDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Variant Table - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType.name: 'VariantConfigurationTable',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  }
}
define root view entity I_VarConfignTableTP
  provider contract transactional_interface
  as projection on R_VarConfignTableTP
{
  key VarConfignTblName,
      VarConfignTblStatus,
      VarConfignTblGroup,
      VarConfignTblCustomStorageName,
      VarConfignTblCstmStorIsActive,
      VarConfignTblIsDecisionTable,
      EngineProcessingMode,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      VarCnfTblCstmStorLnkLstChgDate,
      VarCnfTblCstmStorLnkLstChgTime,
      VarCnfTblCstmStorLnkLastChgdBy,
      VarConfignTblLstChgDateTime,
      
      /* Associations */
      _Column: redirected to composition child I_VarConfignTableColumnTP,
      _Text: redirected to composition child I_VarConfignTableTextTP,
      @Semantics.valueRange.maximum: '1'
      _ValueAssignmentAlternative: redirected to composition child I_VarCnfTblValAssgmtAltvTP
}
```
