---
name: I_BUSSOLNORDITMFUPSUBSCRPNTP
description: Bussolnorditmfupsubscrpntp
semantic_en: "subscription fulfillment for solution order items — maps solution items to generated subscription billing relationships and items"
semantic_vi: "thực hiện đăng ký cho các mục đơn hàng giải pháp — ánh xạ các mục giải pháp tới các mối quan hệ lập hóa đơn đăng ký được tạo và các mục"
keywords:
  - đăng ký theo dõi
  - thực hiện đăng ký
  - lập hóa đơn đăng ký
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
  - component:CRM-S4-SOL-SLO
  - lob:Other
---
# I_BUSSOLNORDITMFUPSUBSCRPNTP

**Bussolnorditmfupsubscrpntp**

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
| `SubscrpnBillgSubscription` | `SubscrpnBillgSubscription` |
| `SubscrpnBillgSubscriptionItem` | `SubscrpnBillgSubscriptionItem` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
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

@EndUserText.label: 'Business Solution Order Item Follow up Subscription - TP'

define view entity I_BusSolnOrdItmFUPSubscrpnTP
  as projection on R_BusSolnOrdItmFUPSubscrpnTP
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key SubscrpnBillgSubscription,
  key SubscrpnBillgSubscriptionItem,

  /*    @Semantics.uuid: true
      ServiceDocumentItmRelationUUID,

      @Semantics.uuid: true
      BusSolnOrderItemCharUUID,*/

      // Associations
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP
      //_BusSolnOrdFUPSubscription
}
```
