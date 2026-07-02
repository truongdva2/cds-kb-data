---
name: I_VARCNFPRODPRFLCHGRPASGTTP
description: Varcnfprodprflchgrpasgttp
semantic_en: "variant configuration profile characteristic group assignments – linking products and profiles to characteristic groups with sorting values."
semantic_vi: "phân công nhóm đặc tính hồ sơ cấu hình biến thể – liên kết sản phẩm và hồ sơ tới nhóm đặc tính với giá trị sắp xếp."
keywords:
  - hồ sơ cấu hình
  - đặc tính
  - nhóm
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
# I_VARCNFPRODPRFLCHGRPASGTTP

**Varcnfprodprflchgrpasgttp**

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
| `ConfignCharacteristicGroup` | `ConfignCharacteristicGroup` |
| `VarCnfChGrpAsgtSrtgOrderValue` | `VarCnfChGrpAsgtSrtgOrderValue` |
| `_Product` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Var Cnf Profile Charc Group Assgmt - TP'
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

define view entity I_VarCnfProdPrflChGrpAsgtTP 
    as projection on R_VarCnfProdPrflChGrpAsgtTP
    
{
  key Product,
  key VarConfigurationProfileName,
  key ChangeNumber,
  key ConfignCharacteristicGroup,

  VarCnfChGrpAsgtSrtgOrderValue,
  
  /* Associations */
  _HistoricalProfile : redirected to parent I_VarCnfHistlProductProfileTP,
  _Profile           : redirected to I_VarCnfProductProfileTP,
  _Product
}
```
