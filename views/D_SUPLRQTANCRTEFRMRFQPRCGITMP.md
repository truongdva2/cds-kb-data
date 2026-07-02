---
name: D_SUPLRQTANCRTEFRMRFQPRCGITMP
description: D Suplrqtancrtefrmrfqprcgitmp
semantic_en: "parameterized data-input view — supplier quotation pricing parameters (condition type, condition rate value, condition currency) for pricing terms in quote generation from RFQs"
semantic_vi: "chế độ xem đầu vào dữ liệu được tham số hóa — tham số định giá báo giá nhà cung cấp (loại điều kiện, giá trị tỷ lệ điều kiện, tiền tệ điều kiện) cho các điều khoản định giá trong quá trình tạo báo giá từ yêu cầu"
keywords:
  - định giá báo giá
  - điều kiện giá
  - yêu cầu báo giá
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
  - component:MM-PUR-RFQ-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRQTANCRTEFRMRFQPRCGITMP

**D Suplrqtancrtefrmrfqprcgitmp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionType` | `kscha` |
| `ConditionRateValue` | `kbetr` |
| `ConditionCurrency` | `waers` |
| `_DummyAssociation` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DummyAssociation` | `D_SuplrQtanCrteFrmRFQItemP` | — |

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Cre From RFQ Prcng Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_SuplrQtanCrteFrmRFQPrcgItmP
{
      
      ConditionType      : kscha;
      @Semantics.amount.currencyCode: 'ConditionCurrency'
      ConditionRateValue : kbetr;
      ConditionCurrency  : waers;
//        _DummyAssociation  : association to parent D_SuplrQtanCrteFrmRFQItemP
//         on $projection.DummyKey = _DummyAssociation.DummyKey;
      _DummyAssociation : association to parent D_SuplrQtanCrteFrmRFQItemP;

}
```
