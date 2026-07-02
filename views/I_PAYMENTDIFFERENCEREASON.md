---
name: I_PAYMENTDIFFERENCEREASON
description: Paymentdifferencereason
semantic_en: "payment difference reason — classification reason for payment differences with dispute and GL account charge indicators."
semantic_vi: "lý do chênh lệch thanh toán — lý do phân loại cho các chênh lệch thanh toán với chỉ dấu tranh chấp và tính phí tài khoản GL."
keywords:
  - chênh lệch thanh toán
  - lý do chênh lệch
  - tranh chấp
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - payment
  - component:FI-AR-IS-2CL
  - lob:Finance
  - bo:PaymentDifferenceReason
---
# I_PAYMENTDIFFERENCEREASON

**Paymentdifferencereason**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `cast (bukrs as fis_bukrs)` |
| `PaymentDifferenceReason` | `cast (rstgr as farp_rstgr)` |
| `IsDisputed` | `xstrp` |
| `PaytDiffIsChargedToSprtGLAcct` | `xausb` |
| `_Text` | *Association* |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentDifferenceReasonT` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |

## Source Code

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #M //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #A //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #CUSTOMIZING //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE ]
@EndUserText.label: 'Payment Difference Reason'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPAYDIFFREASON'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentDifferenceReason'
@Metadata.ignorePropagatedAnnotations: true

define view I_PaymentDifferenceReason
  as select from t053r
  association [0..*] to I_PaymentDifferenceReasonT as _Text        on  $projection.CompanyCode             = _Text.CompanyCode
                                                                   and $projection.PaymentDifferenceReason = _Text.PaymentDifferenceReason
  association [1..1] to I_CompanyCode              as _CompanyCode on  $projection.CompanyCode = _CompanyCode.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast (bukrs as fis_bukrs)  as CompanyCode,
      @ObjectModel.text.association: '_Text'
  key cast (rstgr as farp_rstgr) as PaymentDifferenceReason,
      xstrp                      as IsDisputed,
      xausb                      as PaytDiffIsChargedToSprtGLAcct,
      _Text,
      _CompanyCode
};
```
