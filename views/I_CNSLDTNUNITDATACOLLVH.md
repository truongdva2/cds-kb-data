---
name: I_CNSLDTNUNITDATACOLLVH
description: Cnsldtnunitdatacollvh
semantic_en: "consolidation unit data collection selection value help — reference values for data collection selection with text descriptions"
semantic_vi: "trợ giúp giá trị lựa chọn thu thập dữ liệu đơn vị hợp nhất — giá trị tham chiếu cho lựa chọn thu thập dữ liệu có mô tả văn bản"
keywords:
  - trợ giúp giá trị
  - dữ liệu lựa chọn
  - danh mục
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - value-help
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNUNITDATACOLLVH

**Cnsldtnunitdatacollvh**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CnsldtnUnitDataCollection` | `_CnsldtnUnitDataColl.CnsldtnUnitDataCollection` |
| `CnsldtnUnitDataCollectionText` | `expr(…)` |
| `CnsldtnUnitDataCollLongText` | `expr(…)` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCUDATCOLVH',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #VALUE_HELP,
    representativeKey: 'CnsldtnUnitDataCollection',
    modelingPattern: #VALUE_HELP_PROVIDER,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER ]
}
@Search.searchable: true
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Cons Unit Data Collection Selection'

define view I_CnsldtnUnitDataCollVH
  as select from I_CnsldtnUnitDataColl as _CnsldtnUnitDataColl

{

      @ObjectModel.text.element: 'CnsldtnUnitDataCollectionText'
      @Search:{
        defaultSearchElement: true,
        ranking: #HIGH,
        fuzzinessThreshold: 0.8
      }
  key _CnsldtnUnitDataColl.CnsldtnUnitDataCollection,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _CnsldtnUnitDataColl._Text[1: Language=$session.system_language].CnsldtnUnitDataCollectionText,

      @Semantics.text
      _CnsldtnUnitDataColl._Text[1: Language=$session.system_language].CnsldtnUnitDataCollLongText

}
```
