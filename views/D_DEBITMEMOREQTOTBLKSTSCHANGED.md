---
name: D_DEBITMEMOREQTOTBLKSTSCHANGED
description: D Debitmemoreqtotblkstschanged
semantic_en: "Debit Memo Request Total Block Status Change event — signature view for blocking/freezing state by SalesOrganization and DistributionChannel"
semantic_vi: "Sự kiện thay đổi trạng thái khóa tổng cộng yêu cầu ghi nợ — ghi nhận chuyển trạng thái khóa/đóng замерз theo tổ chức bán hàng"
keywords:
  - yêu cầu ghi nợ
  - trạng thái khóa
  - bloque
  - thay đổi
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
# D_DEBITMEMOREQTOTBLKSTSCHANGED

**D Debitmemoreqtotblkstschanged**

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
| `TotalBlockStatus` | `spstg` |
| `PreviousTotalBlockStatus` | `spstg` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Total Block Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoReqTotBlkStsChanged
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      DebitMemoRequestType           : auart_unv;

      SalesOrganization              : vkorg;

      DistributionChannel            : vtweg;

      OrganizationDivision           : spart;

      SoldToParty                    : kunnr;

      @Event.qualifiesEventType      : true
      @Event.previousValue.element: 'PreviousTotalBlockStatus'
      TotalBlockStatus               : spstg;

      PreviousTotalBlockStatus       : spstg;

}
```
