---
name: I_ENTPROJBUSSOLUTIONORDERLINK
description: Entprojbussolutionorderlink
semantic_en: "enterprise project link to solution order — projection relating enterprise projects to business solution orders and items via link UUID"
semantic_vi: "Liên kết dự án cấp công ty với đơn hàng giải pháp — hình chiếu liên kết dự án cấp công ty với đơn hàng và mặt hàng giải pháp kinh doanh"
keywords:
  - đơn hàng giải pháp
  - liên kết dự án
  - mặt hàng
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
  - component:PPM-SCL-STR
  - lob:Other
  - bo:EntProjBusSolnOrderLinkUUID
---
# I_ENTPROJBUSSOLUTIONORDERLINK

**Entprojbussolutionorderlink**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EntProjBusSolnOrderLinkUUID` | `cast( EntProjBusSolnOrderLinkUUID as /s4ppm/tv_solo_link_uuid preserving type )` |
| `ProjectUUID` | `cast( ProjectUUID as /s4ppm/tv_project_uuid preserving type )` |
| `EntProjectObjectLinkUUID` | `cast( EntProjectObjectLinkUUID as /s4ppm/tv_objectlink_guid preserving type )` |
| `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| `_EntProjectProjectObjectLink` | *Association* |
| `_EnterpriseProject` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EntProjectProjectObjectLink` | `I_EntProjectProjectObjectLink` | [0..1] |
| `_EnterpriseProject` | `I_EnterpriseProject` | [1..1] |

## Source Code

```abap
@Analytics.technicalName: 'IEPRJBSOLO'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@AccessControl.authorizationCheck: #MANDATORY

@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.representativeKey: 'EntProjBusSolnOrderLinkUUID'
@EndUserText.label: 'Enterprise Project Link to Solution Order'

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true

define view entity I_EntProjBusSolutionOrderLink
  as select from P_EntProjBusSolutionOrder
  association [0..1] to I_EntProjectProjectObjectLink as _EntProjectProjectObjectLink on $projection.EntProjectObjectLinkUUID = _EntProjectProjectObjectLink.EntProjectObjectLinkUUID

  association [1..1] to I_EnterpriseProject           as _EnterpriseProject           on $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
{

  key cast( EntProjBusSolnOrderLinkUUID as /s4ppm/tv_solo_link_uuid preserving type ) as EntProjBusSolnOrderLinkUUID,

      cast( ProjectUUID as /s4ppm/tv_project_uuid preserving type )                   as ProjectUUID,

      cast( EntProjectObjectLinkUUID as /s4ppm/tv_objectlink_guid preserving type )   as EntProjectObjectLinkUUID,

      BusinessSolutionOrder,

      BusinessSolutionOrderItem,

      _EntProjectProjectObjectLink,

      _EnterpriseProject

}
```
