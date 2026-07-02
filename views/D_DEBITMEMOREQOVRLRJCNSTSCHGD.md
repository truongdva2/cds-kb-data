---
name: D_DEBITMEMOREQOVRLRJCNSTSCHGD
description: D Debitmemoreqovrlrjcnstschgd
semantic_en: "Debit Memo Request Overall Rejection Status Change event — tracks rejection state transitions for the entire SD document by DistributionChannel and timestamp"
semantic_vi: "Sự kiện thay đổi trạng thái từ chối toàn bộ yêu cầu ghi nợ — theo dõi chuyển trạng thái từ chối toàn bộ chứng từ bán hàng"
keywords:
  - yêu cầu ghi nợ
  - từ chối
  - trạng thái
  - chứng từ bán hàng
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
# D_DEBITMEMOREQOVRLRJCNSTSCHGD

**D Debitmemoreqovrlrjcnstschgd**

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
| `OverallSDDocumentRejectionSts` | `abstk` |
| `PreviousOvrlSDDocRejectionSts` | `abstk` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Overall Rejection Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'DebitMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoReqOvrlRjcnStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;

      DebitMemoRequestType          : auart_unv;

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
