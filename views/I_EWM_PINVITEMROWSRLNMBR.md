---
name: I_EWM_PINVITEMROWSRLNMBR
description: Ewm Pinvitemrowsrlnmbr
semantic_en: "warehouse physical inventory item row serial numbers — maps serialized products in inventory counts with processing status."
semantic_vi: "số seri dòng hàng kiểm kê vật lý kho hàng — ánh xạ sản phẩm có seri trong đếm tồn kho với trạng thái xử lý."
keywords:
  - số seri kiểm kê
  - sản phẩm có seri
  - trạng thái đếm
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - item-level
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_PINVITEMROWSRLNMBR

**Ewm Pinvitemrowsrlnmbr**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EWMWarehouse` | `EWMWarehouse` |
| `PhysicalInventoryDocNumber` | `PhysicalInventoryDocNumber` |
| `PhysicalInventoryDocYear` | `PhysicalInventoryDocYear` |
| `LineIndexOfPInvItem` | `LineIndexOfPInvItem` |
| `PhysicalInventoryItemNumber` | `PhysicalInventoryItemNumber` |
| `EWMPhysInvtrySrlNmbrSqnc` | `EWMPhysInvtrySrlNmbrSqnc` |
| `EWMPInvSrlNmbrProcgStatus` | `EWMPInvSrlNmbrProcgStatus` |
| `EWMPInvSrlNmbrProcgStatusText` | `expr(…)` |
| `EWMSerialNumber` | `EWMSerialNumber` |
| `ActivityArea` | `ActivityArea` |
| `PhysicalInventoryDocumentUUID` | `PhysicalInventoryDocumentUUID` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Serial Number of Whse PInv Item Row'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
}
define view entity I_EWM_PInvItemRowSrlNmbr
  as select from P_EWM_PInvItemRowSrlNmbr04
{
  key EWMWarehouse,
  key PhysicalInventoryDocNumber,
  key PhysicalInventoryDocYear,
  key LineIndexOfPInvItem,
  key PhysicalInventoryItemNumber,
  key EWMPhysInvtrySrlNmbrSqnc,
      //status of the serial number: = means existing one, + means new found one, while - means lost one from original one
  key EWMPInvSrlNmbrProcgStatus,
      _Status._Text[1:Language = $session.system_language].EWMPInvSrlNmbrProcgStatusText,
      EWMSerialNumber,
      ActivityArea,
      PhysicalInventoryDocumentUUID
}
```
