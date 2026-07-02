---
name: D_DEBITMEMOREQITMSDPROCSTSCHGD
description: D Debitmemoreqitmsdprocstschgd
semantic_en: "Debit Memo Request Item SD Process Status Change event — records workflow state changes for line-item processing by Product and SoldToParty"
semantic_vi: "Sự kiện thay đổi trạng thái quy trình SD cho mục yêu cầu ghi nợ — ghi nhận thay đổi trạng thái quy trình xử lý theo sản phẩm"
keywords:
  - mục yêu cầu ghi nợ
  - trạng thái quy trình
  - bán hàng
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
  - bo:DebitMemoRequestItem
---
# D_DEBITMEMOREQITMSDPROCSTSCHGD

**D Debitmemoreqitmsdprocstschgd**

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
| `DebitMemoRequestItemCategory` | `pstyv` |
| `Product` | `matnr` |
| `SDProcessStatus` | `gbsta` |
| `PreviousSDProcessStatus` | `gbsta` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Item SD Process Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoReqItmSDProcStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;
      
      DebitMemoRequestType          : auart_unv;
      
      SalesOrganization             : vkorg;
      
      DistributionChannel           : vtweg;
      
      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;

      DebitMemoRequestItemCategory  : pstyv;

      Product                       : matnr;

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PreviousSDProcessStatus'
      SDProcessStatus               : gbsta;
      
      PreviousSDProcessStatus       : gbsta;
}
```
