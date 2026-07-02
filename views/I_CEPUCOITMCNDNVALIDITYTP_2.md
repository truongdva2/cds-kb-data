---
name: I_CEPUCOITMCNDNVALIDITYTP_2
description: Cepucoitmcndnvaliditytp 2
semantic_en: "central purchase contract item condition validity transactional view — tracks condition validity with application type, dates, and procurement hub plant unique identifiers."
semantic_vi: "Xem giá trị hiệu lực điều kiện mục hợp đồng mua hàng trung tâm — theo dõi hiệu lực điều kiện với loại ứng dụng, ngày hạn và mã định danh nhà máy hub mua hàng."
keywords:
  - giá trị hiệu lực
  - ngày hạn
  - điều kiện
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
  - component:MM-PUR-HUB-CTR-2CL
  - lob:Sourcing & Procurement
---
# I_CEPUCOITMCNDNVALIDITYTP_2

**Cepucoitmcndnvaliditytp 2**

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
| `CentralPurchaseContractItem` | `CentralPurchaseContractItem` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionType` | `ConditionType` |
| `ConditionValidityStartDate` | `ConditionValidityStartDate` |
| `ProcmtHubPlantUniqueID` | `ProcmtHubPlantUniqueID` |
| `ConditionIsDeleted` | `ConditionIsDeleted` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'CCTR Item Condition Validity - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [  'CentralPurchaseContract','CentralPurchaseContractItem','ConditionRecord','ConditionValidityEndDate' ]

@ObjectModel.usageType:{
serviceQuality: #C,
sizeCategory: #XL
}
@ObjectModel.usageType.dataClass: #TRANSACTIONAL

@Metadata.ignorePropagatedAnnotations: true
define view entity I_CePuCoItmCndnValidityTP_2
  as projection on R_CePuCoItmCndnValidityTP
{


  key  CentralPurchaseContract,
  key  CentralPurchaseContractItem,
  key  ConditionRecord,
  key  ConditionValidityEndDate,
       ConditionApplication,
       ConditionType,

       ConditionValidityStartDate,
       ProcmtHubPlantUniqueID,
       ConditionIsDeleted,
       
       /* Associations */
       _CentralPurchaseContract    : redirected to I_CntrlPurchaseContractTP_2,
       _CntrlPurchaseContractItm   : redirected to parent I_CntrlPurchaseContractItmTP_2,
       _CntrlPurContrItmCndnAmount : redirected to composition child I_CntrlPurContrItmCndnAmtTP_2

}
```
