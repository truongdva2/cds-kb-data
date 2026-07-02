---
name: D_SALESQUOTATIONITEMCHANGED
description: D Salesquotationitemchanged
semantic_en: "business event signature for a modified sales quotation line item — tracking event timestamp, quotation context, and changed item with category and product details"
semantic_vi: "chữ ký sự kiện khi dòng mục báo giá bán thay đổi — theo dõi thời điểm sự kiện, bối cảnh báo giá và thông tin dòng hàng bao gồm loại mục và sản phẩm"
keywords:
  - dòng mục báo giá thay đổi
  - sự kiện dòng báo giá
  - theo dõi thay đổi dòng giá
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
# D_SALESQUOTATIONITEMCHANGED

**D Salesquotationitemchanged**

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
@EndUserText.label: 'Sales Quotation Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationItemChanged
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
