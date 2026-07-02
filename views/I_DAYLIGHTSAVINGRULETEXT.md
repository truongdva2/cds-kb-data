---
name: I_DAYLIGHTSAVINGRULETEXT
description: Daylightsavingruletext
semantic_en: "Daylight saving rule text — text descriptions for daylight saving rules by language."
semantic_vi: "Văn bản quy tắc giờ mặt trời — mô tả tên quy tắc giờ mặt trời theo ngôn ngữ."
keywords:
  - Giờ mặt trời
  - Quy tắc
  - Văn bản
app_component: BC-SRV-TIM-TZ
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-TIM
  - interface-view
  - text-view
  - text
  - component:BC-SRV-TIM-TZ
  - lob:Basis Components
  - bo:DaylightSavingRule
---
# I_DAYLIGHTSAVINGRULETEXT

**Daylightsavingruletext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-TIM-TZ` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DaylightSavingRule` | `ttzdt.dstrule` |
| `Language` | `ttzdt.language` |
| `DaylightSavingRuleText` | `ttzdt.descript` |
| `_Language` | *Association* |
| `_DaylightSavingRule` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DaylightSavingRule` | `I_DaylightSavingRule` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IDSTRULETXT'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics : {dataExtraction.enabled : true}

@EndUserText.label: 'Daylight Saving Rule Text'

@Metadata.ignorePropagatedAnnotations:true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DaylightSavingRule'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_DaylightSavingRuleText as select from  ttzdt
    association [0..1] to I_DaylightSavingRule as _DaylightSavingRule 
        on $projection.DaylightSavingRule = _DaylightSavingRule.DaylightSavingRule
    association [0..1] to I_Language as _Language
        on $projection.Language = _Language.Language
{   
    @ObjectModel.foreignKey.association:'_DaylightSavingRule'
    key ttzdt.dstrule as DaylightSavingRule, 
    
    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key ttzdt.language as Language, 
    
    @Semantics.text
    ttzdt.descript as DaylightSavingRuleText,
    _Language,
    _DaylightSavingRule
}
```
