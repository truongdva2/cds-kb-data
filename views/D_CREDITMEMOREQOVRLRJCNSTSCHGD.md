---
name: D_CREDITMEMOREQOVRLRJCNSTSCHGD
description: D Creditmemoreqovrlrjcnstschgd
semantic_en: "Credit Memo Request Overall Rejection Status Change — event tracking for SD document rejection status transitions of credit memo requests."
semantic_vi: "Thay đổi Trạng thái Từ chối Tổng thể của Yêu cầu Ghi nợ Trả tiền — theo dõi sự kiện cho các chuyển đổi trạng thái từ chối SD của các yêu cầu ghi nợ trả tiền."
keywords:
  - yêu cầu ghi nợ trả tiền
  - trạng thái từ chối
  - rejection status
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
# D_CREDITMEMOREQOVRLRJCNSTSCHGD

**D Creditmemoreqovrlrjcnstschgd**

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
| `OverallSDDocumentRejectionSts` | `abstk` |
| `PreviousOvrlSDDocRejectionSts` | `abstk` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Ovrl Rjcn Sts Chgd'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoReqOvrlRjcnStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;

      CreditMemoRequestType         : auart_unv;

      SalesOrganization             : vkorg;

      DistributionChannel           : vtweg;

      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;
      
      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousOvrlSDDocRejectionSts'
      OverallSDDocumentRejectionSts : abstk;

      PreviousOvrlSDDocRejectionSts : abstk; 
}
```
