---
name: I_CATAXDATETYPE
description: Cataxdatetype
semantic_en: "tax date type code reference — domain values for classifying different types of tax-relevant dates."
semantic_vi: "bảng mã loại ngày thuế — giá trị phân loại các loại ngày liên quan đến thuế khác nhau."
keywords:
  - loại ngày thuế
  - ngày thuế
  - mã loại ngày
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
  - tax
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CATAXDATETYPE

**Cataxdatetype**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CATaxDateType` | `cast ( substring( dd07l.domvalue_l,1,2 ) as tax_date_type_kk preserving type )` |
| `_CATaxDateTypeText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CATaxDateTypeText` | `I_CATaxDateTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Art des Steuerdatums'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CATaxDateType',
  sapObjectNodeType.name: 'ContrAcctgTaxDateType',
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
  }
}
@VDM.viewType: #BASIC

define view entity I_CATaxDateType
  as select from dd07l

  association [1..*] to I_CATaxDateTypeText as _CATaxDateTypeText on $projection.CATaxDateType = _CATaxDateTypeText.CATaxDateType
{
      @ObjectModel.text.association: '_CATaxDateTypeText'
  key cast ( substring( dd07l.domvalue_l,1,2 )  as tax_date_type_kk preserving type ) as CATaxDateType,
      _CATaxDateTypeText
}
where
      domname  = 'TAX_DATE_TYPE_KK'
  and as4local = 'A'
```
