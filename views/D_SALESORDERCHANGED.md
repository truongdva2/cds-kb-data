---
name: D_SALESORDERCHANGED
description: D Sales OrderCHANGED
semantic_en: "business event signature for sales order modifications — tracks order type, organization, channel, division, and customer changes"
semantic_vi: "sự kiện kinh doanh khi đơn bán hàng thay đổi — theo dõi loại đơn, tổ chức, kênh, bộ phận và thay đổi khách hàng"
keywords:
  - đơn bán hàng thay đổi
  - sự kiện thay đổi
  - loại đơn
  - khách hàng
app_component: SD-SLS-GF-BET-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - sales-order
  - component:SD-SLS-GF-BET-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# D_SALESORDERCHANGED

**D Sales OrderCHANGED**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-BET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `SalesOrderType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.sapObjectNodeType.name: 'SalesOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderChanged
{

  @Event.raisedAt.dateTime: true
  EventRaisedDateTime  : vdm_lastchangedon;

  SalesOrderType       : auart_unv;

  SalesOrganization    : vkorg;

  DistributionChannel  : vtweg;

  OrganizationDivision : spart;

  SoldToParty          : kunnr;

}
```
