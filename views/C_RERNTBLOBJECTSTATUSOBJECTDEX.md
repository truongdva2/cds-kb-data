---
name: C_RERNTBLOBJECTSTATUSOBJECTDEX
description: Rerntblobjectstatusobjectdex
semantic_en: "DEX — active status records for RE rentable objects — exposes status profile, status code, user-status flag, and internal real estate number for each active (non-inactive) status assigned to a rentable object."
semantic_vi: "Trích xuất trạng thái đang hoạt động của đối tượng cho thuê trong RE-FX — bao gồm hồ sơ trạng thái, mã trạng thái và cờ trạng thái người dùng cho từng bản ghi trạng thái còn hiệu lực."
keywords:
  - trạng thái đối tượng cho thuê
  - status object bất động sản
  - RE rentable object status
  - trích xuất trạng thái RE-FX
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
  - status
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_RERNTBLOBJECTSTATUSOBJECTDEX

**Rerntblobjectstatusobjectdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RealEstateRentableObjectUUID` | `REGenericRentalObjectUUID` |
| `StatusProfile` | `StatusProfile` |
| `StatusCode` | `StatusCode` |
| `InternalRealEstateNumber` | `_RERentableObject.InternalRealEstateNumber` |
| `REStatusObject` | `REStatusObject` |
| `IsUserStatus` | `IsUserStatus` |
| `StatusIsInactive` | `StatusIsInactive` |
| `_StatusCode` | *Association* |
| `_StatusProfile` | *Association* |
| `_RERentableObject` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `I_RERentableObject` | — |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Rentable Obj Status Obj'

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CRERNTBLOBJSTATUSOBJECTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERntblObjectStatusObjectDEX 
  as select from I_REGenericRentalObjStatusObj as _REGenericRentalObjStatusObj
    association to I_RERentableObject as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
  
{
  key REGenericRentalObjectUUID as RealEstateRentableObjectUUID,
  key StatusProfile,
  key StatusCode,
      _RERentableObject.InternalRealEstateNumber,
      REStatusObject,
      IsUserStatus,
      StatusIsInactive,

      _StatusCode,
      _StatusProfile,
      _RERentableObject
}
where
      StatusIsInactive          = ' '
  and REGenericRentalObjectType = 'R'
```
