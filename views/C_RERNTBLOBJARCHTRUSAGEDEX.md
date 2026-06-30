---
name: C_RERNTBLOBJARCHTRUSAGEDEX
description: Rerntblobjarchtrusagedex
semantic_en: "DEX — architecture object usage assignment for RE rentable objects — links a rentable object (type 'R') to an architecture object with type, number, OID, validity period, and measurement-based flag."
semantic_vi: "Trích xuất phân bổ đối tượng kiến trúc cho đối tượng cho thuê trong RE-FX — liên kết đối tượng cho thuê (loại R) với đối tượng kiến trúc kèm loại, số, OID và kỳ hiệu lực."
keywords:
  - đối tượng kiến trúc bất động sản
  - phân bổ kiến trúc cho thuê
  - RE architecture object usage
  - trích xuất RE-FX
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
  - bo:REArchitectureObjectUsageUUID
---
# C_RERNTBLOBJARCHTRUSAGEDEX

**Rerntblobjarchtrusagedex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `REArchitectureObjectUsageUUID` | `REArchitectureObjectUsageUUID` |
| `REArchitectureObjectUUID` | `REArchitectureObjectUUID` |
| `RealEstateRentableObjectUUID` | `REGenericRentalObjectUUID` |
| `REArchitectureObjectType` | `_REArchitectureObject.REArchitectureObjectType` |
| `REArchitectureObjectNumber` | `_REArchitectureObject.REArchitectureObjectNumber` |
| `REArchitectureObjectOID` | `_REArchitectureObject.REArchitectureObjectOID` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `REArchtrObjUsageIsMsmtBased` | `REArchtrObjUsageIsMsmtBased` |
| `_REArchitectureObject` | *Association* |
| `_REGenericRentalObject` | *Association* |
| `_RERentableObject` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERentableObject` | `R_RERentableObjectTP` | — |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Rntbl Obj Archtr Usge'

@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectUsageUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERntblObjArchtrUsageDEX 
  as select from I_REArchitectureObjectUsage as _REArchitectureObjectUsage
  
  association        to R_RERentableObjectTP as _RERentableObject on $projection.RealEstateRentableObjectUUID = _RERentableObject.RealEstateRentableObjectUUID
{
  key REArchitectureObjectUsageUUID,
      REArchitectureObjectUUID,
      REGenericRentalObjectUUID as RealEstateRentableObjectUUID,
      _REArchitectureObject.REArchitectureObjectType,
      _REArchitectureObject.REArchitectureObjectNumber,
      _REArchitectureObject.REArchitectureObjectOID,
      ValidityStartDate,
      ValidityEndDate,
      REArchtrObjUsageIsMsmtBased,

      _REArchitectureObject,
      _REGenericRentalObject,
      _RERentableObject
    
}
where
     _REArchitectureObjectUsage.REGenericRentalObjectType = 'R'
```
