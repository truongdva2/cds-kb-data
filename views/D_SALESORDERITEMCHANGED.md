---
name: D_SALESORDERITEMCHANGED
description: D Sales OrderITEMCHANGED
semantic_en: "business event signature for a sales order item change — tracking event timestamp, order context, and modified line item with category and product details"
semantic_vi: "chữ ký sự kiện khi dòng mục đơn hàng bán thay đổi — theo dõi thời điểm sự kiện, bối cảnh đơn hàng và thông tin dòng hàng bao gồm loại mục và sản phẩm"
keywords:
  - dòng mục đơn hàng thay đổi
  - sự kiện dòng hàng bán
  - theo dõi thay đổi dòng mục
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
  - item-level
  - component:SD-SLS-GF-BET-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# D_SALESORDERITEMCHANGED

**D Sales OrderITEMCHANGED**

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
| `SalesOrderItemCategory` | `pstyv` |
| `Product` | `matnr` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Sales Order Item Changed'    
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]                      
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderItemChanged
{
 
      @Event.raisedAt.dateTime: true    
      EventRaisedDateTime           : vdm_lastchangedon;

      SalesOrderType                : auart_unv;

      SalesOrganization             : vkorg;

      DistributionChannel           : vtweg;

      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;
      
      SalesOrderItemCategory        : pstyv;
      
      Product                       : matnr;      
  
}
```
