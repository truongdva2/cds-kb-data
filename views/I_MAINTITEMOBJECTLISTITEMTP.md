---
name: I_MAINTITEMOBJECTLISTITEMTP
description: Maintitemobjectlistitemtp
semantic_en: "maintenance item object list item projection with technical object and equipment reference — key columns: MaintenanceItem, Equipment, FunctionalLocation, TechnicalObject"
semantic_vi: "hình chiếu mục danh sách đối tượng mục bảo trì với tham chiếu đối tượng kỹ thuật và thiết bị — cột chính: mục bảo trì, thiết bị, vị trí chức năng, đối tượng kỹ thuật"
keywords:
  - mục bảo trì
  - danh sách đối tượng
  - thiết bị
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - transactional-processing
  - item-level
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTITEMOBJECTLISTITEMTP

**Maintitemobjectlistitemtp**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaintenanceItem` | `MaintenanceItem` |
| `MaintenanceItemObjectList` | `MaintenanceItemObjectList` |
| `MaintenanceObjectListItem` | `MaintenanceObjectListItem` |
| `MaintenanceObjectListUsageCode` | `MaintenanceObjectListUsageCode` |
| `Equipment` | `Equipment` |
| `FunctionalLocation` | `FunctionalLocation` |
| `FunctionalLocationLabelName` | `FunctionalLocationLabelName` |
| `TechObjIsEquipOrFuncnlLoc` | `TechObjIsEquipOrFuncnlLoc` |
| `TechnicalObject` | `TechnicalObject` |
| `TechnicalObjectLabel` | `TechnicalObjectLabel` |
| `TechnicalObjectDescription` | `TechnicalObjectDescription` |
| `MaintenanceNotification` | `MaintenanceNotification` |
| `Assembly` | `Assembly` |
| `MaintObjectLocAcctAssgmtNmbr` | `MaintObjectLocAcctAssgmtNmbr` |
| `Material` | `Material` |
| `SerialNumber` | `SerialNumber` |
| `UniqueItemIdentifier` | `UniqueItemIdentifier` |
| `CreationDate` | `CreationDate` |
| `MaintObjectListItemSequence` | `MaintObjectListItemSequence` |
| `MaintObjListEntryIsProcessed` | `MaintObjListEntryIsProcessed` |
| `MaintenancePlanCallObject` | `MaintenancePlanCallObject` |
| `MaintenancePlanningPlant` | `MaintenancePlanningPlant` |
| `MaintenancePlannerGroup` | `MaintenancePlannerGroup` |
| `MaintenancePlant` | `MaintenancePlant` |
| `ControllingArea` | `ControllingArea` |
| `CostCenter` | `CostCenter` |
| `_Equipment` | *Association* |
| `_FunctionalLocation` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Maintenance Item Object List Item - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenanceItem' , 'MaintenanceItemObjectList', 'MaintenanceObjectListItem']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_MaintItemObjectListItemTP
  as projection on R_MaintItemObjectListItemTP as MaintItemObjectListItemTP
{
  key MaintenanceItem,
  key MaintenanceItemObjectList,
  key MaintenanceObjectListItem,
      MaintenanceObjectListUsageCode,
      Equipment,
      FunctionalLocation,
      FunctionalLocationLabelName,
      TechObjIsEquipOrFuncnlLoc,
      TechnicalObject,
      TechnicalObjectLabel,
      @Semantics.text: true
      TechnicalObjectDescription,
      MaintenanceNotification,
      Assembly,
      MaintObjectLocAcctAssgmtNmbr,
      Material,
      SerialNumber,
      UniqueItemIdentifier,
      CreationDate,
      MaintObjectListItemSequence,
      MaintObjListEntryIsProcessed,
      -- Service Field
      ServiceReferenceProduct,
      /* Needed for authorization */
      MaintenancePlanCallObject,
      MaintenancePlanningPlant,
      MaintenancePlannerGroup,
      MaintenancePlant,
      ControllingArea,
      CostCenter,

      /* Local Association */
      _Equipment,
      _FunctionalLocation,
      _MaintenanceItemTP : redirected to parent I_MaintenanceItemTP_2

}
```
