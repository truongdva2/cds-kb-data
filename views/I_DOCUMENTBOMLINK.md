---
name: I_DOCUMENTBOMLINK
description: Documentbomlink
semantic_en: "document linkage view for bill of material — connecting BOM records to associated document parts and types"
semantic_vi: "khung nhìn liên kết tài liệu cho bảng vật liệu — kết nối các bản ghi BOM với các phần tài liệu liên quan và loại"
keywords:
  - tài liệu BOM
  - liên kết vật liệu
  - kỹ thuật
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - bom
  - document
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_DOCUMENTBOMLINK

**Documentbomlink**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillOfMaterial` | `stlnr` |
| `BillOfMaterialVariant` | `stlal` |
| `DocumentType` | `dokar` |
| `DocNumber` | `doknr` |
| `DocumentVersion` | `dokvr` |
| `DocumentPart` | `doktl` |
| `BillOfMaterialCategory` | `cast ('D' as stlty preserving type)` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.viewType: #BASIC
@EndUserText.label: 'Document Link for Bill of Material'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_DocumentBOMLink
  as select from dost
{
  key stlnr                                   as BillOfMaterial,
  key stlal                                   as BillOfMaterialVariant,
  key dokar                                   as DocumentType,
  key doknr                                   as DocNumber,
  key dokvr                                   as DocumentVersion,
  key doktl                                   as DocumentPart,
  cast ('D' as stlty preserving type)     as BillOfMaterialCategory
}
```
