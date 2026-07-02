---
name: I_CURRENCYROLE
description: Currencyrole
semantic_en: "Currency role — classification of how currencies are used in accounting valuations and reporting views."
semantic_vi: "Vai trò tiền tệ — phân loại cách tiền tệ được sử dụng trong định giá kế toán và các khung nhìn báo cáo."
keywords:
  - vai trò tiền tệ
  - định giá kế toán
  - loại định giá
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - currency
  - component:FI-GL-GL-A-2CL
  - lob:Finance
  - bo:CurrencyRole
---
# I_CURRENCYROLE

**Currencyrole**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CurrencyRole` | `finsc_curtype.curtype` |
| `LegalCurrencyRole` | `finsc_curtype.legal_curtype` |
| `AccountingValuationView` | `finsc_curtype.valutyp` |
| `AccountingValuationSubview` | `finsc_curtype.valusubtyp` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CurrencyRoleText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Currency Role'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICURRENCYROLE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'CurrencyRole'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #S
}
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'CurrencyRole'

define view I_CurrencyRole 
as select from finsc_curtype
association [0..*] to I_CurrencyRoleText as _Text on $projection.CurrencyRole = _Text.CurrencyRole
{  
@ObjectModel.text.association: '_Text' 
     key finsc_curtype.curtype as CurrencyRole,
     finsc_curtype.legal_curtype as LegalCurrencyRole,
     finsc_curtype.valutyp as AccountingValuationView,
     finsc_curtype.valusubtyp as AccountingValuationSubview,
     
    _Text
}
      
where rldnr is initial
```
