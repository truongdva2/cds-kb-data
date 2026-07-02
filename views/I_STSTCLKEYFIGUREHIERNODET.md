---
name: I_STSTCLKEYFIGUREHIERNODET
description: Ststclkeyfigurehiernodet
semantic_en: "Text for hierarchy nodes — multilingual node descriptions and labels."
semantic_vi: "Văn bản cho nút phân cấp — mô tả nút đa ngôn ngữ và nhãn."
keywords:
  - nút phân cấp
  - mô tả
  - ngôn ngữ
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:StstclKeyFigureHierNodeText
---
# I_STSTCLKEYFIGUREHIERNODET

**Ststclkeyfigurehiernodet**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ControllingArea` | `cast( hrrp_nodet_n.kokrs as fis_kokrs preserving type )` |
| `StatisticalKeyFigureHierarchy` | `hrrp_nodet_n.hryid_42` |
| `HierarchyNode` | `hrrp_nodet_n.hrynode` |
| `ValidityEndDate` | `hrrp_nodet_n.hryvalto` |
| `Language` | `hrrp_nodet_n.spras` |
| `HierarchyNodeText` | `hrrp_nodet_n.nodetxt` |
| `HierarchyNodeShortText` | `substring(hrrp_nodet_n.nodetxt, 1, 20)` |
| `ValidityStartDate` | `hrrp_nodet_n.hryvalfrom` |
| `_ControllingArea` | *Association* |
| `_Language` | *Association* |
| `_Hierarchy` | *Association* |
| `_ControllingAreaText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Hierarchy` | `I_StstclKeyFigureHierarchy` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTCLKEYFIGHNT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Statistical Key Figure Hier Node - Text'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'HierarchyNode'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Analytics.dataExtraction: {enabled:true}
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name:'StstclKeyFigureHierNodeText'


define view I_StstclKeyFigureHierNodeT
  as select from hrrp_nodet_n

  //
  association [0..1] to I_ControllingArea          as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  //
  association [0..1] to I_ControllingArea          as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_Language                 as _Language            on  $projection.Language = _Language.Language

  association [1..*] to I_StstclKeyFigureHierarchy as _Hierarchy           on  $projection.StatisticalKeyFigureHierarchy = _Hierarchy.StatisticalKeyFigureHierarchy
                                                                           and $projection.ControllingArea               = _Hierarchy.ControllingArea

{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( hrrp_nodet_n.kokrs as fis_kokrs preserving type ) as ControllingArea,
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key hrrp_nodet_n.hryid_42                                   as StatisticalKeyFigureHierarchy,
      @ObjectModel.text.element: ['HierarchyNodeText']
  key hrrp_nodet_n.hrynode                                    as HierarchyNode,
      @Semantics.businessDate.to: true
  key hrrp_nodet_n.hryvalto                                   as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                      as Language,
      @Semantics.text: true
      hrrp_nodet_n.nodetxt                                    as HierarchyNodeText,
      @Semantics.text: true
      substring(hrrp_nodet_n.nodetxt, 1, 20)                  as HierarchyNodeShortText,

      @Semantics.businessDate.from: true
      hrrp_nodet_n.hryvalfrom                                 as ValidityStartDate,
      _ControllingArea,
      _Language,
      _Hierarchy,
      //
      @Consumption.hidden: true
      _ControllingAreaText
      //

}
where
  hrrp_nodet_n.hrytyp = '0104';
```
