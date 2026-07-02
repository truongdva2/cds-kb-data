---
name: D_PRODUCTCHANGED
description: D Productchanged
semantic_en: "business event signature for product master data changes — captures product type and category modifications"
semantic_vi: "sự kiện kinh doanh khi sản phẩm thay đổi — ghi lại các thay đổi loại sản phẩm và danh mục"
keywords:
  - sản phẩm thay đổi
  - sự kiện sản phẩm
  - dữ liệu chính sản phẩm
  - loại sản phẩm
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - product
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Product
---
# D_PRODUCTCHANGED

**D Productchanged**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ProductType` | `producttype` |
| `ProductCategory` | `prodcategory` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Product Changed'
@ObjectModel.sapObjectNodeType.name: 'Product'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_ProductChanged 
{
    ProductType                    : producttype  ;  
    ProductCategory                : prodcategory ;
     
}
```
