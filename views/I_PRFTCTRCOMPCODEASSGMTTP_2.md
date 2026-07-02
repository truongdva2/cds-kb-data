---
name: I_PRFTCTRCOMPCODEASSGMTTP_2
description: Prftctrcompcodeassgmttp 2
semantic_en: "profit center company code assignment transactional projection — provides transactional view of profit center company code assignments with assignment status and joint venture details."
semantic_vi: "phép chiếu giao dịch gán công ty trung tâm lợi nhuận — cung cấp chế độ xem giao dịch về các gán công ty trung tâm lợi nhuận với trạng thái gán và chi tiết liên doanh."
keywords:
  - trung tâm lợi nhuận
  - công ty
  - gán
app_component: EC-PCA-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EC
  - EC-PCA
  - EC-PCA-MD
  - interface-view
  - transactional-processing
  - component:EC-PCA-MD-2CL
  - lob:Other
---
# I_PRFTCTRCOMPCODEASSGMTTP_2

**Prftctrcompcodeassgmttp 2**

| Property | Value |
|---|---|
| App Component | `EC-PCA-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ControllingArea` | `ControllingArea` |
| `ProfitCenter` | `ProfitCenter` |
| `ValidityEndDate` | `ValidityEndDate` |
| `CompanyCode` | `CompanyCode` |
| `CompanyCodeForEdit` | `CompanyCodeForEdit` |
| `CompanyCodeName` | `CompanyCodeName` |
| `PrftCtrIsAssignedToCompCode` | `PrftCtrIsAssignedToCompCode` |
| `JointVenture` | `JointVenture` |
| `JointVentureRecoveryCode` | `JointVentureRecoveryCode` |
| `JointVentureEquityType` | `JointVentureEquityType` |
| `JointVentureObjectType` | `JointVentureObjectType` |
| `JointVentureClass` | `JointVentureClass` |
| `JointVentureSubClass` | `JointVentureSubClass` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@EndUserText.label: 'Prft Center Company Code Assignment - TP'

@VDM:{
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel:{
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'PrftCtrCompanyCodeAssignment',
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #ORGANIZATIONAL
  }
}

@Metadata.ignorePropagatedAnnotations: true

define view entity I_PrftCtrCompCodeAssgmtTP_2
  as projection on R_PrftCtrCompCodeAssgmtTP
{
  key ControllingArea,
  key ProfitCenter,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
  key CompanyCode,
      
      @ObjectModel.editableFieldFor: 'CompanyCode'
      CompanyCodeForEdit,

      CompanyCodeName,
      PrftCtrIsAssignedToCompCode,

      JointVenture,
      JointVentureRecoveryCode,
      JointVentureEquityType,
      JointVentureObjectType,
      JointVentureClass,
      JointVentureSubClass,

      /* Associations */
      _ProfitCenterTP : redirected to parent I_ProfitCenterTP_2
}
```
