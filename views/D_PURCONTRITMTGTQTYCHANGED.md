---
name: D_PURCONTRITMTGTQTYCHANGED
description: D Purcontritmtgtqtychanged
semantic_en: "business event signature for purchase contract item target quantity changes — compares previous and new quantities with units"
semantic_vi: "sự kiện kinh doanh khi số lượng mục tiêu dòng hợp đồng mua thay đổi — so sánh số lượng trước và sau với đơn vị"
keywords:
  - số lượng mục tiêu hợp đồng thay đổi
  - hợp đồng mua hàng
  - số lượng mục tiêu
  - đơn vị
app_component: MM-PUR-OA-CON-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - component:MM-PUR-OA-CON-2CL
  - lob:Sourcing & Procurement
  - bo:PurchaseContractItem
---
# D_PURCONTRITMTGTQTYCHANGED

**D Purcontritmtgtqtychanged**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-CON-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseContractTargetQuantity` | `ktmng` |
| `PurContractOrderQuantityUnit` | `meins` |
| `PurContractPrevTargetQuantity` | `ktmng` |
| `PurContrPrevOrderQuantityUnit` | `meins` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'PurchaseContractItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Pur Contract Itm Target Quant chgd'
define abstract entity D_PurContrItmTgtQtyChanged
{
   
  @Event.previousValue.element   :'PurContractOrderQuantityUnit'
  @Semantics.quantity.unitOfMeasure: 'PurContractOrderQuantityUnit'
  PurchaseContractTargetQuantity : ktmng;
 
  @Event.previousValue.element   :'PurContrPrevOrderQuantityUnit'
  PurContractOrderQuantityUnit   : meins;
 
  @Semantics.quantity.unitOfMeasure: 'PurContrPrevOrderQuantityUnit'
  PurContractPrevTargetQuantity  : ktmng;
 
  PurContrPrevOrderQuantityUnit  : meins;
 
}
```
