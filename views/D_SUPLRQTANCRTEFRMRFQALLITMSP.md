---
name: D_SUPLRQTANCRTEFRMRFQALLITMSP
description: D Suplrqtancrtefrmrfqallitmsp
semantic_en: "parameterized data-input view — supplier quotation creation parameters from all RFQ items (request for quotation ID, supplier ID, submission date) for batch quote generation"
semantic_vi: "chế độ xem đầu vào dữ liệu được tham số hóa — tham số tạo báo giá nhà cung cấp từ tất cả các mục yêu cầu báo giá (ID yêu cầu báo giá, ID nhà cung cấp, ngày gửi) để tạo báo giá theo lô"
keywords:
  - báo giá nhà cung cấp
  - yêu cầu báo giá
  - tạo báo giá
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
# D_SUPLRQTANCRTEFRMRFQALLITMSP

**D Suplrqtancrtefrmrfqallitmsp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RequestForQuotation` | `ebeln` |
| `Supplier` | `md_supplier` |
| `QuotationSubmissionDate` | `ihran` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Crte from All RFQ Items Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_SuplrQtanCrteFrmRFQAllItmsP{
  RequestForQuotation : ebeln;
  Supplier : md_supplier ;
  QuotationSubmissionDate : ihran ;
}
```
