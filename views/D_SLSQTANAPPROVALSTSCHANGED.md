---
name: D_SLSQTANAPPROVALSTSCHANGED
description: D Slsqtanapprovalstschanged
semantic_en: "business event signature for sales quotation approval status change — capturing timestamp, quotation context, current and previous approval status"
semantic_vi: "chữ ký sự kiện khi trạng thái duyệt báo giá bán thay đổi — ghi nhận thời điểm sự kiện, bối cảnh báo giá và trạng thái duyệt hiện tại và trước đó"
keywords:
  - trạng thái duyệt báo giá thay đổi
  - sự kiện duyệt báo giá
  - theo dõi trạng thái duyệt
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
  - approval
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
  - bo:SalesQuotation
---
# D_SLSQTANAPPROVALSTSCHANGED

**D Slsqtanapprovalstschanged**

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
| `SalesDocApprovalStatus` | `sd_apm_approval_status` |
| `PreviousSalesDocApprovalStatus` | `sd_apm_approval_status` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Approval Status Changed'
@ObjectModel.sapObjectNodeType.name: 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions     // **** enable extensibility ****
define abstract entity D_SlsQtanApprovalStsChanged
{
  @Event.raisedAt.dateTime       : true
  EventRaisedDateTime            : vdm_lastchangedon;

  SalesQuotationType             : auart_unv;

  SalesOrganization              : vkorg;

  DistributionChannel            : vtweg;

  OrganizationDivision           : spart;

  SoldToParty                    : kunnr;

  @Event.qualifiesEventType      : true
  @Event.previousValue.element   : 'PreviousSalesDocApprovalStatus'
  SalesDocApprovalStatus         : sd_apm_approval_status;

  PreviousSalesDocApprovalStatus : sd_apm_approval_status;
}
```
