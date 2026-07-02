---
name: D_DEBITMEMOREQUESTITEMCREATED
description: D Debitmemorequestitemcreated
semantic_en: "Debit Memo Request Item Created event — signature view for new line-item creation within debit memo requests by Product and SoldToParty"
semantic_vi: "Sự kiện mục yêu cầu ghi nợ được tạo mới — ghi nhận thêm mục hàng mới theo sản phẩm"
keywords:
  - mục yêu cầu ghi nợ
  - tạo mới
  - mục hàng
  - sự kiện
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
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
  - bo:DebitMemoRequestItem
---
# D_DEBITMEMOREQUESTITEMCREATED

**D Debitmemorequestitemcreated**

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
| `DebitMemoRequestType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |
| `DebitMemoRequestItemCategory` | `pstyv` |
| `Product` | `matnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoRequestItemCreated
{

  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;

  DebitMemoRequestType          : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;

  SoldToParty                   : kunnr;

  DebitMemoRequestItemCategory  : pstyv;

  Product                       : matnr;
}
```
