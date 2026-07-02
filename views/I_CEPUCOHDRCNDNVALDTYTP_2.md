---
name: I_CEPUCOHDRCNDNVALDTYTP_2
description: Cepucohdrcndnvaldtytp 2
semantic_en: "central purchase contract header condition validity transactional view — tracks condition record with validity dates, condition type, application, and deletion status."
semantic_vi: "Xem giá trị hiệu lực điều kiện tiêu đề hợp đồng mua hàng trung tâm — theo dõi bản ghi điều kiện với ngày hiệu lực, loại điều kiện, ứng dụng và trạng thái xóa."
keywords:
  - giá trị hiệu lực
  - ngày hợp lệ
  - điều kiện hợp đồng
app_component: MM-PUR-HUB-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - transactional-processing
  - header-level
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CEPUCOHDRCNDNVALDTYTP_2

**Cepucohdrcndnvaldtytp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CentralPurchaseContract` | `CentralPurchaseContract` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `ConditionValidityStartDate` | `ConditionValidityStartDate` |
| `ConditionIsDeleted` | `ConditionIsDeleted` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'CCTR Header Condition Validity - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'CentralPurchaseContract','ConditionRecord','ConditionValidityEndDate' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CePuCoHdrCndnValdtyTP_2
  as projection on R_CntrlPurContrHdrCndnValdtyTP
{

  key  CentralPurchaseContract,
  key  ConditionRecord,
  key  ConditionValidityEndDate,
  
       ConditionApplication,
       ConditionType,
       ConditionValidityStartDate,
       ConditionIsDeleted,


       /* Associations */
       _CntrlPurContrHdrCndnAmount : redirected to composition child I_CntrlPurContrHdrCndnAmtTP_2,
       _CentralPurchaseContract    : redirected to parent I_CntrlPurchaseContractTP_2


}
```
