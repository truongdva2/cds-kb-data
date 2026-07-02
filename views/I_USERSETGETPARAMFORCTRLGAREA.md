---
name: I_USERSETGETPARAMFORCTRLGAREA
description: Usersetgetparamforctrlgarea
semantic_en: "projection of user parameters specific to controlling areas — retrieves user-set defaults for GL versions and fiscal year variants"
semantic_vi: "phép chiếu các tham số người dùng cụ thể cho các vùng kiểm soát — truy xuất các giá trị mặc định do người dùng đặt cho các phiên bản GL và biến thể năm tài chính"
keywords:
  - tham số người dùng
  - vùng kiểm soát
  - năm tài chính
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
  - bo:BusinessUser
---
# I_USERSETGETPARAMFORCTRLGAREA

**Usersetgetparamforctrlgarea**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessUser` | `P_Usersetgetparamforctrlgarea.BusinessUser` |
| `ControllingArea` | `P_Usersetgetparamforctrlgarea.ControllingArea` |
| `CtrlgStdFinStatementVersion` | `I_ControllingArea.CtrlgStdFinStatementVersion` |
| `FiscalYearVariant` | `I_ControllingArea.FiscalYearVariant` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.representativeKey: 'BusinessUser'

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern:  #ANALYTICAL_DIMENSION 

@ObjectModel.usageType: {
  dataClass: #MIXED,
  serviceQuality: #B,
  sizeCategory: #M
}
@AbapCatalog.sqlViewName: 'IFIUSRPARMCTRLGA'
@Analytics: { dataCategory: #DIMENSION } //,dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'User Parameter for Controlling Area'
@AccessControl.authorizationCheck: #NOT_REQUIRED //PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_UserSetGetParamForCtrlgArea as select from P_Usersetgetparamforctrlgarea
left outer join I_ControllingArea on I_ControllingArea.ControllingArea = P_Usersetgetparamforctrlgarea.ControllingArea
{
    
key P_Usersetgetparamforctrlgarea.BusinessUser,
P_Usersetgetparamforctrlgarea.ControllingArea,
I_ControllingArea.CtrlgStdFinStatementVersion,
I_ControllingArea.FiscalYearVariant
//cast( case when P_Usersetgetparamforctrlgarea.ControllingArea is null 
//  then 'A000'
//  else P_Usersetgetparamforctrlgarea.ControllingArea
//end as kokrs )as ControllingArea

} 

where P_Usersetgetparamforctrlgarea.BusinessUser = $session.user
```
