---
name: C_REUSBLOBJARCHTRUSAGEDEX
description: Reusblobjarchtrusagedex
semantic_en: "DEX — architecture object usage assignment for RE usable objects — links a usable object (type 'U') to an architecture object with type, number, OID, and validity period."
semantic_vi: "Trích xuất phân bổ đối tượng kiến trúc cho đối tượng có thể sử dụng trong RE-FX — liên kết đối tượng sử dụng (loại U) với đối tượng kiến trúc kèm loại, số, OID và kỳ hiệu lực."
keywords:
  - đối tượng kiến trúc đối tượng sử dụng
  - RE usable object architecture
  - phân bổ kiến trúc RE-FX
  - trích xuất dữ liệu bất động sản
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
# C_REUSBLOBJARCHTRUSAGEDEX

**Reusblobjarchtrusagedex**

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
| `RealEstateUsableObjectUUID` | `REGenericRentalObjectUUID` |
| `REArchitectureObjectType` | `_REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectType` |
| `REArchitectureObjectNumber` | `_REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectNumber` |
| `REArchitectureObjectOID` | `_REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectOID` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `_REArchitectureObject` | *Association* |
| `_REGenericRentalObject` | *Association* |
| `_REUsableObject` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | — |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Usbl Obj Archtr Usage'
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



define view entity C_REUsblObjArchtrUsageDEX 
  as select from I_REArchitectureObjectUsage as _REArchitectureObjectUsage
  association        to I_REUsableObject as _REUsableObject  on $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID

{
  key REArchitectureObjectUsageUUID,
      REArchitectureObjectUUID,
      REGenericRentalObjectUUID as RealEstateUsableObjectUUID,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectType,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectNumber,
      _REArchitectureObjectUsage._REArchitectureObject.REArchitectureObjectOID,
      ValidityStartDate,
      ValidityEndDate,
    
      _REArchitectureObjectUsage._REArchitectureObject,
      _REGenericRentalObject,
      _REUsableObject
}
where
     _REArchitectureObjectUsage.REGenericRentalObjectType = 'U'
```
