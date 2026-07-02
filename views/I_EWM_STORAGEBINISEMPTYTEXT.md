---
name: I_EWM_STORAGEBINISEMPTYTEXT
description: Ewm Storagebinisemptytext
semantic_en: "empty storage bin indicator text — translates empty bin status flags into business language."
semantic_vi: "văn bản chỉ báo kệ lưu kho trống rỗng — dịch các cờ trạng thái kệ trống sang ngôn ngữ kinh doanh."
keywords:
  - kệ trống rỗng
  - chỉ báo kho hàng
  - mô tả trạng thái
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - text-view
  - text
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_STORAGEBINISEMPTYTEXT

**Ewm Storagebinisemptytext**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `ddlanguage` |
| `StorageBinIsEmpty` | `domvalue_l` |
| `StorageBinIsEmptyDescription` | `ddtext` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:
  {
    sqlViewName: 'IEWMSBINEMPTTXT',
    compiler.compareFilter: true,
    preserveKey: true        
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:
  {
    representativeKey: 'StorageBinIsEmpty',
    dataCategory: #TEXT,
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #S,
    usageType.dataClass: #CUSTOMIZING,
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SEARCHABLE_ENTITY ]
  }
@VDM:
  {
    viewType: #BASIC
  }
@EndUserText.label: 'Empty Storage Bin Indicator - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 

define view I_EWM_StorageBinIsEmptyText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                        as Language,
  key domvalue_l                                                                        as StorageBinIsEmpty,
      @Semantics.text: true
      ddtext                                                                            as StorageBinIsEmptyDescription,

      /* Associations */
      _Language
}
where
      domname  = 'XFELD'
  and as4local = 'A';
```
