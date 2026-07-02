---
name: D_SALESQUOTATIONITEMDELETED
description: D Salesquotationitemdeleted
semantic_en: "business event signature for a deleted sales quotation line item — recording event timestamp, quotation context, and removed line item with category and product details"
semantic_vi: "chữ ký sự kiện khi xóa dòng mục báo giá bán — ghi nhận thời điểm sự kiện, bối cảnh báo giá và thông tin dòng hàng bị xóa"
keywords:
  - dòng mục báo giá xóa
  - sự kiện xóa dòng báo giá
  - kiểm toán xóa dòng giá
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
# D_SALESQUOTATIONITEMDELETED

**D Salesquotationitemdeleted**

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
@EndUserText.label: 'Sales Quotation Item Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationItemDeleted
{
      @Event.raisedAt.dateTime     : true
      EventRaisedDateTime          : vdm_lastchangedon;
      
      SalesQuotationType           : auart_unv;

      SalesOrganization            : vkorg;

      DistributionChannel          : vtweg;

      OrganizationDivision         : spart;
      
      SoldToParty                  : kunnr;
      
      SalesQuotationItemCategory   : pstyv;
      
      Product                      : matnr;
}
```
