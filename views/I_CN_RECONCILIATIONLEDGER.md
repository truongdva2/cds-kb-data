---
name: I_CN_RECONCILIATIONLEDGER
description: CN Reconciliationledger
semantic_en: "bank reconciliation ledger – company code and ledger assignments for bank reconciliation in china region."
semantic_vi: "sổ cái ngân hàng cho đối soát – quản lý công ty và sổ cái liên quan đến đối soát ngân hàng."
keywords:
  - đối soát ngân hàng
  - sổ cái
  - mã công ty
app_component: FI-LOC-EPI-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-EPI
  - interface-view
  - component:FI-LOC-EPI-CN
  - lob:Finance
---
# I_CN_RECONCILIATIONLEDGER

**CN Reconciliationledger**

| Property | Value |
|---|---|
| App Component | `FI-LOC-EPI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `bukrs` |
| `Ledger` | `rldnr` |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNBKRECNCLNLDGR'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ]
@EndUserText.label: 'CN Ledger for Bank Reconciliation'
@Metadata.ignorePropagatedAnnotations:true
define view I_CN_ReconciliationLedger
  as select from epic_brc_ledger
  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' },
          useAsTemplate: true
        }]
      @ObjectModel.text.association: '_CompanyCode'
  key bukrs as CompanyCode,
      rldnr as Ledger,

      _CompanyCode
}
```
