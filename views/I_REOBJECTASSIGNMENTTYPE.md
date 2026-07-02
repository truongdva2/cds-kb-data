---
name: I_REOBJECTASSIGNMENTTYPE
description: Reobjectassignmenttype
semantic_en: "real estate object assignment type — classifies assignment type categories for real estate objects."
semantic_vi: "loại phân công đối tượng bất động sản — phân loại danh mục loại phân công cho đối tượng."
keywords:
  - phân công
  - loại
  - bất động sản
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REOBJECTASSIGNMENTTYPE

**Reobjectassignmenttype**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `REObjectAssignmentType` | `objasstype` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REObjectAssignmentTypeText` | [0..*] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREOBJASTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Object Assignment Type'
@Analytics:{
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REObjectAssignmentType',
  semanticKey: ['REObjectAssignmentType'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateObjectAssignmentType'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view entity I_REObjectAssignmentType
  as select from tivbdobjasstype
  association [0..*] to I_REObjectAssignmentTypeText as _Text on $projection.REObjectAssignmentType = _Text.REObjectAssignmentType

{
      @ObjectModel.text.association: '_Text'
  key objasstype as REObjectAssignmentType,

      _Text
}
```
