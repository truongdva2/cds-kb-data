---
name: D_FRTCOSTALLOCDOCCHANGED
description: D Frtcostallocdocchanged
semantic_en: "freight cost allocation document modification event — change-document signature capturing updates to FreightCostAllocationDocument with settlement process, document type, company/purchasing/sales organization details."
semantic_vi: "sự kiện thay đổi tài liệu phân bổ chi phí vận chuyển — chữ ký tài liệu ghi lại cập nhật FreightCostAllocationDocument với chi tiết quá trình quyết toán, loại tài liệu, công ty/tổ chức mua/bán."
keywords:
  - phân bổ chi phí
  - vận chuyển
  - sự kiện thay đổi
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
  - bo:FreightCostAllocationDocument
---
# D_FRTCOSTALLOCDOCCHANGED

**D Frtcostallocdocchanged**

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
| `CompanyCode` | `bukrs` |
| `PurchasingOrganization` | `ekorg` |
| `PurchasingGroup` | `ekgrp` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `Division` | `spart` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Freight Cost Allocation Document Changed'
@ObjectModel.sapObjectNodeType.name: 'FreightCostAllocationDocument'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_FrtCostAllocDocChanged
{
  SettlmtProcessType     : wlf_settlmt_process_type;
  SettlmtDocType         : wlf_settlmt_doc_type;
  SettlmtDocCat          : wlf_settlmt_doc_cat;
  CompanyCode            : bukrs;
  PurchasingOrganization : ekorg;
  PurchasingGroup        : ekgrp;
  SalesOrganization      : vkorg;
  DistributionChannel    : vtweg;
  Division               : spart;
}
```
