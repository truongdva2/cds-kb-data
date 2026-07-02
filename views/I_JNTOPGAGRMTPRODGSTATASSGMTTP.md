---
name: I_JNTOPGAGRMTPRODGSTATASSGMTTP
description: Jntopgagrmtprodgstatassgmttp
semantic_en: "joint venture producing statistical ratio assignment — drilling depth ranges for production statistical ratio identification"
semantic_vi: "phân công tỷ lệ thống kê sản xuất của liên doanh — phạm vi độ sâu khoan cho xác định tỷ lệ thống kê"
keywords:
  - liên doanh
  - sản xuất
  - tỷ lệ thống kê
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
# I_JNTOPGAGRMTPRODGSTATASSGMTTP

**Jntopgagrmtprodgstatassgmttp**

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
| `JntOpgAgrmt` | `JntOpgAgrmt` |
| `JntVntrProducingStstclRatioID` | `JntVntrProducingStstclRatioID` |
| `JntVntrDrillingFromDepth` | `JntVntrDrillingFromDepth` |
| `JntVntrDrillingToDepth` | `JntVntrDrillingToDepth` |
| `_CompanyCode` | *Association* |
| `_JntVntrProdgStstclRatio` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'JVA Producing Statistical Ratio - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: { supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
                modelingPattern: #TRANSACTIONAL_INTERFACE,
                usageType: { dataClass:      #MASTER,
                             serviceQuality: #C,
                             sizeCategory:   #XL } }
@VDM: { viewType: #TRANSACTIONAL,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_JntOpgAgrmtProdgStatAssgmtTP

  as projection on R_JntOpgAgrmtProdgStatAssgmtTP

{
  key CompanyCode,
  key JntOpgAgrmt,
  key JntVntrProducingStstclRatioID,

      JntVntrDrillingFromDepth,
      JntVntrDrillingToDepth,

      _CompanyCode,
      _JntVntrProdgStstclRatio,

      _JntOpgAgrmt : redirected to parent I_JntOpgAgrmtTP
}
```
