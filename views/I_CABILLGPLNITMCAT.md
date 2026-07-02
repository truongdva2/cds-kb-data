---
name: I_CABILLGPLNITMCAT
description: Cabillgplnitmcat
semantic_en: "billing plan item category classifications — domain values for item types within a plan (periodic, milestone, event-based, etc.)"
semantic_vi: "phân loại danh mục mục kế hoạch hóa đơn — giá trị miền cho loại mục trong kế hoạch (định kỳ, cột mốc, dựa trên sự kiện, v.v.)"
keywords:
  - danh mục mục
  - kế hoạch hóa đơn
  - phân loại
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNITMCAT

**Cabillgplnitmcat**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CABillgPlnItmCat` | `bipitemcat` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CABillgPlnItmCatText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Typ der Abrechnungsplanposition'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABillgPlnItmCat',
  sapObjectNodeType.name: 'ContrAcctgBillgPlnItmCategory',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  resultSet.sizeCategory: #XS
}
@VDM.viewType: #BASIC
define view entity I_CABillgPlnItmCat as select from tfk8212 
association [0..*] to I_CABillgPlnItmCatText as _Text on $projection.CABillgPlnItmCat = _Text.CABillgPlnItmCat  
{
  @ObjectModel.text.association: '_Text'
  key  bipitemcat as CABillgPlnItmCat,
  _Text
}
```
