---
name: I_FRTORDSTOPLOCADDFRPNTP
description: Frtordstoplocaddfrpntp
semantic_en: "freight order stop location address default representation transposition — provides primary address information for transportation stops within freight orders."
semantic_vi: "địa chỉ điểm dừng lệnh vận tải mặc định — cung cấp thông tin địa chỉ chính cho các điểm dừng trong lệnh vận tải."
keywords:
  - địa chỉ điểm dừng mặc định
  - thông tin vị trí dừng
  - lệnh vận tải
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
  - component:TM-FRM-FRO-2CL
  - lob:Other
---
# I_FRTORDSTOPLOCADDFRPNTP

**Frtordstoplocaddfrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRO-2CL` |
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
| `_FrtOrdStopLocAddrAddlRprstn` | *Association* |
| `_FreightOrderStop` | *Association* |
| `_FreightOrder` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Frt Ord Stop Loc Addr Dflt Rpn - TP'
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
   sapObjectNodeType.name: 'FrtOrdStopLocAddrDfltRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtOrdStopLocAdDfRpnTP
  as projection on R_TrOrdStopLocAddrDfltRprstnTP as FrtOrdStopLocAddrDfltRprstn
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
      _TrOrdStopLocAddrAddlRprstn  as _FrtOrdStopLocAddrAddlRprstn : redirected to composition child I_FrtOrdStopLocAdAdRpnTP,
      _TransportationOrderStop     as _FreightOrderStop            : redirected to parent I_FreightOrderStopTP,
      _TransportationOrder         as _FreightOrder                : redirected to I_FreightOrderTP
}
where
  TransportationOrderCategory = 'TO'
```
