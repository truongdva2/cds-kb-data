---
name: I_BUSSOLNORDFUPSUBSCRPNTP
description: Bussolnordfupsubscrpntp
semantic_en: "follow-up subscription data for business solution orders — tracks solution order to subscription billing relationship"
semantic_vi: "dữ liệu theo dõi đăng ký cho các đơn hàng giải pháp kinh doanh — theo dõi mối quan hệ từ đơn hàng giải pháp đến lập hóa đơn đăng ký"
keywords:
  - đơn hàng giải pháp
  - đăng ký theo dõi
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
# I_BUSSOLNORDFUPSUBSCRPNTP

**Bussolnordfupsubscrpntp**

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
| `SubscrpnBillgSubscription` | `SubscrpnBillgSubscription` |
| `BusinessSolutionOrderUUID` | `BusinessSolutionOrderUUID` |

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

@EndUserText.label: 'Business Solution Order Follow up Subscription - TP'

define view entity I_BusSolnOrdFUPSubscrpnTP
  as projection on R_BusSolnOrdFUPSubscrpnTP
{
  key BusinessSolutionOrder,
  key SubscrpnBillgSubscription,

      @Semantics.uuid: true
      BusinessSolutionOrderUUID,

      //Associations
      _BusinessSolutionOrder : redirected to parent I_BusinessSolutionOrderTP
}
```
