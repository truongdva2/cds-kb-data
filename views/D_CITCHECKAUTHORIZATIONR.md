---
name: D_CITCHECKAUTHORIZATIONR
description: D Citcheckauthorizationr
semantic_en: "Corporate Income Tax Check Authorization Function Result — result of authorization validation including hierarchy and company code classification permissions."
semantic_vi: "Kết quả Hàm Kiểm tra Phép phép Thuế thu nhập Doanh nghiệp — kết quả xác nhận quyền truy cập và phân loại."
keywords:
  - thuế thu nhập doanh nghiệp
  - phép phép
  - phân loại công ty
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
# D_CITCHECKAUTHORIZATIONR

**D Citcheckauthorizationr**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `bukrs` |
| `CorporateIncomeTaxHierarchy` | `ficite_hryid` |
| `CITHierCoCodeEditingIsAllowed` | `boole_d` |
| `CITHierCoCodeClassfctnIsAllwd` | `boole_d` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'CIT CheckAuthorization Function Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITCheckAuthorizationR
{
    CompanyCode : bukrs;
    CorporateIncomeTaxHierarchy : ficite_hryid; 
    CITHierCoCodeEditingIsAllowed: boole_d; 
    CITHierCoCodeClassfctnIsAllwd: boole_d; 
    
}
```
