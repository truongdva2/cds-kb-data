---
name: I_CL_GLACCTADDLATTRIBUTES
description: CL Glacctaddlattributes
semantic_en: "additional attributes for Chilean GL accounts — extends chart of accounts with Chilean GL account group and type classifications for account ranges."
semantic_vi: "các thuộc tính bổ sung cho tài khoản GL Chile — mở rộng kế hoạch tài khoản với phân loại nhóm và loại tài khoản GL Chile cho các dải tài khoản."
keywords:
  - tài khoản GL Chile
  - thuộc tính bổ sung
  - phân loại tài khoản
app_component: FI-LOC-FI-CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI-CL
  - lob:Finance
---
# I_CL_GLACCTADDLATTRIBUTES

**CL Glacctaddlattributes**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ChartOfAccounts` | `ktopl` |
| `FromGLAccount` | `cast( from_account as saknr_v )` |
| `ToGLAccount` | `cast( to_account as saknr_b )` |
| `CL_GLAccountGroup` | `acct_code` |
| `CL_GLAccountType` | `acct_classification` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICLGLACCTATTR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: [#NONE]
@EndUserText.label: 'GL Acct Additional Attributes for Chile' 
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_CL_GLAcctAddlAttributes
  as select from ficlc_actcfn_cod
{
  key ktopl as ChartOfAccounts,
  key cast( from_account as saknr_v ) as FromGLAccount,
  key cast( to_account as saknr_b ) as ToGLAccount,
  acct_code as CL_GLAccountGroup,
  acct_classification as CL_GLAccountType
}
```
