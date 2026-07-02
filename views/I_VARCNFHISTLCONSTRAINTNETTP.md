---
name: I_VARCNFHISTLCONSTRAINTNETTP
description: Varcnfhistlconstraintnettp
semantic_en: "historical variable configuration constraint networks with change tracking — maintains audit trail of constraint network evolution"
semantic_vi: "các mạng ràng buộc cấu hình có thể thay đổi lịch sử với theo dõi thay đổi — duy trì theo dõi kiểm toán của quá trình phát triển mạng ràng buộc"
keywords:
  - lịch sử ràng buộc cấu hình
  - theo dõi kiểm toán
app_component: LO-VCH-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-VCH
  - LO-VCH-API
  - interface-view
  - transactional-processing
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCNFHISTLCONSTRAINTNETTP

**Varcnfhistlconstraintnettp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `VarCnfConstraintNetName` | `VarCnfConstraintNetName` |
| `ChangeNumber` | `ChangeNumber` |
| `ObjectDependencyStatus` | `ObjectDependencyStatus` |
| `ObjectDependencyGroup` | `ObjectDependencyGroup` |
| `CreationDate` | `CreationDate` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `IsDeleted` | `IsDeleted` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'VC Historical Constraint Net - TP'
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  }
}
define view entity I_VarCnfHistlConstraintNetTP
  as projection on R_VarCnfHistlConstraintNetTP
{
  key VarCnfConstraintNetName,
  key ChangeNumber,

      ObjectDependencyStatus,
      ObjectDependencyGroup,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,

      /* Associations */
      _ConstraintNet        : redirected to parent I_VarCnfConstraintNetTP,
      _HistoricalConstraint : redirected to I_VarCnfHistlConstraintTP,
      _HistoricalText       : redirected to I_VarCnfHistlCstrtNetTextTP
}
```
