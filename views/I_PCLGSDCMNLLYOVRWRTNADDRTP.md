---
name: I_PCLGSDCMNLLYOVRWRTNADDRTP
description: Pclgsdcmnllyovrwrtnaddrtp
semantic_en: "production compliance log document manually overwritten address — transaction data recording manual address overrides with multi-line address fields and audit trail."
semantic_vi: "địa chỉ được ghi đè thủ công trong tài liệu nhật ký tuân thủ sản xuất — dữ liệu giao dịch ghi nhận ghi đè địa chỉ thủ công với các trường địa chỉ nhiều dòng và dấu thời gian kiểm toán."
keywords:
  - địa chỉ ghi đè
  - nhật ký tuân thủ
  - sản xuất
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
# I_PCLGSDCMNLLYOVRWRTNADDRTP

**Pclgsdcmnllyovrwrtnaddrtp**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PCLgsDcMnllyOvrwrtnAddrUUID` | `PCLgsDcMnllyOvrwrtnAddrUUID` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ProdCmplncLogsDocumentUUID` | `ProdCmplncLogsDocumentUUID` |
| `PartnerFunction` | `PartnerFunction` |
| `AddressLine1Text` | `AddressLine1Text` |
| `AddressLine2Text` | `AddressLine2Text` |
| `AddressLine3Text` | `AddressLine3Text` |
| `AddressLine4Text` | `AddressLine4Text` |
| `AddressLine5Text` | `AddressLine5Text` |
| `AddressLine6Text` | `AddressLine6Text` |
| `AddressLine7Text` | `AddressLine7Text` |
| `AddressLine8Text` | `AddressLine8Text` |
| `AddressLine9Text` | `AddressLine9Text` |
| `AddressCorrespondenceLanguage` | `AddressCorrespondenceLanguage` |
| `AddressCountry` | `AddressCountry` |
| `SftyDataShtOutpReqManReqEmail` | `SftyDataShtOutpReqManReqEmail` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  sapObjectNodeType.name: 'PCLgsDcManuallyOverwrittenAddr',
  usageType: {
    serviceQuality: #A,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  },
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  modelingPattern: #TRANSACTIONAL_INTERFACE
}
@VDM.viewType: #TRANSACTIONAL

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@EndUserText.label: 'PCLgsDc Mnlly Overwritten Address - TP'
define view entity I_PCLgsDcMnllyOvrwrtnAddrTP
  as projection on R_PCLgsDcMnllyOvrwrtnAddrTP

{
  key PCLgsDcMnllyOvrwrtnAddrUUID,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,

      @Semantics.user.createdBy: true
      CreatedByUser,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      @Semantics.user.lastChangedBy: true
      LastChangedByUser,

      ProdCmplncLogsDocumentUUID,
      PartnerFunction,
      AddressLine1Text,
      AddressLine2Text,
      AddressLine3Text,
      AddressLine4Text,
      AddressLine5Text,
      AddressLine6Text,
      AddressLine7Text,
      AddressLine8Text,
      AddressLine9Text,
      AddressCorrespondenceLanguage,
      AddressCountry,

      @Semantics.eMail.address: true
      SftyDataShtOutpReqManReqEmail,

      /* Associations */
      _Document : redirected to parent I_ProdCmplncLogsDocumentTP
}
```
