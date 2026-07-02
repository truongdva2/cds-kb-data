---
name: D_SALESORDERDELETED
description: D Sales OrderDELETED
semantic_en: "business event signature for a deleted sales order — capturing event timestamp, order type, sales organization, distribution channel, division, and customer identification"
semantic_vi: "chữ ký sự kiện kinh doanh khi đơn hàng bán được xóa — ghi nhận thời điểm sự kiện, loại đơn hàng, tổ chức bán hàng, kênh phân phối, bộ phận tổ chức và thông tin khách hàng"
keywords:
  - đơn hàng bán xóa
  - sự kiện đơn hàng
  - kiểm toán xóa đơn hàng
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
# D_SALESORDERDELETED

**D Sales OrderDELETED**

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
@EndUserText.label: 'Sales Order Deleted'
@ObjectModel.sapObjectNodeType.name: 'SalesOrder'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderDeleted
{
        
        @Event.raisedAt.dateTime: true
        EventRaisedDateTime               : vdm_lastchangedon;
      
        SalesOrderType                    : auart_unv;

        SalesOrganization                 : vkorg;

        DistributionChannel               : vtweg;

        OrganizationDivision              : spart; 

        SoldToParty                       : kunnr;
    
}
```
