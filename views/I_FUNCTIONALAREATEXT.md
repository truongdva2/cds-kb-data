---
name: I_FUNCTIONALAREATEXT
description: Functionalareatext
semantic_en: "functional area text — language-dependent names and descriptions for functional areas in fund accounting"
semantic_vi: "văn bản lĩnh vực chức năng — tên và mô tả phụ thuộc ngôn ngữ cho các lĩnh vực chức năng"
keywords:
  - mô tả
  - lĩnh vực
  - ngôn ngữ
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
  - bo:FunctionalArea
---
# I_FUNCTIONALAREATEXT

**Functionalareatext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `spras` |
| `FunctionalArea` | `fkber` |
| `FunctionalAreaName` | `cast( fkbtx as fis_fkbtx )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@EndUserText.label: 'Functional Area - Text'
@ObjectModel.dataCategory: #TEXT 
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIFUNCAREAT'
@ObjectModel.representativeKey: 'FunctionalArea'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@AbapCatalog.buffering:{
  status: #ACTIVE,
  type: #FULL
}
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE]
define view I_FunctionalAreaText
  as select from tfkbt
  association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key spras as Language,
  key fkber as FunctionalArea,
  @Semantics.text
  cast( fkbtx as fis_fkbtx ) as FunctionalAreaName,
  _Language
};
```
