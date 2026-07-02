---
name: D_SLSQTANITMSDPROCSTSCHGD
description: D Slsqtanitmsdprocstschgd
semantic_en: "business event signature for sales quotation item sales and distribution process status change — capturing timestamp, item context, product details, process status, and previous status"
semantic_vi: "chữ ký sự kiện khi trạng thái quy trình bán hàng và phân phối của dòng báo giá thay đổi — ghi nhận thời điểm sự kiện, bối cảnh dòng mục, chi tiết sản phẩm và trạng thái trước đó"
keywords:
  - trạng thái quy trình dòng báo giá thay đổi
  - sự kiện quy trình dòng mục
  - theo dõi trạng thái quy trình
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
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
  - bo:SalesQuotationItem
---
# D_SLSQTANITMSDPROCSTSCHGD

**D Slsqtanitmsdprocstschgd**

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
| `SDProcessStatus` | `gbsta` |
| `PreviousSDProcessStatus` | `gbsta` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Qtan Item SD Proc Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanItmSDProcStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime     : vdm_lastchangedon;

      SalesQuotationType      : auart_unv;

      SalesOrganization       : vkorg;

      DistributionChannel     : vtweg;

      OrganizationDivision    : spart;

      SoldToParty             : kunnr;

      SalesQuotationItemCategory  : pstyv;

      Product                 : matnr;

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousSDProcessStatus'
      SDProcessStatus         : gbsta;

      PreviousSDProcessStatus : gbsta;

}
```
