---
name: D_PURGINFORECDORGPLNTDATACRTD
description: D Purginforecdorgplntdatacrtd
semantic_en: "business event signature for new purchasing info record organizational plant data — records supplier, material, and group at plant level"
semantic_vi: "sự kiện kinh doanh khi dữ liệu nhà máy tổ chức bản ghi thông tin mua được tạo — ghi lại nhà cung cấp, vật liệu và nhóm ở cấp nhà máy"
keywords:
  - dữ liệu nhà máy bản ghi thông tin mới
  - thông tin mua hàng
  - nhà máy
  - tạo dữ liệu
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-VM
  - component:MM-PUR-VM-REC-2CL
  - lob:Sourcing & Procurement
  - bo:PurgInfoRecdOrgPlantData
---
# D_PURGINFORECDORGPLNTDATACRTD

**D Purginforecdorgplntdatacrtd**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Supplier` | `elifn` |
| `Material` | `matnr` |
| `MaterialGroup` | `matkl` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Purchasing Info Record Organization Plant Data Created'
@ObjectModel.sapObjectNodeType.name: 'PurgInfoRecdOrgPlantData'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_PurgInfoRecdOrgPlntDataCrtd
{
  Supplier      : elifn;
  Material      : matnr;
  MaterialGroup : matkl;

}
```
