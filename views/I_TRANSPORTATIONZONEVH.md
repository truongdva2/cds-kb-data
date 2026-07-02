---
name: I_TRANSPORTATIONZONEVH
description: Transportationzonevh
semantic_en: "transportation zone value help — value help view for transportation zone selection"
semantic_vi: "trợ giúp giá trị vùng vận chuyển — chế độ xem trợ giúp giá trị cho lựa chọn vùng vận chuyển"
keywords:
  - vùng vận chuyển
  - lựa chọn
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
  - transport
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_TRANSPORTATIONZONEVH

**Transportationzonevh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportZone` | `TransportZone` |
| `CountryCode` | `CountryCode` |
| `_Country` | *Association* |
| `_Text` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Transport Zone'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_TransportationZoneVH
  as select from I_TransportationZone
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement:true
  key TransportZone,
      @ObjectModel.foreignKey.association: '_Country'
      @Search.defaultSearchElement:true
  key CountryCode,
      _Country,
      _Text
}
```
