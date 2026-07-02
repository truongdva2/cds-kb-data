---
name: I_PRODALLOCCHARCVALCOMBNTP_2
description: Prodalloccharcvalcombntp 2
semantic_en: "Product allocation characteristic value combination — characteristic value assignments for allocation objects with up to 10 characteristic fields and comments."
semantic_vi: "Kết hợp giá trị đặc tính phân bổ sản phẩm — gán giá trị đặc tính cho các đối tượng phân bổ với tối đa 10 trường đặc tính và nhận xét."
keywords:
  - kết hợp đặc tính
  - giá trị đặc tính
  - phân bổ sản phẩm
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
  - bo:ProdAllocCharcValCombn
---
# I_PRODALLOCCHARCVALCOMBNTP_2

**Prodalloccharcvalcombntp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CharcValueCombinationUUID` | `CharcValueCombinationUUID` |
| `ProductAllocationObjectUUID` | `ProductAllocationObjectUUID` |
| `ProductAllocationObject` | `ProductAllocationObject` |
| `ProdAllocCharc01` | `ProdAllocCharc01` |
| `ProdAllocCharc02` | `ProdAllocCharc02` |
| `ProdAllocCharc03` | `ProdAllocCharc03` |
| `ProdAllocCharc04` | `ProdAllocCharc04` |
| `ProdAllocCharc05` | `ProdAllocCharc05` |
| `ProdAllocCharc06` | `ProdAllocCharc06` |
| `ProdAllocCharc07` | `ProdAllocCharc07` |
| `ProdAllocCharc08` | `ProdAllocCharc08` |
| `ProdAllocCharc09` | `ProdAllocCharc09` |
| `ProdAllocCharc10` | `ProdAllocCharc10` |
| `ProdAllocCharcValueCombnCmnt` | `ProdAllocCharcValueCombnCmnt` |
| `ProdAllocCharcConstraintStatus` | `ProdAllocCharcConstraintStatus` |
| `ProdAllocationActivationStatus` | `ProdAllocationActivationStatus` |
| `CharcValAuthznGroup` | `CharcValAuthznGroup` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.representativeKey: 'CharcValueCombinationUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@ObjectModel.sapObjectNodeType.name: 'ProdAllocCharcValCombn'

@EndUserText.label: 'Product Allocation Characteristic Value Combination'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_ProdAllocCharcValCombnTP_2 
	as projection on I_ProdAllocCharcValCombnTP

{	
	key CharcValueCombinationUUID,	
	ProductAllocationObjectUUID,	
	ProductAllocationObject,	
	ProdAllocCharc01,	
	ProdAllocCharc02,	
	ProdAllocCharc03,	
	ProdAllocCharc04,	
	ProdAllocCharc05,	
	ProdAllocCharc06,	
	ProdAllocCharc07,	
	ProdAllocCharc08,	
	ProdAllocCharc09,	
	ProdAllocCharc10,	
	ProdAllocCharcValueCombnCmnt,	
	ProdAllocCharcConstraintStatus,	
	ProdAllocationActivationStatus,	
	CharcValAuthznGroup,
		
	_ProdAllocationObjectTP: redirected to parent I_ProdAllocationObjectTP_2,	
	_ProdAllocObjTimeSeriesTP: redirected to composition child I_ProdAllocObjTimeSeriesTP_2
	
} //exclude blocked CVCs     
 where ProdAllocationActivationStatus <> '03'
```
