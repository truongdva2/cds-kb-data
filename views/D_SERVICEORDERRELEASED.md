---
name: D_SERVICEORDERRELEASED
description: D Service OrderRELEASED
semantic_en: "business event signature for a released service order — tracking event timestamp, customer management object type, order uuid, description, and order type"
semantic_vi: "chữ ký sự kiện khi đơn dịch vụ được phát hành — theo dõi thời điểm sự kiện, loại đối tượng quản lý khách hàng, uuid đơn hàng và loại đơn hàng"
keywords:
  - đơn dịch vụ phát hành
  - sự kiện phát hành đơn hàng
  - theo dõi phát hành
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - service-order
  - lease
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICEORDERRELEASED

**D Service OrderRELEASED**

| Property | Value |
|---|---|
| App Component | `CRM-S4-BTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CustMgmtObjectType` | `crmt_subobject_category_db` |
| `ServiceOrderUUID` | `crmt_object_guid` |
| `ServiceOrderDescription` | `crmt_process_description` |
| `ServiceOrderType` | `crmt_process_type` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Order Released'
@Event:{
    sapObjectNodeType: 'ServiceOrder',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderReleased
{
  CustMgmtObjectType      : crmt_subobject_category_db;
  ServiceOrderUUID        : crmt_object_guid;
  ServiceOrderDescription : crmt_process_description;
  ServiceOrderType        : crmt_process_type;

}
```
