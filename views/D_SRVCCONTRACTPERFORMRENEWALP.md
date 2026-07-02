---
name: D_SRVCCONTRACTPERFORMRENEWALP
description: D Srvccontractperformrenewalp
semantic_en: "parameterized workflow view — parameters for service contract renewal operations including new contract creation flag, change request receipt date, contract duration, and release status"
semantic_vi: "chế độ xem quy trình công việc được tham số hóa — tham số cho các hoạt động gia hạn hợp đồng dịch vụ bao gồm cờ tạo hợp đồng mới, ngày nhận yêu cầu thay đổi, kỳ hạn hợp đồng và trạng thái phát hành"
keywords:
  - gia hạn hợp đồng dịch vụ
  - tạo hợp đồng mới
  - kỳ hạn dịch vụ
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - contract
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRACTPERFORMRENEWALP

**D Srvccontractperformrenewalp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `NewServiceContractIsCreated` | `crmt_boolean` |
| `SrvcTransChgReqRcvdOnDateTime` | `timestamp` |
| `SrvcContrDuration` | `timedura` |
| `SrvcContrDurationUnit` | `timeunitdu` |
| `PurchaseOrderByCustomer` | `crmt_po_number_sold` |
| `ServiceContractIsReleased` | `crms4_stat_released` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Renew Service Contract'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE] 
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define root abstract entity D_SrvcContractPerformRenewalP 
{
  @Semantics.booleanIndicator: true
  NewServiceContractIsCreated   : crmt_boolean;
  
  @Semantics.dateTime: true
  SrvcTransChgReqRcvdOnDateTime : timestamp;
  
  SrvcContrDuration             : timedura;
  
  SrvcContrDurationUnit         : timeunitdu;

  PurchaseOrderByCustomer       : crmt_po_number_sold;
    
  @Semantics.booleanIndicator: true
  ServiceContractIsReleased     : crms4_stat_released;
}
```
