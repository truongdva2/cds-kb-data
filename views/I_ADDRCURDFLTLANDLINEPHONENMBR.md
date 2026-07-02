---
name: I_ADDRCURDFLTLANDLINEPHONENMBR
description: Addrcurdfltlandlinephonenmbr
semantic_en: "current default landline phone number — the active primary landline including international dialing and extension with validity dates"
semantic_vi: "số điện thoại cố định mặc định hiện tại — số điện thoại cố định chính hoạt động bao gồm quốc tế và máy lẻ"
keywords:
  - điện thoại cố định
  - số điện thoại
  - liên lạc
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - phone
  - component:BC-SRV-ADR
  - lob:Basis Components
  - bo:AddressID
---
# I_ADDRCURDFLTLANDLINEPHONENMBR

**Addrcurdfltlandlinephonenmbr**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `AddressID` | `AddressID` |
| `AddressPersonID` | `AddressPersonID` |
| `CommMediumSequenceNumber` | `CommMediumSequenceNumber` |
| `PhoneNumberCountry` | `PhoneNumberCountry` |
| `PhoneAreaCodeSubscriberNumber` | `PhoneAreaCodeSubscriberNumber` |
| `PhoneExtensionNumber` | `PhoneExtensionNumber` |
| `InternationalLandlineNumber` | `cast( InternationalPhoneNumber as ad_curdfltlandlinephonenmbr preserving type )` |
| `InternationalPhoneNumber` | `InternationalPhoneNumber` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `_PhoneNumberCountry` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Current Default Landline Phone Number'
//@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
//@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MIXED
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_AddrCurDfltLandlinePhoneNmbr as select from I_AddressPhoneNumber_2
{
  key AddressID,
  key AddressPersonID,
      CommMediumSequenceNumber,
      PhoneNumberCountry,
      PhoneAreaCodeSubscriberNumber,
      PhoneExtensionNumber,
      cast( InternationalPhoneNumber as ad_curdfltlandlinephonenmbr preserving type ) as InternationalLandlineNumber,
      InternationalPhoneNumber,
      ValidityStartDate,
      ValidityEndDate,
      _PhoneNumberCountry
}
where PhoneNumberType = '1'
```
