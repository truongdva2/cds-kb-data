---
name: I_PRODCMPLNCLOGSDOCSTAGEITEMTP
description: Prodcmplnclogsdocstageitemtp
semantic_en: "Product compliance logs document stage item — line items within document stages tracking creation and last change details."
semantic_vi: "Mục sân khấu tài liệu nhật ký tuân thủ sản phẩm — các mục dòng trong các sân khấu tài liệu theo dõi chi tiết tạo và thay đổi lần cuối."
keywords:
  - nhật ký tuân thủ
  - sân khấu tài liệu
  - mục dòng
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - interface-view
  - transactional-processing
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PRODCMPLNCLOGSDOCSTAGEITEMTP

**Prodcmplnclogsdocstageitemtp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProdCmplncLogsDocumentUUID` | `ProdCmplncLogsDocumentUUID` |
| `ProdCmplncLogsDocumentStage` | `ProdCmplncLogsDocumentStage` |
| `ProdCmplncLogsDocumentItem` | `ProdCmplncLogsDocumentItem` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ProdCmplncLogicalTransportUnit` | `ProdCmplncLogicalTransportUnit` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Prod Cmplnc Logs Doc Stage Item - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
}

define view entity I_ProdCmplncLogsDocStageItemTP
  as projection on R_ProdCmplncLogsDocStageItemTP
{
  key ProdCmplncLogsDocumentUUID,
  key ProdCmplncLogsDocumentStage,
  key ProdCmplncLogsDocumentItem,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      ProdCmplncLogicalTransportUnit,

      /* Associations */
      _Document : redirected to I_ProdCmplncLogsDocumentTP,
      _Item     : redirected to I_ProdCmplncLogsDocumentItemTP,
      _Stage    : redirected to parent I_ProdCmplncLogsDocStageTP,
      _EUADR    : redirected to composition child I_ProdCmplncLogsDocEUADRTP

}
```
