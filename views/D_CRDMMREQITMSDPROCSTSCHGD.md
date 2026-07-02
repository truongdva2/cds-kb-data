---
name: D_CRDMMREQITMSDPROCSTSCHGD
description: D Crdmmreqitmsdprocstschgd
semantic_en: "Credit Memo Request Item SD Process Status Change — event tracking for SD process status transitions of credit memo request items across sales organization, distribution channel, and product."
semantic_vi: "Thay đổi Trạng thái Quy trình SD của Dòng Yêu cầu Ghi nợ Trả tiền — theo dõi sự kiện cho các chuyển đổi trạng thái quy trình SD của các dòng yêu cầu ghi nợ trả tiền."
keywords:
  - yêu cầu ghi nợ trả tiền
  - trạng thái quy trình SD
  - thay đổi trạng thái
  - dòng yêu cầu
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
  - bo:CreditMemoRequestItem
---
# D_CRDMMREQITMSDPROCSTSCHGD

**D Crdmmreqitmsdprocstschgd**

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
| `CreditMemoRequestItemCategory` | `pstyv` |
| `Product` | `matnr` |
| `SDProcessStatus` | `gbsta` |
| `PreviousSDProcessStatus` | `gbsta` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Crd Mm Req Itm SD Proc Sts Chgd'                          
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CrdMmReqItmSDProcStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;
      
      CreditMemoRequestType         : auart_unv;
      
      SalesOrganization             : vkorg;
      
      DistributionChannel           : vtweg;
      
      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;

      CreditMemoRequestItemCategory : pstyv;

      Product                       : matnr;

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousSDProcessStatus'
      SDProcessStatus               : gbsta;
      
      PreviousSDProcessStatus       : gbsta;
}
```
