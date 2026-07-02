---
name: I_INSPECTIONCATALOG
description: Inspectioncatalog
semantic_en: "Inspection catalogs — master data for inspection specifications and test codes used in quality management."
semantic_vi: "Danh mục kiểm tra — dữ liệu chính cho các thông số kỹ thuật kiểm tra và mã thử được sử dụng trong quản lý chất lượng."
keywords:
  - Danh mục kiểm tra
  - Thông số kiểm tra
  - Quản lý chất lượng
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - inspection
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONCATALOG

**Inspectioncatalog**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InspectionCatalog` | `tq15.katalogart` |
| `_InspectionCatalogText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionCatalogText` | `I_InspectionCatalogText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Catalog'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel: {
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING },
    representativeKey: 'InspectionCatalog'
}
@Analytics.technicalName: 'IINSPCATALOG'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_Inspectioncatalog as select from tq15 
   association [0..*] to I_InspectionCatalogText as _InspectionCatalogText
      on $projection.InspectionCatalog = _InspectionCatalogText.InspectionCatalog
{
   @ObjectModel.text.association: '_InspectionCatalogText'
   key tq15.katalogart  as InspectionCatalog
   
   /* Associations */
   ,_InspectionCatalogText
    
}
```
