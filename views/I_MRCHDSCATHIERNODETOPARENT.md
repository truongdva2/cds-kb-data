---
name: I_MRCHDSCATHIERNODETOPARENT
description: Mrchdscathiernodetoparent
semantic_en: "merchandise category hierarchy node to parent — defines parent-child relationships between nodes in the merchandise category hierarchy"
semantic_vi: "nút hạng mục hàng hóa đến nút cha — xác định mối quan hệ cha-con giữa các nút trong hệ thống phân cấp danh mục hàng hóa"
keywords:
  - phân cấp hàng hóa
  - quan hệ cha-con
  - cấu trúc danh mục
app_component: LO-RFM-MD-MC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-RFM
  - LO-RFM-MD
  - interface-view
  - component:LO-RFM-MD-MC
  - lob:Logistics General
  - bo:MrchdsCategoryHierarchyNode
---
# I_MRCHDSCATHIERNODETOPARENT

**Mrchdscathiernodetoparent**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-MC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MrchdsCategoryHierarchyNode` | `cast(MrchdsCatHiernode .class as rfm_mrchdcathiernode preserving type )` |
| `ParentMrchdsCatHierarchyNode` | `ParentMrchdsCatHiernode.class` |
| `_MrchdsCategoryHierarchyNode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MrchdsCategoryHierarchyNode` | `I_MrchdsCategoryHierarchyNode` | [1..1] |

## Source Code

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  dataCategory                      : #DIMENSION,
  internalName                      : #LOCAL,
  dataExtraction                    : {
  enabled                           : true
} }

@AccessControl.authorizationCheck   : #CHECK
@ObjectModel: {
   representativeKey                : 'MrchdsCategoryHierarchyNode',
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION
                                      ], 
   modelingPattern                  :  #ANALYTICAL_DIMENSION ,                                                                                                
   usageType                        : {serviceQuality: #A,sizeCategory: #M,dataClass: #MASTER }
 }
@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@ObjectModel.sapObjectNodeType.name : 'MrchdsCategoryHierarchyNode'
@EndUserText.label                  : 'Assignment of Hierarchy Node'

define view entity I_MrchdsCatHierNodeToParent
  as select from klah as MrchdsCatHiernode 
    inner join   kssk as MrchdsCatHierAssignment       on MrchdsCatHiernode .clint      = MrchdsCatHierAssignment.objek
    inner join   klah as ParentMrchdsCatHiernode       on MrchdsCatHierAssignment.clint = ParentMrchdsCatHiernode.clint
    
   association [1..1] to I_MrchdsCategoryHierarchyNode as _MrchdsCategoryHierarchyNode on  $projection.MrchdsCategoryHierarchyNode = _MrchdsCategoryHierarchyNode.MrchdsCategoryHierarchyNode
  
{
  key cast(MrchdsCatHiernode .class as rfm_mrchdcathiernode preserving type ) as MrchdsCategoryHierarchyNode,
      ParentMrchdsCatHiernode.class                                           as ParentMrchdsCatHierarchyNode,
      _MrchdsCategoryHierarchyNode  
}
where
  MrchdsCatHiernode .wwskz = '0'
```
