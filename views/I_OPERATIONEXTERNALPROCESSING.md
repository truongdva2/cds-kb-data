---
name: I_OPERATIONEXTERNALPROCESSING
description: Operationexternalprocessing
semantic_en: "operation external processing — domain values for operation external processing status"
semantic_vi: "xử lý ngoài của hoạt động — giá trị miền cho trạng thái xử lý ngoài hoạt động"
keywords:
  - xử lý ngoài
  - hoạt động ngoài thầu
  - trạng thái
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:OperationExternalProcessing
---
# I_OPERATIONEXTERNALPROCESSING

**Operationexternalprocessing**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `OperationExternalProcessing` | `cast(substring(l.domvalue_l, 1, 1) as lief preserving type)` |
| `DomainValue` | `l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OperationExternalProcText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPPOPEXTPROC'
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER]
@ObjectModel.representativeKey: 'OperationExternalProcessing'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation External Processing Code'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_OperationExternalProcessing
  as select from dd07l as l
  association [0..*] to I_OperationExternalProcText as _Text on $projection.OperationExternalProcessing = _Text.OperationExternalProcessing 
  {
      @ObjectModel.text.association: '_Text'
  key cast(substring(l.domvalue_l, 1, 1) as lief preserving type) as OperationExternalProcessing,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      l.domvalue_l                                                as DomainValue,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
  }
  where l.domname = 'PPH_LIEF'
    and l.as4local = 'A'
    and l.as4vers  = '0000';
```
