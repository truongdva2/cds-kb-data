---
name: I_CN_CADEFINSTMNTVERSASSGMT
description: CN Cadefinstmntversassgmt
semantic_en: "China CADE financial statement version assignment — mapping of financial statement variants to CADE for Chinese reporting configuration."
semantic_vi: "gán phiên bản báo cáo tài chính CADE Trung Quốc — ánh xạ các biến thể báo cáo tài chính cho CADE cho cấu hình báo cáo Trung Quốc."
keywords:
  - CADE
  - báo cáo tài chính
  - phiên bản
  - Trung Quốc
app_component: FI-LOC-GAI-CN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-GAI
  - interface-view
  - component:FI-LOC-GAI-CN
  - lob:Finance
---
# I_CN_CADEFINSTMNTVERSASSGMT

**CN Cadefinstmntversassgmt**

| Property | Value |
|---|---|
| App Component | `FI-LOC-GAI-CN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `bukrs` |
| `CN_CADENatlStdRelVersion` | `cade_natl_std_rel_ver` |
| `FinancialStatementVariant` | `versn` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICADEFSVASSGMT'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CN FS Version Assgmt for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_CN_CADEFinStmntVersAssgmt 

  as select from cade_acctsubfsv
{
  key bukrs                 as CompanyCode,
  key cade_natl_std_rel_ver as CN_CADENatlStdRelVersion,
      versn                 as FinancialStatementVariant


}
```
