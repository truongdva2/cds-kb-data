---
name: I_CHGMSTROBMGREDOCINFORECDTP_2
description: Chgmstrobmgredocinforecdtp 2
semantic_en: "change number object management document information record transactional processing view — links engineering changes to document info records including document type, version, and part details with audit trail."
semantic_vi: "Xem xử lý giao dịch bản ghi thông tin tài liệu quản lý đối tượng số thay đổi — liên kết các thay đổi kỹ thuật với bản ghi thông tin tài liệu bao gồm loại tài liệu, phiên bản và chi tiết bộ phận với lịch sử kiểm toàn."
keywords:
  - quản lý tài liệu
  - thay đổi kỹ thuật
  - thông tin tài liệu
app_component: PLM-WUI-OBJ-ECN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PLM
  - PLM-WUI
  - PLM-WUI-OBJ
  - interface-view
  - transactional-processing
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
---
# I_CHGMSTROBMGREDOCINFORECDTP_2

**Chgmstrobmgredocinforecdtp 2**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-ECN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChangeNumber` | `ChangeNumber` |
| `DocumentType` | `DocumentType` |
| `DocumentInfoRecord` | `DocumentInfoRecord` |
| `DocumentPart` | `DocumentPart` |
| `DocumentVersion` | `DocumentVersion` |
| `ChgNmbrAlternativeDateID` | `ChgNmbrAlternativeDateID` |
| `SAPObjectTechnicalID` | `SAPObjectTechnicalID` |
| `ObjMgmtRecdDescription` | `ObjMgmtRecdDescription` |
| `ObjMgmtRecdItemUUID` | `ObjMgmtRecdItemUUID` |
| `ObjMgmtRecdLastChangedAt` | `ObjMgmtRecdLastChangedAt` |
| `ObjMgmtRecdLastChangedBy` | `ObjMgmtRecdLastChangedBy` |
| `ObjMgmtRecdCreationDate` | `ObjMgmtRecdCreationDate` |
| `ObjMgmtRecdCreatedBy` | `ObjMgmtRecdCreatedBy` |
| `ObjMgmtRecdObjLastChangedAt` | `ObjMgmtRecdObjLastChangedAt` |
| `ObjMgmtRecdObjLastChangedBy` | `ObjMgmtRecdObjLastChangedBy` |
| `ObjMgmtRecdObjIsLockedForChg` | `ObjMgmtRecdObjIsLockedForChg` |
| `ObjMgmtRecdObjIsPlanned` | `ObjMgmtRecdObjIsPlanned` |
| `ObjMgmtRecdObjRevisionLevel` | `ObjMgmtRecdObjRevisionLevel` |
| `ChgNmbrAlternativeDateCounter` | `ChgNmbrAlternativeDateCounter` |
| `ChangeNumberLastChgdDateTime` | `ChangeNumberLastChgdDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@EndUserText.label: 'Change Number Object Management Record DIR TP'
define view entity I_ChgMstrObMgReDocInfoRecdTP_2
  as projection on I_ChgMstrObMgReDocInfoRecdTP
{
  key ChangeNumber,
  key DocumentType,
  key DocumentInfoRecord,
  key DocumentPart,
  key DocumentVersion,

      ChgNmbrAlternativeDateID,

      SAPObjectTechnicalID,

      ObjMgmtRecdDescription,

      ObjMgmtRecdItemUUID,
      ObjMgmtRecdLastChangedAt,
      ObjMgmtRecdLastChangedBy,
      ObjMgmtRecdCreationDate,
      ObjMgmtRecdCreatedBy,
      ObjMgmtRecdObjLastChangedAt,
      ObjMgmtRecdObjLastChangedBy,
      @Semantics.booleanIndicator: true
      ObjMgmtRecdObjIsLockedForChg,
      @Semantics.booleanIndicator: true
      ObjMgmtRecdObjIsPlanned,
      ObjMgmtRecdObjRevisionLevel,

      @Consumption.hidden: true
      ChgNmbrAlternativeDateCounter,

      // for ETag handling
      ChangeNumberLastChgdDateTime,

      /* Associations */
      _ChangeMaster        : redirected to parent I_ChangeMasterTP_2,
      _ChangeMasterAltDate : redirected to I_ChangeMasterAltDateTP_2
}
```
