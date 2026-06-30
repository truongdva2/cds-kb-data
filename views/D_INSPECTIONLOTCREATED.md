---
name: D_INSPECTIONLOTCREATED
description: D Inspectionlotcreated
semantic_en: "Inspection lot created event signature — abstract entity carrying Plant, BusinessObject, SAPBusinessObjectType, and BusinessObjectItem that define the payload when a new inspection lot is created."
semantic_vi: "Chữ ký sự kiện tạo lô kiểm tra — thực thể trừu tượng mang Nhà máy, đối tượng nghiệp vụ, loại đối tượng SAP và dòng đối tượng nghiệp vụ xác định nội dung sự kiện khi lô kiểm tra mới được tạo."
keywords:
  - lô kiểm tra
  - tạo lô kiểm tra
  - sự kiện QM
  - đối tượng nghiệp vụ
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
  - bo:InspectionLot
---
# D_INSPECTIONLOTCREATED

**D Inspectionlotcreated**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Plant` | `werks_d` |
| `BusinessObject` | `poc_bo_id` |
| `SAPBusinessObjectType` | `poc_bo_type` |
| `BusinessObjectItem` | `poc_item_id` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'InspectionLot'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_InspectionLotCreated {
  Plant : werks_d;    
  BusinessObject : poc_bo_id;
  SAPBusinessObjectType : poc_bo_type;
  BusinessObjectItem : poc_item_id;
}
```
