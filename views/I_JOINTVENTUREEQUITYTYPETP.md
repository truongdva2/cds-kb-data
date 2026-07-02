---
name: I_JOINTVENTUREEQUITYTYPETP
description: Jointventureequitytypetp
semantic_en: "joint venture equity type transfer pricing view — equity type, funding date, equity group, and billing currency by venture"
semantic_vi: "phép chiếu định giá chuyển giao loại cổ phần — loại cổ phần, ngày tài trợ, nhóm cổ phần, tiền tệ thanh toán"
keywords:
  - liên doanh
  - loại cổ phần
  - định giá
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
# I_JOINTVENTUREEQUITYTYPETP

**Jointventureequitytypetp**

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
| `JntVntrEquityFundingDateValue` | `JntVntrEquityFundingDateValue` |
| `JointVentureEquityGroup` | `JointVentureEquityGroup` |
| `JointVentureEquityGroupActive` | `JointVentureEquityGroupActive` |
| `JointVentureDefBillCurrency` | `JointVentureDefBillCurrency` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Joint Venture Equity Type - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
   usageType: {
     dataClass:      #MASTER,
     serviceQuality: #C,
     sizeCategory:   #XL
   }
}

define view entity I_JointVentureEquityTypeTP

  as projection on R_JointVentureEquityTypeTP

{
  key CompanyCode,
  key JointVenture,
  key JointVentureEquityType,
  key JntVntrEquityFundingDateValue,

      JointVentureEquityGroup,
      JointVentureEquityGroupActive,
      JointVentureDefBillCurrency,

      _JointVenture : redirected to parent I_JointVentureTP
}
```
