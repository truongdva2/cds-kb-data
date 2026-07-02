---
name: I_CONDITIONUSAGETEXT
description: Conditionusagetext
semantic_en: "condition usage text view — multilingual usage descriptions"
semantic_vi: "chế độ xem văn bản cách sử dụng điều kiện — mô tả cách sử dụng đa ngôn ngữ"
keywords:
  - cách sử dụng
  - mô tả
  - ngôn ngữ
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:ConditionUsage
---
# I_CONDITIONUSAGETEXT

**Conditionusagetext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Language` | `spras` |
| `ConditionUsage` | `kvewe` |
| `ConditionUsageName` | `vtext` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDUSAGETEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true 
@EndUserText.label: 'Condition Usage - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'ConditionUsage'
@Metadata.ignorePropagatedAnnotations:true
define view I_ConditionUsageText
  as select from t681w
{

      @Semantics.language: true
  key spras as Language,
  key kvewe as ConditionUsage,
      @Semantics.text: true
      vtext as ConditionUsageName
}
```
