---
name: D_PURCHASINGINFORECORDCHANGED
description: D Purchasinginforecordchanged
semantic_en: "business event signature for purchasing info record modifications — tracks supplier, material, and material group changes"
semantic_vi: "sự kiện kinh doanh khi bản ghi thông tin mua hàng thay đổi — theo dõi thay đổi nhà cung cấp, vật liệu và nhóm vật liệu"
keywords:
  - bản ghi thông tin mua hàng thay đổi
  - thông tin mua hàng
  - nhà cung cấp
  - vật liệu
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
  - bo:PurchasingInfoRecord
---
# D_PURCHASINGINFORECORDCHANGED

**D Purchasinginforecordchanged**

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
@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecord'
@VDM.usage.type: [#EVENT_SIGNATURE]
@Event.implementedBy: ['ABAP:RAP_EVENT']
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@EndUserText.label: 'Purchasing Info Record Changed'
define abstract entity D_PurchasingInfoRecordChanged
{

  Supplier                     : elifn;
  Material                     : matnr;
  MaterialGroup                : matkl;

}
```
