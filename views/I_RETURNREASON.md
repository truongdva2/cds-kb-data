---
name: I_RETURNREASON
description: Returnreason
semantic_en: "Return reason master — enumeration of reasons for customer product returns in logistics returns management."
semantic_vi: "Hồ sơ chính lý do trả hàng — danh sách các lý do cho trả hàng sản phẩm khách hàng trong quản lý trả hàng hậu cần."
keywords:
  - lý do trả hàng
  - trả hàng khách hàng
  - quản lý
app_component: LO-ARM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-ARM
  - interface-view
  - component:LO-ARM-2CL
  - lob:Logistics General
  - bo:ReturnReason
---
# I_RETURNREASON

**Returnreason**

| Property | Value |
|---|---|
| App Component | `LO-ARM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReturnReason` | `ret_reason` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ReturnReasonText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ReturnReason'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'ReturnReason'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@EndUserText.label: 'Return Reason'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'IRMRETREASON'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true

define view I_ReturnReason
  as select from msr_c_ret_reason

  association [0..*] to I_ReturnReasonText as _Text on $projection.ReturnReason = _Text.ReturnReason
{
      //Key
      @ObjectModel.text.association: '_Text'
  key ret_reason as ReturnReason,

      //Associations
      _Text
}
```
