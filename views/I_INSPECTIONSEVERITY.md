---
name: I_INSPECTIONSEVERITY
description: Inspectionseverity
semantic_en: "master data for inspection severity codes — reference domain for defect or nonconformance classification"
semantic_vi: "dữ liệu chính cho mã mức độ nghiêm trọng kiểm tra — miền tham chiếu cho phân loại khuyết tật"
keywords:
  - mức độ nghiêm trọng
  - phân loại khuyết tật
  - mã mức độ
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - inspection
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONSEVERITY

**Inspectionseverity**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `InspectionSeverity` | `prschaerfe` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InspectionSeverityText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Severity'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
    modelingPattern: #NONE,
    representativeKey: 'InspectionSeverity',
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }
}
@Analytics.technicalName: 'IINSPSEV'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InspectionSeverity
  as select from qdep
  association [0..*] to I_InspectionSeverityText as _Text on $projection.InspectionSeverity = _Text.InspectionSeverity
{
      @ObjectModel.text.association: '_Text'
  key prschaerfe as InspectionSeverity,

      //Associations
      _Text
}
```
