---
name: I_PROJBILLGREQITMSRCETYPETEXT
description: Projbillgreqitmsrcetypetext
semantic_en: "project billing request item source type text — multilingual descriptions for billing request item sources."
semantic_vi: "Văn bản loại nguồn mục yêu cầu thanh toán dự án — mô tả đa ngôn ngữ."
keywords:
  - thanh toán dự án
  - loại nguồn
  - văn bản
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - text-view
  - text
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:ProjBillgReqItmSourceType
---
# I_PROJBILLGREQITMSRCETYPETEXT

**Projbillgreqitmsrcetypetext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| `ProjBillgReqItmSourceType` | `cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `ProjBillgReqItmSourceTypeText` | `ddtext` |
| `_ProjBillgReqItmSrceType` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjBillgReqItmSrceType` | `I_ProjBillgReqItmSrceType` | — |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IPBRISRCETYPETXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Billing Req Itm Srce Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ProjBillgReqItmSourceType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
                                     
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define view entity I_ProjBillgReqItmSrceTypeText as select from dd07t
  association        to parent I_ProjBillgReqItmSrceType as _ProjBillgReqItmSrceType on $projection.ProjBillgReqItmSourceType = _ProjBillgReqItmSrceType.ProjBillgReqItmSourceType
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language
{
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
   key cast( dd07t.ddlanguage as spras preserving type )          as Language,

       @ObjectModel.foreignKey.association: '_ProjBillgReqItmSrceType'
       @ObjectModel.text.element: ['ProjBillgReqItmSourceTypeText']
   key cast( substring( domvalue_l, 1, 1 ) as pbr_apprvl_status preserving type ) as ProjBillgReqItmSourceType,

       @Analytics.hidden: true
       @Consumption.hidden: true
       dd07t.domvalue_l as DomainValue,
       
       @Search.defaultSearchElement: true
       @Search.fuzzinessThreshold: 0.8
       @Search.ranking: #LOW
       @Semantics.text: true
       ddtext                                                     as ProjBillgReqItmSourceTypeText,
     
       _ProjBillgReqItmSrceType,
       _Language
   
} where domname  = 'PBRI_SOURCEID' and as4local = 'A'
```
