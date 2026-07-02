---
name: D_BILLGDOCGETLATESTPDFIR
description: D Billgdocgetlatestpdfir
semantic_en: "Result for retrieving latest PDF output of billing document — BillingDocOutputDataBinary"
semantic_vi: "Kết quả để truy xuất đầu ra PDF mới nhất của chứng từ lập hóa đơn — dữ liệu đầu ra chứng từ lập hóa đơn nhị phân"
keywords:
  - lập hóa đơn
  - PDF
  - tải xuống
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
# D_BILLGDOCGETLATESTPDFIR

**D Billgdocgetlatestpdfir**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingDocOutputDataBinary` | `billingdocoutputdatabinary` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Billing Document Fetch Latest PDF Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

define root abstract entity D_BillgDocGetLatestPDFIR
{
  BillingDocOutputDataBinary : billingdocoutputdatabinary;
}
```
