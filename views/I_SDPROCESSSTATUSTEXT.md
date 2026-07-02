---
name: I_SDPROCESSSTATUSTEXT
description: Sdprocessstatustext
semantic_en: "sales & distribution process status text — SDProcessStatus, Language, SDProcessStatusDesc columns"
semantic_vi: "Văn bản trạng thái quy trình bán hàng — mã trạng thái, ngôn ngữ và mô tả trạng thái"
keywords:
  - mô tả trạng thái quy trình
  - text trạng thái SD
  - bán hàng quy trình
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - text-view
  - text
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
  - bo:SDProcessStatus
---
# I_SDPROCESSSTATUSTEXT

**Sdprocessstatustext**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SDProcessStatus` | `statu` |
| `Language` | `spras` |
| `SDProcessStatusDesc` | `bezei` |
| `_SDProcessStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDProcessStatus` | `I_SDProcessStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SDProcessStatus'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@EndUserText.label: 'SD Process Status - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPROCESSSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE   ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_SDProcessStatusText
as select from tvbst

association[0..1] to I_SDProcessStatus as _SDProcessStatus on $projection.SDProcessStatus = _SDProcessStatus.SDProcessStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SDProcessStatus'
    key statu as SDProcessStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as SDProcessStatusDesc,
    
    //Associations
    _SDProcessStatus,
    _Language
} 
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'GBSTA');
```
