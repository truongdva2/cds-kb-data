---
name: C_CHANGEMSTROBJMGMTRECORDDEX
description: Changemstrobjmgmtrecorddex
semantic_en: "Change master object management record data extraction — a DEX/dimension view exposing the objects managed under a change number (object type, internal ID, revision level, lock status, planned flag) with creation and change audit fields."
semantic_vi: "Trích xuất bản ghi quản lý đối tượng lệnh thay đổi — view DEX/chiều hiển thị các đối tượng được quản lý theo số lệnh thay đổi (loại đối tượng, ID nội bộ, cấp độ phiên bản, trạng thái khóa, cờ lập kế hoạch) cùng các trường kiểm toán tạo và thay đổi."
keywords:
  - đối tượng lệnh thay đổi
  - bản ghi quản lý đối tượng ECM
  - phiên bản đối tượng kỹ thuật
  - trích xuất ECM PLM đối tượng
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
  - component:PLM-WUI-OBJ-ECN-2CL
  - lob:Other
  - bo:ObjectManagementRecord
---
# C_CHANGEMSTROBJMGMTRECORDDEX

**Changemstrobjmgmtrecorddex**

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
| `ObjMgmtRecdObjectInternalID` | `ObjMgmtRecdObjectInternalID` |
| `ObjMgmtRecdObject` | `ObjMgmtRecdObject` |
| `ObjMgmtRecdObjIsLockedForChg` | `ObjMgmtRecdObjIsLockedForChg` |
| `ObjMgmtRecdObjRevisionLevel` | `ObjMgmtRecdObjRevisionLevel` |
| `ObjMgmtRecdDescription` | `ObjMgmtRecdDescription` |
| `ObjMgmtRecdObjIsPlanned` | `ObjMgmtRecdObjIsPlanned` |
| `ObjMgmtRecdCreatedBy` | `ObjMgmtRecdCreatedBy` |
| `ObjMgmtRecdCreationDate` | `ObjMgmtRecdCreationDate` |
| `ObjMgmtRecdLastChangedBy` | `ObjMgmtRecdLastChangedBy` |
| `ObjMgmtRecdLastChangedAt` | `ObjMgmtRecdLastChangedAt` |
| `ObjMgmtRecdObjLastChangedBy` | `ObjMgmtRecdObjLastChangedBy` |
| `ObjMgmtRecdObjLastChangedAt` | `ObjMgmtRecdObjLastChangedAt` |
| `_ChangeMaster` | *Association* |
| `_ChangeMasterObjectType` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Object Management Rec of Change Master'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.sapObjectNodeType.name: 'ObjectManagementRecord'
@ObjectModel.representativeKey: 'ObjMgmtRecdObjectInternalID'
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,                                                                    
                                      #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern        : #ANALYTICAL_DIMENSION
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,        
        delta.changeDataCapture: {
          mapping:[
            {
              table:'aeoi', role: #MAIN,
              viewElement: ['ObjMgmtRecdObjectInternalID','ChangeNumber', 'ChangeNumberObjectType'],
              tableElement: [ 'OBJKT','AENNR','AETYP']
             }
           ]
        }
    }
}

define view entity C_ChangeMstrObjMgmtRecordDEX
  as select from I_ChangeMstrObjectMgmtRecord

{
      @ObjectModel.foreignKey.association: '_ChangeMaster'
  key ChangeNumber,
      @ObjectModel.foreignKey.association: '_ChangeMasterObjectType'
  key ChangeNumberObjectType,
  key ObjMgmtRecdObjectInternalID,
      ObjMgmtRecdObject,
      @Semantics.booleanIndicator:true
      ObjMgmtRecdObjIsLockedForChg,
      ObjMgmtRecdObjRevisionLevel,
      @Semantics.text: true
      ObjMgmtRecdDescription,
      @Semantics.booleanIndicator:true
      ObjMgmtRecdObjIsPlanned,
      @Semantics.user.createdBy: true
      ObjMgmtRecdCreatedBy,
      @Semantics.systemDate.createdAt: true
      ObjMgmtRecdCreationDate,
      @Semantics.user.lastChangedBy: true
      ObjMgmtRecdLastChangedBy,
      @Semantics.systemDate.lastChangedAt: true
      ObjMgmtRecdLastChangedAt,
      @Semantics.user.lastChangedBy: true
      ObjMgmtRecdObjLastChangedBy,
      @Semantics.systemDate.lastChangedAt: true
      ObjMgmtRecdObjLastChangedAt,
      _ChangeMaster,
      _ChangeMasterObjectType
}
```
