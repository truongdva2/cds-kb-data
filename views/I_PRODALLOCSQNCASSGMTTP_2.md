---
name: I_PRODALLOCSQNCASSGMTTP_2
description: Prodallocsqncassgmttp 2
semantic_en: "Product allocation sequence assignment — material and plant assignments to allocation sequences with validity periods."
semantic_vi: "Gán chuỗi phân bổ sản phẩm — gán vật liệu và nhà máy cho các chuỗi phân bổ với kỳ hiệu lực."
keywords:
  - gán chuỗi phân bổ
  - vật liệu
  - nhà máy
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
  - bo:ProdAllocSqncAssgmt
---
# I_PRODALLOCSQNCASSGMTTP_2

**Prodallocsqncassgmttp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProdAllocSqncAssignmentUUID` | `ProdAllocSqncAssignmentUUID` |
| `ProductAllocationSequenceUUID` | `ProductAllocationSequenceUUID` |
| `ProductAllocationSequence` | `ProductAllocationSequence` |
| `Material` | `Material` |
| `Plant` | `Plant` |
| `ValidityStartUTCDateTime` | `ValidityStartUTCDateTime` |
| `ValidityStartTimeZone` | `ValidityStartTimeZone` |
| `ValidityEndUTCDateTime` | `ValidityEndUTCDateTime` |
| `ValidityEndTimeZone` | `ValidityEndTimeZone` |
| `IsDeleted` | `IsDeleted` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.representativeKey: 'ProdAllocSqncAssignmentUUID'
@ObjectModel.semanticKey: ['ProductAllocationSequence', 'Material', 'Plant']

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.sapObjectNodeType.name: 'ProdAllocSqncAssgmt'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@EndUserText.label: 'Product Allocation Sequence Assignment'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_ProdAllocSqncAssgmtTP_2 
	as projection on I_ProdAllocSqncAssgmtTP 

{	
	key ProdAllocSqncAssignmentUUID,	
	ProductAllocationSequenceUUID,
	
	ProductAllocationSequence,	
	Material,	
	Plant,	
	ValidityStartUTCDateTime,
	ValidityStartTimeZone,	
	ValidityEndUTCDateTime,
	ValidityEndTimeZone,	
	IsDeleted,	
	_ProdAllocationSequenceTP: redirected to parent I_ProdAllocationSequenceTP_2

} 
where IsDeleted = ' '
```
