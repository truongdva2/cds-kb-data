---
name: I_FREIGHTORDERTP
description: Freightordertp
semantic_en: "freight order transactional proxy — master transportation orders with shipping types, modes, carrier and shipper identification across order lifecycle."
semantic_vi: "đơn hàng vận chuyển - máy chủ proxy giao dịch — các đơn hàng vận chuyển chính với loại vận chuyển, chế độ, xác định nhà cung cấp và người gửi hàng trong vòng đời đơn hàng."
keywords:
  - đơn hàng vận chuyển
  - nhà cung cấp
  - loại vận chuyển
app_component: TM-FRM-FRO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-FRM
  - TM-FRM-FRO
  - interface-view
  - transactional-processing
  - freight
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FREIGHTORDERTP

**Freightordertp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `TransportationOrder` | `TransportationOrder` |
| `TransportationOrderType` | `TransportationOrderType` |
| `TransportationOrderCategory` | `TransportationOrderCategory` |
| `TransportationShippingType` | `TransportationShippingType` |
| `TransportationMode` | `TransportationMode` |
| `TransportationModeCategory` | `TransportationModeCategory` |
| `CarrierUUID` | `CarrierUUID` |
| `Carrier` | `Carrier` |
| `StandardCarrierAlphaCode` | `StandardCarrierAlphaCode` |
| `TranspOrdExecutingCarrierUUID` | `TranspOrdExecutingCarrierUUID` |
| `TranspOrdExecutingCarrier` | `TranspOrdExecutingCarrier` |
| `ShipperUUID` | `ShipperUUID` |
| `Shipper` | `Shipper` |
| `ShipperAddressID` | `ShipperAddressID` |
| `ConsigneeUUID` | `ConsigneeUUID` |
| `Consignee` | `Consignee` |
| `ConsigneeAddressID` | `ConsigneeAddressID` |
| `TranspPurgOrg` | `TranspPurgOrg` |
| `TranspPurgOrgExtID` | `TranspPurgOrgExtID` |
| `TranspPurgGroup` | `TranspPurgGroup` |
| `TranspPurgGroupExtID` | `TranspPurgGroupExtID` |
| `PurgOrgCompanyCode` | `PurgOrgCompanyCode` |
| `CarrierAccountNumber` | `CarrierAccountNumber` |
| `TranspMeansOfTransport` | `TranspMeansOfTransport` |
| `TranspOrdPartnerReference` | `TranspOrdPartnerReference` |
| `TranspOrdResponsiblePerson` | `TranspOrdResponsiblePerson` |
| `TranspOrdHasMltplExectgPties` | `TranspOrdHasMltplExectgPties` |
| `TranspOrdInvoicingCarrierLevel` | `TranspOrdInvoicingCarrierLevel` |
| `TranspOrdOrderDateTime` | `TranspOrdOrderDateTime` |
| `TranspOrdLifeCycleStatus` | `TranspOrdLifeCycleStatus` |
| `TranspOrderSubcontrgSts` | `TranspOrderSubcontrgSts` |
| `TransportationOrderConfSts` | `TransportationOrderConfSts` |
| `TransportationOrderExecSts` | `TransportationOrderExecSts` |
| `TranspOrdGoodsMovementStatus` | `TranspOrdGoodsMovementStatus` |
| `TranspOrdWhseProcessingStatus` | `TranspOrdWhseProcessingStatus` |
| `TranspOrderDngrsGdsSts` | `TranspOrderDngrsGdsSts` |
| `TranspOrdExecutionIsBlocked` | `TranspOrdExecutionIsBlocked` |
| `TransportationOrderCrtnType` | `TransportationOrderCrtnType` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ChangedDateTime` | `ChangedDateTime` |
| `_FreightOrderBusinessPartner` | *Association* |
| `_FreightOrderDocumentReference` | *Association* |
| `_FreightOrderItem` | *Association* |
| `_FreightOrderStop` | *Association* |
| `_FreightOrderEvent` | *Association* |
| `_FreightOrderCharge` | *Association* |
| `_FrtOrdMainBPAddrDfltRprstn` | *Association* |
| `_CarrierAddrDfltRprstn` | *Association* |
| `_ShipperAddrDfltRprstn` | *Association* |
| `_ConsigneeAddrDfltRprstn` | *Association* |
| `_ExectgCarrierAddrDfltRprstn` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Order - TP'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     sizeCategory:   #L,
     serviceQuality: #C,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['TransportationOrder'],
   representativeKey: 'TransportationOrderUUID',
   sapObjectNodeType.name: 'FreightOrder'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define root view entity I_FreightOrderTP
  provider contract transactional_interface
  as projection on R_TransportationOrderTP as FreightOrder

{
      /* Attributes */
      // Identification
  key TransportationOrderUUID,
      TransportationOrder,

      // Key Characteristics
      TransportationOrderType,
      TransportationOrderCategory,
      TransportationShippingType,
      TransportationMode,
      TransportationModeCategory,

      // Parties
      CarrierUUID,
      Carrier,
      StandardCarrierAlphaCode,
      TranspOrdExecutingCarrierUUID,
      TranspOrdExecutingCarrier,
      ShipperUUID,
      Shipper,
      ShipperAddressID,
      ConsigneeUUID,
      Consignee,
      ConsigneeAddressID,

      TranspPurgOrg,
      TranspPurgOrgExtID,
      TranspPurgGroup,
      TranspPurgGroupExtID,
      PurgOrgCompanyCode,
      CarrierAccountNumber,

      // Further Attributes
      TranspMeansOfTransport,
      TranspOrdPartnerReference,
      TranspOrdResponsiblePerson,
      TranspOrdHasMltplExectgPties,
      TranspOrdInvoicingCarrierLevel,
      TranspOrdOrderDateTime,

      // Status
      TranspOrdLifeCycleStatus,
      TranspOrderSubcontrgSts,
      TransportationOrderConfSts,
      TransportationOrderExecSts,
      TranspOrdGoodsMovementStatus,
      TranspOrdWhseProcessingStatus,
      TranspOrderDngrsGdsSts,
      @Semantics.booleanIndicator: true
      TranspOrdExecutionIsBlocked,

      // Administrative Data
      TransportationOrderCrtnType,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      ChangedDateTime,

      /* Redirections */
      FreightOrder._TransportationOrderBP       as _FreightOrderBusinessPartner   : redirected to composition child I_FreightOrderBPTP,
      FreightOrder._TranspOrdDocumentReference  as _FreightOrderDocumentReference : redirected to composition child I_FreightOrderDocRefTP,
      FreightOrder._TransportationOrderItem     as _FreightOrderItem              : redirected to composition child I_FreightOrderItemTP,
      FreightOrder._TransportationOrderStop     as _FreightOrderStop              : redirected to composition child I_FreightOrderStopTP,
      FreightOrder._TransportationOrderEvent    as _FreightOrderEvent             : redirected to composition child I_FreightOrderEventTP,
      FreightOrder._TransportationOrderCharge   as _FreightOrderCharge            : redirected to composition child I_FreightOrderChargeTP,
      FreightOrder._TrOrdMainBPAddrDfltRprstn   as _FrtOrdMainBPAddrDfltRprstn    : redirected to composition child I_FrtOrdMainBPAddrDfltRprstnTP,

      /* Association redirections */
      FreightOrder._CarrierAddrDfltRprstn       as _CarrierAddrDfltRprstn         : redirected to I_FrtOrdMainBPAddrDfltRprstnTP,
      FreightOrder._ShipperAddrDfltRprstn       as _ShipperAddrDfltRprstn         : redirected to I_FrtOrdMainBPAddrDfltRprstnTP,
      FreightOrder._ConsigneeAddrDfltRprstn     as _ConsigneeAddrDfltRprstn       : redirected to I_FrtOrdMainBPAddrDfltRprstnTP,
      FreightOrder._ExectgCarrierAddrDfltRprstn as _ExectgCarrierAddrDfltRprstn   : redirected to I_FrtOrdMainBPAddrDfltRprstnTP

}
where
  TransportationOrderCategory = 'TO'
```
