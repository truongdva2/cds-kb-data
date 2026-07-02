---
name: I_CHGMSTROBJTYPEASSGMTTP_2
description: Chgmstrobjtypeassgmttp 2
semantic_en: "change number object type assignment transactional processing view — defines which object types are relevant for specific engineering changes with creation and modification tracking."
semantic_vi: "Xem xử lý giao dịch phân công loại đối tượng số thay đổi — định nghĩa loại đối tượng nào liên quan đến các thay đổi kỹ thuật cụ thể với theo dõi tạo và sửa đổi."
keywords:
  - phân công loại đối tượng
  - thay đổi kỹ thuật
  - loại đối tượng
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
# I_CHGMSTROBJTYPEASSGMTTP_2

**Chgmstrobjtypeassgmttp 2**

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
| `ChangeNumberObjectType` | `ChangeNumberObjectType` |
| `SAPObjectType` | `SAPObjectType` |
| `IsActiveForChangeNumber` | `IsActiveForChangeNumber` |
| `IsLockedForChanges` | `IsLockedForChanges` |
| `IsPartiallyDisplayed` | `IsPartiallyDisplayed` |
| `ObjMgmtRecdIsRequired` | `ObjMgmtRecdIsRequired` |
| `ObjMgmtRecdIsGenerated` | `ObjMgmtRecdIsGenerated` |
| `ObjMgmtRecdIsAutomlyCrted` | `ObjMgmtRecdIsAutomlyCrted` |
| `ObjMgmtRecdIsAutomlyCrtedByDlg` | `ObjMgmtRecdIsAutomlyCrtedByDlg` |
| `ObjectTypeCreationDate` | `ObjectTypeCreationDate` |
| `ObjectTypeCreatedByUser` | `ObjectTypeCreatedByUser` |
| `ObjectTypeLastChangedDate` | `ObjectTypeLastChangedDate` |
| `ObjectTypeLastChangedByUser` | `ObjectTypeLastChangedByUser` |
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
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #MASTER

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@EndUserText.label: 'Change Number Object Type Assignment TP'
define view entity I_ChgMstrObjTypeAssgmtTP_2
  as projection on I_ChangeMasterObjTypeAssgmtTP
{
  key ChangeNumber,
  @Consumption.hidden: true
  key ChangeNumberObjectType,
  key SAPObjectType,

      IsActiveForChangeNumber,
      @Semantics.booleanIndicator: true
      IsLockedForChanges,
      @Semantics.booleanIndicator: true
      IsPartiallyDisplayed,

      ObjMgmtRecdIsRequired,
      ObjMgmtRecdIsGenerated,
      ObjMgmtRecdIsAutomlyCrted,
      ObjMgmtRecdIsAutomlyCrtedByDlg,

      ObjectTypeCreationDate,
      ObjectTypeCreatedByUser,
      ObjectTypeLastChangedDate,
      ObjectTypeLastChangedByUser,

      // for ETag handling
      ChangeNumberLastChgdDateTime,

      _ChangeMaster : redirected to parent I_ChangeMasterTP_2
}
```
