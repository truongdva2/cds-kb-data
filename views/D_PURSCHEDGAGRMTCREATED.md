---
name: D_PURSCHEDGAGRMTCREATED
description: D Purschedgagrmtcreated
semantic_en: "business event signature for new purchase scheduling agreements — records agreement creation with validity dates and organizational context"
semantic_vi: "sự kiện kinh doanh khi thỏa thuận lên lịch mua hàng được tạo — ghi lại tạo thỏa thuận với ngày hiệu lực và ngữ cảnh tổ chức"
keywords:
  - thỏa thuận lên lịch mới
  - tạo thỏa thuận
  - mua hàng
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
# D_PURSCHEDGAGRMTCREATED

**D Purschedgagrmtcreated**

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
@EndUserText.label: 'Event for Purchase Scheduling Agreement Create'
define abstract entity D_PurSchedgAgrmtCreated
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
