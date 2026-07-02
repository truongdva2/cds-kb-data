---
name: I_MAINTORDEROPCOMPLONGTEXTTP
description: Maintorderopcomplongtexttp
semantic_en: "maintenance order operation component long text in target projection — key columns: MaintenanceOrder, MaintenanceOrderOperation, OrderComponentLongText"
semantic_vi: "văn bản dài bộ phận hoạt động đơn hàng bảo trì trong hình chiếu đích — cột chính: đơn hàng, hoạt động, văn bản dài bộ phận"
keywords:
  - hoạt động bộ phận bảo trì
  - văn bản dài
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - text
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDEROPCOMPLONGTEXTTP

**Maintorderopcomplongtexttp**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaintenanceOrder` | `MaintenanceOrder` |
| `MaintenanceOrderOperation` | `MaintenanceOrderOperation` |
| `MaintenanceOrderSubOperation` | `MaintenanceOrderSubOperation` |
| `MaintOrderComponentInternalID` | `MaintOrderComponentInternalID` |
| `TextObjectType` | `TextObjectType` |
| `Language` | `Language` |
| `OrderComponentLongText` | `OrderComponentLongText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Op Comp Long Text - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@ObjectModel.dataCategory:#TEXT
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintOrderOpCompLongTextTP
  as projection on R_MaintOrderOpCompLongTextTP_2

{
  key MaintenanceOrder,
  key MaintenanceOrderOperation,
  key MaintenanceOrderSubOperation,
  key MaintOrderComponentInternalID,
  key TextObjectType,
      @Semantics.language: true
  key Language,
      @Semantics.text:true
      OrderComponentLongText,

      _MaintenanceOrder          : redirected to I_MaintenanceOrderTP,
      _MaintenanceOrderComponent : redirected to parent I_MaintOrderOpComponentTP_2


}
```
