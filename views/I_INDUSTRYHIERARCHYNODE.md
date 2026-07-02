---
name: I_INDUSTRYHIERARCHYNODE
description: Industryhierarchynode
semantic_en: "Industry hierarchy nodes — tree structure elements with parent relationships, industry assignments, sequence, level, and node values."
semantic_vi: "Nút phân cấp ngành — các phần tử cấu trúc cây với các mối quan hệ cha mẹ, gán ngành, trình tự, cấp độ và giá trị nút."
keywords:
  - Nút phân cấp
  - Cấu trúc cây
  - Ngành công nghiệp
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
  - bo:IndustryHierarchyNode
---
# I_INDUSTRYHIERARCHYNODE

**Industryhierarchynode**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `IndustryHierarchy` | `cast(hrrp_node_n.hryid as fis_hryid_industry preserving type )` |
| `HierarchyNode` | `hrrp_node_n.hrynode` |
| `ValidityEndDate` | `cast(hrrp_node_n.hryvalto as fis_datbi preserving type )` |
| `ValidityStartDate` | `cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )` |
| `ParentNode` | `hrrp_node_n.parnode` |
| `Industry` | `hrrp_node_n.brsch` |
| `HierarchyNodeSequence` | `hrrp_node_n.hryseqnbr` |
| `HierarchyNodeLevel` | `hrrp_node_n.hrylevel` |
| `NodeType` | `hrrp_node_n.nodetype` |
| `HierarchyNodeVal` | `hrrp_node_n.nodevalue` |
| `_Text` | *Association* |
| `_Industry` | *Association* |
| `_Hierarchy` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_IndustryHierarchy` | [1..1] |
| `_Industry` | `I_CustomerSupplierIndustry` | [0..1] |
| `_Text` | `I_IndustryHierarchyNodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Industry Hierarchy Node'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #L},
  dataCategory: #HIERARCHY
}
@VDM.viewType: #BASIC
@Hierarchy.parentChild:
[{ recurse:          {   parent: ['ParentNode'],   child:  ['HierarchyNode']  },
  siblingsOrder:    [{   by: 'HierarchyNodeSequence' }],
  directory:        '_Hierarchy'
  }]
@Analytics.dataExtraction.enabled: true
@ObjectModel.representativeKey: 'HierarchyNode'
@ObjectModel.sapObjectNodeType.name:'IndustryHierarchyNode'
@ObjectModel.modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE , #EXTRACTION_DATA_SOURCE ]

define view entity I_IndustryHierarchyNode
  as select from hrrp_node_n
  association [1..1] to I_IndustryHierarchy         as _Hierarchy on  $projection.IndustryHierarchy = _Hierarchy.IndustryHierarchy
                                                                  and $projection.ValidityEndDate   = _Hierarchy.ValidityEndDate
  association [0..1] to I_CustomerSupplierIndustry  as _Industry  on  $projection.Industry = _Industry.Industry
  association [0..*] to I_IndustryHierarchyNodeText as _Text      on  $projection.IndustryHierarchy = _Text.IndustryHierarchy
                                                                  and $projection.HierarchyNode     = _Text.HierarchyNode
                                                                  and $projection.Industry          = '' // just to show that this association is only to be followed if BillingDocumentType is blank
{
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
      @ObjectModel.foreignKey.association: '_Hierarchy'
  key cast(hrrp_node_n.hryid as fis_hryid_industry preserving type ) as IndustryHierarchy,
      @ObjectModel.text.association: '_Text'
  key hrrp_node_n.hrynode                                            as HierarchyNode,
      @Semantics.businessDate.to: true
      @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key cast(hrrp_node_n.hryvalto as fis_datbi preserving type )       as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_node_n.hryvalfrom as fis_datab preserving type )     as ValidityStartDate,
      hrrp_node_n.parnode                                            as ParentNode,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CustomerSupplierIndustryVH',
                     element: 'Industry' }
        }]
      @ObjectModel.foreignKey.association: '_Industry'
      hrrp_node_n.brsch                                              as Industry,
      hrrp_node_n.hryseqnbr                                          as HierarchyNodeSequence,
      hrrp_node_n.hrylevel                                           as HierarchyNodeLevel,
      hrrp_node_n.nodetype                                           as NodeType,
      hrrp_node_n.nodevalue                                          as HierarchyNodeVal,

      _Text,
      _Industry,
      _Hierarchy
}
where
      hrrp_node_n.nodetype <> 'D'
  and hrrp_node_n.hrytyp   =  'U517'
```
