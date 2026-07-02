---
name: I_JNTOPGAGRMTPNLTYCATRCVRYTP
description: Jntopgagrmtpnltycatrcvrytp
semantic_en: "joint venture operating agreement penalty category recovery percentages — transfer pricing view of penalty recovery rates by category"
semantic_vi: "tỷ lệ phục hồi phạt theo phân loại trong thỏa thuận vận hành liên doanh — dữ liệu định giá chuyển giao"
keywords:
  - liên doanh
  - phạt
  - định giá chuyển giao
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
# I_JNTOPGAGRMTPNLTYCATRCVRYTP

**Jntopgagrmtpnltycatrcvrytp**

| Property | Value |
|---|---|
| App Component | `CA-JVA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `JntOpgAgrmtPnltyCatRcvry.CompanyCode` |
| `JntOpgAgrmt` | `JntOpgAgrmtPnltyCatRcvry.JntOpgAgrmt` |
| `JntVntrPenaltyCategory` | `JntOpgAgrmtPnltyCatRcvry.JntVntrPenaltyCategory` |
| `JntVntrNonSignatoryRcvryPct` | `JntOpgAgrmtPnltyCatRcvry.JntVntrNonSignatoryRcvryPct` |
| `JntVntrNonConsentRcvryPnltyPct` | `JntOpgAgrmtPnltyCatRcvry.JntVntrNonConsentRcvryPnltyPct` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Penalty Category Recovery Percentage - TP'
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

define view entity I_JntOpgAgrmtPnltyCatRcvryTP
  as projection on R_JntOpgAgrmtPnltyCatRcvryTP as JntOpgAgrmtPnltyCatRcvry

{
  key JntOpgAgrmtPnltyCatRcvry.CompanyCode,
  key JntOpgAgrmtPnltyCatRcvry.JntOpgAgrmt,
  key JntOpgAgrmtPnltyCatRcvry.JntVntrPenaltyCategory,

      JntOpgAgrmtPnltyCatRcvry.JntVntrNonSignatoryRcvryPct,
      JntOpgAgrmtPnltyCatRcvry.JntVntrNonConsentRcvryPnltyPct,

      _JntOpgAgrmt : redirected to parent I_JntOpgAgrmtTP
}
```
