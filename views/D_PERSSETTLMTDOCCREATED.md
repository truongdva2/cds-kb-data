---
name: D_PERSSETTLMTDOCCREATED
description: D Perssettlmtdoccreated
semantic_en: "personnel settlement document created event — triggered on new settlement document; carries settlement process/document type, company, sales org, distribution, division."
semantic_vi: "Sự kiện tạo chứng chỉ quyết toán nhân sự — kích hoạt khi tạo mới, mang loại quyết toán và tổ chức."
keywords:
  - sự kiện tạo
  - quyết toán nhân sự
  - công ty
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
# D_PERSSETTLMTDOCCREATED

**D Perssettlmtdoccreated**

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
@EndUserText.label: 'Personnel Settlement Document Created'
@ObjectModel.sapObjectNodeType.name: 'PersonnelSettlementDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_PersSettlmtDocCreated
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
