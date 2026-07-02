---
name: I_CASHPOOLMDDESCTP
description: Cashpoolmddesctp
semantic_en: "cash pool master data description transactional posting — transactional view of cash pool descriptions."
semantic_vi: "mô tả dữ liệu chính nhóm tiền mặt hạng ghi sổ giao dịch — chế độ xem giao dịch mô tả nhóm tiền mặt."
keywords:
  - nhóm tiền
  - mô tả
  - ghi sổ
app_component: FIN-FSCM-CLM-2CL
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
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CASHPOOLMDDESCTP

**Cashpoolmddesctp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CashPoolName` | `CashPoolName` |
| `Language` | `Language` |
| `CashPoolDesc` | `CashPoolDesc` |
| `CashPoolRefTxt` | `CashPoolRefTxt` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |
| `_Language` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Cash Pool Master Data Description - TP'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { modelingPattern: #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType:{ serviceQuality: #C,
                            sizeCategory: #M,
                            dataClass: #MASTER
                          }
}
define view entity I_CashPoolMDDescTP 
  as projection on R_CashPoolMDDescTP
{
  key CashPoolName,
  key Language,
  CashPoolDesc,
  CashPoolRefTxt,
  LocalLastChangeDateTime,
  /* Associations */
  _GeneralInfo: redirected to parent I_CashPoolTP,
  _Language
}
```
