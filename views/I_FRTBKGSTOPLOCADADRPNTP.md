---
name: I_FRTBKGSTOPLOCADADRPNTP
description: Frtbkgstoplocadadrpntp
semantic_en: "freight booking stop location address additional representation transposition — stores alternative address representations for transportation stops within freight booking orders."
semantic_vi: "địa chỉ điểm dừng vận đơn bổ sung — lưu giữ các dạng địa chỉ thay thế cho các điểm dừng trong lệnh vận tải hàng không."
keywords:
  - địa chỉ điểm dừng vận tải
  - đại diện địa chỉ bổ sung
  - điểm dừng hàng không
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
# I_FRTBKGSTOPLOCADADRPNTP

**Frtbkgstoplocadadrpntp**

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
| `AddressRepresentationCode` | `AddressRepresentationCode` |
| `TransportationOrderUUID` | `TransportationOrderUUID` |
| `AddressID` | `AddressID` |
| `AddresseeFullName` | `AddresseeFullName` |
| `CityName` | `CityName` |
| `PostalCode` | `PostalCode` |
| `StreetName` | `StreetName` |
| `HouseNumber` | `HouseNumber` |
| `Country` | `Country` |
| `Region` | `Region` |
| `_AddressRepresentationCode` | *Association* |
| `_FreightBooking` | *Association* |
| `_FrtBkgStopLocAddrDfltRprstn` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Stop Loc Addr Addl Rpn - TP'
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
   sapObjectNodeType.name: 'FrtBkgStopLocAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgStopLocAdAdRpnTP
  as projection on R_TrOrdStopLocAddrAddlRprstnTP as FrtBkgStopLocAddrAddlRprstn
{
  key TransportationOrderStopUUID,
      @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
  key AddressRepresentationCode,
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

      _AddressRepresentationCode,

      /* Redirections */
      _TransportationOrder         as _FreightBooking              : redirected to I_FreightBookingTP,
      _TrOrdStopLocAddrDfltRprstn  as _FrtBkgStopLocAddrDfltRprstn : redirected to parent I_FrtBkgStopLocAdDfRpnTP
}
where
  TransportationOrderCategory = 'BO'
```
