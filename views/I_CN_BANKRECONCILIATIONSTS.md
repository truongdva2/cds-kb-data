---
name: I_CN_BANKRECONCILIATIONSTS
description: CN Bankreconciliationsts
semantic_en: "China bank reconciliation status domain — enumeration of valid status codes for bank reconciliation in Chinese company code operations."
semantic_vi: "miền trạng thái đối sánh ngân hàng Trung Quốc — danh sách các mã trạng thái hợp lệ cho đối sánh ngân hàng trong hoạt động mã công ty Trung Quốc."
keywords:
  - đối sánh ngân hàng
  - trạng thái
  - Trung Quốc
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
  - bank
  - component:FI-LOC-EPI-CN
  - lob:Finance
  - bo:Bank
---
# I_CN_BANKRECONCILIATIONSTS

**CN Bankreconciliationsts**

| Property | Value |
|---|---|
| App Component | `FI-LOC-EPI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BankReconciliationStatus` | `cast(left(domvalue_l,1) as epic_br_rcon_status preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CN_BankReconciliationStsText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNBKRECNCLNSTS'
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BankReconciliationStatus'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE]
@EndUserText.label: 'CN Bank Reconciliation Status'
@Metadata.ignorePropagatedAnnotations:true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CN_BankReconciliationSts
  as select from dd07l
  association [0..*] to I_CN_BankReconciliationStsText as _Text on $projection.BankReconciliationStatus = _Text.BankReconciliationStatus
{
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CN_BankReconciliationStsText',
                     element: 'BankReconciliationStatus' },
          useAsTemplate: true
        }]
      @ObjectModel.text.association: '_Text'
  key cast(left(domvalue_l,1) as epic_br_rcon_status preserving type ) as BankReconciliationStatus,
      _Text
}
where
      dd07l.domname  = 'EPIC_BR_RCON_STATUS'
  and dd07l.as4local = 'A';
```
