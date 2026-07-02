---
name: D_CRDMMREQTOTBLKSTSCHANGED
description: D Crdmmreqtotblkstschanged
semantic_en: "Credit Memo Request Total Block Status Change — event tracking for total block status transitions of credit memo requests across organization dimensions."
semantic_vi: "Thay đổi Trạng thái Khóa Tổng cộng của Yêu cầu Ghi nợ Trả tiền — theo dõi sự kiện cho các chuyển đổi trạng thái khóa tổng cộng của các yêu cầu ghi nợ trả tiền."
keywords:
  - yêu cầu ghi nợ trả tiền
  - trạng thái khóa
  - block status
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
  - bo:CreditMemoRequest
---
# D_CRDMMREQTOTBLKSTSCHANGED

**D Crdmmreqtotblkstschanged**

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
| `TotalBlockStatus` | `spstg` |
| `PreviousTotalBlockStatus` | `spstg` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Tot Blk Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CrdMmReqTotBlkStsChanged
{
  
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime            : vdm_lastchangedon;

      CreditMemoRequestType          : auart_unv;

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
