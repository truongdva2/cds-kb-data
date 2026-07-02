---
name: D_SLSQTANITMGENINCPLSTSCHGD
description: D Slsqtanitmgenincplstschgd
semantic_en: "business event signature for sales quotation item general incompleteness status change — capturing timestamp, item context, product details, and previous incompleteness status"
semantic_vi: "chữ ký sự kiện khi trạng thái không hoàn chỉnh chung của dòng báo giá bán thay đổi — ghi nhận thời điểm sự kiện, bối cảnh dòng mục, chi tiết sản phẩm và trạng thái không hoàn chỉnh trước đó"
keywords:
  - trạng thái không hoàn chỉnh dòng báo giá thay đổi
  - sự kiện hoàn chỉnh dòng mục
  - theo dõi trạng thái hoàn chỉnh
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
# D_SLSQTANITMGENINCPLSTSCHGD

**D Slsqtanitmgenincplstschgd**

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
| `ItemGeneralIncompletionStatus` | `uvall_up` |
| `PreviousItmGenIncompltnSts` | `uvall_up` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Incp Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanItmGenIncplStsChgd
{

      @Event.raisedAt.dateTime: true
      EventRaisedDateTime                     : vdm_lastchangedon;

      SalesQuotationType                      : auart_unv;

      SalesOrganization                       : vkorg;

      DistributionChannel                     : vtweg;

      OrganizationDivision                    : spart;
      
      SoldToParty                             : kunnr;
      
      SalesQuotationItemCategory              : pstyv;
      
      Product                                 : matnr; 

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousItmGenIncompltnSts'
      ItemGeneralIncompletionStatus           : uvall_up;

      PreviousItmGenIncompltnSts              : uvall_up;

}
```
