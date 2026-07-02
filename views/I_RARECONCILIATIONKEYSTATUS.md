---
name: I_RARECONCILIATIONKEYSTATUS
description: Rareconciliationkeystatus
semantic_en: "revenue accounting reconciliation key status — domain values for reconciliation key status tracking."
semantic_vi: "trạng thái khoá điều hoà kế toán doanh thu — phân loại trạng thái khoá."
keywords:
  - khoá điều hoà
  - trạng thái
  - kế toán
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - status
  - component:FI-RA-2CL
  - lob:Finance
  - bo:RevnAcctgRecnclnKeyStatus
---
# I_RARECONCILIATIONKEYSTATUS

**Rareconciliationkeystatus**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RevnAcctgRecnclnKeyStatus` | `cast(dd07l.domvalue_l as farr_recon_key_status)` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RARecnclnKeyStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IRARECNCLNKEYSTS'

@Consumption.ranked: true

@EndUserText.label: 'Reconciliation Key Status'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'RevnAcctgRecnclnKeyStatus'
@ObjectModel.resultSet.sizeCategory: #XS

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_RAReconciliationKeyStatus
  as select from dd07l

  composition [0..*] of I_RARecnclnKeyStatusText as _Text

{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as farr_recon_key_status) as RevnAcctgRecnclnKeyStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: { defaultSearchElement: true, ranking: #HIGH }
      dd07l.domvalue_l                                as DomainValue,

      _Text

}
where dd07l.domname  = 'FARR_RECON_KEY_STATUS'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
