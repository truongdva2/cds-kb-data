---
name: D_SERVICEORDERRELEASEREVOKED
description: D Service OrderRELEASEREVOKED
semantic_en: "business event signature for a revoked service order release — recording event timestamp, customer management object type, order uuid, description, and order type"
semantic_vi: "chữ ký sự kiện khi hủy phát hành đơn dịch vụ — ghi nhận thời điểm sự kiện, loại đối tượng quản lý khách hàng, uuid đơn hàng và loại đơn hàng"
keywords:
  - hủy phát hành đơn dịch vụ
  - sự kiện hủy phát hành
  - theo dõi hủy phát hành
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
# D_SERVICEORDERRELEASEREVOKED

**D Service OrderRELEASEREVOKED**

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
@EndUserText.label: 'Service Order Release Revoked'
@Event:{
    sapObjectNodeType: 'ServiceOrder',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderReleaseRevoked
{
  CustMgmtObjectType      : crmt_subobject_category_db;
  ServiceOrderUUID        : crmt_object_guid;
  ServiceOrderDescription : crmt_process_description;
  ServiceOrderType        : crmt_process_type;

}
```
