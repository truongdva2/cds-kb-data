---
name: D_BLGDCCRTEFRMBILLGDOCREFITMIP
description: D Blgdccrtefrmbillgdocrefitmip
semantic_en: "Action parameter for creating billing document from reference billing document item — ReferenceBillingDocumentItem, BillingQuantity, BillingQuantityUnit"
semantic_vi: "Tham số thao tác để tạo chứng từ lập hóa đơn từ mục chứng từ lập hóa đơn tham chiếu — mục chứng từ lập hóa đơn tham chiếu, số lượng lập hóa đơn, đơn vị số lượng lập hóa đơn"
keywords:
  - lập hóa đơn
  - tham chiếu
  - tạo
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BLGDCCRTEFRMBILLGDOCREFITMIP

**D Blgdccrtefrmbillgdocrefitmip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferenceBillingDocumentItem` | `posnr_vf` |
| `BillingQuantity` | `fkimg` |
| `BillingQuantityUnit` | `vrkme` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_BillgDocCrteFrmBillgDocRefIP` | — |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create from Bill Doc Ref Item - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_BlgDcCrteFrmBillgDocRefItmIP
{
  ReferenceBillingDocumentItem : posnr_vf;
  @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
  BillingQuantity     : fkimg;
  @Semantics.unitOfMeasure: true
  BillingQuantityUnit : vrkme;
  _DummyAssociation   : association to parent D_BillgDocCrteFrmBillgDocRefIP;
}
```
