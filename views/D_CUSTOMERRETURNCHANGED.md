---
name: D_CUSTOMERRETURNCHANGED
description: D Customerreturnchanged
semantic_en: "Returns Order Changed — event tracking for modifications to customer returns orders across sales organization and distribution channel."
semantic_vi: "Đơn hàng Trả hàng Đã thay đổi — theo dõi sự kiện cho các sửa đổi của đơn hàng trả hàng."
keywords:
  - đơn hàng trả hàng
  - returns order
  - thay đổi
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
# D_CUSTOMERRETURNCHANGED

**D Customerreturnchanged**

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
@EndUserText.label: 'Returns Order Changed'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions 
@ObjectModel.sapObjectNodeType.name : 'CustomerReturn'
define abstract entity D_CustomerReturnChanged 
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
