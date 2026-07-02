---
name: I_VARCNFCONSTRAINTNETTP
description: Varcnfconstraintnettp
semantic_en: "variable configuration constraint networks with modification tracking — defines logical constraint networks for product configuration rules"
semantic_vi: "các mạng ràng buộc cấu hình có thể thay đổi với theo dõi sửa đổi — xác định các mạng ràng buộc logic cho các quy tắc cấu hình sản phẩm"
keywords:
  - mạng ràng buộc cấu hình
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
# I_VARCNFCONSTRAINTNETTP

**Varcnfconstraintnettp**

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
| `LastChangeDateTime` | `LastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'VC Constraint Net - TP'
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  sapObjectNodeType.name: 'VarConfignConstraintNet',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  }
}
define root view entity I_VarCnfConstraintNetTP
  provider contract transactional_interface
  as projection on R_VarCnfConstraintNetTP
{
  key VarCnfConstraintNetName,

      @Semantics.systemTime.lastChangedAt: true
      LastChangeDateTime,

      /* Associations */
      _Constraint              : redirected to composition child I_VarCnfConstraintTP,
      _HistoricalConstraintNet : redirected to composition child I_VarCnfHistlConstraintNetTP,
      _Text                    : redirected to composition child I_VarCnfConstraintNetTextTP
}
```
