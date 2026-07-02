---
name: I_ENTPROJELMNTCNFGRDWRKITEM
description: Entprojelmntcnfgrdwrkitem
semantic_en: "enterprise project configured work item — defines the set of work item types available for project elements"
semantic_vi: "Mục công việc được cấu hình của dự án cấp công ty — xác định tập hợp các loại mục công việc có sẵn cho các phần tử dự án"
keywords:
  - mục công việc
  - cấu hình
  - loại
app_component: PPM-SCL-STR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-STR
  - interface-view
  - item-level
  - component:PPM-SCL-STR
  - lob:Other
  - bo:EnPrjElmConfiguredWorkItem
---
# I_ENTPROJELMNTCNFGRDWRKITEM

**Entprojelmntcnfgrdwrkitem**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EntProjElmntWorkItem` | `workitem_id` |
| `_ConfiguredWorkItemText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConfiguredWorkItemText` | `I_EntProjElmntCnfgrdWrkItmTxt` | [0..*] |

## Source Code

```abap
@VDM.viewType:#BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Enterprise Proj Cnfgrd Work Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'EntProjElmntWorkItem'
@ObjectModel.sapObjectNodeType.name:'EnPrjElmConfiguredWorkItem'
@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
}
define view entity I_EntProjElmntCnfgrdWrkItem
  as select from /cpd/fc_wrk_id
  association [0..*] to I_EntProjElmntCnfgrdWrkItmTxt as _ConfiguredWorkItemText on $projection.EntProjElmntWorkItem = _ConfiguredWorkItemText.EntProjElmntWorkItem

{
      @ObjectModel.text.association: '_ConfiguredWorkItemText'
  key workitem_id as EntProjElmntWorkItem,

      _ConfiguredWorkItemText
}
```
