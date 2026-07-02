---
name: I_PRODALLOCCHARCMETADATATP_2
description: Prodalloccharcmetadatatp 2
semantic_en: "Characteristic internal ID — metadata for characteristics in allocation objects including catalog path and ordinal numbers."
semantic_vi: "Mã định danh nội bộ đặc tính — siêu dữ liệu cho các đặc tính trong các đối tượng phân bổ bao gồm đường dẫn danh mục và số thứ tự."
keywords:
  - siêu dữ liệu đặc tính
  - đường dẫn danh mục
  - mã định danh
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - transactional-processing
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
  - bo:ProdAllocCharcMetaData
---
# I_PRODALLOCCHARCMETADATATP_2

**Prodalloccharcmetadatatp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CharacteristicsMetaDataUUID` | `CharacteristicsMetaDataUUID` |
| `ProductAllocationObjectUUID` | `ProductAllocationObjectUUID` |
| `ProdAllocCharcCtlgPathIntID` | `ProdAllocCharcPathDescComIntID` |
| `ProdAllocCharcCtlgPathUUID` | `ProdAllocCharcCtlgPathUUID` |
| `ProdAllocOrdinalNumberValue` | `ProdAllocOrdinalNumberValue` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.representativeKey: 'CharacteristicsMetaDataUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@ObjectModel.sapObjectNodeType.name: 'ProdAllocCharcMetaData'

@EndUserText.label: 'Product Allocation Object Meta Data'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_ProdAllocCharcMetaDataTP_2 
	as projection on I_ProdAllocCharcMetaDataTP
	
{	 
	key CharacteristicsMetaDataUUID,
	ProductAllocationObjectUUID,	
//	@Consumption.hidden: true
  @EndUserText.label: 'Characteristc Internal ID'
	ProdAllocCharcPathDescComIntID as ProdAllocCharcCtlgPathIntID,
	ProdAllocCharcCtlgPathUUID,	
	ProdAllocOrdinalNumberValue,
		
	_ProdAllocationObjectTP: redirected to parent I_ProdAllocationObjectTP_2 //,

  //@Consumption.hidden: true	
	//_ProdAllocCharcText

}
```
