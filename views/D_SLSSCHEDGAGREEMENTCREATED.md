---
name: D_SLSSCHEDGAGREEMENTCREATED
description: D Slsschedgagreementcreated
semantic_en: "business event signature for a created sales scheduling agreement — capturing event timestamp, agreement type, sales organization, distribution channel, division, and customer identification"
semantic_vi: "chữ ký sự kiện khi tạo thỏa thuận lên lịch bán mới — ghi nhận thời điểm sự kiện, loại thỏa thuận, tổ chức bán hàng, kênh phân phối, bộ phận tổ chức và thông tin khách hàng"
keywords:
  - thỏa thuận lên lịch bán mới
  - sự kiện tạo thỏa thuận
  - thêm thỏa thuận lên lịch
app_component: SD-SLS-OA-SCH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - component:SD-SLS-OA-SCH-2CL
  - lob:Sales & Distribution
  - bo:SalesSchedulingAgreement
---
# D_SLSSCHEDGAGREEMENTCREATED

**D Slsschedgagreementcreated**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-SCH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `SalesSchedgAgrmtType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Scheduling Agreement Created'
@ObjectModel.sapObjectNodeType.name: 'SalesSchedulingAgreement'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SlsSchedgAgreementCreated
{
  @Event.raisedAt.dateTime       : true
  EventRaisedDateTime  : vdm_lastchangedon;

  SalesSchedgAgrmtType : auart_unv;

  SalesOrganization    : vkorg;

  DistributionChannel  : vtweg;

  OrganizationDivision : spart;

  SoldToParty          : kunnr;


}
```
