---
name: D_DEBITMEMOREQUESTCREATED
description: D Debitmemorequestcreated
semantic_en: "Debit Memo Request Created event — signature view for new debit memo request creation with SalesOrganization, SoldToParty, and timestamp"
semantic_vi: "Sự kiện yêu cầu ghi nợ được tạo mới — ghi nhận tạo mới yêu cầu ghi nợ theo tổ chức bán hàng và bên mua"
keywords:
  - yêu cầu ghi nợ
  - tạo mới
  - sự kiện
  - ghi nợ
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
# D_DEBITMEMOREQUESTCREATED

**D Debitmemorequestcreated**

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
@EndUserText.label: 'Debit Memo Request Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoRequestCreated 
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
