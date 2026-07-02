---
name: I_INACTIVESTATUS
description: Inactivestatus
semantic_en: "Inactive status indicator — represents whether a purge category item is marked as inactive."
semantic_vi: "Chỉ báo trạng thái không hoạt động — biểu diễn liệu mục danh mục làm sạch có được đánh dấu là không hoạt động."
keywords:
  - Trạng thái không hoạt động
  - Làm sạch
  - Danh mục
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - status
  - component:SLC-SUP
  - lob:Other
  - bo:PurgCatIsInactive
---
# I_INACTIVESTATUS

**Inactivestatus**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurgCatIsInactive` | `cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/inactive_status preserving type)` |
| `_InactiveStatusText` | *Association* |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InactiveStatusText` | `I_InactiveStatusText` | [0..*] |
| `_Text` | `I_InactiveStatusText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'PurgCatIsInactive'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AbapCatalog.sqlViewName: 'IINACTIVESTATUS'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inactive Status'

define view I_InactiveStatus as select from dd07l
   association [0..*] to I_InactiveStatusText as _InactiveStatusText 
         on $projection.PurgCatIsInactive = _InactiveStatusText.PurgCatIsInactive
   association [0..*] to I_InactiveStatusText as _Text 
         on $projection.PurgCatIsInactive = _Text.PurgCatIsInactive
{

  @ObjectModel.text.association: '_InactiveStatusText'
  key cast ( substring( domvalue_l, 1, 1 ) as /srmsmc/inactive_status preserving type) as PurgCatIsInactive,
  _InactiveStatusText,
  _Text
}
where domname  = '/SRMSMC/INACTIVE_STATUS'
  and as4local = 'A'
```
