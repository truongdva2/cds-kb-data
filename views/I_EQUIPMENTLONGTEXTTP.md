---
name: I_EQUIPMENTLONGTEXTTP
description: Equipmentlongtexttp
semantic_en: "equipment long text with technical profile — maintains extended text descriptions for equipment in multiple languages"
semantic_vi: "văn bản dài thiết bị với hồ sơ kỹ thuật — duy trì mô tả văn bản mở rộng cho thiết bị trong nhiều ngôn ngữ"
keywords:
  - mô tả thiết bị
  - văn bản dài
  - đa ngôn ngữ
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
  - equipment
  - text
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENTLONGTEXTTP

**Equipmentlongtexttp**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Equipment` | `Equipment` |
| `Language` | `Language` |
| `TextObjectKey` | `TextObjectKey` |
| `TextObjectCategory` | `TextObjectCategory` |
| `TextObjectType` | `TextObjectType` |
| `EquipmentLongText` | `EquipmentLongText` |
| `ValidityEndDate` | `ValidityEndDate` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Equipment Long Text - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   dataCategory:#TEXT,
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #MIXED
   },
   semanticKey: ['Equipment']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_EquipmentLongTextTP
  as projection on R_EquipmentLongTextTP
{
  key  Equipment,
  @Semantics.language:true 
  key  Language,
       TextObjectKey,



       @Consumption.hidden: true
       TextObjectCategory,

       @Consumption.hidden: true
       TextObjectType,
       @Semantics.text:true 
       EquipmentLongText,

       @Consumption.hidden: true
       ValidityEndDate,

       _Equipment : redirected to parent I_EquipmentTP
}
```
