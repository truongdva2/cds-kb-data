---
name: D_CUSTOMERRETURNDELETED
description: D Customerreturndeleted
semantic_en: "Returns Order Deleted — event tracking for deletion of customer returns orders."
semantic_vi: "Đơn hàng Trả hàng Đã xóa — theo dõi sự kiện cho việc xóa đơn hàng trả hàng."
keywords:
  - đơn hàng trả hàng
  - returns order
  - xóa
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - customer
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# D_CUSTOMERRETURNDELETED

**D Customerreturndeleted**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `CustomerReturnType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Returns Order Deleted'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions 
@ObjectModel.sapObjectNodeType.name : 'CustomerReturn'
define abstract entity D_CustomerReturnDeleted 
{
  @Event.raisedAt.dateTime : true
  EventRaisedDateTime      : vdm_lastchangedon;    

  CustomerReturnType       : auart_unv;

  SalesOrganization        : vkorg;

  DistributionChannel      : vtweg;

  OrganizationDivision     : spart;

  SoldToParty              : kunnr; 
}
```
