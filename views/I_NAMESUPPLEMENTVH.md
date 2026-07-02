---
name: I_NAMESUPPLEMENTVH
description: Namesupplementvh
semantic_en: "name supplement value help — lookup view for person name supplements"
semantic_vi: "trợ giúp giá trị bổ sung tên — chế độ xem tra cứu cho bổ sung tên người"
keywords:
  - tra cứu tên
  - bổ sung tên
  - value help
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - value-help
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_NAMESUPPLEMENTVH

**Namesupplementvh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PersonNameSupplementCode` | `PersonNameSupplementCode` |
| `NameSupplement` | `NameSupplement` |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Name Supplement'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_NameSupplementVH
  as select from I_NameSupplement
{
      @Search.defaultSearchElement: true
  key PersonNameSupplementCode,
      @Search.defaultSearchElement: true
      NameSupplement,
      _Text

}
```
