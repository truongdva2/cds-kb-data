---
name: I_JNTVNTROVHDBURDENRATEPCTTP
description: Jntvntrovhdburdenratepcttp
semantic_en: "joint venture overhead burden rate percentage transfer pricing view — overhead burden rates by burden type"
semantic_vi: "phép chiếu định giá chuyển giao tỷ lệ gánh nặng chi phí chung — tỷ lệ theo loại gánh nặng"
keywords:
  - liên doanh
  - chi phí chung
  - tỷ lệ
app_component: CA-JVA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - CA-JVA-JVA
  - interface-view
  - transactional-processing
  - component:CA-JVA-JVA
  - lob:Cross-Application Components
---
# I_JNTVNTROVHDBURDENRATEPCTTP

**Jntvntrovhdburdenratepcttp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `CompanyCode` |
| `JointVenture` | `JointVenture` |
| `JointVentureBurdenRateType` | `JointVentureBurdenRateType` |
| `JointVentureOvhdBurdenRatePct` | `JointVentureOvhdBurdenRatePct` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Joint Venture Payroll Burden - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: { dataClass:      #MASTER,
                          serviceQuality: #C,
                          sizeCategory:   #XL }
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_JntVntrOvhdBurdenRatePctTP

  as projection on R_JntVntrOvhdBurdenRatePctTP

{
  key CompanyCode,
  key JointVenture,
  key JointVentureBurdenRateType,

      JointVentureOvhdBurdenRatePct,

      _JointVenture : redirected to parent I_JointVentureTP
}
```
