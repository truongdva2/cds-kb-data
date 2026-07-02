---
name: D_SLSQTANOVRLRJCNSTSCHGD
description: D Slsqtanovrlrjcnstschgd
semantic_en: "business event signature for sales quotation overall rejection status change — capturing timestamp, quotation context, overall rejection status, and previous rejection status"
semantic_vi: "chữ ký sự kiện khi trạng thái từ chối tổng thể của báo giá bán thay đổi — ghi nhận thời điểm sự kiện, bối cảnh báo giá và trạng thái từ chối tổng thể và trước đó"
keywords:
  - trạng thái từ chối tổng thể báo giá thay đổi
  - sự kiện từ chối tổng thể
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
  - bo:SalesQuotation
---
# D_SLSQTANOVRLRJCNSTSCHGD

**D Slsqtanovrlrjcnstschgd**

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
| `OverallSDDocumentRejectionSts` | `abstk` |
| `PreviousOvrlSDDocRejectionSts` | `abstk` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Qtan Overall Rejection Sts Changed'
@ObjectModel.sapObjectNodeType.name: 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanOvrlRjcnStsChgd
{
  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;  

  SalesQuotationType            : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;
  
  SoldToParty                   : kunnr;
  
  @Event.qualifiesEventType: true
  OverallSDDocumentRejectionSts : abstk;

  PreviousOvrlSDDocRejectionSts : abstk; 

}
```
