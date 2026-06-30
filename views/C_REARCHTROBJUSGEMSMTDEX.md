---
name: C_REARCHTROBJUSGEMSMTDEX
description: Rearchtrobjusgemsmtdex
semantic_en: "Real estate architecture object usage measurement (DEX) — data-extraction view for measured-based usage of RE architecture objects, exposing rental object reference, measurement type, unit, and quantity per validity period."
semantic_vi: "Đo lường sử dụng đối tượng kiến trúc bất động sản (DEX) — trích xuất dữ liệu sử dụng theo đo lường của đối tượng kiến trúc RE, với tham chiếu đối tượng cho thuê, loại đo lường, đơn vị và số lượng theo thời hạn hiệu lực."
keywords:
  - đo lường sử dụng đối tượng RE
  - diện tích sử dụng bất động sản
  - đo lường RE-FX
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
  - bo:REArchitectureObjMsmtUsageUUID
---
# C_REARCHTROBJUSGEMSMTDEX

**Rearchtrobjusgemsmtdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `REArchitectureObjMsmtUsageUUID` | `REArchitectureObjMsmtUsageUUID` |
| `REArchitectureObjectUsageUUID` | `REArchitectureObjectUsageUUID` |
| `REGenericRentalObjectType` | `REGenericRentalObjectType` |
| `REGenericRentalObjectUUID` | `REGenericRentalObjectUUID` |
| `REArchitectureObjectUUID` | `REArchitectureObjectUUID` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `REMeasurementType` | `REMeasurementType` |
| `REMeasurementUnit` | `REMeasurementUnit` |
| `REMeasurementQuantity` | `REMeasurementQuantity` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Extraction Arch Object Meas Based Usage'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjMsmtUsageUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjUsgeMsmtDEX     
  as select from I_REArchtrObjUsageMeasurement

{
  key REArchitectureObjMsmtUsageUUID,
      REArchitectureObjectUsageUUID,
      REGenericRentalObjectType,
      REGenericRentalObjectUUID,
      REArchitectureObjectUUID,
      ValidityStartDate,
      ValidityEndDate,
      REMeasurementType,
      REMeasurementUnit,
      @Semantics.quantity.unitOfMeasure: 'REMeasurementUnit'
      REMeasurementQuantity

//      _REArchitectureObject,
//      _REGenericRentalObject,
//      _REMeasurementType,
//      _UnitOfMeasure
}
```
