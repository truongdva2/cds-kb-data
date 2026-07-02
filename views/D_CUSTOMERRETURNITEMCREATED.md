---
name: D_CUSTOMERRETURNITEMCREATED
description: D Customerreturnitemcreated
semantic_en: "Returns Order Item Created — event tracking for creation of new line items within returns orders."
semantic_vi: "Dòng Đơn hàng Trả hàng Đã tạo — theo dõi sự kiện cho việc tạo dòng đơn hàng trả hàng mới."
keywords:
  - dòng đơn hàng trả hàng
  - returns item
  - tạo mới
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
  - item-level
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# D_CUSTOMERRETURNITEMCREATED

**D Customerreturnitemcreated**

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
| `CustomerReturnItemCategory` | `pstyv` |
| `Product` | `matnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Returns Order Item Created'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions 
@ObjectModel.sapObjectNodeType.name: 'CustomerReturnItem'
define abstract entity D_CustomerReturnItemCreated
{
      
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime          : vdm_lastchangedon;
        
      CustomerReturnType           : auart_unv;

      SalesOrganization            : vkorg;

      DistributionChannel          : vtweg;

      OrganizationDivision         : spart;
      
      SoldToParty                  : kunnr;
      
      CustomerReturnItemCategory   : pstyv;
      
      Product                      : matnr;
}
```
