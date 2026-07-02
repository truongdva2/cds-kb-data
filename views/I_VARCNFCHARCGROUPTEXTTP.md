---
name: I_VARCNFCHARCGROUPTEXTTP
description: Varcnfcharcgrouptexttp
semantic_en: "variable configuration characteristic group descriptions in multiple languages — provides multilingual names for configuration groups"
semantic_vi: "mô tả nhóm đặc tính cấu hình có thể thay đổi bằng nhiều ngôn ngữ — cung cấp tên đa ngôn ngữ cho các nhóm cấu hình"
keywords:
  - tên nhóm đặc tính
  - dữ liệu đa ngôn ngữ
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
  - text
  - component:LO-VCH-API-2CL
  - lob:Logistics General
---
# I_VARCNFCHARCGROUPTEXTTP

**Varcnfcharcgrouptexttp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConfignCharacteristicGroup` | `ConfignCharacteristicGroup` |
| `ChangeNumber` | `ChangeNumber` |
| `Language` | `Language` |
| `ConfignCharacteristicGroupDesc` | `ConfignCharacteristicGroupDesc` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Var Confign Charc Group Descr - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [
    #TRANSACTIONAL_PROVIDER,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #S
  },
  dataCategory: #TEXT
}
define view entity I_VarCnfCharcGroupTextTP
  as projection on R_VarCnfCharcGroupTextTP_2
{
  key ConfignCharacteristicGroup,
  key ChangeNumber,
      @Semantics.language: true
  key Language,
      @Semantics.text: true
      ConfignCharacteristicGroupDesc,

      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      /* Associations */
      _Group : redirected to parent I_VarCnfCharcGroupTP
}
```
