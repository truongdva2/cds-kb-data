---
name: I_REFERENCEINTERESTRATE
description: Referenceinterestrate
semantic_en: "Reference interest rate — interest rate benchmarks with tenor and effective dates for treasury operations."
semantic_vi: "Tỷ lệ lãi suất tham khảo — các chỉ số lãi suất với kỳ hạn và ngày có hiệu lực cho các hoạt động kho bạc."
keywords:
  - lãi suất tham khảo
  - kỳ hạn
  - tỷ lệ
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_REFERENCEINTERESTRATE

**Referenceinterestrate**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ReferenceInterestRate` | `ReferenceInterestRate.referenz` |
| `EffectiveDate` | `ReferenceInterestRate.datab` |
| `Currency` | `ReferenceInterestRate.waers` |
| `LongText` | `ReferenceInterestRate.zilabez` |
| `TextDescription` | `ReferenceInterestRate.zikubez` |
| `RefIntrstRateTenorTerm` | `ReferenceInterestRate.laufzeit` |
| `RefIntrstRateTenorTermUnit` | `ReferenceInterestRate.masseinh` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog:{ 
    sqlViewName: 'IREFIR',
    buffering.status: #NOT_ALLOWED,
    compiler.compareFilter: true
}
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AccessControl.authorizationCheck:  #NOT_REQUIRED 
@Analytics: {
    dataCategory: #DIMENSION, 
    internalName: #LOCAL
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
    representativeKey: 'ReferenceInterestRate',
    usageType: {
        dataClass:  #CUSTOMIZING,
        serviceQuality: #D,
        sizeCategory: #L
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: [ #ANALYTICAL_DIMENSION ]
}
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@EndUserText.label: 'Reference Interest Rate'
@Search.searchable: true
@Consumption.ranked: true

define view I_ReferenceInterestRate
  as select from t056r as ReferenceInterestRate
{    
      @ObjectModel.text.element:  [ 'LongText' ]
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8 
  key ReferenceInterestRate.referenz as ReferenceInterestRate,
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW 
      ReferenceInterestRate.datab    as EffectiveDate,
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW 
      ReferenceInterestRate.waers    as Currency,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8 
      ReferenceInterestRate.zilabez  as LongText,
      @Consumption.filter.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      @Search.fuzzinessThreshold: 0.8 
      ReferenceInterestRate.zikubez  as TextDescription,
      @Consumption.filter.hidden: true
      ReferenceInterestRate.laufzeit as RefIntrstRateTenorTerm,
      @Consumption.filter.hidden: true
      ReferenceInterestRate.masseinh as RefIntrstRateTenorTermUnit
      //ReferenceInterestRate.finanzort,
      //ReferenceInterestRate.laufzeit as EffectiveTerm,
      //ReferenceInterestRate.masseinh
}
```
