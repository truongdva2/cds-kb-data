---
name: I_VARCNFPRODUCTPROFILETP
description: Varcnfproductprofiletp
semantic_en: "variant configuration profile master data – core product-to-profile mapping for variant configuration."
semantic_vi: "dữ liệu chính hồ sơ cấu hình biến thể – ánh xạ cốt lõi sản phẩm tới hồ sơ cho cấu hình biến thể."
keywords:
  - cấu hình biến thể
  - hồ sơ
  - sản phẩm
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
  - product
  - component:LO-VCH-API-2CL
  - lob:Logistics General
  - bo:VariantConfigurationProfile
---
# I_VARCNFPRODUCTPROFILETP

**Varcnfproductprofiletp**

| Property | Value |
|---|---|
| App Component | `LO-VCH-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Product` | `Product` |
| `VarConfigurationProfileName` | `VarConfigurationProfileName` |
| `_Product` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Variant Configuration Profile - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'VariantConfigurationProfile'

@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #L,
  dataClass: #MASTER
}
define root view entity I_VarCnfProductProfileTP 
  provider contract transactional_interface
  as projection on R_VarCnfProductProfileTP 
{
  key Product,
  key VarConfigurationProfileName,
  
  /* Associations */
  _HistoricalProfile : redirected to composition child I_VarCnfHistlProductProfileTP,
  _ProcedureAssignment : redirected to composition child I_VarCnfProdPrflProcedAssgmtTP,
  _ConstraintNetAssignment: redirected to composition child I_VarCnfProdPrflCstrtNetAsgtTP,
  _Product
}
```
