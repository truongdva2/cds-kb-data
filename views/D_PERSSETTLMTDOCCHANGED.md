---
name: D_PERSSETTLMTDOCCHANGED
description: D Perssettlmtdocchanged
semantic_en: "personnel settlement document changed event — triggered when settlement type, category, process changes; includes company, sales, distribution, division."
semantic_vi: "Sự kiện thay đổi chứng chỉ quyết toán nhân sự — cập nhật loại quyết toán, công ty, tổ chức bán hàng."
keywords:
  - sự kiện thay đổi
  - quyết toán
  - nhân sự
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - component:LO-AB
  - lob:Logistics General
  - bo:PersonnelSettlementDocument
---
# D_PERSSETTLMTDOCCHANGED

**D Perssettlmtdocchanged**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SettlmtProcessType` | `wlf_settlmt_process_type` |
| `SettlmtDocType` | `wlf_settlmt_doc_type` |
| `SettlmtDocCat` | `wlf_settlmt_doc_cat` |
| `SettlmtProcessCat` | `wlf_settlmt_process_cat` |
| `CompanyCode` | `bukrs` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `Division` | `spart` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Personnel Settlement Document Changed'
@ObjectModel.sapObjectNodeType.name: 'PersonnelSettlementDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions
define abstract entity D_PersSettlmtDocChanged
{
  SettlmtProcessType  : wlf_settlmt_process_type;
  SettlmtDocType      : wlf_settlmt_doc_type;
  SettlmtDocCat       : wlf_settlmt_doc_cat;
  SettlmtProcessCat   : wlf_settlmt_process_cat;
  CompanyCode         : bukrs;
  SalesOrganization   : vkorg;
  DistributionChannel : vtweg;
  Division            : spart; 
}
```
