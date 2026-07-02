---
name: I_LGLCNTNTMMAINORGTYPETXTAPI01
description: Lglcntntmmainorgtypetxtapi 01
semantic_en: "Main organisation type text — provides multilingual names for main organization type classifications."
semantic_vi: "Tên loại tổ chức chính — cung cấp tên đa ngôn ngữ cho các phân loại loại tổ chức chính."
keywords:
  - loại tổ chức chính
  - dữ liệu đa ngôn ngữ
  - phân loại tổ chức
app_component: CM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-GF
  - interface-view
  - component:CM-GF-2CL
  - lob:Other
  - bo:LglCntntMMainOrgType
---
# I_LGLCNTNTMMAINORGTYPETXTAPI01

**Lglcntntmmainorgtypetxtapi 01**

| Property | Value |
|---|---|
| App Component | `CM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `LglCntntMMainOrgType` | `LglCntntMMainOrgType` |
| `Language` | `Language` |
| `LglCntntMMainOrgTypeName` | `LglCntntMMainOrgTypeName` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMMNORGTTAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'LglCntntMMainOrgType'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@Metadata.ignorePropagatedAnnotations:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT


@EndUserText.label: 'Main Organisation Type - Text'
define view I_LglCntntMMainOrgTypeTxtAPI01
  as select from I_LglCntntMMainOrgTypeText
{

  key LglCntntMMainOrgType,

      @Semantics.language: true
  key Language,

      @Semantics.text: true
      LglCntntMMainOrgTypeName
}
```
