---
name: I_DUNNINGAREATEXT
description: Dunningareatext
semantic_en: "text view providing localized dunning area descriptions by company code and language"
semantic_vi: "khung nhìn văn bản cung cấp mô tả khu vực theo dõi được bản địa hóa theo mã công ty và ngôn ngữ"
keywords:
  - mô tả khu vực
  - theo dõi thanh toán
  - bản địa hóa
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-AR
  - interface-view
  - text-view
  - text
  - component:FI-AR-AR-C-2CL
  - lob:Finance
  - bo:DunningArea
---
# I_DUNNINGAREATEXT

**Dunningareatext**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CompanyCode` | `cast(bukrs as fis_bukrs preserving type)` |
| `DunningArea` | `cast(maber as farp_maber preserving type)` |
| `Language` | `spras` |
| `DunningAreaName` | `cast(text1 as farp_text1_047n preserving type)` |
| `_CompanyCode` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Dunning Area - Text'
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIDUNAREATEXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DunningArea'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]

define view I_DunningAreaText
  as select from t047n
  association [1..1] to I_CompanyCode as _CompanyCode on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(bukrs as fis_bukrs preserving type)       as CompanyCode,
  key cast(maber as farp_maber preserving type)      as DunningArea,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                          as Language,
      @Semantics.text: true
      cast(text1 as farp_text1_047n preserving type) as DunningAreaName,
      _CompanyCode,
      _Language
};
```
