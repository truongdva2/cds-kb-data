---
name: D_SLSQTANITMRJCNSTSCHGD
description: D Slsqtanitmrjcnstschgd
semantic_en: "business event signature for sales quotation item rejection status change — capturing timestamp, item context, product details, rejection status, and rejection reason"
semantic_vi: "chữ ký sự kiện khi trạng thái từ chối dòng báo giá bán thay đổi — ghi nhận thời điểm sự kiện, bối cảnh dòng mục, chi tiết sản phẩm, trạng thái từ chối và lý do từ chối"
keywords:
  - trạng thái từ chối dòng báo giá thay đổi
  - sự kiện từ chối dòng mục
  - theo dõi trạng thái từ chối
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
# D_SLSQTANITMRJCNSTSCHGD

**D Slsqtanitmrjcnstschgd**

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
| `SDDocumentRejectionStatus` | `absta_vb` |
| `PreviousSDDocRejectionStatus` | `absta_vb` |
| `SalesDocumentRjcnReason` | `abgru_va` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Rejection Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanItmRjcnStsChgd
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
      @Event.previousValue.element: 'PreviousSDDocRejectionStatus'
      SDDocumentRejectionStatus               : absta_vb;

      PreviousSDDocRejectionStatus            : absta_vb;
      
      SalesDocumentRjcnReason                 : abgru_va;

}
```
