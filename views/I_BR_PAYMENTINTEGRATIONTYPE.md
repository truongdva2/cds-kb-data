---
name: I_BR_PAYMENTINTEGRATIONTYPE
description: BR Paymentintegrationtype
semantic_en: "value-help for Brazil payment system integration type — displays payment system integration classification codes (PaymentSystemIntegrationType)."
semantic_vi: "danh sách giá trị cho loại tích hợp hệ thống thanh toán Brazil — hiển thị các mã phân loại loại tích hợp hệ thống thanh toán (PaymentSystemIntegrationType)."
keywords:
  - loại tích hợp thanh toán
  - hệ thống thanh toán
  - Brazil
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - payment
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:PaymentSystemIntegrationType
---
# I_BR_PAYMENTINTEGRATIONTYPE

**BR Paymentintegrationtype**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PaymentSystemIntegrationType` | `cast ( substring( domvalue_l, 1, 1 ) as logbr_tpintegra preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_PaytIntegrationTypeText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Integration Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRTPINTEGRA'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PaymentSystemIntegrationType'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_PaymentIntegrationType as select from dd07l
  association [0..*] to I_BR_PaytIntegrationTypeText as _Text on $projection.PaymentSystemIntegrationType = _Text.PaymentSystemIntegrationType
{
    @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 1 ) as logbr_tpintegra preserving type ) as PaymentSystemIntegrationType, 
    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
    _Text
}
where domname = 'J_1BNFE_TPINTEGRA' 
  and as4local = 'A'
```
