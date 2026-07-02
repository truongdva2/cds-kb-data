---
name: D_CUSTOMERMATERIALDELETED
description: D Customermaterialdeleted
semantic_en: "Customer Material Deleted — event tracking for removal of customer-specific material assignments."
semantic_vi: "Vật tư Khách hàng Đã xóa — theo dõi sự kiện cho việc xóa gán vật tư cụ thể cho khách hàng."
keywords:
  - vật tư khách hàng
  - xóa gán vật tư
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - customer
  - material
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Material
  - bo:Customer
---
# D_CUSTOMERMATERIALDELETED

**D Customermaterialdeleted**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Material` | `matnr` |
| `MaterialByCustomer` | `matnr_ku` |
| `MaterialDescriptionByCustomer` | `postx` |
| `Plant` | `werks_d` |
| `DeliveryPriority` | `lprio` |
| `MinDeliveryQtyInBaseUnit` | `minlf` |
| `BaseUnit` | `meins` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Customer Material Deleted'
@Event:{
    sapObjectNodeType: 'CustomerMaterial',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CustomerMaterialDeleted
{
  Material                      : matnr;
  MaterialByCustomer            : matnr_ku;
  MaterialDescriptionByCustomer : postx;
  Plant                         : werks_d;
  DeliveryPriority              : lprio;
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  MinDeliveryQtyInBaseUnit      : minlf;
  BaseUnit                      : meins;
}
```
