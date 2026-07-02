---
name: I_SUPLRACTLIFECYCLESTATUSTEXT
description: Suplractlifecyclestatustext
semantic_en: "domain text descriptions for supplier activity lifecycle status — translatable names for activity status codes"
semantic_vi: "mô tả văn bản miền cho trạng thái vòng đời hoạt động cung cấp — tên có thể dịch cho mã trạng thái hoạt động"
keywords:
  - cung cấp
  - hoạt động
  - trạng thái
  - văn bản
app_component: SLC-ACT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-ACT
  - interface-view
  - text-view
  - text
  - status
  - component:SLC-ACT
  - lob:Other
  - bo:SuplrActyLifecycleStatus
---
# I_SUPLRACTLIFECYCLESTATUSTEXT

**Suplractlifecyclestatustext**

| Property | Value |
|---|---|
| App Component | `SLC-ACT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SuplrActyLifecycleStatus` | `cast(…)` |
| `Language` | `ddlanguage` |
| `SuplrActyLifecycleStatusName` | `cast(ddtext as /srmsmc/status_descr)` |
| `_SuplrActLifecycleStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SuplrActLifecycleStatus` | `I_SuplrActLifecycleStatus` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Lifecycle Status of Suplr Acty - Text' 
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SuplrActyLifecycleStatus'
@AbapCatalog.sqlViewName: 'ISUPACTLFSTST'
define view I_SuplrActLifecycleStatusText as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SuplrActLifecycleStatus as _SuplrActLifecycleStatus on $projection.SuplrActyLifecycleStatus = _SuplrActLifecycleStatus.SuplrActyLifecycleStatus
{
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/act_lifecycle_stat_cd preserving type) as SuplrActyLifecycleStatus,

  @Semantics.language: true
  key ddlanguage as Language,

  @Semantics.text: true
  cast(ddtext as /srmsmc/status_descr) as SuplrActyLifecycleStatusName,

  _SuplrActLifecycleStatus, 
  _Language
}
where domname = '/SRMSMC/ACT_LIFECYCLE_STAT_CD' and as4local = 'A'
```
