---
name: I_VARCNFCSTRTSOURCECODETP
description: Varcnfcstrtsourcecodetp
semantic_en: "variable configuration constraint source code with validity periods — maps constraints to source code with temporal validity"
semantic_vi: "mã nguồn ràng buộc cấu hình có thể thay đổi có các kỳ hạn hợp lệ — ánh xạ các ràng buộc tới mã nguồn có tính hợp lệ thời gian"
keywords:
  - mã nguồn ràng buộc
  - cấu hình sản phẩm
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
# I_VARCNFCSTRTSOURCECODETP

**Varcnfcstrtsourcecodetp**

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
| `VarCnfConstraintName` | `VarCnfConstraintName` |
| `ChangeNumber` | `ChangeNumber` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `IsDeleted` | `IsDeleted` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'VC Constraint Source Code - TP'
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  }
}
define view entity I_VarCnfCstrtSourceCodeTP
  as projection on R_VarCnfCstrtSourceCodeTP
{
  key VarCnfConstraintNetName,
  key VarCnfConstraintName,
  key ChangeNumber,

      ValidityStartDate,
      ValidityEndDate,
      IsDeleted,

      /* Associations */
      _Constraint     : redirected to parent I_VarCnfConstraintTP,
      _ConstraintNet  : redirected to I_VarCnfConstraintNetTP,
      _SourceCodeLine : redirected to composition child I_VarCnfCstrtSrcCdLineTP
}
```
