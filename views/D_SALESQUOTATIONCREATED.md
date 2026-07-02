---
name: D_SALESQUOTATIONCREATED
description: D Salesquotationcreated
semantic_en: "business event signature for a created sales quotation — capturing event timestamp, quotation type, sales organization, distribution channel, division, and customer identification"
semantic_vi: "chữ ký sự kiện khi tạo báo giá bán mới — ghi nhận thời điểm sự kiện, loại báo giá, tổ chức bán hàng, kênh phân phối, bộ phận tổ chức và thông tin khách hàng"
keywords:
  - báo giá bán mới
  - sự kiện tạo báo giá
  - thêm báo giá bán
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - sales-quotation
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
  - bo:SalesQuotation
---
# D_SALESQUOTATIONCREATED

**D Salesquotationcreated**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
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

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Created'
@ObjectModel.sapObjectNodeType.name : 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationCreated 
{
  @Event.raisedAt.dateTime       : true
  EventRaisedDateTime            : vdm_lastchangedon;

  SalesQuotationType             : auart_unv;

  SalesOrganization              : vkorg;

  DistributionChannel            : vtweg;

  OrganizationDivision           : spart;

  SoldToParty                    : kunnr;
}
```
