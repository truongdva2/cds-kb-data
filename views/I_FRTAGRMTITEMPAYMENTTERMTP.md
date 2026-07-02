---
name: I_FRTAGRMTITEMPAYMENTTERMTP
description: Frtagrmtitempaymenttermtp
semantic_en: "freight agreement payment terms transactional proxy — payment term assignments linked to agreement items."
semantic_vi: "điều khoản thanh toán hợp đồng vận chuyển - máy chủ proxy giao dịch — phân công điều khoản thanh toán được liên kết với các mặt hàng hợp đồng."
keywords:
  - điều khoản thanh toán
  - hợp đồng vận chuyển
  - thanh toán
app_component: TM-FRA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRA
  - interface-view
  - transactional-processing
  - payment
  - item-level
  - component:TM-FRA-2CL
  - lob:Other
---
# I_FRTAGRMTITEMPAYMENTTERMTP

**Frtagrmtitempaymenttermtp**

| Property | Value |
|---|---|
| App Component | `TM-FRA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspAgrmtPaymentTermUUID` | `TranspAgrmtPaymentTermUUID` |
| `TranspAgreementItemUUID` | `TranspAgreementItemUUID` |
| `TransportationAgreementUUID` | `TransportationAgreementUUID` |
| `PaymentTerms` | `PaymentTerms` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Agreement Payment Terms - TP'
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  },
  sapObjectNodeType.name:'FrtAgrmtItemPaymentTerm'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@OData.entityType.name: 'FrtAgrmtItemPaymentTerm_Type'
define view entity I_FrtAgrmtItemPaymentTermTP
  as projection on R_FrtAgrmtItemPaymentTermTP as FrtAgrmtItemPaymentTerm
{
  key TranspAgrmtPaymentTermUUID,
      TranspAgreementItemUUID,
      TransportationAgreementUUID,
      PaymentTerms,

      //Association
      FrtAgrmtItemPaymentTerm._FreightAgreement     : redirected to I_FreightAgreementTP,

      //To Parent
      FrtAgrmtItemPaymentTerm._FreightAgreementItem : redirected to parent I_FreightAgreementItemTP
}
```
