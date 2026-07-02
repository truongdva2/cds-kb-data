---
name: I_TRANSPORDWHSEPROCGSTATUS
description: Transpordwhseprocgstatus
semantic_en: "transportation order warehouse processing status — status values for warehouse operations on transportation orders"
semantic_vi: "trạng thái xử lý kho hàng đơn hàng vận chuyển — giá trị trạng thái cho hoạt động kho hàng"
keywords:
  - trạng thái xử lý kho hàng
  - vận chuyển
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - status
  - component:TM-2CL
  - lob:Other
  - bo:TranspOrdWhseProcessingStatus
---
# I_TRANSPORDWHSEPROCGSTATUS

**Transpordwhseprocgstatus**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TranspOrdWhseProcessingStatus` | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_wh_procg_status preserving type)` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspOrdWhseProcgStsText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Transp Ord Warehouse Processing Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'TranspOrdWhseProcessingStatus'
@ObjectModel.representativeKey: 'TranspOrdWhseProcessingStatus'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view entity I_TranspOrdWhseProcgStatus
  as select from dd07l

  composition [0..*] of I_TranspOrdWhseProcgStsText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_wh_procg_status preserving type) as TranspOrdWhseProcessingStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                                 as DomainValue,
      /* Associations */
      _Text
}
where
      domname  = '/SCMTMS/WH_PROCESSING_STATUS'
  and as4local = 'A';
```
