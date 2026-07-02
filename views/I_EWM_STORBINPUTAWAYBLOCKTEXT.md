---
name: I_EWM_STORBINPUTAWAYBLOCKTEXT
description: Ewm Storbinputawayblocktext
semantic_en: "storage bin block indicator for putaway text — describes block status for putaway warehouse operations."
semantic_vi: "văn bản chỉ báo chặn kệ lưu kho cho đặt hàng — mô tả trạng thái chặn cho hoạt động đặt hàng kho."
keywords:
  - chặn đặt hàng
  - kệ khóa
  - hoạt động xếp hàng
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
# I_EWM_STORBINPUTAWAYBLOCKTEXT

**Ewm Storbinputawayblocktext**

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
| `StorageBinIsBlockedForPutaway` | `domvalue_l` |
| `StorageBinIsPutawayBlockedDesc` | `ddtext` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog:
  {
    sqlViewName: 'IEWMSBINBLPUTTXT',
    compiler.compareFilter: true,
    preserveKey: true         
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:
  {
    representativeKey: 'StorageBinIsBlockedForPutaway',
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
@EndUserText.label: 'Block Indicator for Putaway - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 

define view I_EWM_StorBinPutawayBlockText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                        as Language,
  key domvalue_l                                                                        as StorageBinIsBlockedForPutaway,
      @Semantics.text: true
      ddtext                                                                            as StorageBinIsPutawayBlockedDesc,

      /* Associations */
      _Language
}
where
      domname  = 'XFELD'
  and as4local = 'A';
```
