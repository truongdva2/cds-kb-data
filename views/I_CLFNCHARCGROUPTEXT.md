---
name: I_CLFNCHARCGROUPTEXT
description: Clfncharcgrouptext
semantic_en: "text names and translations for characteristic groups — maps language, group identifier, and localized group names."
semantic_vi: "tên văn bản và bản dịch cho các nhóm đặc tính — ánh xạ ngôn ngữ, mã nhóm và tên nhóm đã bản địa hóa."
keywords:
  - tên nhóm
  - đa ngôn ngữ
  - bản dịch
app_component: CA-CL-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-CL
  - interface-view
  - text-view
  - text
  - component:CA-CL-2CL
  - lob:Cross-Application Components
  - bo:CharcGroup
---
# I_CLFNCHARCGROUPTEXT

**Clfncharcgrouptext**

| Property | Value |
|---|---|
| App Component | `CA-CL-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `CharacteristicGroupText.spras` |
| `CharcGroup` | `cast ( CharacteristicGroupText.atkla as charcgroup preserving type )` |
| `CharcGroupName` | `CharacteristicGroupText.atklt` |
| `_CharcGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharcGroup` | `I_ClfnCharcGroup` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'INGCCHRC8'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Group of Clfn Characteristic - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharcGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:
  [  #LANGUAGE_DEPENDENT_TEXT,
     #CDS_MODELING_DATA_SOURCE,
     #CDS_MODELING_ASSOCIATION_TARGET,
     #EXTRACTION_DATA_SOURCE,
     #SQL_DATA_SOURCE                  ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ClfnCharcGroupText
  as select from tcmgt as CharacteristicGroupText   
  
      association to parent I_ClfnCharcGroup as _CharcGroup
        on $projection.CharcGroup = _CharcGroup.CharcGroup
      association [0..1] to I_Language as _Language 
        on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key CharacteristicGroupText.spras as Language,
      @ObjectModel.foreignKey.association: '_CharcGroup'
      @ObjectModel.text.element: ['CharcGroupName']
  key cast ( CharacteristicGroupText.atkla as charcgroup preserving type ) as CharcGroup,
      @Semantics.text: true
      CharacteristicGroupText.atklt as CharcGroupName,   
         
      _CharcGroup,
      _Language
}
```
