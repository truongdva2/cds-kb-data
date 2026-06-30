---
name: C_REARCHITECTUREOBJECTDEX
description: Rearchitectureobjectdex
semantic_en: "Real estate architecture object (DEX) — data-extraction view for RE-FX architecture objects exposing object type, identification key, validity period, authorization group, and change timestamps."
semantic_vi: "Đối tượng kiến trúc bất động sản (DEX) — trích xuất dữ liệu đối tượng kiến trúc RE-FX với loại đối tượng, mã nhận dạng, thời hạn hiệu lực, nhóm phân quyền và dấu thời gian thay đổi."
keywords:
  - đối tượng kiến trúc bất động sản
  - trích xuất RE-FX
  - kiến trúc RE SAP
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
  - bo:REArchitectureObjectUUID
---
# C_REARCHITECTUREOBJECTDEX

**Rearchitectureobjectdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `REArchitectureObjectUUID` | `REArchitectureObjectUUID` |
| `REArchitectureObjectType` | `REArchitectureObjectType` |
| `InternalRealEstateNumber` | `InternalRealEstateNumber` |
| `REStatusObject` | `REStatusObject` |
| `REArchitectureObjectOID` | `REArchitectureObjectOID` |
| `REArchitectureObjectNumber` | `REArchitectureObjectNumber` |
| `REArchtrObjectAlternativeID` | `REArchtrObjectAlternativeID` |
| `REArchitectureObjectName` | `REArchitectureObjectName` |
| `REIdentificationKey` | `REIdentificationKey` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `REAuthorizationGroup` | `REAuthorizationGroup` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_REArchitectureObject` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction RE Architecture Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Analytics.dataExtraction.delta.byElement.name:'LastChangeDateTime'
@Analytics.dataExtraction.delta.byElement.maxDelayInSeconds: 1800

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@AbapCatalog.extensibility: {
 extensible: true
}

define view entity C_REArchitectureObjectDEX 
  as select from I_REArchitectureObject
// Extesibility
  association [1..1] to E_REArchitectureObject as _Extension  on  $projection.REArchitectureObjectUUID = _Extension.REArchitectureObjectUUID
{
  key REArchitectureObjectUUID,
      REArchitectureObjectType,
      InternalRealEstateNumber,
      REStatusObject,
      REArchitectureObjectOID,
      REArchitectureObjectNumber,
      REArchtrObjectAlternativeID,
      REArchitectureObjectName,
      REIdentificationKey,
      ValidityStartDate,
      ValidityEndDate,
      REAuthorizationGroup,
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      LocalLastChangeDateTime
      
//      _REKeyAssgmt,
//      _REAuthorizationGroup,
//      _REArchitectureObjectType,
//      _Text,
//      _StatusObject      
}
```
