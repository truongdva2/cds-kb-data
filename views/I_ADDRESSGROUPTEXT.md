---
name: I_ADDRESSGROUPTEXT
description: Addressgrouptext
semantic_en: "address group description — translated name and description for address group codes by language"
semantic_vi: "mô tả nhóm địa chỉ — tên và mô tả dịch cho mã nhóm địa chỉ theo ngôn ngữ"
keywords:
  - nhóm địa chỉ
  - mô tả
  - danh mục
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
  - text-view
  - address
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
  - bo:AddressGroup
---
# I_ADDRESSGROUPTEXT

**Addressgrouptext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `langu` |
| `AddressGroup` | `addr_group` |
| `AddressGroupName` | `group_text` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Description of Address Group'
@ObjectModel.representativeKey: 'AddressGroup'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IADDRESSGROUPT'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_AddressGroupText
  as select from tsad7t
{
      @Semantics.language: true
  key langu      as Language,
  @EndUserText.label: 'Address Group'
  key addr_group as AddressGroup,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      group_text as AddressGroupName
}
```
