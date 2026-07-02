---
name: D_RFQCREATEFROMPURREQNITEMP
description: D Rfqcreatefrompurreqnitemp
semantic_en: "RFQ creation parameter from purchase requisition item — specifies requisition and item references for generating quote requests"
semantic_vi: "tham số tạo RFQ từ dòng yêu cầu mua hàng — chỉ định tham chiếu yêu cầu và dòng để tạo yêu cầu báo giá"
keywords:
  - tạo RFQ
  - yêu cầu báo giá
  - yêu cầu mua hàng
  - tham số
app_component: MM-PUR-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-RFQ
  - item-level
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_RFQCREATEFROMPURREQNITEMP

**D Rfqcreatefrompurreqnitemp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseRequisition` | `banfn` |
| `PurchaseRequisitionItem` | `bnfpo` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_RFQCreateFromPurReqnP` | — |

## Source Code

```abap
@EndUserText.label: 'RFQ Create from Pur Reqn Item Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_RFQCreateFromPurReqnItemP  {
 
  PurchaseRequisition     : banfn;
  PurchaseRequisitionItem : bnfpo;
  
_DummyAssociation  :  association to parent D_RFQCreateFromPurReqnP;
//    _D_RFQCreateFromPurReqnP : association to parent D_RFQCreateFromPurReqnP;
}
```
