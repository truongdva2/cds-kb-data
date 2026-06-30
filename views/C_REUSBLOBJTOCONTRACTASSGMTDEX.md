---
name: C_REUSBLOBJTOCONTRACTASSGMTDEX
description: Reusblobjtocontractassgmtdex
semantic_en: "DEX — contract assignment records for RE usable objects — links a usable object to a real estate contract with assignment type, company code, validity period, possession dates, and status objects."
semantic_vi: "Trích xuất phân bổ hợp đồng cho đối tượng có thể sử dụng trong RE-FX — liên kết đối tượng sử dụng với hợp đồng bất động sản kèm loại phân bổ, mã công ty, kỳ hiệu lực và ngày chiếm hữu."
keywords:
  - phân bổ hợp đồng đối tượng sử dụng
  - RE usable object contract
  - hợp đồng bất động sản RE-FX
  - trích xuất hợp đồng RE
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
  - contract
  - component:RE-FX-BD-2CL
  - lob:Other
  - bo:RealEstateUsableObjectUUID
---
# C_REUSBLOBJTOCONTRACTASSGMTDEX

**Reusblobjtocontractassgmtdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RealEstateUsableObjectUUID` | `RealEstateUsableObjectUUID` |
| `REObjectAssignmentType` | `REObjectAssignmentType` |
| `CompanyCode` | `CompanyCode` |
| `RealEstateContract` | `RealEstateContract` |
| `ValidityStartEndDateValue` | `ValidityStartEndDateValue` |
| `REStatusObjectSource` | `REStatusObjectSource` |
| `REStatusObjectTarget` | `REStatusObjectTarget` |
| `ValidityStartDate` | `cast( coalesce(ValidityStartDate, '00000000') as rebdvdmvalidfrom )` |
| `ValidityEndDate` | `cast( coalesce(ValidityEndDate, '99991231') as rebdvdmvalidto )` |
| `REOnlyInfoAssgmt` | `REOnlyInfoAssgmt` |
| `REStatusObjectSourceIsArchived` | `REStatusObjectSourceIsArchived` |
| `REObjectPossessionStartDate` | `REObjectPossessionStartDate` |
| `REObjectPossessionEndDate` | `REObjectPossessionEndDate` |
| `_REObjectAssignmentType` | *Association* |
| `_REUsableObject` | *Association* |
| `_REContract` | *Association* |
| `_CompanyCode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsableObject` | `I_REUsableObject` | — |
| `_REContract` | `I_REContract` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extractor for RE Usbl Obj Contr Assgmt'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  technicalName: 'CREUSBLOBJTOCONTRASSGMTDEX',
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Metadata.ignorePropagatedAnnotations:true 
//@ObjectModel.representativeKey: 'RealEstateUsableObjectUUID'
//@ObjectModel.semanticKey: [  'CompanyCode', 'RealEstateContract', 'ValidityStartDate'  ]
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L



define view entity C_REUsblObjToContractAssgmtDEX 
  as select from I_REUsblObjectToContractAssgmt as _REContractAssgmt
  association        to I_REUsableObject as _REUsableObject   on  $projection.RealEstateUsableObjectUUID = _REUsableObject.RealEstateUsableObjectUUID
  association [1..1] to I_REContract     as _REContract       on  $projection.CompanyCode         = _REContract.CompanyCode
                                                              and $projection.RealEstateContract  = _REContract.RealEstateContract

{
  key RealEstateUsableObjectUUID,
  key REObjectAssignmentType,
  key CompanyCode,
  key RealEstateContract,
  key ValidityStartEndDateValue,
      REStatusObjectSource,
      REStatusObjectTarget,
      @Semantics.businessDate.from: true
      cast( coalesce(ValidityStartDate, '00000000') as rebdvdmvalidfrom ) as ValidityStartDate,
      @Semantics.businessDate.to: true
      cast( coalesce(ValidityEndDate, '99991231') as rebdvdmvalidto )     as ValidityEndDate,
      REOnlyInfoAssgmt,
      REStatusObjectSourceIsArchived,
      REObjectPossessionStartDate,
      REObjectPossessionEndDate,

      _REObjectAssignmentType,
      _REUsableObject,
      _REContract,
      _CompanyCode
    
}
```
