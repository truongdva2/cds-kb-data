---
name: I_MAINTENANCEITEMCAUSETEXTTP
description: Maintenanceitemcausetexttp
semantic_en: "maintenance item cause long text TP — stores plain long text for cause reasons in multiple languages."
semantic_vi: "văn bản dài nguyên nhân mục bảo dưỡng TP — lưu trữ văn bản dài nguyên nhân theo ngôn ngữ."
keywords:
  - nguyên nhân bảo dưỡng
  - văn bản dài
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
  - text
  - item-level
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTENANCEITEMCAUSETEXTTP

**Maintenanceitemcausetexttp**

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
| `NmbrOfMaintComplianceItems` | `NmbrOfMaintComplianceItems` |
| `Language` | `Language` |
| `TextObjectKey` | `TextObjectKey` |
| `TextObjectCategory` | `TextObjectCategory` |
| `TextObjectType` | `TextObjectType` |
| `PlainLongText` | `PlainLongText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Maintenance Item Cause Long Text - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   dataCategory: #TEXT,
   modelingPattern:       #TRANSACTIONAL_PROJECTED_ENTITY,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenanceItem' , 'NmbrOfMaintComplianceItems', 'Language']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
  
define view entity I_MaintenanceItemCauseTextTP
 as projection on R_MaintenanceItemCauseTextTP as MaintenanceItemCauseText {

  key  MaintenanceItem,
  key  NmbrOfMaintComplianceItems,
       @Semantics.language:true
  key  Language,
       TextObjectKey,
       TextObjectCategory,
       TextObjectType,
       @Semantics.text: true
       PlainLongText,


       /* Local Association */
       _MaintenanceItem      : redirected to I_MaintenanceItemTP_2,
       _MaintenanceItemCause : redirected to parent I_MaintenanceItemCauseTP
}
```
