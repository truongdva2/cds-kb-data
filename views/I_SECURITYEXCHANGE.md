---
name: I_SECURITYEXCHANGE
description: Securityexchange
semantic_en: "securities exchange master — SecurityExchange, Currency, CountryISOCode, SecurityExchangeShortName"
semantic_vi: "Dữ liệu chính sàn giao dịch chứng chỉ — mã sàn, tiền tệ, quốc gia, tên viết tắt sàn"
keywords:
  - sàn giao dịch chứng chỉ
  - mã sàn
  - tiền tệ sàn giao dịch
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
  - bo:SecuritiesExchange
---
# I_SECURITYEXCHANGE

**Securityexchange**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SecurityExchange` | `cast(Exchange.rhandpl as ftr_sec_exchange preserving type )` |
| `Currency` | `Exchange.waers` |
| `CountryISOCode` | `Exchange.land1` |
| `SecurityExchangeShortName` | `cast(Exchange.xkurzbez as ftr_sec_exchange_desc)` |

## Associations

> No associations found.

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISECEXCHANGE'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SecurityExchange'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Security Exchange'
@ObjectModel.sapObjectNodeType.name: 'SecuritiesExchange'

define view I_SecurityExchange
  as select from twh01 as Exchange
{
      @ObjectModel.text.element: 'SecurityExchangeShortName'
  key cast(Exchange.rhandpl as ftr_sec_exchange preserving type ) as SecurityExchange,
      @Semantics.currencyCode: true
      Exchange.waers                                              as Currency,
      Exchange.land1                                              as CountryISOCode,
      @Semantics.text: true
      cast(Exchange.xkurzbez as ftr_sec_exchange_desc)            as SecurityExchangeShortName

};
```
