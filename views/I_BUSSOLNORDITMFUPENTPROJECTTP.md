---
name: I_BUSSOLNORDITMFUPENTPROJECTTP
description: Bussolnorditmfupentprojecttp
semantic_en: "enterprise project tracking for solution order items — links solution order items to downstream enterprise projects"
semantic_vi: "theo dõi dự án doanh nghiệp cho các mục đơn hàng giải pháp — liên kết các mục đơn hàng giải pháp với các dự án doanh nghiệp hạ lưu"
keywords:
  - dự án doanh nghiệp
  - theo dõi dự án
  - liên kết dự án
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
  - project
  - component:CRM-S4-SOL-SLO
  - lob:Other
  - bo:Project
---
# I_BUSSOLNORDITMFUPENTPROJECTTP

**Bussolnorditmfupentprojecttp**

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
| `BusinessSolutionOrderItem` | `BusinessSolutionOrderItem` |
| `Project` | `Project` |
| `BusSolnOrderItemCharUUID` | `BusSolnOrderItemCharUUID` |
| `_BusSolnOrdItem` | *Association* |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck:    #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

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

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order item FUP Enterprise Project - TP'

define view entity I_BusSolnOrdItmFUPEntProjectTP
  as projection on R_BusSolnOrdItmFUPEntProjectTP
{

  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key Project,

      BusSolnOrderItemCharUUID,

      // Associations
      _BusinessSolutionOrder     : redirected to I_BusinessSolutionOrderTP,
      _BusinessSolutionOrderItem : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusSolnOrdItem
}
```
