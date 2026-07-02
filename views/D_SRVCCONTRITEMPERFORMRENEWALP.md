---
name: D_SRVCCONTRITEMPERFORMRENEWALP
description: D Srvccontritemperformrenewalp
semantic_en: "parameterized workflow view — parameters for renewing service contract items including change request receipt date, item duration, duration unit, purchase order, and item release status"
semantic_vi: "chế độ xem quy trình công việc được tham số hóa — tham số để gia hạn các mục hợp đồng dịch vụ bao gồm ngày nhận yêu cầu thay đổi, kỳ hạn mục, đơn vị kỳ hạn, đơn đặt hàng và trạng thái phát hành mục"
keywords:
  - gia hạn mục hợp đồng dịch vụ
  - kỳ hạn mục
  - yêu cầu thay đổi
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRITEMPERFORMRENEWALP

**D Srvccontritemperformrenewalp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SrvcTransChgReqRcvdOnDateTime` | `timestamp` |
| `SrvcContrItemDuration` | `timedura` |
| `SrvcContrItemDurationUnit` | `timeunitdu` |
| `PurchaseOrderByCustomer` | `crmt_po_number_sold` |
| `ServiceContractItemIsReleased` | `crms4_serv_contr_auto_release` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Renew Service Contract Item'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE] 
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define root abstract entity D_SrvcContrItemPerformRenewalP
{
  @Semantics.dateTime: true
  SrvcTransChgReqRcvdOnDateTime : timestamp;
  
  SrvcContrItemDuration         : timedura;
  
  SrvcContrItemDurationUnit     : timeunitdu;

  PurchaseOrderByCustomer       : crmt_po_number_sold;
    
  @Semantics.booleanIndicator: true
  ServiceContractItemIsReleased : crms4_serv_contr_auto_release;
}
```
