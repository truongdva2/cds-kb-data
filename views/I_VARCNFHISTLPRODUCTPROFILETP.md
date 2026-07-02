---
name: I_VARCNFHISTLPRODUCTPROFILETP
description: Varcnfhistlproductprofiletp
semantic_en: "historical variant configuration profile for products – tracking product name, profile name, validity dates, and BOM explosion settings."
semantic_vi: "hồ sơ cấu hình biến thể sản phẩm lịch sử – theo dõi tên sản phẩm, tên hồ sơ cấu hình, ngày có hiệu lực và cài đặt bom."
keywords:
  - cấu hình biến thể
  - hồ sơ sản phẩm
  - bom
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
  - product
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCNFHISTLPRODUCTPROFILETP

**Varcnfhistlproductprofiletp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Product` | `Product` |
| `VarConfigurationProfileName` | `VarConfigurationProfileName` |
| `ChangeNumber` | `ChangeNumber` |
| `ClassType` | `ClassType` |
| `VarConfigurationProfileStatus` | `VarConfigurationProfileStatus` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `IsDeleted` | `IsDeleted` |
| `BOMExplosionApplication` | `BOMExplosionApplication` |
| `BOMExplosionLevel` | `BOMExplosionLevel` |
| `VarConfigurationProfileProcess` | `VarConfigurationProfileProcess` |
| `VarCnfPrflOrderBOMFixatingMode` | `VarCnfPrflOrderBOMFixatingMode` |
| `VarCnfProfilePriorityValue` | `VarCnfProfilePriorityValue` |
| `ObjDpnAssignmentNumber` | `ObjDpnAssignmentNumber` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `_Product` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Histl Variant Configuration Profile - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #MASTER
}
define view entity I_VarCnfHistlProductProfileTP
  as projection on R_VarCnfHistlProductProfileTP
{
  key Product,
  key VarConfigurationProfileName,
  key ChangeNumber,
      ClassType,
      VarConfigurationProfileStatus,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,
      BOMExplosionApplication,
      BOMExplosionLevel,
      VarConfigurationProfileProcess,
      VarCnfPrflOrderBOMFixatingMode,
      VarCnfProfilePriorityValue,
      ObjDpnAssignmentNumber,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,

      /* Associations */
      _Product,
      _Profile                       : redirected to parent I_VarCnfProductProfileTP,
      _CharacteristicGroupAssignment : redirected to composition child I_VarCnfProdPrflChGrpAsgtTP,
      _ProcedureAssignment           : redirected to I_VarCnfProdPrflProcedAssgmtTP,
      _ConstraintNetAssignment       : redirected to I_VarCnfProdPrflCstrtNetAsgtTP      
}
```
