---
name: D_SUPLRQTANCRTEFRMRFQP
description: D Suplrqtancrtefrmrfqp
semantic_en: "parameterized data-input view — supplier quotation creation parameters (request for quotation ID, supplier ID, language, binding period validity end date, external quotation ID, submission date, follow-on document category, follow-on document type) for quote generation from RFQs"
semantic_vi: "chế độ xem đầu vào dữ liệu được tham số hóa — tham số tạo báo giá nhà cung cấp (ID yêu cầu báo giá, ID nhà cung cấp, ngôn ngữ, ngày kết thúc kỳ hạn ràng buộc, ID báo giá bên ngoài, ngày gửi, danh mục tài liệu theo sau, loại tài liệu theo sau) để tạo báo giá từ các yêu cầu"
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
# D_SUPLRQTANCRTEFRMRFQP

**D Suplrqtancrtefrmrfqp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `RequestForQuotation` | `vdm_requestforquotation` |
| `Supplier` | `md_supplier` |
| `Language` | `spras` |
| `BindingPeriodValidityEndDate` | `ebndt` |
| `SupplierQuotationExternalID` | `angnr` |
| `QuotationSubmissionDate` | `ihran` |
| `FollowOnDocumentCategory` | `followondoccat` |
| `PurgDocFollowOnDocumentType` | `followondoctype` |
| `_Items` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Items` | `D_SuplrQtanCrteFrmRFQItemP` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Supplr Qtn Crte from RFQ Item Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define root abstract entity D_SuplrQtanCrteFrmRFQP {


RequestForQuotation :   vdm_requestforquotation ;
Supplier    : md_supplier ;
Language   : spras ;
BindingPeriodValidityEndDate  : ebndt ;
SupplierQuotationExternalID :   angnr; 
QuotationSubmissionDate :   ihran ;
FollowOnDocumentCategory : followondoccat;
PurgDocFollowOnDocumentType :   followondoctype;
 _Items                     : composition [0..*] of D_SuplrQtanCrteFrmRFQItemP;   
 
}
```
