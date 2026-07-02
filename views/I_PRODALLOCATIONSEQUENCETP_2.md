---
name: I_PRODALLOCATIONSEQUENCETP_2
description: Prodallocationsequencetp 2
semantic_en: "Product allocation sequence — master data for allocation sequences with consumption unit, lifecycle status, and change tracking."
semantic_vi: "Chuỗi phân bổ sản phẩm — dữ liệu chính cho các chuỗi phân bổ với đơn vị tiêu thụ, trạng thái vòng đời và theo dõi thay đổi."
keywords:
  - chuỗi phân bổ
  - đơn vị tiêu thụ
  - trạng thái vòng đời
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
  - bo:ProductAllocationSequence
---
# I_PRODALLOCATIONSEQUENCETP_2

**Prodallocationsequencetp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProductAllocationSequenceUUID` | `ProductAllocationSequenceUUID` |
| `ProductAllocationSequence` | `ProductAllocationSequence` |
| `ProdAllocSqncConsumptionUnit` | `ProdAllocSqncConsumptionUnit` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `ProdAllocationLifecycleStatus` | `ProdAllocationLifecycleStatus` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.representativeKey: 'ProductAllocationSequenceUUID'
@ObjectModel.semanticKey: ['ProductAllocationSequence']
 
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'ProductAllocationSequence'                                  
       
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

@EndUserText.label: 'Product Allocation Sequence'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL


define root view entity I_ProdAllocationSequenceTP_2 
  provider contract transactional_interface 
  as projection on I_ProdAllocationSequenceTP as Document

{
  key ProductAllocationSequenceUUID,
  ProductAllocationSequence,
  ProdAllocSqncConsumptionUnit, 
  CreationDateTime, 
  CreatedByUser,  
  LastChangeDateTime, 
  LastChangedByUser,  
  ProdAllocationLifecycleStatus,  
  _ProdAllocSequenceTTP: redirected to composition child I_ProdAllocSequenceTxtTP_2,
  _ProdAllocSqncAssgmtTP: redirected to composition child I_ProdAllocSqncAssgmtTP_2,
  _ProdAllocSqncGroupTP: redirected to composition child I_ProdAllocSqncGroupTP_2
} 
where ProdAllocationLifecycleStatus = '02'
```
