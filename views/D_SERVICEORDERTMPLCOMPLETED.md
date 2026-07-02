---
name: D_SERVICEORDERTMPLCOMPLETED
description: D Service OrderTMPLCOMPLETED
semantic_en: "business event signature for a completed service order template — recording event timestamp, customer management object type, template uuid, description, and template type"
semantic_vi: "chữ ký sự kiện khi mẫu đơn dịch vụ hoàn thành — ghi nhận thời điểm sự kiện, loại đối tượng quản lý khách hàng, uuid mẫu và loại mẫu"
keywords:
  - mẫu đơn dịch vụ hoàn thành
  - sự kiện hoàn thành mẫu
  - theo dõi hoàn thành
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
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICEORDERTMPLCOMPLETED

**D Service OrderTMPLCOMPLETED**

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
| `ServiceOrderTemplateUUID` | `crmt_object_guid` |
| `SrvcOrdTmplDescription` | `crmt_process_description` |
| `ServiceOrderTemplateType` | `crmt_process_type` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Order Template Completed'
@Event:{
    sapObjectNodeType: 'ServiceOrderTemplate',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ServiceOrderTmplCompleted
{
  CustMgmtObjectType       : crmt_subobject_category_db;
  ServiceOrderTemplateUUID : crmt_object_guid;
  SrvcOrdTmplDescription   : crmt_process_description;
  ServiceOrderTemplateType : crmt_process_type;
}
```
