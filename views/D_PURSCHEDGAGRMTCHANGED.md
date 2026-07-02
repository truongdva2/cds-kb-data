---
name: D_PURSCHEDGAGRMTCHANGED
description: D Purschedgagrmtchanged
semantic_en: "business event signature for purchase scheduling agreement changes — captures agreement modifications across organization and time period"
semantic_vi: "sự kiện kinh doanh khi thỏa thuận lên lịch mua hàng thay đổi — ghi lại sửa đổi thỏa thuận trên tổ chức và kỳ thời gian"
keywords:
  - thỏa thuận lên lịch thay đổi
  - lên lịch mua hàng
  - thỏa thuận
  - nhà cung cấp
app_component: MM-PUR-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - component:MM-PUR-OA-SCH-2CL
  - lob:Sourcing & Procurement
---
# D_PURSCHEDGAGRMTCHANGED

**D Purschedgagrmtchanged**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchasingDocumentType` | `esart` |
| `CompanyCode` | `bukrs` |
| `PurchasingOrganization` | `ekorg` |
| `PurchasingGroup` | `bkgrp` |
| `Supplier` | `md_supplier` |
| `ValidityStartDate` | `kdatb` |
| `ValidityEndDate` | `kdate` |

## Associations

> No associations found.

## Source Code

```abap
@Event.sapObjectNodeType: 'PurchaseSchedulingAgreement'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Event for Purchase Scheduling Agreement Change'
define abstract entity D_PurSchedgAgrmtChanged
{

  PurchasingDocumentType : esart;
  CompanyCode            : bukrs;
  PurchasingOrganization : ekorg;
  PurchasingGroup        : bkgrp;
  Supplier               : md_supplier;
  ValidityStartDate      : kdatb;
  ValidityEndDate        : kdate;

}
```
