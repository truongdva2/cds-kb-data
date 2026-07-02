---
name: D_DEBITMEMOREQORDBILLGSTSCHGD
description: D Debitmemoreqordbillgstschgd
semantic_en: "Debit Memo Request Overall Order-Related Billing Status Change event — captures aggregate billing state transitions across all items by Organization and SoldToParty"
semantic_vi: "Sự kiện thay đổi trạng thái hóa đơn liên quan đơn hàng toàn bộ — ghi lại chuyển trạng thái hóa đơn tổng hợp theo tổ chức và bên mua"
keywords:
  - yêu cầu ghi nợ
  - hóa đơn toàn bộ
  - đơn hàng
  - trạng thái
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
# D_DEBITMEMOREQORDBILLGSTSCHGD

**D Debitmemoreqordbillgstschgd**

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
| `OverallOrdReltdBillgStatus` | `fksak` |
| `PrevOvrlOrdReltdBillgStatus` | `fksak` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Overall Ord-Reltd Billing Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoReqOrdBillgStsChgd
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      DebitMemoRequestType           : auart_unv;

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
