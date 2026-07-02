---
name: D_CUSTOMERMATERIALCHANGED
description: D Customermaterialchanged
semantic_en: "Customer Material Changed — event tracking for changes to customer-specific material assignments including delivery priority and minimum quantity per plant."
semantic_vi: "Vật tư Khách hàng Đã thay đổi — theo dõi sự kiện cho các thay đổi của các gán vật tư cụ thể cho khách hàng."
keywords:
  - vật tư khách hàng
  - tư liệu khách hàng
  - thay đổi vật tư
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
# D_CUSTOMERMATERIALCHANGED

**D Customermaterialchanged**

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
@EndUserText.label: 'Customer Material Changed'
@Event:{
    sapObjectNodeType: 'CustomerMaterial',
    implementedBy: ['ABAP:RAP_EVENT']
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CustomerMaterialChanged
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
