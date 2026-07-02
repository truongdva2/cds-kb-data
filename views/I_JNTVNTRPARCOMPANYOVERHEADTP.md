---
name: I_JNTVNTRPARCOMPANYOVERHEADTP
description: Jntvntrparcompanyoverheadtp
semantic_en: "joint venture parent company overhead transfer pricing view — parent overhead cost center, project, and order assignments"
semantic_vi: "phép chiếu định giá chuyển giao chi phí chung công ty mẹ — gán trung tâm chi phí, dự án, đơn hàng"
keywords:
  - liên doanh
  - chi phí chung
  - công ty mẹ
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
# I_JNTVNTRPARCOMPANYOVERHEADTP

**Jntvntrparcompanyoverheadtp**

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
| `JointVentureEquityType` | `JointVentureEquityType` |
| `JntVntrParentCoOvhdExpnCostCtr` | `JntVntrParentCoOvhdExpnCostCtr` |
| `JntVntrParentCoOvhdProject` | `JntVntrParentCoOvhdProject` |
| `JntVntrParentCoOvhdExpnOrder` | `JntVntrParentCoOvhdExpnOrder` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'JVA Parent Company Overhead - TP'
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.usageType: { dataClass:      #MASTER,
                          serviceQuality: #C,
                          sizeCategory:   #XL }
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_JntVntrParCompanyOverheadTP

  as projection on R_JntVntrParCompanyOverheadTP

{
  key CompanyCode,
  key JointVenture,
  key JointVentureEquityType,

      JntVntrParentCoOvhdExpnCostCtr,
      JntVntrParentCoOvhdProject,
      JntVntrParentCoOvhdExpnOrder,

      _JointVenture : redirected to parent I_JointVentureTP
}
```
