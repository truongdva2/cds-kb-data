---
name: I_FRTBKGSTOPLOCADDFRPNTP
description: Frtbkgstoplocaddfrpntp
semantic_en: "freight booking stop location address default representation transposition — provides primary address information for transportation stops within freight booking orders."
semantic_vi: "địa chỉ điểm dừng vận đơn mặc định — cung cấp thông tin địa chỉ chính cho các điểm dừng trong lệnh vận tải hàng không."
keywords:
  - địa chỉ điểm dừng mặc định
  - thông tin vị trí dừng
  - lệnh vận tải hàng không
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
  - component:TM-FRM-FRB-2CL
  - lob:Other
---
# I_FRTBKGSTOPLOCADDFRPNTP

**Frtbkgstoplocaddfrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrderStopUUID` | `TransportationOrderStopUUID` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `AddressID` | `AddressID` |
| `AddresseeFullName` | `AddresseeFullName` |
| `CityName` | `CityName` |
| `PostalCode` | `PostalCode` |
| `StreetName` | `StreetName` |
| `HouseNumber` | `HouseNumber` |
| `Country` | `Country` |
| `Region` | `Region` |
| `_FrtBkgStopLocAddrAddlRprstn` | *Association* |
| `_FreightBookingStop` | *Association* |
| `_FreightBooking` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Stop Loc Addr Dflt Rpn - TP'
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
   semanticKey: ['AddressID'],
   representativeKey: 'TransportationOrderStopUUID',
   sapObjectNodeType.name: 'FrtBkgStopLocAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgStopLocAdDfRpnTP
  as projection on R_TrOrdStopLocAddrDfltRprstnTP as FrtBkgStopLocAddrDfltRprstn
{
  key TransportationOrderStopUUID,
      TransportationOrderUUID,

      // Identification for Address
      AddressID,

      // Postal Address
      AddresseeFullName,
      CityName,
      PostalCode,
      StreetName,
      HouseNumber,
      Country,
      Region,

      /* Redirections */
      _TrOrdStopLocAddrAddlRprstn  as _FrtBkgStopLocAddrAddlRprstn : redirected to composition child I_FrtBkgStopLocAdAdRpnTP,
      _TransportationOrderStop     as _FreightBookingStop          : redirected to parent I_FreightBookingStopTP,
      _TransportationOrder         as _FreightBooking              : redirected to I_FreightBookingTP
}
where
  TransportationOrderCategory = 'BO'
```
