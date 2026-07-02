---
name: D_SERVICEQUOTATIONCHANGED
description: D Servicequotationchanged
semantic_en: "business event signature for a modified service quotation — tracking event timestamp, customer management object type, quotation uuid, description, and quotation type"
semantic_vi: "chữ ký sự kiện khi báo giá dịch vụ thay đổi — theo dõi thời điểm sự kiện, loại đối tượng quản lý khách hàng, uuid báo giá và loại báo giá"
keywords:
  - báo giá dịch vụ thay đổi
  - sự kiện báo giá dịch vụ
  - theo dõi thay đổi báo giá
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# D_SERVICEQUOTATIONCHANGED

**D Servicequotationchanged**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CustMgmtObjectType` | `crmt_subobject_category_db` |
| `ServiceQuotationUUID` | `crmt_object_guid` |
| `ServiceQuotationDescription` | `crmt_process_description` |
| `ServiceQuotationType` | `crmt_process_type` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Quotation Changed'
@Event.description: 'Service Quotation is Changed'
@Event: {
   sapObjectNodeType: 'ServiceQuotation',
   implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
define abstract entity D_ServiceQuotationChanged
{
   
   CustMgmtObjectType: crmt_subobject_category_db;
   ServiceQuotationUUID: crmt_object_guid;
   ServiceQuotationDescription: crmt_process_description;
   ServiceQuotationType: crmt_process_type;
   
}
```
