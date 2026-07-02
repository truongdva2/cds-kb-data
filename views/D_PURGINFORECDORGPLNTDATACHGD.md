---
name: D_PURGINFORECDORGPLNTDATACHGD
description: D Purginforecdorgplntdatachgd
semantic_en: "business event signature for purchasing info record organizational plant data changes — tracks supplier, material, and group updates at plant level"
semantic_vi: "sự kiện kinh doanh khi dữ liệu nhà máy tổ chức bản ghi thông tin mua thay đổi — theo dõi cập nhật nhà cung cấp, vật liệu và nhóm ở cấp nhà máy"
keywords:
  - dữ liệu nhà máy bản ghi thông tin thay đổi
  - thông tin mua hàng
  - nhà máy
  - nhà cung cấp
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
# D_PURGINFORECDORGPLNTDATACHGD

**D Purginforecdorgplntdatachgd**

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
@EndUserText.label: 'Purchasing Info Record Organization Plant Data Changed'
@ObjectModel.sapObjectNodeType.name: 'PurgInfoRecdOrgPlantData'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_PurgInfoRecdOrgPlntDataChgd
{
  Supplier      : elifn;
  Material      : matnr;
  MaterialGroup : matkl;

}
```
