---
name: D_PERSSETTLMTDOCRELEASED
description: D Perssettlmtdocreleased
semantic_en: "personnel settlement document released event — triggered when settlement document is released; includes settlement type/category, company, sales, distribution organizational data."
semantic_vi: "Sự kiện phát hành chứng chỉ quyết toán nhân sự — kích hoạt khi phát hành, mang dữ liệu tổ chức."
keywords:
  - sự kiện phát hành
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
  - lease
  - component:LO-AB
  - lob:Logistics General
  - bo:PersonnelSettlementDocument
---
# D_PERSSETTLMTDOCRELEASED

**D Perssettlmtdocreleased**

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
@EndUserText.label: 'Personnel Settlement Document Released'
@ObjectModel.sapObjectNodeType.name: 'PersonnelSettlementDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_PersSettlmtDocReleased
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
