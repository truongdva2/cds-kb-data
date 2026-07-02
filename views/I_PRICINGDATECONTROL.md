---
name: I_PRICINGDATECONTROL
description: Pricingdatecontrol
semantic_en: "domain value list for pricing date control — captures codes for controlling which date reference to use in pricing and procurement operations."
semantic_vi: "danh sách giá trị miền cho kiểm soát ngày định giá — chứa các mã kiểm soát tham chiếu ngày nào được sử dụng trong các hoạt động định giá và mua sắm."
keywords:
  - ngày định giá
  - kiểm soát
  - định giá
app_component: MM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - pricing
  - component:MM
  - lob:Sourcing & Procurement
  - bo:PricingDateControl
---
# I_PRICINGDATECONTROL

**Pricingdatecontrol**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PricingDateControl` | `cast( substring( domvalue_l, 1, 1 ) as meprf )` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PricingDateControlTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMMPRCDATCNTRL'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics.dataCategory:#DIMENSION
@Analytics.dataExtraction.enabled:true
@ObjectModel.sapObjectNodeType.name: 'PricingDateControl'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'PricingDateControl'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Control of Pricing Date'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define root view I_PricingDateControl
  as select from dd07l
  composition [0..*] of I_PricingDateControlTxt as _Text
{

      @ObjectModel.text.association: '_Text'
  key cast( substring( domvalue_l, 1, 1 ) as meprf ) as PricingDateControl,

      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                               as DomainValue,

      _Text
}
where
      domname       = 'MEPRF'
  and as4local      = 'A'
  and dd07l.as4vers = '0000'
```
