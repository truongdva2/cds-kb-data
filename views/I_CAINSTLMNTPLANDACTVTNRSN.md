---
name: I_CAINSTLMNTPLANDACTVTNRSN
description: Cainstlmntplandactvtnrsn
semantic_en: "installment plan deactivation reason code — master data for reasons why installment plans are deactivated."
semantic_vi: "Mã lý do hủy kích hoạt kế hoạch trả góp — dữ liệu chính cho các lý do tại sao kế hoạch trả góp bị hủy kích hoạt."
keywords:
  - hủy kích hoạt
  - lý do
  - kế hoạch trả góp
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
# I_CAINSTLMNTPLANDACTVTNRSN

**Cainstlmntplandactvtnrsn**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CAInstlmntPlanDactvtnRsn` | `deagd` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAInstlmntPlanDactvtnRsnT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Installment Plan Deactivation Reason'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAInstlmntPlanDactvtnRsn',
                sapObjectNodeType.name: 'CAInstallmentPlanDactvtnReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAInstlmntPlanDactvtnRsn
  as select from tfk061a

  association [0..*] to I_CAInstlmntPlanDactvtnRsnT as _Text on $projection.CAInstlmntPlanDactvtnRsn = _Text.CAInstlmntPlanDactvtnRsn

{
  key deagd as CAInstlmntPlanDactvtnRsn,

      _Text
}
```
