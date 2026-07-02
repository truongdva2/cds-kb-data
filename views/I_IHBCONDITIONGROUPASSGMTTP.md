---
name: I_IHBCONDITIONGROUPASSGMTTP
description: Ihbconditiongroupassgmttp
semantic_en: "Projection of IHB group assignments for conditions — assignment reference, object category, account, currency, validity dates, and audit trail."
semantic_vi: "Chiếu gán nhóm IHB cho các điều kiện — tham chiếu gán, danh mục đối tượng, tài khoản, tiền tệ, ngày hiệu lực và dấu vết kiểm toán."
keywords:
  - Gán nhóm điều kiện
  - Điều kiện IHB
  - Thời kỳ hiệu lực
app_component: FIN-FSCM-PF-IHB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - transactional-processing
  - pricing-condition
  - component:FIN-FSCM-PF-IHB-2CL
  - lob:Other
---
# I_IHBCONDITIONGROUPASSGMTTP

**Ihbconditiongroupassgmttp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF-IHB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `IHBGroupAssignmentUUID` | `IHBGroupAssignmentUUID` |
| `IHBObjectUUID` | `IHBObjectUUID` |
| `IHBGroupAssignmentRefUUID` | `IHBGroupAssignmentRefUUID` |
| `IHBObjectCategory` | `IHBObjectCategory` |
| `IHBObjectKeyUUID` | `IHBObjectKeyUUID` |
| `IHBAccountNumber` | `IHBAccountNumber` |
| `IHBAccountCurrency` | `IHBAccountCurrency` |
| `IHBGroupAssgmtValidFromDate` | `IHBGroupAssgmtValidFromDate` |
| `IHBGroupAssgmtValidToDate` | `IHBGroupAssgmtValidToDate` |
| `IHBObjectTotalChangedDateTime` | `IHBObjectTotalChangedDateTime` |
| `IHBObjectCreatedDateTime` | `IHBObjectCreatedDateTime` |
| `IHBObjectCreatedByUser` | `IHBObjectCreatedByUser` |
| `IHBObjectChangedDateTime` | `IHBObjectChangedDateTime` |
| `IHBObjectChangedByUser` | `IHBObjectChangedByUser` |
| `_IHBAccount` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'IHB Condition Group Assignment - TP'
@AccessControl.authorizationCheck:#MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #L,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['IHBGroupAssignmentUUID']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
  }

define view entity I_IHBConditionGroupAssgmtTP
  as projection on R_IHBGroupAssignmentTP  as InhouseBankConditionGrpAssgmt
{
key IHBGroupAssignmentUUID,
IHBObjectUUID,
IHBGroupAssignmentRefUUID,
IHBObjectCategory,
IHBObjectKeyUUID,
IHBAccountNumber,
IHBAccountCurrency,
IHBGroupAssgmtValidFromDate,
IHBGroupAssgmtValidToDate,
IHBObjectTotalChangedDateTime,
IHBObjectCreatedDateTime,
IHBObjectCreatedByUser,
IHBObjectChangedDateTime,
IHBObjectChangedByUser,
/* Associations */
_IHBAccount,
_IHBMasterDataObjectTP : redirected to parent I_IHBConditionObjectTP

}
```
