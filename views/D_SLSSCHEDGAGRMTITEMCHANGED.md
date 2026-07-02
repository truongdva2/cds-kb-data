---
name: D_SLSSCHEDGAGRMTITEMCHANGED
description: D Slsschedgagrmtitemchanged
semantic_en: "change-document signature for sales scheduling agreement items — captures event timestamp, sales organization, distribution channel, division, sold-to party, item category, and product when item details are modified"
semantic_vi: "chữ ký thay đổi tài liệu cho các mục hợp đồng lên lịch bán hàng — ghi lại dấu thời gian sự kiện, tổ chức bán hàng, kênh phân phối, bộ phận, bên mua, danh mục mục và sản phẩm khi chi tiết mục được sửa đổi"
keywords:
  - hợp đồng lên lịch bán hàng
  - thay đổi mục hàng
  - sự kiện thay đổi
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - item-level
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
  - bo:SalesSchedulingAgreementItem
---
# D_SLSSCHEDGAGRMTITEMCHANGED

**D Slsschedgagrmtitemchanged**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `SalesSchedgAgrmtType` | `vdm_sales_schedg_agrmt_type` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |
| `SalesSchedgAgrmtItemCategory` | `pstyv` |
| `Product` | `matnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreementItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SlsSchedgAgrmtItemChanged
{
  @Event.raisedAt.dateTime     : true
  EventRaisedDateTime          : vdm_lastchangedon;

  SalesSchedgAgrmtType         : vdm_sales_schedg_agrmt_type;

  SalesOrganization            : vkorg;

  DistributionChannel          : vtweg;

  OrganizationDivision         : spart;

  SoldToParty                  : kunnr;

  SalesSchedgAgrmtItemCategory : pstyv;

  Product                      : matnr;

}
```
