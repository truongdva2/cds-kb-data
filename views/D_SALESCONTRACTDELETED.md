---
name: D_SALESCONTRACTDELETED
description: D Salescontractdeleted
semantic_en: "business event signature for deleted sales contracts — records removal of contracts with type, organization, and customer context"
semantic_vi: "sự kiện kinh doanh khi hợp đồng bán hàng bị xóa — ghi lại xóa hợp đồng với loại, tổ chức và ngữ cảnh khách hàng"
keywords:
  - hợp đồng bán hàng xóa
  - xóa hợp đồng
  - loại hợp đồng
  - khách hàng
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - sales-contract
  - contract
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
  - bo:SalesContract
---
# D_SALESCONTRACTDELETED

**D Salescontractdeleted**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `SalesContractType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Contract Deleted'
@ObjectModel.sapObjectNodeType.name: 'SalesContract'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SalesContractDeleted
{
  @Event.raisedAt.dateTime: true
  EventRaisedDateTime  : vdm_lastchangedon;

  SalesContractType    : auart_unv;

  SalesOrganization    : vkorg;

  DistributionChannel  : vtweg;

  OrganizationDivision : spart;

  SoldToParty          : kunnr;

}
```
