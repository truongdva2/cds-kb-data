---
name: I_BKPOAPREDECESSORTP_2
description: Bkpoapredecessortp 2
semantic_en: "predecessors of bank power of attorney — maintains lineage and succession history of POA documents."
semantic_vi: "những người tiền nhiệm của quyền đại diện ngân hàng — duy trì lịch sử dòng dõi và kế tiếp của tài liệu QĐD."
keywords:
  - quyền đại diện ngân hàng
  - người tiền nhiệm
  - kế tiếp
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
# I_BKPOAPREDECESSORTP_2

**Bkpoapredecessortp 2**

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
| `BkPOAPredecessorUUID` | `BkPOAPredecessorUUID` |
| `BankPowerOfAttorneyPredecessor` | `BankPowerOfAttorneyPredecessor` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |
| `_Predecessor` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Predecessors of POA - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #S,
                            dataClass:      #MASTER },
               sapObjectNodeType.name: 'BankPowerOfAttorneyPredecessor'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'Predecessor' ],
  elementSuffix: 'BPP',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AbapCatalog.extensibility.allowNewCompositions

define view entity I_BkPOAPredecessorTP_2
  as projection on R_BkPOAPredecessorTP as Predecessor
{
  key BankPowerOfAttorneyUUID,
  key BkPOAPredecessorUUID,
      BankPowerOfAttorneyPredecessor,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,
      /* Associations */
      _BankPowerOfAttorney: redirected to parent I_BankPowerOfAttorneyTP_2,
      _Predecessor
}
```
