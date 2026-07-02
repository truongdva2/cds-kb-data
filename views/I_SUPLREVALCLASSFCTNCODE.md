---
name: I_SUPLREVALCLASSFCTNCODE
description: Suplrevalclassfctncode
semantic_en: "domain value list for supplier evaluation classification codes — enumeration of supplier score classifications"
semantic_vi: "danh sách giá trị miền cho mã phân loại đánh giá cung cấp — liệt kê các phân loại điểm cung cấp"
keywords:
  - cung cấp
  - đánh giá
  - phân loại
  - điểm
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - interface-view
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:SupplierEvaluationScore
---
# I_SUPLREVALCLASSFCTNCODE

**Suplrevalclassfctncode**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SupplierClassification` | `cast( dd07l.domvalue_l as mm_classification )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SuplrEvalClassfctnCodeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPLEVCLCOD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'SupplierClassification'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Supplier Evaluation Classification Code'
@ObjectModel.sapObjectNodeType.name: 'SupplierEvaluationScore'
define root view I_SuplrEvalClassfctnCode
  as select from dd07l
  composition [0..*] of I_SuplrEvalClassfctnCodeTxt as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as mm_classification )   as SupplierClassification,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                as DomainValue,
      _Text
}
where dd07l.domname  = 'MM_CLASSIFICATION'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
