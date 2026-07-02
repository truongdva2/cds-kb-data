---
name: D_SRVCCONTRCHANGESOLDTOPARTYP
description: D Srvccontrchangesoldtopartyp
semantic_en: "parameterized workflow view — parameters for changing the sold-to party on service contracts including change request receipt date, effective date, party identifier, purchase order, and release status"
semantic_vi: "chế độ xem quy trình công việc được tham số hóa — tham số để thay đổi bên mua trên các hợp đồng dịch vụ bao gồm ngày nhận yêu cầu thay đổi, ngày có hiệu lực, định danh bên, đơn đặt hàng và trạng thái phát hành"
keywords:
  - thay đổi bên mua
  - hợp đồng dịch vụ
  - đơn đặt hàng khách hàng
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SRVCCONTRCHANGESOLDTOPARTYP

**D Srvccontrchangesoldtopartyp**

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
| `EffectiveDate` | `datum` |
| `SoldToParty` | `crmt_sold_to_part` |
| `PurchaseOrderByCustomer` | `crmt_po_number_sold` |
| `ServiceContractIsReleased` | `crms4_stat_released` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Change Sold-to Party for Srvc Contract'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE] 
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
define root abstract entity D_SrvcContrChangeSoldToPartyP 
{  
  @Semantics.dateTime: true
  SrvcTransChgReqRcvdOnDateTime : timestamp;
  
  EffectiveDate                 : datum;
  
  SoldToParty                   : crmt_sold_to_part;

  PurchaseOrderByCustomer       : crmt_po_number_sold;
    
  @Semantics.booleanIndicator: true
  ServiceContractIsReleased     : crms4_stat_released;
}
```
