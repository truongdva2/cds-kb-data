---
name: I_SCHEDGAGRMTDELIVERYADDRTP_2
description: Schedgagrmtdeliveryaddrtp 2
semantic_en: "scheduling agreement delivery address — records delivery address details including address type, location, and contact information for scheduled purchases."
semantic_vi: "địa chỉ giao hàng hợp đồng lập kế hoạch — lưu trữ thông tin chi tiết địa chỉ giao hàng bao gồm loại địa chỉ, vị trí, và thông tin liên hệ cho các lần giao hàng theo kế hoạch."
keywords:
  - địa chỉ giao hàng
  - hợp đồng lập kế hoạch
  - loại địa chỉ
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - delivery
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# I_SCHEDGAGRMTDELIVERYADDRTP_2

**Schedgagrmtdeliveryaddrtp 2**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SchedulingAgreement` | `SchedulingAgreement` |
| `SchedulingAgreementItem` | `SchedulingAgreementItem` |
| `DeliveryAddressID` | `DeliveryAddressID` |
| `AddressType` | `AddressType` |
| `PurchasingDeliveryAddressType` | `PurchasingDeliveryAddressType` |
| `FullName` | `FullName` |
| `StreetName` | `StreetName` |
| `HouseNumber` | `HouseNumber` |
| `PostalCode` | `PostalCode` |
| `CityName` | `CityName` |
| `MobileNumber` | `MobileNumber` |
| `Region` | `Region` |
| `Country` | `Country` |
| `EmailAddress` | `EmailAddress` |
| `Plant` | `Plant` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `PhoneNumber` | `PhoneNumber` |
| `FaxNumber` | `FaxNumber` |
| `AddressFaxNumber` | `AddressFaxNumber` |
| `LastChangeDateTime` | `LastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Scheduling Agreement Delivery Address'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel: {
    usageType: {
      sizeCategory: #L,
      serviceQuality: #C,
      dataClass: #MIXED
    }
  }
  
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SchedgAgrmtDeliveryAddrTP_2
  as projection on R_SchedgAgrmtDeliveryAddressTP
{
  key SchedulingAgreement,
  key SchedulingAgreementItem,
      DeliveryAddressID,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PurchasingDeliveryAddressType'      
      AddressType,
      PurchasingDeliveryAddressType,
      FullName,
      StreetName,
      HouseNumber,
      PostalCode,
      CityName,
      MobileNumber,
      Region,
      Country,
      EmailAddress,
      Plant,
      CorrespondenceLanguage,
      PhoneNumber,
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'AddressFaxNumber'    
      FaxNumber,
      AddressFaxNumber,
      LastChangeDateTime,

      /* Associations */
      _SchedgAgrmtItm : redirected to parent I_SchedgAgrmtItmTP_2,
      _PurSchedgAgrmt : redirected to I_SchedgAgrmtHdrTP_2
}
```
