---
name: D_SERVICECONTRACTITEMCHANGED
description: D Servicecontractitemchanged
semantic_en: "business event signature for a modified service contract line item — tracking event timestamp, item uuid, item category, and item description"
semantic_vi: "chữ ký sự kiện khi dòng mục hợp đồng dịch vụ thay đổi — theo dõi thời điểm sự kiện, uuid dòng mục, loại dòng mục và mô tả dòng mục"
keywords:
  - dòng mục hợp đồng dịch vụ thay đổi
  - sự kiện dòng hợp đồng
  - theo dõi dòng mục
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - service
  - contract
  - item-level
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# D_SERVICECONTRACTITEMCHANGED

**D Servicecontractitemchanged**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceContractItemUUID` | `crmt_object_guid` |
| `ServiceContractItemCategory` | `crmt_item_type_db` |
| `ServiceContractItemDescription` | `crmt_prshtextx_db` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Service Contract Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_ServiceContractItemChanged
{
  ServiceContractItemUUID : crmt_object_guid;
  ServiceContractItemCategory : crmt_item_type_db;
  ServiceContractItemDescription : crmt_prshtextx_db;
}
```
