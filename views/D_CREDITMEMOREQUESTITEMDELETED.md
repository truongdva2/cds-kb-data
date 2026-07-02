---
name: D_CREDITMEMOREQUESTITEMDELETED
description: D Creditmemorequestitemdeleted
semantic_en: "Credit Memo Request Item Deleted — event tracking for removal of line items from credit memo requests by product category."
semantic_vi: "Dòng Yêu cầu Ghi nợ Trả tiền Đã xóa — theo dõi sự kiện cho việc xóa dòng yêu cầu ghi nợ trả tiền."
keywords:
  - dòng yêu cầu
  - ghi nợ trả tiền
  - xóa
  - sản phẩm
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
# D_CREDITMEMOREQUESTITEMDELETED

**D Creditmemorequestitemdeleted**

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
@EndUserText.label: 'Credit Memo Request Item Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestItemDeleted
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
