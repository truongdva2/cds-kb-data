---
name: D_CREDITMEMOREQUESTITEMCHANGED
description: D Creditmemorequestitemchanged
semantic_en: "Credit Memo Request Item Changed — event tracking for modifications to individual line items of credit memo requests by product and category."
semantic_vi: "Dòng Yêu cầu Ghi nợ Trả tiền Đã thay đổi — theo dõi sự kiện cho các sửa đổi của các dòng yêu cầu ghi nợ trả tiền."
keywords:
  - dòng yêu cầu
  - ghi nợ trả tiền
  - sản phẩm
  - thay đổi
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - credit
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
  - bo:CreditMemoRequestItem
---
# D_CREDITMEMOREQUESTITEMCHANGED

**D Creditmemorequestitemchanged**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `CreditMemoRequestType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |
| `CreditMemoRequestItemCategory` | `pstyv` |
| `Product` | `matnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestItemChanged
{

  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;

  CreditMemoRequestType         : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;

  SoldToParty                   : kunnr;

  CreditMemoRequestItemCategory : pstyv;

  Product                       : matnr;
}
```
