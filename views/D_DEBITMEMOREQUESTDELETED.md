---
name: D_DEBITMEMOREQUESTDELETED
description: D Debitmemorequestdeleted
semantic_en: "Debit Memo Request Deleted event — records deletion events for debit memo requests by Organization, DistributionChannel, and timestamp"
semantic_vi: "Sự kiện yêu cầu ghi nợ bị xóa — ghi nhận xóa yêu cầu ghi nợ theo tổ chức và kênh phân phối"
keywords:
  - yêu cầu ghi nợ
  - xóa
  - sự kiện
  - bị xóa
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
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
  - bo:DebitMemoRequest
---
# D_DEBITMEMOREQUESTDELETED

**D Debitmemorequestdeleted**

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

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Deleted'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoRequestDeleted
{
  @Event.raisedAt.dateTime : true
  EventRaisedDateTime      : vdm_lastchangedon;
   
  DebitMemoRequestType     : auart_unv;
   
  SalesOrganization        : vkorg;
   
  DistributionChannel      : vtweg;
   
  OrganizationDivision     : spart; 
   
  SoldToParty              : kunnr;
    
}
```
