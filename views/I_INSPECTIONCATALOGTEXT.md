---
name: I_INSPECTIONCATALOGTEXT
description: Inspectioncatalogtext
semantic_en: "Text descriptions of inspection catalogs — language and additional catalog text for inspection specifications."
semantic_vi: "Mô tả văn bản của các danh mục kiểm tra — ngôn ngữ và văn bản danh mục bổ sung cho các thông số kỹ thuật kiểm tra."
keywords:
  - Văn bản danh mục
  - Danh mục kiểm tra
  - Mô tả
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
  - text-view
  - inspection
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONCATALOGTEXT

**Inspectioncatalogtext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `tq15t.sprache` |
| `InspectionCatalog` | `tq15t.katalogart` |
| `InspSpecAdditionalCatalogText` | `tq15t.katalogtxt` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Catalog - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING },
    dataCategory: #TEXT,
    representativeKey: 'InspectionCatalog'
}
@Analytics.technicalName: 'IINSPCATALOGTXT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectionCatalogText as select from tq15t 
{
   @Semantics.language: true
   key tq15t.sprache    as Language,
   key tq15t.katalogart  as InspectionCatalog,
   
   @Semantics.text: true
   tq15t.katalogtxt     as InspSpecAdditionalCatalogText
    
}
```
