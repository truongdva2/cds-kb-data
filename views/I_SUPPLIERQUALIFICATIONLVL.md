---
name: I_SUPPLIERQUALIFICATIONLVL
description: Supplierqualificationlvl
semantic_en: "supplier qualification level codelist — defines qualification level categories"
semantic_vi: "danh sách mã cấp độ đủ tiêu chuẩn nhà cung cấp — xác định các danh mục cấp độ đủ tiêu chuẩn"
keywords:
  - cấp độ đủ tiêu chuẩn
  - nhà cung cấp
  - mã
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - supplier
  - component:SLC-SUP
  - lob:Other
  - bo:Supplier
---
# I_SUPPLIERQUALIFICATIONLVL

**Supplierqualificationlvl**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SupplierQualificationLevel` | `qualification` |
| `_SupplierQualificationLvlText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierQualificationLvlText` | `I_SupplierQualificationLvlText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Level of Supplier Qualification'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SupplierQualificationLevel'
@AbapCatalog.sqlViewName: 'ISUPQUALLVL'
define view I_SupplierQualificationLvl
  as select from /srmsmc/c_ql
  association [0..*] to I_SupplierQualificationLvlText as _SupplierQualificationLvlText on $projection.SupplierQualificationLevel = _SupplierQualificationLvlText.SupplierQualificationLevel
{
      @ObjectModel.text.association: '_SupplierQualificationLvlText'
  key qualification as SupplierQualificationLevel,

      _SupplierQualificationLvlText
}
```
