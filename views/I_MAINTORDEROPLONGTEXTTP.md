---
name: I_MAINTORDEROPLONGTEXTTP
description: Maintorderoplongtexttp
semantic_en: "maintenance order operation long text in target projection — key columns: MaintenanceOrder, MaintenanceOrderOperation, Language, OrderOperationLongText"
semantic_vi: "văn bản dài hoạt động đơn hàng bảo trì trong hình chiếu đích — cột chính: đơn hàng, hoạt động, ngôn ngữ, văn bản dài hoạt động"
keywords:
  - hoạt động bảo trì
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
# I_MAINTORDEROPLONGTEXTTP

**Maintorderoplongtexttp**

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
| `TextObjectType` | `TextObjectType` |
| `Language` | `Language` |
| `OrderOperationLongText` | `OrderOperationLongText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Oper Long Text - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED }
@ObjectModel.dataCategory:#TEXT
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintOrderOpLongTextTP
  as projection on R_MaintOrderOpLongTextTP

{
  key     MaintenanceOrder,
  key     MaintenanceOrderOperation,
  key     MaintenanceOrderSubOperation,
  key     TextObjectType,
          @Semantics.language: true
  key     Language,
          @Semantics.text:true
          OrderOperationLongText,
          _MaintenanceOrder          : redirected to I_MaintenanceOrderTP,
          _MaintenanceOrderOperation : redirected to parent I_MaintenanceOrderOperationTP
}
```
