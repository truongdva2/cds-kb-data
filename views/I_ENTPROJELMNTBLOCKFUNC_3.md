---
name: I_ENTPROJELMNTBLOCKFUNC_3
description: Entprojelmntblockfunc 3
semantic_en: "blocked functions by project element — aggregated view of which posting and time recording functions are blocked per project element"
semantic_vi: "Các hàm bị khóa theo phần tử dự án — hình chiếu tổng hợp các hàm ghi nhập và ghi thời gian nào bị khóa cho mỗi phần tử dự án"
keywords:
  - hàm bị khóa
  - phần tử dự án
  - ghi thời gian
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
---
# I_ENTPROJELMNTBLOCKFUNC_3

**Entprojelmntblockfunc 3**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-STR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProjectElementUUID` | `TaskUUID` |
| `ProjectUUID` | `ProjectUUID` |
| `EntProjTimeRecgIsBlkd` | `EntProjTimeRecgIsBlkd` |
| `EntProjStaffExpensePostgIsBlkd` | `EntProjStaffExpensePostgIsBlkd` |
| `EntProjServicePostingIsBlkd` | `EntProjServicePostingIsBlkd` |
| `EntProjOtherExpensePostgIsBlkd` | `EntProjOtherExpensePostgIsBlkd` |
| `EntProjPurchasingIsBlkd` | `EntProjPurchasingIsBlkd` |
| `_EnterpriseProject` | *Association* |
| `_EnterpriseProjectElement` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Blocked Functions by Project Element'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  sapObjectNodeType.name: 'EntProjectElementBlockFunction'
}
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
  dataExtraction: {
    enabled: true
  }
}
define view entity I_EntProjElmntBlockFunc_3 as select from I_BlockFuncForEntProjElmnt as ProjElemBlkFnc
association of many to exact one I_EnterpriseProject as _EnterpriseProject on  $projection.ProjectUUID = _EnterpriseProject.ProjectUUID
association of exact one to exact one I_EnterpriseProjectElement as _EnterpriseProjectElement on $projection.ProjectElementUUID = _EnterpriseProjectElement.ProjectElementUUID
{
  key TaskUUID as ProjectElementUUID,
  ProjectUUID,
  @Semantics.booleanIndicator:true
  EntProjTimeRecgIsBlkd,
  @Semantics.booleanIndicator:true      
  EntProjStaffExpensePostgIsBlkd,
  @Semantics.booleanIndicator:true
  EntProjServicePostingIsBlkd,
  @Semantics.booleanIndicator:true   
  EntProjOtherExpensePostgIsBlkd,
  @Semantics.booleanIndicator:true
  EntProjPurchasingIsBlkd,

  /* Associations */
  _EnterpriseProject,
  _EnterpriseProjectElement
}
```
