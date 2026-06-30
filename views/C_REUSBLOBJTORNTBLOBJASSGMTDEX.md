---
name: C_REUSBLOBJTORNTBLOBJASSGMTDEX
description: Reusblobjtorntblobjassgmtdex
semantic_en: "DEX — assignment records linking RE usable objects to rentable objects (usable-object-initiated assignments only) — exposes UUID, rentable/usable object UUIDs and rentable object number, validity, and assignment-direction flag."
semantic_vi: "Trích xuất phân bổ từ đối tượng sử dụng đến đối tượng cho thuê trong RE-FX (chỉ phân bổ khởi tạo từ phía sử dụng) — bao gồm UUID, số đối tượng cho thuê và kỳ hiệu lực."
keywords:
  - phân bổ đối tượng sử dụng cho thuê
  - usable to rentable object RE
  - RE-FX object assignment
  - trích xuất bất động sản
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
  - bo:REUsblObjToRntblAssgmtUUID
---
# C_REUSBLOBJTORNTBLOBJASSGMTDEX

**Reusblobjtorntblobjassgmtdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `REUsblObjToRntblAssgmtUUID` | `REUsblObjToRntblAssgmtUUID` |
| `RealEstateRentableObjectUUID` | `RealEstateRentableObjectUUID` |
| `RealEstateUsableObjectUUID` | `RealEstateUsableObjectUUID` |
| `RealEstateRentableObjectNumber` | `_RERentableObject.RealEstateRentableObjectNumber` |
| `ValidityEndDate` | `ValidityEndDate` |
| `ValidityStartDate` | `ValidityStartDate` |
| `REIsAssignmentFromUsableObj` | `REIsAssignmentFromUsableObj` |
| `_RERentableObject` | *Association* |
| `_REUsableObject` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | — |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extractor for RE Usbl to Rentable Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CREUSBLTORNTBLASSGMTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REUsblObjToRntblAssgmtUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REUsblObjToRntblObjAssgmtDEX 
  as select from I_REUsblObjToRntblObjAssgmt as _REUsblObjToRntblObjAssgmt
  association        to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
{
  key REUsblObjToRntblAssgmtUUID,
      RealEstateRentableObjectUUID,
      RealEstateUsableObjectUUID,
      _RERentableObject.RealEstateRentableObjectNumber as RealEstateRentableObjectNumber,

      ValidityEndDate,
      ValidityStartDate,
      REIsAssignmentFromUsableObj,

      _RERentableObject,
      _REUsableObject
}
where
  REIsAssignmentFromUsableObj = 'X'
```
