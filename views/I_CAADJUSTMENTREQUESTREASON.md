---
name: I_CAADJUSTMENTREQUESTREASON
description: Caadjustmentrequestreason
semantic_en: "reasons for adjustment requests — classification codes for explaining cost or billing adjustments"
semantic_vi: "lý do yêu cầu điều chỉnh — mã phân loại để giải thích điều chỉnh chi phí hoặc lập hóa đơn"
keywords:
  - yêu cầu điều chỉnh
  - lý do điều chỉnh
  - phân loại
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAADJUSTMENTREQUESTREASON

**Caadjustmentrequestreason**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CAAdjustmentRequestReason` | `argrd` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAdjustmentRequestReasonT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Adjustment Request Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAAdjustmentRequestReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAdjustmentRequestReason
  as select from tfk069
  
  association [0..*] to I_CAAdjustmentRequestReasonT as _Text on $projection.CAAdjustmentRequestReason = _Text.CAAdjustmentRequestReason

{
      @ObjectModel.text.association: '_Text'
  key argrd as CAAdjustmentRequestReason,

      _Text
}
```
