---
name: I_ADDRESSDEFAULTREPRESENTATION
description: Addressdefaultrepresentation
semantic_en: "address default representation — master address data including names and representation codes in preferred language script"
semantic_vi: "biểu diễn mặc định của địa chỉ — dữ liệu địa chỉ chính bao gồm tên và mã biểu diễn theo kịch tự ngôn ngữ ưu tiên"
keywords:
  - địa chỉ
  - biểu diễn
  - tên
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
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
  - bo:AddressID
---
# I_ADDRESSDEFAULTREPRESENTATION

**Addressdefaultrepresentation**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `AddressID` | `Address.AddressID` |
| `AddressPersonID` | `Address.AddressPersonID` |
| `AddressRepresentationCode` | `Address.AddressRepresentationCode` |
| `AddressObjectType` | `Address.AddressObjectType` |
| `CorrespondenceLanguage` | `Address.CorrespondenceLanguage` |
| `PrfrdCommMediumType` | `Address.PrfrdCommMediumType` |
| `AddresseeFullName` | `Address.AddresseeFullName` |
| `PersonGivenName` | `Address.PersonGivenName` |
| `PersonFamilyName` | `Address.PersonFamilyName` |
| `OrganizationName1` | `Address.OrganizationName1` |
| `OrganizationName2` | `Address.OrganizationName2` |
| `OrganizationName3` | `Address.OrganizationName3` |
| `OrganizationName4` | `Address.OrganizationName4` |
| `AddressSearchTerm1` | `Address.AddressSearchTerm1` |
| `AddressSearchTerm2` | `Address.AddressSearchTerm2` |
| `CityNumber` | `Address.CityNumber` |
| `CityName` | `Address.CityName` |
| `DistrictName` | `Address.DistrictName` |
| `VillageName` | `Address.VillageName` |
| `PostalCode` | `Address.PostalCode` |
| `CompanyPostalCode` | `Address.CompanyPostalCode` |
| `Street` | `Address.Street` |
| `StreetName` | `Address.StreetName` |
| `StreetAddrNonDeliverableReason` | `Address.StreetAddrNonDeliverableReason` |
| `StreetPrefixName1` | `Address.StreetPrefixName1` |
| `StreetPrefixName2` | `Address.StreetPrefixName2` |
| `StreetSuffixName1` | `Address.StreetSuffixName1` |
| `StreetSuffixName2` | `Address.StreetSuffixName2` |
| `HouseNumber` | `Address.HouseNumber` |
| `HouseNumberSupplementText` | `Address.HouseNumberSupplementText` |
| `Building` | `Address.Building` |
| `Floor` | `Address.Floor` |
| `RoomNumber` | `Address.RoomNumber` |
| `Country` | `Address.Country` |
| `Region` | `Address.Region` |
| `FormOfAddress` | `Address.FormOfAddress` |
| `TaxJurisdiction` | `Address.TaxJurisdiction` |
| `TransportZone` | `Address.TransportZone` |
| `POBox` | `Address.POBox` |
| `POBoxAddrNonDeliverableReason` | `Address.POBoxAddrNonDeliverableReason` |
| `POBoxIsWithoutNumber` | `Address.POBoxIsWithoutNumber` |
| `POBoxPostalCode` | `Address.POBoxPostalCode` |
| `POBoxLobbyName` | `Address.POBoxLobbyName` |
| `POBoxDeviatingCityName` | `Address.POBoxDeviatingCityName` |
| `POBoxDeviatingCityCode` | `Address.POBoxDeviatingCityCode` |
| `POBoxDeviatingRegion` | `Address.POBoxDeviatingRegion` |
| `POBoxDeviatingCountry` | `Address.POBoxDeviatingCountry` |
| `CareOfName` | `Address.CareOfName` |
| `DeliveryServiceTypeCode` | `Address.DeliveryServiceTypeCode` |
| `DeliveryServiceNumber` | `Address.DeliveryServiceNumber` |
| `AddressTimeZone` | `Address.AddressTimeZone` |
| `SecondaryRegion` | `Address.SecondaryRegion` |
| `SecondaryRegionName` | `Address.SecondaryRegionName` |
| `TertiaryRegion` | `Address.TertiaryRegion` |
| `TertiaryRegionName` | `Address.TertiaryRegionName` |
| `RegionalStructureCheckStatus` | `Address.RegionalStructureCheckStatus` |
| `AddressGroup` | `Address.AddressGroup` |
| `_AddressGroup` | *Association* |
| `_AddressObjectType` | *Association* |
| `_AddressPersonName` | *Association* |
| `_AddressRepresentationCode` | *Association* |
| `_CorrespondenceLanguage` | *Association* |
| `_Country` | *Association* |
| `_CurrentDfltEmailAddress` | *Association* |
| `_CurrentDfltFaxNumber` | *Association* |
| `_CurrentDfltLandlinePhoneNmbr` | *Association* |
| `_CurrentDfltMobilePhoneNumber` | *Association* |
| `_DeliveryServiceTypeCode` | *Association* |
| `_EmailAddress` | *Association* |
| `_FaxNumber` | *Association* |
| `_FormOfAddress` | *Association* |
| `_MainWebsiteURL` | *Association* |
| `_OrganizationAddress` | *Association* |
| `_PersonAddress` | *Association* |
| `_PhoneNumber` | *Association* |
| `_POBoxAddrNonDeliverableReason` | *Association* |
| `_POBoxDeviatingCityCode` | *Association* |
| `_POBoxDeviatingCountry` | *Association* |
| `_POBoxDeviatingRegion` | *Association* |
| `_PostalCity` | *Association* |
| `_PrfrdCommMediumType` | *Association* |
| `_Region` | *Association* |
| `_RegionalStructureCheckStatus` | *Association* |
| `_SecondaryRegion` | *Association* |
| `_Street` | *Association* |
| `_StreetAddrNonDeliverableRsn` | *Association* |
| `_TertiaryRegion` | *Association* |
| `_TimeZone` | *Association* |
| `_TransportationZone` | *Association* |
| `_UniformResourceIdentifier` | *Association* |
| `_AddrAdditionalRepresentation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AddrAdditionalRepresentation` | `I_Address_2` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.privilegedAssociations: ['_AddrAdditionalRepresentation', '_OrganizationAddress', '_PersonAddress', '_EmailAddress', '_CurrentDfltEmailAddress', '_PhoneNumber', '_CurrentDfltLandlinePhoneNmbr', '_CurrentDfltMobilePhoneNumber', '_FaxNumber', '_CurrentDfltFaxNumber', '_UniformResourceIdentifier', '_MainWebsiteURL']
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'I_AddressDefaultRprstn'
@EndUserText.label: 'Dflt Addr Rprstn of an Org or a Person'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType:{
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #MIXED
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_AddressDefaultRepresentation
  as select from I_Address_2 as Address
  association [0..*] to I_Address_2 as _AddrAdditionalRepresentation on  $projection.AddressID                                   = _AddrAdditionalRepresentation.AddressID
                                                                     and $projection.AddressPersonID                             = _AddrAdditionalRepresentation.AddressPersonID
                                                                     and _AddrAdditionalRepresentation.AddressRepresentationCode is not initial
{
  key Address.AddressID,
      @ObjectModel.foreignKey.association: '_AddressPersonName'
      Address.AddressPersonID,
      @ObjectModel.foreignKey.association: '_AddressRepresentationCode'
      Address.AddressRepresentationCode,
      Address.AddressObjectType,
      Address.CorrespondenceLanguage,
      Address.PrfrdCommMediumType,
      Address.AddresseeFullName,
      Address.PersonGivenName,
      Address.PersonFamilyName,
      Address.OrganizationName1,
      Address.OrganizationName2,
      Address.OrganizationName3,
      Address.OrganizationName4,
      Address.AddressSearchTerm1,
      Address.AddressSearchTerm2,
      Address.CityNumber,
      Address.CityName,
      Address.DistrictName,
      Address.VillageName,
      Address.PostalCode,
      Address.CompanyPostalCode,
      Address.Street,
      Address.StreetName,
      @EndUserText.label: 'Street Address Non-Deliverable Reason'
      Address.StreetAddrNonDeliverableReason,
      Address.StreetPrefixName1,
      Address.StreetPrefixName2,
      Address.StreetSuffixName1,
      Address.StreetSuffixName2,
      Address.HouseNumber,
      Address.HouseNumberSupplementText,
      Address.Building,
      Address.Floor,
      Address.RoomNumber,
      Address.Country,
      Address.Region,
      Address.FormOfAddress,
      Address.TaxJurisdiction,
      Address.TransportZone,
      Address.POBox,
      @EndUserText.label: 'PO Box Address Non-Deliverable Reason'
      Address.POBoxAddrNonDeliverableReason,
      Address.POBoxIsWithoutNumber,
      Address.POBoxPostalCode,
      Address.POBoxLobbyName,
      Address.POBoxDeviatingCityName,
      Address.POBoxDeviatingCityCode,
      Address.POBoxDeviatingRegion,
      Address.POBoxDeviatingCountry,
      Address.CareOfName,
      Address.DeliveryServiceTypeCode,
      Address.DeliveryServiceNumber,
      Address.AddressTimeZone,
      Address.SecondaryRegion,
      Address.SecondaryRegionName,
      Address.TertiaryRegion,
      Address.TertiaryRegionName,
      Address.RegionalStructureCheckStatus,
      Address.AddressGroup,

      /* Associations */
      Address._AddressGroup,
      Address._AddressObjectType,
      Address._AddressPersonName,
      Address._AddressRepresentationCode,
      Address._CorrespondenceLanguage,
      Address._Country,
      Address._CurrentDfltEmailAddress,
      Address._CurrentDfltFaxNumber,
      Address._CurrentDfltLandlinePhoneNmbr,
      Address._CurrentDfltMobilePhoneNumber,
      Address._DeliveryServiceTypeCode,
      Address._EmailAddress,
      Address._FaxNumber,
      Address._FormOfAddress,
      Address._MainWebsiteURL,
      Address._OrganizationAddress,
      Address._PersonAddress,
      Address._PhoneNumber,
      Address._POBoxAddrNonDeliverableReason,
      Address._POBoxDeviatingCityCode,
      Address._POBoxDeviatingCountry,
      Address._POBoxDeviatingRegion,
      Address._PostalCity,
      Address._PrfrdCommMediumType,
      Address._Region,
      Address._RegionalStructureCheckStatus,
      Address._SecondaryRegion,
      Address._Street,
      Address._StreetAddrNonDeliverableRsn,
      Address._TertiaryRegion,
      Address._TimeZone,
      Address._TransportationZone,
      Address._UniformResourceIdentifier,
      _AddrAdditionalRepresentation
}
where
  AddressRepresentationCode is initial
```
