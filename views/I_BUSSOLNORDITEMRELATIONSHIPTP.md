---
name: I_BUSSOLNORDITEMRELATIONSHIPTP
description: Bussolnorditemrelationshiptp
semantic_en: "relationships between business solution order items — tracks item hierarchies, dependencies, and references between line items"
semantic_vi: "mối quan hệ giữa các mục đơn hàng giải pháp kinh doanh — theo dõi hệ thống phân cấp mục, phụ thuộc và tham chiếu giữa các mục hàng"
keywords:
  - mối quan hệ mục
  - hệ thống phân cấp
  - phụ thuộc mục
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - item-level
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITEMRELATIONSHIPTP

**Bussolnorditemrelationshiptp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessSolutionOrder` | `BusinessSolutionOrder` |
| `SrvcItemRelshpFromItemNumber` | `SrvcItemRelshpFromItemNumber` |
| `SrvcItemRelshpType` | `SrvcItemRelshpType` |
| `SrvcItemRelshpToItemNumber` | `SrvcItemRelshpToItemNumber` |
| `_ItemRelationshipTypeText` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
    }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Item Relationships  - TP'

define view entity I_BusSolnOrdItemRelationshipTP
  as projection on R_BusSolnOrdItemRelationshipTP
{
  key BusinessSolutionOrder,
  key SrvcItemRelshpFromItemNumber,
  
      @Consumption.valueHelpDefinition: [{ entity : { name: 'I_SrvcItemRelationshipType' , element:'SrvcItemRelshpType'}, useAsTemplate: true  }]
      @ObjectModel.sapObjectNodeTypeReference: 'SrvcItemRelationshipType'
      @ObjectModel.text.association: '_ItemRelationshipTypeText'
  key SrvcItemRelshpType,
  key SrvcItemRelshpToItemNumber,


      // Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP,
      _ItemRelationshipTypeText
}
```
