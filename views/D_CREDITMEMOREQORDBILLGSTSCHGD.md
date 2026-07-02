---
name: D_CREDITMEMOREQORDBILLGSTSCHGD
description: D Creditmemoreqordbillgstschgd
semantic_en: "Credit Memo Request Overall Order-Related Billing Status Change — event tracking for billing status transitions tied to order fulfillment of credit memo requests."
semantic_vi: "Thay đổi Trạng thái Hóa đơn liên quan đến Đơn hàng Tổng thể của Yêu cầu Ghi nợ Trả tiền — theo dõi sự kiện cho các chuyển đổi trạng thái hóa đơn liên quan đến đơn hàng."
keywords:
  - yêu cầu ghi nợ trả tiền
  - trạng thái hóa đơn
  - billing status
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
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
  - bo:CreditMemoRequest
---
# D_CREDITMEMOREQORDBILLGSTSCHGD

**D Creditmemoreqordbillgstschgd**

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
| `OverallOrdReltdBillgStatus` | `fksak` |
| `PrevOvrlOrdReltdBillgStatus` | `fksak` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Ovrl Ord-Reltd Billg Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoReqOrdBillgStsChgd
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      CreditMemoRequestType          : auart_unv;

      SalesOrganization              : vkorg;

      DistributionChannel            : vtweg;

      OrganizationDivision           : spart;

      SoldToParty                    : kunnr;

      @Event.qualifiesEventType      : true
      @Event.previousValue.element: 'PrevOvrlOrdReltdBillgStatus'
      OverallOrdReltdBillgStatus     : fksak;

      PrevOvrlOrdReltdBillgStatus    : fksak;

}
```
