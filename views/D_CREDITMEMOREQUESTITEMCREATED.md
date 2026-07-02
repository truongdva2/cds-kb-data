---
name: D_CREDITMEMOREQUESTITEMCREATED
description: D Creditmemorequestitemcreated
semantic_en: "Credit Memo Request Item Created — event tracking for creation of new line items within credit memo requests."
semantic_vi: "Dòng Yêu cầu Ghi nợ Trả tiền Đã tạo — theo dõi sự kiện cho việc tạo dòng yêu cầu ghi nợ trả tiền mới."
keywords:
  - dòng yêu cầu
  - ghi nợ trả tiền
  - tạo mới
  - event
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
# D_CREDITMEMOREQUESTITEMCREATED

**D Creditmemorequestitemcreated**

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
@EndUserText.label: 'Credit Memo Request Item Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestItemCreated
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
