---
name: I_PURCHASEREQUISITIONTP
description: Purchase RequisitionUISITIONTP
semantic_en: "Purchase requisition projection — requisition master data with type, description, and source determination details."
semantic_vi: "Phát triển yêu cầu mua — dữ liệu chính yêu cầu với loại, mô tả, chi tiết xác định nguồn."
keywords:
  - yêu cầu mua
  - loại yêu cầu
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - transactional-processing
  - purchase-requisition
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseRequisition
---
# I_PURCHASEREQUISITIONTP

**Purchase RequisitionUISITIONTP**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseRequisition` | `PurchaseRequisition` |
| `PurchaseRequisitionType` | `PurchaseRequisitionType` |
| `PurReqnDescription` | `PurReqnDescription` |
| `SourceDetermination` | `SourceDetermination` |
| `PurReqnDoOnlyValidation` | `PurReqnDoOnlyValidation` |
| `LastChangeDateTime` | `LastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Purchase Requisition - TP'

@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

//@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #C,
        dataClass:#TRANSACTIONAL
    },
    sapObjectNodeType.name: 'PurchaseRequisition'
  }

@ObjectModel.semanticKey: ['PurchaseRequisition']
@ObjectModel.representativeKey: 'PurchaseRequisition'
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

define root view entity I_PurchaseRequisitionTP
  provider contract transactional_interface
  as projection on R_PurchaseRequisitionTP
{
  key PurchaseRequisition,
      PurchaseRequisitionType,
      PurReqnDescription,
      SourceDetermination,
      PurReqnDoOnlyValidation,
      // For Etag
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _PurchaseRequisitionItem : redirected to composition child I_PurchaseReqnItemTP

}
```
