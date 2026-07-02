---
name: I_CN_CADECUSTOMSUBSIDIARYITEM
description: CN Cadecustomsubsidiaryitem
semantic_en: "China CADE customized subsidiary items — customized account subsidiary items for CADE reporting with hierarchical structure and coding rules."
semantic_vi: "mục phụ được tùy chỉnh CADE Trung Quốc — các mục phụ tài khoản được tùy chỉnh cho báo cáo CADE với cấu trúc phân cấp và quy tắc mã hóa."
keywords:
  - CADE
  - mục phụ
  - tùy chỉnh
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
  - customs
  - item-level
  - component:FI-LOC-GAI-CN
  - lob:Finance
---
# I_CN_CADECUSTOMSUBSIDIARYITEM

**CN Cadecustomsubsidiaryitem**

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
| `CN_CADEArchive` | `cade_archive_code` |
| `CN_CADEArchiveDesc` | `cade_archive_desc` |
| `CN_CADEArchiveHasHier` | `cast ( cade_archive_hierarchy as abap_boolean )` |
| `CN_CADEArchiveCodeRule` | `cade_archive_num_rule` |
| `CN_CADESubsidiaryItemSqncValue` | `cade_archive_sqnc_nmbr` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ICADECSTMSUBITM'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CN Customized Subsidiary Items for CADE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_CN_CADECustomSubsidiaryItem 

  as select from cade_custsubitm
{
  key bukrs                  as CompanyCode,
  key cade_natl_std_rel_ver  as CN_CADENatlStdRelVersion,
  key cade_archive_code      as CN_CADEArchive,
      cade_archive_desc      as CN_CADEArchiveDesc,
      cast ( cade_archive_hierarchy as abap_boolean  ) as CN_CADEArchiveHasHier,
      cade_archive_num_rule  as CN_CADEArchiveCodeRule,
      cade_archive_sqnc_nmbr as CN_CADESubsidiaryItemSqncValue


}
```
