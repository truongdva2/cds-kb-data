---
name: I_EQUIPMATLSRLNMBRWARRANTYTP
description: Equipmatlsrlnmbrwarrantytp
semantic_en: "equipment material serial number warranty — stores warranty coverage details for serialized material equipment"
semantic_vi: "bảo hành số serial vật tư thiết bị — lưu trữ chi tiết bảo hiểm bảo hành cho thiết bị vật tư có số serial"
keywords:
  - bảo hành
  - thiết bị
  - serial number
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
# I_EQUIPMATLSRLNMBRWARRANTYTP

**Equipmatlsrlnmbrwarrantytp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Material` | `Material` |
| `SerialNumber` | `SerialNumber` |
| `Equipment` | `Equipment` |
| `WarrantyCategory` | `WarrantyCategory` |
| `WarrantyType` | `WarrantyType` |
| `MasterWarranty` | `MasterWarranty` |
| `WarrantyStartDate` | `WarrantyStartDate` |
| `WarrantyEndDate` | `WarrantyEndDate` |
| `WrntyIsInhtdFromSuperiorObject` | `WrntyIsInhtdFromSuperiorObject` |
| `WrntyIsPassedOnToChildObject` | `WrntyIsPassedOnToChildObject` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Warranty of Material Serial Number - TP'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking :#BLOCKED_DATA_EXCLUDED
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #MASTER
   },
   semanticKey: ['Equipment']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}


define view entity I_EquipMatlSrlNmbrWarrantyTP as projection on R_EquipMatlSrlNmbrWarrantyTP
{
  key Material,
 
  key SerialNumber,
 
  key Equipment,
 
  key WarrantyCategory,
 
  WarrantyType,
 
  MasterWarranty,
 
  WarrantyStartDate,
 
  WarrantyEndDate,
  
  @Semantics.booleanIndicator : true
  WrntyIsInhtdFromSuperiorObject,
  
  @Semantics.booleanIndicator : true
  WrntyIsPassedOnToChildObject,
 
  /* Associations */
 
 _EquipmentMaterialSerialNumber: redirected to parent I_EquipMatlSerialNumberTP
 
}
```
