---
name: D_HANDLINGUNITMOVERESULT
description: D Handlingunitmoveresult
semantic_en: "handling unit movement result — captures handling unit details after movement including external ID, warehouse, packaging material, weight, and receiving location."
semantic_vi: "kết quả di chuyển đơn vị xử lý — ghi lại chi tiết đơn vị xử lý sau di chuyển bao gồm ID bên ngoài, kho, vật liệu đóng gói, trọng lượng, và vị trí nhận."
keywords:
  - di chuyển đơn vị
  - kết quả
  - kho
app_component: LO-HU-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-HU
  - LO-HU-API
  - component:LO-HU-API-2CL
  - lob:Logistics General
---
# D_HANDLINGUNITMOVERESULT

**D Handlingunitmoveresult**

| Property | Value |
|---|---|
| App Component | `LO-HU-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `HandlingUnitExternalID` | `exidv` |
| `Warehouse` | `lgnum` |
| `HandlingUnitCharUUID` | `lo_hu_uuid_char32` |
| `PackagingMaterial` | `vhilm` |
| `PackagingMaterialType` | `vhart` |
| `HandlingUnitReferenceDocument` | `vpobjkey` |
| `ParentHandlingUnitNumber` | `ewm_de_hu_no_conv` |
| `HandlingUnitInternalStatus` | `hu_status` |
| `GrossWeight` | `brgew_vekp` |
| `WeightUnit` | `gewei` |
| `CreatedByUser` | `ernam` |
| `CreationDateTime` | `vdm_creationdatetime` |
| `Plant` | `hum_werks` |
| `ReceivingStorageLocation` | `umlgo` |
| `ReceivingStorageBin` | `/scwm/lgpla` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Move of Handling Units Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define abstract entity D_HandlingUnitMoveResult
{

  key HandlingUnitExternalID        : exidv;
      Warehouse                     : lgnum;
      HandlingUnitCharUUID          : lo_hu_uuid_char32;
      PackagingMaterial             : vhilm;
      PackagingMaterialType         : vhart;
      HandlingUnitReferenceDocument : vpobjkey;
      ParentHandlingUnitNumber      : ewm_de_hu_no_conv; // /scwm/de_huident has BADI in conversion exit that not allowed in RAP
      HandlingUnitInternalStatus    : hu_status;
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      GrossWeight                   : brgew_vekp;
      WeightUnit                    : gewei;
      CreatedByUser                 : ernam;
      CreationDateTime              : vdm_creationdatetime;
      Plant                         : hum_werks;
      ReceivingStorageLocation      : umlgo;
      ReceivingStorageBin           : /scwm/lgpla;

}
```
