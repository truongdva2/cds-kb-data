---
name: D_SLSQTANOVRLSDPROCSTSCHANGED
description: D Slsqtanovrlsdprocstschanged
semantic_en: "business event signature for sales quotation overall sales and distribution process status change — capturing timestamp, quotation context, overall process status, and previous status"
semantic_vi: "chữ ký sự kiện khi trạng thái quy trình bán hàng và phân phối tổng thể của báo giá thay đổi — ghi nhận thời điểm sự kiện, bối cảnh báo giá và trạng thái quy trình tổng thể và trước đó"
keywords:
  - trạng thái quy trình tổng thể báo giá thay đổi
  - sự kiện quy trình tổng thể
  - theo dõi trạng thái quy trình
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
  - bo:SalesQuotation
---
# D_SLSQTANOVRLSDPROCSTSCHANGED

**D Slsqtanovrlsdprocstschanged**

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
| `OverallSDProcessStatus` | `gbstk` |
| `PreviousOverallSDProcessStatus` | `gbstk` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Qtan Overall SD Proc Sts Changed'
@ObjectModel.sapObjectNodeType.name:'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanOvrlSDProcStsChanged
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      SalesQuotationType             : auart_unv;

      SalesOrganization              : vkorg;

      DistributionChannel            : vtweg;

      OrganizationDivision           : spart;

      SoldToParty                    : kunnr;

      @Event.qualifiesEventType      : true
      @Event.previousValue.element: 'PreviousOverallSDProcessStatus'
      OverallSDProcessStatus         : gbstk;

      PreviousOverallSDProcessStatus : gbstk;

}
```
