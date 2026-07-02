---
name: D_SERVICECONFIRMATIONDELETED
description: D Serviceconfirmationdeleted
semantic_en: "business event signature for a deleted service confirmation — recording event timestamp, customer management object type, confirmation uuid, description, and confirmation type"
semantic_vi: "chữ ký sự kiện khi xóa xác nhận dịch vụ — ghi nhận thời điểm sự kiện, loại đối tượng quản lý khách hàng, uuid xác nhận và loại xác nhận"
keywords:
  - xác nhận dịch vụ xóa
  - sự kiện xóa xác nhận
  - kiểm toán xóa xác nhận
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICECONFIRMATIONDELETED

**D Serviceconfirmationdeleted**

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
| `ServiceConfirmationUUID` | `crmt_object_guid` |
| `ServiceConfirmationDescription` | `crmt_process_description` |
| `ServiceConfirmationType` | `crmt_process_type` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Deleted'
@Event:{
    sapObjectNodeType: 'ServiceConfirmation',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceConfirmationDeleted
{
  CustMgmtObjectType             : crmt_subobject_category_db;
  ServiceConfirmationUUID        : crmt_object_guid;
  ServiceConfirmationDescription : crmt_process_description;
  ServiceConfirmationType        : crmt_process_type;

}
```
