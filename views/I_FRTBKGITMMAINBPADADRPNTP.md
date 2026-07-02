---
name: I_FRTBKGITMMAINBPADADRPNTP
description: Frtbkgitmmainbpadadrpntp
semantic_en: "freight booking item main business partner address additional representation transposition — stores alternative address representations for main business partners at the order item level."
semantic_vi: "địa chỉ đối tác kinh doanh chính mục vận đơn bổ sung — lưu giữ các dạng địa chỉ thay thế cho đối tác chính ở cấp mục vận tải."
keywords:
  - địa chỉ đối tác mục vận đơn
  - đại diện địa chỉ bổ sung
  - mục vận tải hàng không
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
# I_FRTBKGITMMAINBPADADRPNTP

**Frtbkgitmmainbpadadrpntp**

| Property | Value |
|---|---|
| App Component | `TM-FRM-FRB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TransportationOrderItemUUID` | `TransportationOrderItemUUID` |
| `TranspOrdBizPartnerFunction` | `TranspOrdBizPartnerFunction` |
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
| `_PartnerFunction` | *Association* |
| `_FreightBooking` | *Association* |
| `_FrtBkgItmMainBPAddrDfltRprstn` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Frt Bkg Itm Main BP Addr Ad Rpn - TP'
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
   representativeKey: 'TransportationOrderItemUUID',
   sapObjectNodeType.name: 'FrtBkgItmMainBPAddrAddlRprstn'
}
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY

define view entity I_FrtBkgItmMainBPAdAdRpnTP
  as projection on R_TrOrdItmMnBPAddrAddlRprstnTP as FrtBkgItmMainBPAddrAddlRprstn
{
  key TransportationOrderItemUUID,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key TranspOrdBizPartnerFunction,
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
      _PartnerFunction,

      /* Redirections */
      _TransportationOrder           as _FreightBooking                : redirected to I_FreightBookingTP,
      _TrOrdItmMnBPAddrDfltRprstn    as _FrtBkgItmMainBPAddrDfltRprstn : redirected to parent I_FrtBkgItmMainBPAdDfRpnTP
}
where
  TransportationOrderCategory = 'BO'
```
