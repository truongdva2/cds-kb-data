---
name: I_CL_DOCTYPEVCHRTYPEASSGMT
description: CL Doctypevchrtypeassgmt
semantic_en: "mapping of document types to Chilean voucher types — associates accounting document type with CL reporting document type by country and company code."
semantic_vi: "ánh xạ giữa loại tài liệu và loại chứng từ thanh toán Chile — kết nối loại tài liệu kế toán với loại tài liệu báo cáo CL theo quốc gia và công ty."
keywords:
  - loại tài liệu Chile
  - ánh xạ chứng từ
  - chứng từ thanh toán
app_component: FI-LOC-FI-CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-FI
  - interface-view
  - component:FI-LOC-FI-CL
  - lob:Finance
---
# I_CL_DOCTYPEVCHRTYPEASSGMT

**CL Doctypevchrtypeassgmt**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Country` | `land1` |
| `CompanyCode` | `bukrs` |
| `AccountingDocumentType` | `blart` |
| `CL_ReportingDocumentType` | `vtyp` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICLVTYPMAP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: [#NONE]
@EndUserText.label: 'Mappg of Doc Type and Chilean Vchr Type' 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
define view I_CL_DocTypeVchrTypeAssgmt
  as select from ficlc_vtyp_map
{
  key land1 as Country,
  key bukrs as CompanyCode,
  key blart as AccountingDocumentType,
  vtyp as CL_ReportingDocumentType
}
```
