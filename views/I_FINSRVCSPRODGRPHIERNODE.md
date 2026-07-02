---
name: I_FINSRVCSPRODGRPHIERNODE
description: Finsrvcsprodgrphiernode
semantic_en: "hierarchy nodes for product group structure — node definitions with parent-child relationships and sequence ordering"
semantic_vi: "nút phân cấp cho cấu trúc nhóm sản phẩm — định nghĩa nút với quan hệ cha-con và sắp xếp chuỗi"
keywords:
  - phân cấp sản phẩm
  - nút cây
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
  - component:FIN-IE-FS-2CL
  - lob:Other
---
# I_FINSRVCSPRODGRPHIERNODE

**Finsrvcsprodgrphiernode**

| Property | Value |
|---|---|
| App Component | `FIN-IE-FS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FinSrvcsProductGroupHierarchy` | `cast(…)` |
| `HierarchyNode` | `HierNode.HierarchyNode` |
| `ValidityEndDate` | `HierNode.ValidityEndDate` |
| `ParentNode` | `HierNode.ParentNode` |
| `ValidityStartDate` | `HierNode.ValidityStartDate` |
| `FinancialServicesProductGroup` | `HierNode.FinancialServicesProductGroup` |
| `HierarchyNodeSequence` | `HierNode.SequenceNumber` |
| `HierarchyNodeLevel` | `HierNode.HierarchyNodeLevel` |
| `NodeType` | `HierNode.NodeType` |
| `HierarchyNodeVal` | `HierNode.HierarchyNodeVal` |
| `_Hierarchy` | *Association* |
| `_Text` | *Association* |
| `_FinServicesProductGroup` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_FinSrvcsProdGroupHierarchy` | [1..1] |
| `_Text` | `I_FinSrvcsProdGrpHierNodeT` | [0..*] |
| `_FinServicesProductGroup` | `I_FinServicesProductGroup` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Fin Srvcs Product Group Hierarchy Node'
@ObjectModel:{
dataCategory: #HIERARCHY,
modelingPattern: #ANALYTICAL_DIMENSION,
usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #MASTER
},
sapObjectNodeType.name: 'FinSrvcsProdGrpHierNode',
supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                         #CDS_MODELING_ASSOCIATION_TARGET,
                         #EXTRACTION_DATA_SOURCE ]
}

@Hierarchy.parentChild: [{
  recurse: {
  parent: ['ParentNode' ],
  child: ['HierarchyNode']
  },
  siblingsOrder: [{ by: 'HierarchyNodeSequence', direction: #ASC} ] ,
   directory: '_Hierarchy'
   }]
@VDM: {
  viewType:#COMPOSITE,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

define root view entity I_FinSrvcsProdGrpHierNode
  as select from                      R_HierRuntimeRprstnNode     as HierNode
    left outer many to exact one join R_HierRuntimeRepresentation as HierDirectory on  HierNode.HierarchyID     = HierDirectory.HierarchyID
                                                                                   and HierNode.ValidityEndDate = HierDirectory.ValidityEndDate

  association [1..1] to I_FinSrvcsProdGroupHierarchy as _Hierarchy               on  $projection.FinSrvcsProductGroupHierarchy = _Hierarchy.FinSrvcsProductGroupHierarchy
                                                                                 and $projection.ValidityEndDate               = _Hierarchy.ValidityEndDate
  association [0..*] to I_FinSrvcsProdGrpHierNodeT   as _Text                    on  $projection.HierarchyNode                 = _Text.HierarchyNode
                                                                                 and $projection.FinSrvcsProductGroupHierarchy = _Text.FinSrvcsProductGroupHierarchy
                                                                                 and $projection.FinancialServicesProductGroup = ''
  association [0..1] to I_FinServicesProductGroup    as _FinServicesProductGroup on  $projection.FinancialServicesProductGroup = _FinServicesProductGroup.FinancialServicesProductGroup

{
       @ObjectModel.foreignKey.association: '_Hierarchy'
       @Consumption.filter: { mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key  cast ( HierDirectory.HierarchyShortID as ffs_hryid_product_group preserving type ) as FinSrvcsProductGroupHierarchy,
       @ObjectModel.text.association: '_Text'
  key  HierNode.HierarchyNode                                                             as HierarchyNode,
       @Semantics.businessDate.to: true
       @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
  key  HierNode.ValidityEndDate                                                           as ValidityEndDate,
       HierNode.ParentNode                                                                as ParentNode,
       @Semantics.businessDate.from: true
       HierNode.ValidityStartDate                                                         as ValidityStartDate,
       @ObjectModel.foreignKey.association: '_FinServicesProductGroup'
       HierNode.FinancialServicesProductGroup                                             as FinancialServicesProductGroup,
       HierNode.SequenceNumber                                                            as HierarchyNodeSequence,
       HierNode.HierarchyNodeLevel                                                        as HierarchyNodeLevel,
       HierNode.NodeType                                                                  as NodeType,
       HierNode.HierarchyNodeVal                                                          as HierarchyNodeVal,
       _Hierarchy,
       _Text,
       _FinServicesProductGroup
}

where
      HierNode.NodeType      <> 'D'
  and HierNode.HierarchyType =  'FFS1'
```
