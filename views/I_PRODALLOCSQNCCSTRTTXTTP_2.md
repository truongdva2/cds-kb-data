---
name: I_PRODALLOCSQNCCSTRTTXTTP_2
description: Prodallocsqnccstrttxttp 2
semantic_en: "Product allocation constraint text — descriptions for allocation sequence constraints by language."
semantic_vi: "Văn bản ràng buộc phân bổ sản phẩm — mô tả cho ràng buộc chuỗi phân bổ theo ngôn ngữ."
keywords:
  - ràng buộc chuỗi
  - mô tả
  - đa ngôn ngữ
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
  - bo:ProdAllocSqncCstrtTxt
---
# I_PRODALLOCSQNCCSTRTTXTTP_2

**Prodallocsqnccstrttxttp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProdAllocSqncConstraintUUID` | `ProdAllocSqncConstraintUUID` |
| `Language` | `Language` |
| `ProdAllocSqncConstraintDesc` | `ProdAllocSqncConstraintDesc` |
| `ProductAllocationSequenceUUID` | `ProductAllocationSequenceUUID` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.representativeKey: 'ProdAllocSqncConstraintUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.sapObjectNodeType.name: 'ProdAllocSqncCstrtTxt'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@EndUserText.label: 'Product Allocation Constraint - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL 

define view entity I_ProdAllocSqncCstrtTxtTP_2 
	as projection on I_ProdAllocSqncCstrtTTP 

{	
	key ProdAllocSqncConstraintUUID,
	@Semantics.language: true
	key Language,	
	@Semantics.text: true
	ProdAllocSqncConstraintDesc,	  
	ProductAllocationSequenceUUID,
  _ProdAllocationSequenceTP: redirected to  I_ProdAllocationSequenceTP_2, 
	_ProdAllocSqncCstrtTP: redirected to parent I_ProdAllocSqncCstrtTP_2

}
```
