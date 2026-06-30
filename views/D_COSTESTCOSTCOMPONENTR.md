---
name: D_COSTESTCOSTCOMPONENTR
description: D Costestcostcomponentr
semantic_en: "Cost estimate cost component action result structure — abstract entity defining the output of a cost estimation action, returning cost component identifier, name, and total/fixed amounts in both company code and controlling area currencies."
semantic_vi: "Cấu trúc kết quả hành động thành phần chi phí ước tính — thực thể trừu tượng định nghĩa đầu ra của hành động ước tính chi phí, trả về mã thành phần chi phí, tên và số tiền tổng/cố định theo cả đơn vị tiền tệ mã công ty và khu vực kiểm soát."
keywords:
  - thành phần chi phí
  - ước tính giá thành
  - cost component
  - kết quả ước tính chi phí
  - controlling chi phí sản phẩm
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# D_COSTESTCOSTCOMPONENTR

**D Costestcostcomponentr**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CostComponent` | `ck_element` |
| `CostComponentName` | `ck_txele` |
| `TotalAmountInCoCodeCrcy` | `total_amt` |
| `FixedAmountInCoCodeCrcy` | `total_amt` |
| `TotalAmountInCtrlgAreaCrcy` | `total_amt` |
| `FixedAmountInCtrlgAreaCrcy` | `total_amt` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Cost Components'

define root abstract entity D_CostEstCostComponentR
{
    CostComponent     : ck_element;
    CostComponentName : ck_txele;
    
    TotalAmountInCoCodeCrcy : total_amt;
    FixedAmountInCoCodeCrcy : total_amt;
    TotalAmountInCtrlgAreaCrcy : total_amt;
    FixedAmountInCtrlgAreaCrcy : total_amt;
}
```
