---
name: C_RERENTABLEOBJECTDEX
description: Rerentableobjectdex
semantic_en: "DEX — RE rentable object master data — exports name, number, OID, alternative ID, portfolio, usage category/type, validity dates, company code, and last-change timestamp for delta extraction."
semantic_vi: "Trích xuất dữ liệu chủ đối tượng có thể cho thuê trong Bất động sản (RE-FX) — bao gồm tên, số, danh mục sử dụng, ngày hiệu lực và mốc thay đổi cuối để hỗ trợ trích xuất delta."
keywords:
  - đối tượng cho thuê bất động sản
  - trích xuất dữ liệu RE
  - rentable object
  - RE-FX quản lý bất động sản
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - consumption-view
  - data-extraction
  - component:RE-FX-BD-2CL
  - lob:Other
  - bo:RealEstateRentableObjectUUID
---
# C_RERENTABLEOBJECTDEX

**Rerentableobjectdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RealEstateRentableObjectUUID` | `RealEstateRentableObjectUUID` |
| `REGenericRentalObjectType` | `REGenericRentalObjectType` |
| `InternalRealEstateNumber` | `InternalRealEstateNumber` |
| `REStatusObject` | `REStatusObject` |
| `RealEstateRentableObjectOID` | `RealEstateRentableObjectOID` |
| `REGnrcRntlObjectAlternativeID` | `REGnrcRntlObjectAlternativeID` |
| `REGnrcRentalObjPortfolioID` | `REGnrcRentalObjPortfolioID` |
| `RealEstateRentableObjectNumber` | `RealEstateRentableObjectNumber` |
| `RERentableObjectName` | `RERentableObjectName` |
| `REIdentificationKey` | `REIdentificationKey` |
| `CompanyCode` | `CompanyCode` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `REAuthorizationGroup` | `REAuthorizationGroup` |
| `REGnrcRentalObjUsageCategory` | `REGnrcRentalObjUsageCategory` |
| `REGenericRentalObjectUsageType` | `REGenericRentalObjectUsageType` |
| `REGenericRentalObjParentUUID` | `REGenericRentalObjParentUUID` |
| `RERentableObjectCategory` | `RERentableObjectCategory` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_RERentableObject` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction RE Rentable Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Analytics.dataExtraction.delta.byElement.name:'LastChangeDateTime'
@Analytics.dataExtraction.delta.byElement.maxDelayInSeconds: 1800


@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'RealEstateRentableObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERentableObjectDEX 
  as select from I_RERentableObject
  
  association [1..1] to E_RERentableObject as _Extension  on  $projection.RealEstateRentableObjectUUID = _Extension.RealEstateRentableObjectUUID
{
  key RealEstateRentableObjectUUID,
      REGenericRentalObjectType,
      InternalRealEstateNumber,
      REStatusObject,
      RealEstateRentableObjectOID,
      REGnrcRntlObjectAlternativeID,
      REGnrcRentalObjPortfolioID,
      RealEstateRentableObjectNumber,
      RERentableObjectName,
      REIdentificationKey,
      CompanyCode,
      ValidityStartDate,
      ValidityEndDate,
      REAuthorizationGroup,
      REGnrcRentalObjUsageCategory,
      REGenericRentalObjectUsageType,
      REGenericRentalObjParentUUID,
      RERentableObjectCategory,
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      LocalLastChangeDateTime

//      _REKeyAssgmt,
//      _CompanyCode,
//      _REAuthorizationGroup,
//      _REGnrcRentalObjPortfolio,
//      _REGnrcRentalObjUsageCategory,
//      _REGnrcRentalObjUsageType,
//      _REParentGenericRentalObject,
//      _RERentableObjectCategory,
//      _REArchitectureObject,
//      _StatusObject,
//      _StatusObjectStatus,
//      _RERntblObjToUsblObjAssgmt

}
```
