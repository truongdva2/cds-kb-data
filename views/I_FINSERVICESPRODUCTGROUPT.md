---
name: I_FINSERVICESPRODUCTGROUPT
description: Finservicesproductgroupt
semantic_en: "product group text in multiple languages — localized names for financial services product groups"
semantic_vi: "văn bản nhóm sản phẩm theo ngôn ngữ — tên gọi địa phương hóa cho nhóm sản phẩm dịch vụ tài chính"
keywords:
  - sản phẩm tài chính
  - tên gọi
app_component: FIN-IE-FS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-IE
  - FIN-IE-FS
  - interface-view
  - product
  - service
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINSERVICESPRODUCTGROUPT

**Finservicesproductgroupt**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `langu` |
| `FinancialServicesProductGroup` | `fs_product_group` |
| `FinServicesProductGroupName` | `cast(fs_product_group_tt as ffs_vdm_product_group_tt preserving type )` |
| `LanguageName` | `_Language._Text[Language = $session.system_language].LanguageName` |
| `_FinServicesProductGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinServicesProductGroup` | `I_FinServicesProductGroup` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Financial Services Product Group - Text'
@ObjectModel:{
    representativeKey: 'FinancialServicesProductGroup',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #SEARCHABLE_ENTITY]
}
@VDM :{
viewType: #BASIC,
lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@AccessControl.authorizationCheck:#MANDATORY
@Metadata.ignorePropagatedAnnotations: true

define view entity I_FinServicesProductGroupT
  as select from ffs_d_prod_grp_t
  association        to parent I_FinServicesProductGroup as _FinServicesProductGroup on $projection.FinancialServicesProductGroup = _FinServicesProductGroup.FinancialServicesProductGroup
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
      @ObjectModel.text.element: ['LanguageName']
  key langu                                                                  as Language,
      @ObjectModel.foreignKey.association: '_FinServicesProductGroup'
      @ObjectModel.text.element: ['FinServicesProductGroupName']
  key fs_product_group                                                       as FinancialServicesProductGroup,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(fs_product_group_tt as ffs_vdm_product_group_tt preserving type ) as FinServicesProductGroupName,
      _Language._Text[Language = $session.system_language].LanguageName,

      /* Associations */
      _FinServicesProductGroup,
      _Language
}
```
