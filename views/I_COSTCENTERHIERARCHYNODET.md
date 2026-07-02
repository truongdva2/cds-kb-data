---
name: I_COSTCENTERHIERARCHYNODET
description: Cost CenterHIERARCHYNODET
semantic_en: "cost center hierarchy node text — localized names and descriptions of hierarchy nodes for organization displays."
semantic_vi: "tên nút phân cấp trung tâm chi phí — tên và mô tả nút phân cấp đã được dịch cho hiển thị tổ chức."
keywords:
  - nút phân cấp
  - tên nút
  - tổ chức
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
  - cost-center
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
---
# I_COSTCENTERHIERARCHYNODET

**Cost CenterHIERARCHYNODET**

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
| `CostCenterHierarchy` | `cast(hrrp_nodet_n.hryid as fis_hryid_cctr preserving type )` |
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
| `_Hierarchy` | `I_CostCenterHierarchy` | [1..*] |

## Source Code

```abap
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'HierarchyNode'
@EndUserText.label: 'Cost Center Hierarchy Node - Text'
//@Analytics: {dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCTRHNT'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}

@Analytics.dataExtraction: {enabled:true}
@ObjectModel.sapObjectNodeType.name:'CostCenterHierarchyNodeText'

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
//@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED

define view I_CostCenterHierarchyNodeT
  as select from hrrp_nodet_n

  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea     as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
  association [0..1] to I_ControllingArea     as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_Language            as _Language            on  $projection.Language = _Language.Language

  association [1..*] to I_CostCenterHierarchy as _Hierarchy           on  $projection.CostCenterHierarchy = _Hierarchy.CostCenterHierarchy
                                                                      and $projection.ControllingArea     = _Hierarchy.ControllingArea

{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( hrrp_nodet_n.kokrs as fis_kokrs preserving type )     as ControllingArea,
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_nodet_n.hryid as fis_hryid_cctr preserving type ) as CostCenterHierarchy,
      @ObjectModel.text.element: 'HierarchyNodeText'
  key hrrp_nodet_n.hrynode                                        as HierarchyNode,
      @Semantics.businessDate.to: true
  key hrrp_nodet_n.hryvalto                                       as ValidityEndDate,
      @Semantics.language: true
  key hrrp_nodet_n.spras                                          as Language,
      @Semantics.text: true
      hrrp_nodet_n.nodetxt                                        as HierarchyNodeText,
      @Semantics.text: true
      substring(hrrp_nodet_n.nodetxt, 1, 20)                      as HierarchyNodeShortText,

      @Semantics.businessDate.from: true
      hrrp_nodet_n.hryvalfrom                                     as ValidityStartDate,
      _ControllingArea,
      _Language,
      _Hierarchy,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED

}
where
  hrrp_nodet_n.hrytyp = '0101';
```
