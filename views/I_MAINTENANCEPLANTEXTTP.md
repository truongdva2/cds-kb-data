---
name: I_MAINTENANCEPLANTEXTTP
description: Maintenance PlanTEXTTP
semantic_en: "maintenance plan long text in target language — key columns: MaintenancePlan, Language, MaintenancePlanLongText"
semantic_vi: "văn bản dài kế hoạch bảo trì trong ngôn ngữ đích — cột chính: kế hoạch bảo trì, ngôn ngữ, văn bản dài"
keywords:
  - văn bản kế hoạch
  - mô tả bảo trì
  - ngôn ngữ kế hoạch
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
  - plant
  - maintenance-plan
  - text
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
  - bo:Plant
---
# I_MAINTENANCEPLANTEXTTP

**Maintenance PlanTEXTTP**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaintenancePlan` | `MaintenancePlan` |
| `Language` | `Language` |
| `TextObjectKey` | `TextObjectKey` |
| `TextObjectType` | `TextObjectType` |
| `TextObjectCategory` | `TextObjectCategory` |
| `MaintenancePlanLongText` | `MaintenancePlanLongText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Maintenance Plan Long Text - TP'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   dataCategory: #TEXT, 
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['MaintenancePlan' , 'Language']
 }
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_MaintenancePlanTextTP
  as projection on R_MaintenancePlanTextTP as MaintenancePlanText {
  key MaintenancePlan,
      @Semantics.language: true
  key Language, 
      TextObjectKey,
      TextObjectType,
      TextObjectCategory,  
      @Semantics.text: true
      MaintenancePlanLongText,

      /* Local Associations */
      _MaintenancePlan : redirected to parent I_MaintenancePlanTP_2
  
}
```
