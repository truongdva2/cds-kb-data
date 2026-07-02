---
name: I_CACOLLMASTERDATAGROUPTEXT
description: Cacollmasterdatagrouptext
semantic_en: "collection master data group texts — provides multilingual names for master data groups."
semantic_vi: "văn bản nhóm dữ liệu chính thu hồi nợ — cung cấp tên đa ngôn ngữ cho các nhóm dữ liệu chính."
keywords:
  - nhóm dữ liệu chính
  - tên
  - mô tả
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACOLLMASTERDATAGROUPTEXT

**Cacollmasterdatagrouptext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CACollectionsMasterDataGroup` | `cmgrp` |
| `Language` | `spras` |
| `CACollMasterDataGroupName` | `descr` |
| `_CACollMasterDataGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CACollMasterDataGroup` | `I_CACollMasterDataGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Collection Master Data Group - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CACollectionsMasterDataGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACollMasterDataGroupText
  as select from tfk041bt

  association [0..1] to I_CACollMasterDataGroup as _CACollMasterDataGroup on $projection.CACollectionsMasterDataGroup = _CACollMasterDataGroup.CACollectionsMasterDataGroup
  association [0..1] to I_Language              as _Language              on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CACollMasterDataGroup'
  key cmgrp as CACollectionsMasterDataGroup,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text
      descr as CACollMasterDataGroupName,

      /* associations */
      _CACollMasterDataGroup,
      _Language
}
```
