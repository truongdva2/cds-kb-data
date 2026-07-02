---
name: D_SALESQUOTATIONITEMCREATED
description: D Salesquotationitemcreated
semantic_en: "business event signature for a created sales quotation line item — capturing event timestamp, quotation context, and new line item with category and product identification"
semantic_vi: "chữ ký sự kiện khi tạo dòng mục báo giá bán mới — ghi nhận thời điểm sự kiện, bối cảnh báo giá và thông tin dòng hàng mới"
keywords:
  - dòng mục báo giá mới
  - sự kiện tạo dòng báo giá
  - thêm dòng mục báo giá
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - sales-quotation
  - item-level
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
  - bo:SalesQuotationItem
---
# D_SALESQUOTATIONITEMCREATED

**D Salesquotationitemcreated**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `SalesQuotationType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |
| `SalesQuotationItemCategory` | `pstyv` |
| `Product` | `matnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationItemCreated
{
  @Event.raisedAt.dateTime   : true
  EventRaisedDateTime        : vdm_lastchangedon;

  SalesQuotationType         : auart_unv;

  SalesOrganization          : vkorg;

  DistributionChannel        : vtweg;

  OrganizationDivision       : spart;

  SoldToParty                : kunnr;

  SalesQuotationItemCategory : pstyv;

  Product                    : matnr;
}
```
