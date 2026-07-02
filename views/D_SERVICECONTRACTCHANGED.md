---
name: D_SERVICECONTRACTCHANGED
description: D Servicecontractchanged
semantic_en: "business event signature for a modified service contract — tracking event timestamp, customer management object type, contract uuid, and contract type"
semantic_vi: "chữ ký sự kiện khi hợp đồng dịch vụ thay đổi — theo dõi thời điểm sự kiện, loại đối tượng quản lý khách hàng, uuid hợp đồng và loại hợp đồng"
keywords:
  - hợp đồng dịch vụ thay đổi
  - sự kiện hợp đồng dịch vụ
  - theo dõi thay đổi hợp đồng
app_component: CRM-S4-BTX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - contract
  - component:CRM-S4-BTX-2CL
  - lob:Other
---
# D_SERVICECONTRACTCHANGED

**D Servicecontractchanged**

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
| `ServiceContractUUID` | `crmt_object_guid` |
| `ServiceContractType` | `crmt_process_type` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Contract Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_ServiceContractChanged
{
    CustMgmtObjectType : crmt_subobject_category_db;
    ServiceContractUUID : crmt_object_guid;
    ServiceContractType : crmt_process_type;  
}
```
