---
name: I_WORKCENTERTYPE
description: Work CenterTYPE
semantic_en: "work center type - classification code for categorizing work centers into functional types for process and cost accounting purposes."
semantic_vi: "loại trung tâm công việc - mã phân loại để phân loại trung tâm công việc thành loại chức năng cho mục đích quy trình và kế toán chi phí."
keywords:
  - loại trung tâm công việc
  - phân loại
  - mã loại
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - work-center
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
  - bo:WorkCenterType
---
# I_WORKCENTERTYPE

**Work CenterTYPE**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `WorkCenterTypeCode` | `typ.ProductionResourceType` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WorkCenterTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPWRKCNTRTYP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'WorkCenterTypeCode'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Work Center Type'
@ObjectModel.sapObjectNodeType.name: 'WorkCenterType'
@Analytics.dataExtraction.enabled: true

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_WorkCenterType
  as select from I_ProductionResourceType as typ
  association [0..*] to I_WorkCenterTypeText as _Text on $projection.WorkCenterTypeCode = _Text.WorkCenterTypeCode
{
      @ObjectModel.text.association: '_Text'
  key typ.ProductionResourceType as WorkCenterTypeCode,

      // Associations
      _Text
}
  where typ.ProductionResourceType = 'A ';
```
