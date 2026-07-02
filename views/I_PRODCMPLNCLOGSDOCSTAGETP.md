---
name: I_PRODCMPLNCLOGSDOCSTAGETP
description: Prodcmplnclogsdocstagetp
semantic_en: "Product compliance logs document stage — document processing stages with geographic and logistics mode information."
semantic_vi: "Sân khấu tài liệu nhật ký tuân thủ sản phẩm — các sân khấu xử lý tài liệu với thông tin địa lý và chế độ hậu cần."
keywords:
  - nhật ký tuân thủ
  - sân khấu tài liệu
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
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# I_PRODCMPLNCLOGSDOCSTAGETP

**Prodcmplnclogsdocstagetp**

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
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `DepartureCountry` | `DepartureCountry` |
| `DestinationCountry` | `DestinationCountry` |
| `DngrsGoodsModeOfTransport` | `DngrsGoodsModeOfTransport` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Prod Compliance Logs Document Stage - TP'
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

define view entity I_ProdCmplncLogsDocStageTP
  as projection on R_ProdCmplncLogsDocStageTP
{
  key ProdCmplncLogsDocumentUUID,
  key ProdCmplncLogsDocumentStage,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      DepartureCountry,
      DestinationCountry,
      DngrsGoodsModeOfTransport,

      /* Associations */
      _Document       : redirected to parent I_ProdCmplncLogsDocumentTP,
      _StageItem      : redirected to composition child I_ProdCmplncLogsDocStageItemTP,
      _TransitCountry : redirected to composition child I_ProdCmplncLogsDocTrnstCtryTP
}
```
