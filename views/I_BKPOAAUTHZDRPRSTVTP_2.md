---
name: I_BKPOAAUTHZDRPRSTVTP_2
description: Bkpoaauthzdrprstvtp 2
semantic_en: "authorized representatives of bank power of attorney — lists approved representatives with approver group assignment and audit trail."
semantic_vi: "những người đại diện được ủy quyền của quyền đại diện ngân hàng — liệt kê những người đại diện được phê duyệt với gán nhóm người phê duyệt và bản ghi kiểm toán."
keywords:
  - quyền đại diện
  - người được ủy quyền
  - nhóm phê duyệt
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - transactional-processing
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
---
# I_BKPOAAUTHZDRPRSTVTP_2

**Bkpoaauthzdrprstvtp 2**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BankPowerOfAttorneyUUID` | `BankPowerOfAttorneyUUID` |
| `BkPOAAuthzdRepresentativeUUID` | `BkPOAAuthzdRepresentativeUUID` |
| `BkPOAAuthzdRepresentative` | `BkPOAAuthzdRepresentative` |
| `PaymentApproverGroup` | `PaymentApproverGroup` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |
| `_BusinessPartner` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Authorized Representatives of POA - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #S,
                            dataClass:      #MASTER },
               sapObjectNodeType.name: 'BkPOAAuthorizedRepresentative'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'AuthorizedRepresentative' ],
  elementSuffix: 'BPU',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.extensibility.allowNewCompositions

define view entity I_BkPOAAuthzdRprstvTP_2
  as projection on R_BkPOAAuthzdRepresentativeTP as AuthorizedRepresentative
{
  key BankPowerOfAttorneyUUID,
  key BkPOAAuthzdRepresentativeUUID,
      BkPOAAuthzdRepresentative,
      PaymentApproverGroup,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
      /* Associations */
      _BankPowerOfAttorney : redirected to parent I_BankPowerOfAttorneyTP_2,
      _BusinessPartner
}
```
