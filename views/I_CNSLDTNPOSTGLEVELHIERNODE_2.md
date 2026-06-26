---
name: I_CNSLDTNPOSTGLEVELHIERNODE_2
description: Cnsldtnpostglevelhiernode 2
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPOSTGLEVELHIERNODE_2

**Cnsldtnpostglevelhiernode 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConsolidationPostgLevelHier` | `cast(…)` |
| `HierarchyNode` | `_HierarchyNode.HierarchyNode` |
| `ParentNode` | `_HierarchyNode.ParentNode` |
| `HierarchyVersion` | `_HierarchyNode.HierarchyVersion` |
| `ConsolidationPostingLevel` | `cast(…)` |
| `HierarchyNodeSequence` | `_HierarchyNode.HierarchyNodeSequence` |
| `HierarchyNodeLevel` | `_HierarchyNode.HierarchyNodeLevel` |
| `NodeType` | `_HierarchyNode.NodeType` |
| `_Text` | *Association* |
| `_Text_2` | *Association* |
| `_PostingLevel` | *Association* |
| `_Hierarchy` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PostingLevel` | `I_CnsldtnPostingLevel_2` | [0..1] |
| `_Hierarchy` | `I_CnsldtnPostingLevelHierarchy` | [1..1] |
| `_Text` | `I_CnsldtnPostingLevelHierNodeT` | [0..*] |
| `_Text_2` | `I_CnsldtnPostingLevelHierNodeT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICSPOSTINGLEVELHIERNODE2'
}
@Hierarchy.parentChild: [{
  recurse: {
    parent: ['ParentNode'],
    child:     ['HierarchyNode']
  },
  siblingsOrder: [{
    by: 'HierarchyNodeSequence',
    direction: #ASC
  }],
  directory: '_Hierarchy'
}]
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M
  },
  dataCategory: #HIERARCHY,
  representativeKey: 'HierarchyNode',
  modelingPattern: #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_PARENT_CHILD_HIERARCHY_NODE
                          ],
  sapObjectNodeType.name: 'CnsldtnPostingLevelHierNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Cnsldtn Posting Level Hierarchy Node'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnsldtnPostgLevelHierNode_2
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS21', P_MasterDataType : 'PLEVL' ) as _HierarchyNode

  association [0..1] to I_CnsldtnPostingLevel_2        as _PostingLevel on  $projection.ConsolidationPostingLevel = _PostingLevel.ConsolidationPostingLevel

  association [1..1] to I_CnsldtnPostingLevelHierarchy as _Hierarchy    on  $projection.ConsolidationPostgLevelHier = _Hierarchy.ConsolidationPostgLevelHier

  association [0..*] to I_CnsldtnPostingLevelHierNodeT as _Text         on  $projection.ConsolidationPostgLevelHier = _Text.ConsolidationPostgLevelHier
                                                                        and $projection.HierarchyNode               = _Text.HierarchyNode
                                                                        and $projection.ConsolidationPostingLevel   = ''

  association [0..*] to I_CnsldtnPostingLevelHierNodeT as _Text_2       on  $projection.ConsolidationPostgLevelHier = _Text_2.ConsolidationPostgLevelHier
                                                                        and $projection.HierarchyNode               = _Text_2.HierarchyNode
                                                                        // node type condition needed due to existence of posting level SPACE
                                                                        and (
                                                                           $projection.NodeType                     = 'R'
                                                                           or $projection.NodeType                  = 'N'
                                                                         )

{

         @Consumption.filter: {mandatory : true, selectionType : #SINGLE, multipleSelections : false }
         @ObjectModel.foreignKey.association: '_Hierarchy'
  key    cast( _HierarchyNode.UniversalHierarchy as fincs_postinglevelhierarchy preserving type ) as ConsolidationPostgLevelHier,

         @ObjectModel.text.association: '_Text_2'
  key    _HierarchyNode.HierarchyNode                                                             as HierarchyNode,

         _HierarchyNode.ParentNode                                                                as ParentNode,

         _HierarchyNode.HierarchyVersion,

         @ObjectModel.foreignKey.association: '_PostingLevel'
         cast(
           case
             when _HierarchyNode.ConsolidationPostingLevel =  '#' then ''
             else _HierarchyNode.ConsolidationPostingLevel
           end as fc_plevl preserving type )                                                      as ConsolidationPostingLevel,


         _HierarchyNode.HierarchyNodeSequence,
         _HierarchyNode.HierarchyNodeLevel,
         _HierarchyNode.NodeType,

         // associations
         @VDM.lifecycle.status:    #DEPRECATED
         @VDM.lifecycle.successor: '_Text_2'
         _Text,
         
         _Text_2,
         _PostingLevel,
         _Hierarchy
}
```
