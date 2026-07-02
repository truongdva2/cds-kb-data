---
name: I_CNSLDTNGRANTHIERARCHYNODE
description: Cnsldtngranthierarchynode
semantic_en: "grant hierarchy node structure — parent-child relationships and grant assignments within hierarchies"
semantic_vi: "cấu trúc nút phân cấp khoản tài trợ — quan hệ cha-con và gán khoản tài trợ trong cấu trúc phân cấp"
keywords:
  - grant hierarchy node
  - parent-child relationship
  - grant assignment
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
# I_CNSLDTNGRANTHIERARCHYNODE

**Cnsldtngranthierarchynode**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CnsldtnGrantHierarchy` | `cast(_HierarchyNode.UniversalHierarchy as fincs_granthierarchy preserving type )` |
| `HierarchyNode` | `_HierarchyNode.HierarchyNode` |
| `ValidityEndDate` | `_HierarchyNode.ValidityEndDate` |
| `ValidityStartDate` | `_HierarchyNode.ValidityStartDate` |
| `ParentNode` | `_HierarchyNode.ParentNode` |
| `HierarchyVersion` | `_HierarchyNode.HierarchyVersion` |
| `GrantID` | `_HierarchyNode.GrantID` |
| `HierarchyNodeSequence` | `_HierarchyNode.HierarchyNodeSequence` |
| `HierarchyNodeLevel` | `_HierarchyNode.HierarchyNodeLevel` |
| `NodeType` | `_HierarchyNode.NodeType` |
| `_Text` | *Association* |
| `_Grant` | *Association* |
| `_Hierarchy` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Grant` | `I_CnsldtnGrant` | [0..1] |
| `_Hierarchy` | `I_CnsldtnGrantHierarchy` | [1..1] |
| `_Text` | `I_CnsldtnGrantHierarchyNodeT` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
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
  sapObjectNodeType.name: 'CnsldtnGrantHierarchyNode'
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@EndUserText.label: 'Consolidation Grant - Hierarchy Node'

define view entity I_CnsldtnGrantHierarchyNode
  as select from P_CnsldtnUnivHierNode_3(P_HierarchyType : 'CS26', P_MasterDataType : 'RGRANT_NBR' ) as _HierarchyNode

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join   I_CnsldtnBusinessSwitch                                                             as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                                                                                        and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [0..1] to I_CnsldtnGrant               as _Grant     on  $projection.GrantID = _Grant.GrantID

  association [1..1] to I_CnsldtnGrantHierarchy      as _Hierarchy on  $projection.CnsldtnGrantHierarchy = _Hierarchy.CnsldtnGrantHierarchy
                                                                   and $projection.ValidityEndDate       = _Hierarchy.ValidityEndDate

  association [0..*] to I_CnsldtnGrantHierarchyNodeT as _Text      on  $projection.CnsldtnGrantHierarchy = _Text.CnsldtnGrantHierarchy
                                                                   and $projection.HierarchyNode         = _Text.HierarchyNode
                                                                   and $projection.GrantID               = ''
{

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @ObjectModel: {
        foreignKey.association: '_Hierarchy'
      //        sapObjectNodeTypeReference: 'CnsldtnGrantHierarchy'
      }
  key cast(_HierarchyNode.UniversalHierarchy as fincs_granthierarchy preserving type )            as CnsldtnGrantHierarchy,

      @ObjectModel.text.association: '_Text'
  key _HierarchyNode.HierarchyNode                                                                as HierarchyNode,

      @Consumption.filter: {
        mandatory : true,
        selectionType : #SINGLE,
        multipleSelections : false
      }
      @Semantics.businessDate.to: true
  key _HierarchyNode.ValidityEndDate,

      @Semantics.businessDate.from: true
      _HierarchyNode.ValidityStartDate,

      _HierarchyNode.ParentNode,

      _HierarchyNode.HierarchyVersion,

      @ObjectModel: {
        foreignKey.association: '_Grant'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGrantVH',
          element: 'GrantID'
        }
      }]
      _HierarchyNode.GrantID,

      _HierarchyNode.HierarchyNodeSequence,
      _HierarchyNode.HierarchyNodeLevel,
      _HierarchyNode.NodeType,


      /* associations */
      _Text,
      _Grant,
      _Hierarchy
}
```
