---
name: C_CHANGEMASTERDEX_2
description: Change MasterERDEX 2
semantic_en: "Engineering change master data extraction — a DEX/dimension view projecting change number header attributes including status, function, release key, validity date, release flags (for costing/planning/production/simulation), and administrative fields for BW extraction."
semantic_vi: "Trích xuất dữ liệu lệnh thay đổi kỹ thuật — view DEX/chiều chiếu các thuộc tính tiêu đề số lệnh thay đổi bao gồm trạng thái, chức năng, khóa phát hành, ngày hiệu lực, cờ phát hành (cho tính giá/lập kế hoạch/sản xuất/mô phỏng) và các trường quản trị để trích xuất BW."
keywords:
  - lệnh thay đổi kỹ thuật
  - trạng thái lệnh thay đổi
  - phát hành lệnh thay đổi
  - trích xuất ECM PLM
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
  - consumption-view
  - data-extraction
  - change-master
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
  - bo:ChangeMaster
---
# C_CHANGEMASTERDEX_2

**Change MasterERDEX 2**

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
| `ChangeNumberStatus` | `ChangeNumberStatus` |
| `AuthorizationGroup` | `AuthorizationGroup` |
| `ChangeNumberFunction` | `ChangeNumberFunction` |
| `ChangeNumberReleaseKey` | `ChangeNumberReleaseKey` |
| `ReasonForChangeText` | `ReasonForChangeText` |
| `ChangeNumberDescription` | `ChangeNumberDescription` |
| `LeadingChangeNumber` | `_LeadingChangeNumber.PackageChangeNumber` |
| `ChangeNumberValidFromDate` | `ChangeNumberValidFromDate` |
| `ChangeNumberCreationDate` | `ChangeNumberCreationDate` |
| `ChangeNumberCreatedByUser` | `ChangeNumberCreatedByUser` |
| `ChangeNumberLastChangedDate` | `ChangeNumberLastChangedDate` |
| `ChangeNumberLastChangedByUser` | `ChangeNumberLastChangedByUser` |
| `ChangeNumberLastChgdDateTime` | `ChangeNumberLastChgdDateTime` |
| `IsTechnicallyReleased` | `IsTechnicallyReleased` |
| `IsUsedForDataDefinition` | `IsUsedForDataDefinition` |
| `ChangeNumberIsMrkdForDeletion` | `ChangeNumberIsMrkdForDeletion` |
| `IsGloballyReleased` | `_ChangeNumberReleaseKey.IsGloballyReleased` |
| `IsReleasedForCosting` | `_ChangeNumberReleaseKey.IsReleasedForCosting` |
| `IsReleasedForPlanning` | `_ChangeNumberReleaseKey.IsReleasedForPlanning` |
| `IsReleasedForProduction` | `_ChangeNumberReleaseKey.IsReleasedForProduction` |
| `IsReleasedForSimulation` | `_ChangeNumberReleaseKey.IsReleasedForSimulation` |
| `IsDateShiftCreatedOCMPresel` | `_ChangeNumberReleaseKey.IsDateShiftCreatedOCMPresel` |
| `IsReleaseKeyCreatedOCMPresel` | `_ChangeNumberReleaseKey.IsReleaseKeyCreatedOCMPresel` |
| `ChangeIsAllowed` | `_ChangeNumberStatus.ChangeIsAllowed` |
| `DateChangeIsAllowed` | `_ChangeNumberStatus.DateChangeIsAllowed` |
| `DistributionIsLocked` | `_ChangeNumberStatus.DistributionIsLocked` |
| `_ChangeNumberStatus` | *Association* |
| `_ChangeNumberFunction` | *Association* |
| `_ChangeNumberReleaseKey` | *Association* |
| `_LeadingChangeNumber` | *Association* |
| `_ChangeMstrObjMgmtRecord` | *Association* |
| `_CreatedByUser` | *Association* |
| `_LastChangedByUser` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChangeMstrObjMgmtRecord` | `C_ChangeMstrObjMgmtRecordDEX` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE, 
                                      #EXTRACTION_DATA_SOURCE ]
                       
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'ChangeNumber'
@ObjectModel.sapObjectNodeType.name: 'ChangeMaster'
@ObjectModel.usageType:{
    serviceQuality: #D,
    sizeCategory: #L,
    dataClass: #MASTER
}

@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping:
          [ { table: 'aenr',
              role: #MAIN,
              viewElement: ['ChangeNumber'],
              tableElement: ['AENNR'] }
          ]
        }
    }
}
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Engineering Change Master'
define view entity C_ChangeMasterDEX_2
  as select from I_ChangeMaster
   association [0..*] to C_ChangeMstrObjMgmtRecordDEX as _ChangeMstrObjMgmtRecord on  $projection.ChangeNumber = _ChangeMstrObjMgmtRecord.ChangeNumber
{
  key ChangeNumber,
      @ObjectModel.foreignKey.association: '_ChangeNumberStatus'
      ChangeNumberStatus,
      AuthorizationGroup,
      ChangeNumberFunction,
      ChangeNumberReleaseKey,
      @Semantics.text: true
      ReasonForChangeText,
      @Semantics.text: true
      ChangeNumberDescription,
      _LeadingChangeNumber.PackageChangeNumber as LeadingChangeNumber,
      @Semantics.businessDate.at: true
      ChangeNumberValidFromDate,
      @Semantics.systemDate.createdAt: true
      ChangeNumberCreationDate,
      @Semantics.user.createdBy: true
      ChangeNumberCreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      ChangeNumberLastChangedDate,
      @Semantics.user.lastChangedBy: true
      ChangeNumberLastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      ChangeNumberLastChgdDateTime,
      @Semantics.booleanIndicator: true
      IsTechnicallyReleased,
      @Semantics.booleanIndicator: true
      IsUsedForDataDefinition,
      @Semantics.booleanIndicator: true
      ChangeNumberIsMrkdForDeletion,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsGloballyReleased,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleasedForCosting,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleasedForPlanning,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleasedForProduction,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleasedForSimulation,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsDateShiftCreatedOCMPresel,
      @Semantics.booleanIndicator: true
      _ChangeNumberReleaseKey.IsReleaseKeyCreatedOCMPresel,
      @Semantics.booleanIndicator: true
      _ChangeNumberStatus.ChangeIsAllowed,
      @Semantics.booleanIndicator: true
      _ChangeNumberStatus.DateChangeIsAllowed,
      @Semantics.booleanIndicator: true
      _ChangeNumberStatus.DistributionIsLocked,

      _ChangeNumberStatus,
      _ChangeNumberFunction,
      _ChangeNumberReleaseKey,
      _LeadingChangeNumber,
      _ChangeMstrObjMgmtRecord,
      _CreatedByUser,
      _LastChangedByUser

}
```
