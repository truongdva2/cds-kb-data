---
name: I_SLCQNAIRELIFECYCLESTS
description: Slcqnairelifecyclests
semantic_en: "value help for questionnaire lifecycle status codes — provides coded options tracking questionnaire development phases."
semantic_vi: "trợ giúp giá trị cho các mã trạng thái vòng đời khảo sát — cung cấp tùy chọn mã hóa theo dõi các giai đoạn phát triển khảo sát."
keywords:
  - trạng thái vòng đời
  - giai đoạn khảo sát
  - mã trạng thái
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
  - bo:SLCQnaireLifecycleStatus
---
# I_SLCQNAIRELIFECYCLESTS

**Slcqnairelifecyclests**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SLCQnaireLifecycleStatus` | `cast(…)` |
| `_SLCQnaireLifecycleStsText` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SLCQnaireLifecycleStsText` | `I_SLCQnaireLifecycleStsText` | [0..*] |
| `_Text` | `I_SLCQnaireLifecycleStsText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Lifecycle Status of Questionnaire'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SLCQnaireLifecycleStatus'
@AbapCatalog.sqlViewName: 'ISLCQNAIRLFS'

define view I_SLCQnaireLifecycleSts
  as select from dd07l
  association [0..*] to I_SLCQnaireLifecycleStsText as _SLCQnaireLifecycleStsText on $projection.SLCQnaireLifecycleStatus = _SLCQnaireLifecycleStsText.SLCQnaireLifecycleStatus
  association [0..*] to I_SLCQnaireLifecycleStsText as _Text on $projection.SLCQnaireLifecycleStatus = _Text.SLCQnaireLifecycleStatus

{
      @ObjectModel.text.association: '_SLCQnaireLifecycleStsText'
  key cast ( substring( domvalue_l, 1, 2 ) as /srmsmc/qnr_lifecycle_stat_cd preserving type) as SLCQnaireLifecycleStatus,

      // Association
      _SLCQnaireLifecycleStsText,
      _Text

}
where
      domname  = '/SRMSMC/QNR_LIFECYCLE_STAT_CD'
  and as4local = 'A'
```
