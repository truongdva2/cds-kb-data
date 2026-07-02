---
name: D_CITINITIATEPARAMETER
description: D Citinitiateparameter
semantic_en: "Corporate Income Tax Initiate Filter Action Parameter — parameter for initiating CIT filter actions with fiscal and document references."
semantic_vi: "Tham số Hành động Bắt đầu Lọc Thuế thu nhập Doanh nghiệp — tham số khởi tạo lọc CIT."
keywords:
  - thuế thu nhập doanh nghiệp
  - khởi tạo lọc
  - tài liệu kế toán
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - component:FI-LOC-CIT
  - lob:Finance
---
# D_CITINITIATEPARAMETER

**D Citinitiateparameter**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FSItemMappingUUID` | `char32` |
| `FiscalYear` | `fis_gjahr_no_conv` |
| `CompanyCode` | `fis_bukrs` |
| `AccountingDocument` | `farp_belnr_d` |
| `Ledger` | `fis_rldnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'CIT Initiate Filter Action Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITInitiateParameter
{ 
  @Semantics.uuid
  FSItemMappingUUID: char32;
  FiscalYear: fis_gjahr_no_conv;
  CompanyCode: fis_bukrs;
  AccountingDocument: farp_belnr_d;
  Ledger: fis_rldnr;
}
```
