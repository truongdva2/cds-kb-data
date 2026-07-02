---
name: D_OUTBOUNDDELIVERYITEMCREATED
description: D Outbound DeliveryITEMCREATED
semantic_en: "event signature for outbound delivery item creation — captures when delivery item is created including item number and document type."
semantic_vi: "chữ ký sự kiện cho tạo dòng giao hàng đi — ghi lại khi dòng giao hàng được tạo bao gồm số dòng và loại tài liệu."
keywords:
  - dòng giao hàng đi tạo
  - sự kiện
  - số dòng
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - delivery
  - item-level
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
  - bo:OutboundDeliveryItem
---
# D_OUTBOUNDDELIVERYITEMCREATED

**D Outbound DeliveryITEMCREATED**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DocumentItemNumber` | `posnr` |
| `OutboundDeliveryItem` | `outbound_delivery_item` |
| `DeliveryDocumentType` | `lfart` |
| `SalesOrganization` | `vkorg` |
| `SDDocumentCategory` | `vbtypl` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Item Created'
@ObjectModel.sapObjectNodeType.name: 'OutboundDeliveryItem'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Event.sapObjectNodeTypeKey:[{element:'OutboundDelivery'}, {element:'OutboundDeliveryItem'}]
@VDM.usage.type: [#EVENT_SIGNATURE]
define abstract entity D_OutboundDeliveryItemCreated
{
      DocumentItemNumber   : posnr;
      OutboundDeliveryItem : outbound_delivery_item;
      DeliveryDocumentType : lfart;
      SalesOrganization    : vkorg;
      SDDocumentCategory   : vbtypl;
}
```
