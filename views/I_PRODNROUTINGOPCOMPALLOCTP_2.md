---
name: I_PRODNROUTINGOPCOMPALLOCTP_2
description: Prodnroutingopcompalloctp 2
semantic_en: "component allocation to routing operations — linking bill-of-material items to specific production routing operations with backflush flags and change tracking"
semantic_vi: "phân bổ thành phần cho hoạt động bố trí — liên kết mục danh sách vật liệu với các hoạt động bố trí sản xuất cụ thể với cờ xả và theo dõi thay đổi"
keywords:
  - phân bổ thành phần
  - bố trí hoạt động
  - vật liệu
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - routing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
  - bo:ProductionRouting
---
# I_PRODNROUTINGOPCOMPALLOCTP_2

**Prodnroutingopcompalloctp 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProductionRoutingGroup` | `ProductionRoutingGroup` |
| `ProductionRouting` | `ProductionRouting` |
| `ProductionRoutingSequence` | `ProductionRoutingSequence` |
| `ProductionRoutingOpIntID` | `ProductionRoutingOpIntID` |
| `ProdnRtgOpBOMItemInternalID` | `ProdnRtgOpBOMItemInternalID` |
| `ProdnRtgOpBOMItemIntVersion` | `ProdnRtgOpBOMItemIntVersion` |
| `BillOfMaterialCategory` | `BillOfMaterialCategory` |
| `BillOfMaterial` | `BillOfMaterial` |
| `BillOfMaterialComponent` | `BillOfMaterialComponent` |
| `BillOfMaterialVariant` | `BillOfMaterialVariant` |
| `BillOfMaterialItemNodeNumber` | `BillOfMaterialItemNodeNumber` |
| `MatlCompIsMarkedForBackflush` | `MatlCompIsMarkedForBackflush` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ChangeNumber` | `ChangeNumber` |
| `ChangedDateTime` | `ChangedDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting Component Allocation - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_ProdnRoutingOpCompAllocTP_2
  as projection on R_ProdnRoutingOpCompAllocTP_2
{
  key ProductionRoutingGroup,
  key ProductionRouting,
  key ProductionRoutingSequence,
  key ProductionRoutingOpIntID,
  key ProdnRtgOpBOMItemInternalID,
  key ProdnRtgOpBOMItemIntVersion,
      /* BOM Details */
      BillOfMaterialCategory,
      BillOfMaterial,
      BillOfMaterialComponent,
      BillOfMaterialVariant,
      BillOfMaterialItemNodeNumber,
      MatlCompIsMarkedForBackflush,

      /* Administrative Data */
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      ChangeNumber,
      ChangedDateTime,

      /* Associations */
      _NonSqncTP  : redirected to parent I_ProdnRtgNonHistoricSqncTP_2,
      _Header     : redirected to I_ProductionRoutingHeaderTP_2,
      _ProdnRtgTP : redirected to I_ProductionRoutingTP_2
}
```
