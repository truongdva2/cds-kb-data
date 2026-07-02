---
name: I_QLTYFIRSTARTICLEINSPTP_2
description: Qltyfirstarticleinsptp 2
semantic_en: "first article inspection transactional projection — quality control inspection records for initial supplier deliveries."
semantic_vi: "chiếu hình giao dịch kiểm tra mẫu đầu tiên — hồ sơ kiểm tra chất lượng cho lần giao hàng đầu tiên nhà cung cấp."
keywords:
  - kiểm tra chất lượng
  - mẫu đầu tiên
  - nhà cung cấp
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - transactional-processing
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QLTYFIRSTARTICLEINSPTP_2

**Qltyfirstarticleinsptp 2**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Material` | `Material` |
| `QltyInProcmtIntID` | `QltyInProcmtIntID` |
| `QltyInProcmt1stArticleInsp` | `QltyInProcmt1stArticleInsp` |
| `PurchaseOrder` | `PurchaseOrder` |
| `PurchaseOrderItem` | `PurchaseOrderItem` |
| `InspLotUsageDecisionValuation` | `InspLotUsageDecisionValuation` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ChangedDateTime` | `ChangedDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'First Article Inspection - TP'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.personalData.blocking: #REQUIRED
@ObjectModel.usageType: { 
                        serviceQuality  : #C,
                        sizeCategory    : #S,
                        dataClass       : #MASTER 
                }


define view entity I_QltyFirstArticleInspTP_2 as projection on R_QltyFirstArticleInspTP {
  key Material,
  key QltyInProcmtIntID,
  key QltyInProcmt1stArticleInsp,
  PurchaseOrder,
  PurchaseOrderItem,
  InspLotUsageDecisionValuation,
  CreatedByUser,
  CreationDate,
  LastChangedByUser,
  ChangedDateTime,
  
  /* Associations */
  _QltyInProcurement : redirected to parent I_QualityInProcurementTP_2
}
```
