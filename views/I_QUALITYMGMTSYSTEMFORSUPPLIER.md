---
name: I_QUALITYMGMTSYSTEMFORSUPPLIER
description: Qualitymgmtsystemforsupplier
semantic_en: "Target quality management system for supplier — specifies required QM system for supplier qualification"
semantic_vi: "Hệ thống quản lý chất lượng mục tiêu cho nhà cung cấp — chỉ định hệ thống QM cần thiết cho xác nhận nhà cung cấp"
keywords:
  - hệ thống QM
  - nhà cung cấp
  - xác nhận
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
  - supplier
  - component:QM-PT-2CL
  - lob:Quality Management
  - bo:Supplier
---
# I_QUALITYMGMTSYSTEMFORSUPPLIER

**Qualitymgmtsystemforsupplier**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `QualityMgmtSystemForSupplier` | `qssys` |
| `_QltyMgmtSystemForSupplierTxt` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyMgmtSystemForSupplierTxt` | `I_QltyMgmtSystemForSupplierTxt` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Target QM System for Supplier'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.representativeKey: 'QualityMgmtSystemForSupplier'
@Analytics.technicalName: 'IQTMGMTSYSSUPP'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QualityMgmtSystemForSupplier as select from tq02 
  association [1..*] to I_QltyMgmtSystemForSupplierTxt as _QltyMgmtSystemForSupplierTxt
      on $projection.QualityMgmtSystemForSupplier = _QltyMgmtSystemForSupplierTxt.QualityMgmtSystemForSupplier
{
  @ObjectModel.text.association: '_QltyMgmtSystemForSupplierTxt'
  key qssys as QualityMgmtSystemForSupplier,
  
  _QltyMgmtSystemForSupplierTxt
}
```
