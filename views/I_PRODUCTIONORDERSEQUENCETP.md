---
name: I_PRODUCTIONORDERSEQUENCETP
description: Production OrderSEQUENCETP
semantic_en: "production order sequence data — manages sequence details, operations, and scheduling alignment for manufacturing orders."
semantic_vi: "Dữ liệu trình tự lệnh sản xuất — quản lý chi tiết trình tự, hoạt động và căn chỉnh lên lịch cho các lệnh sản xuất."
keywords:
  - trình tự sản xuất
  - lệnh sản xuất
  - hoạt động
app_component: PP-SFC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-SFC
  - interface-view
  - transactional-processing
  - product
  - production-order
  - component:PP-SFC-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERSEQUENCETP

**Production OrderSEQUENCETP**

| Property | Value |
|---|---|
| App Component | `PP-SFC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProductionOrder` | `ProductionOrder` |
| `ProductionOrderSequence` | `ProductionOrderSequence` |
| `OrderInternalID` | `OrderInternalID` |
| `SequenceInternalID` | `SequenceInternalID` |
| `SequenceText` | `SequenceText` |
| `SequenceHasLongText` | `SequenceHasLongText` |
| `LongTextLanguage` | `LongTextLanguage` |
| `SequenceBranchOperation` | `SequenceBranchOperation` |
| `SequenceReturnOperation` | `SequenceReturnOperation` |
| `SequenceCategory` | `SequenceCategory` |
| `ReferenceSequence` | `ReferenceSequence` |
| `SequenceSchedulingAlignment` | `SequenceSchedulingAlignment` |
| `ObjectInternalID` | `ObjectInternalID` |
| `BillOfOperationsUnit` | `BillOfOperationsUnit` |
| `MinimumLotSizeQuantity` | `MinimumLotSizeQuantity` |
| `MaximumLotSizeQuantity` | `MaximumLotSizeQuantity` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.sapObjectNodeType.name: 'ProductionOrderSequence'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL 

@EndUserText.label: 'Production Order Sequence - TP'

define view entity I_ProductionOrderSequenceTP 
as projection on R_ProductionOrderSequenceTP
{

  key ProductionOrder,
  key ProductionOrderSequence,

      // Internal Key
      OrderInternalID,
      SequenceInternalID,

      // Text
      SequenceText,
      SequenceHasLongText,
      LongTextLanguage,

      SequenceBranchOperation,
      SequenceReturnOperation,
      SequenceCategory,      
      ReferenceSequence,
      SequenceSchedulingAlignment,
      ObjectInternalID,
      
      // Quantity and UoM
      BillOfOperationsUnit,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MaximumLotSizeQuantity, 

      // Compositions
      _ProductionOrder: redirected to parent I_ProductionOrderTP,
      _Operation: redirected to composition child I_ProductionOrderOperationTP 
 
}
```
