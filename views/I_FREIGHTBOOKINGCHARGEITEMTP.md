---
name: I_FREIGHTBOOKINGCHARGEITEMTP
description: Freightbookingchargeitemtp
semantic_en: "freight booking charge item transactional proxy — individual charge line items with calculation levels, currency conversions, and posting status."
semantic_vi: "mặt hàng phí đặt hàng vận chuyển - máy chủ proxy giao dịch — các dòng phí riêng lẻ với mức tính toán, chuyển đổi tiền tệ và trạng thái ghi chép."
keywords:
  - mặt hàng phí
  - đặt hàng vận chuyển
  - tính toán phí
app_component: TM-FRM-FRB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRB
  - interface-view
  - transactional-processing
  - freight
  - item-level
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FREIGHTBOOKINGCHARGEITEMTP

**Freightbookingchargeitemtp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspChargeItemUUID` | `TranspChargeItemUUID` |
| `TransportationChargesObjUUID` | `TransportationChargesObjUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TranspChargeCalcLevelRefUUID` | `TranspChargeCalcLevelRefUUID` |
| `TransportationAgreementUUID` | `TransportationAgreementUUID` |
| `BusinessPartnerUUID` | `BusinessPartnerUUID` |
| `TranspChargeCalcLevel` | `TranspChargeCalcLevel` |
| `TranspChargePostingStatus` | `TranspChargePostingStatus` |
| `TranspChrgItemDocCurrency` | `TranspChrgItemDocCurrency` |
| `TranspChrgItmTotAmtInDocCrcy` | `TranspChrgItmTotAmtInDocCrcy` |
| `TranspChrgItemLoclCurrency` | `TranspChrgItemLoclCurrency` |
| `TranspChrgItmTotAmtInLoclCrcy` | `TranspChrgItmTotAmtInLoclCrcy` |
| `TranspChargeItemCalcDateTme` | `TranspChargeItemCalcDateTme` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `TranspChargePostingDate` | `TranspChargePostingDate` |
| `TranspChrgCalcDteTmeIsChanged` | `TranspChrgCalcDteTmeIsChanged` |
| `PaymentTerms` | `PaymentTerms` |
| `_FreightBooking` | *Association* |
| `_FreightBookingCharge` | *Association* |
| `_FrtBkgChrgElement` | *Association* |
| `_FrtBkgChrgItmExchRate` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Booking Charge Item - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
  serviceQuality: #B,
  sizeCategory: #XXL,
  dataClass: #TRANSACTIONAL
   },
   representativeKey: 'TranspChargeItemUUID',
   sapObjectNodeType.name: 'FreightBookingChargeItem'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_FreightBookingChargeItemTP
  as projection on R_TranspOrderChargeItemTP
{
  key TranspChargeItemUUID,
      TransportationChargesObjUUID,
      TransportationOrderUUID,
      TranspChargeCalcLevelRefUUID,
      TransportationAgreementUUID,
      BusinessPartnerUUID,
      TranspChargeCalcLevel,
      TranspChargePostingStatus,
      TranspChrgItemDocCurrency,
      @Semantics.amount.currencyCode: 'TranspChrgItemDocCurrency'
      TranspChrgItmTotAmtInDocCrcy,
      TranspChrgItemLoclCurrency,
      @Semantics.amount.currencyCode: 'TranspChrgItemLoclCurrency'
      TranspChrgItmTotAmtInLoclCrcy,
      TranspChargeItemCalcDateTme,
      ExchangeRateDate,
      TranspChargePostingDate,
      TranspChrgCalcDteTmeIsChanged,
      PaymentTerms,

      /* Redirections */
      _TransportationOrder        as _FreightBooking        : redirected to I_FreightBookingTP,
      _TransportationOrderCharge  as _FreightBookingCharge  : redirected to parent I_FreightBookingChargeTP,
      _TranspOrdChrgElmnt         as _FrtBkgChrgElement     : redirected to composition child I_FrtBkgChrgElementTP,
      _TranspOrdChrgItmExchRate   as _FrtBkgChrgItmExchRate : redirected to composition child I_FrtBkgChrgItmExchRateTP
}
where
  TransportationOrderCategory = 'BO'
```
