---
name: I_MATERIALSUBSTITUTIONREASON
description: Materialsubstitutionreason
semantic_en: "Material substitution reason — domain values for reasons why materials can be substituted in sales operations."
semantic_vi: "Lý do thay thế vật liệu — giá trị miền cho các lý do thay thế vật liệu trong hoạt động bán hàng."
keywords:
  - thay thế vật liệu
  - lý do thay thế
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - material
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
  - bo:Material
---
# I_MATERIALSUBSTITUTIONREASON

**Materialsubstitutionreason**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `MaterialSubstitutionReason` | `sugrd` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaterialSubstitutionReasonT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: { 
  representativeKey: 'MaterialSubstitutionReason',
  sapObjectNodeType.name: 'MaterialSubstitutionReason',
  usageType: { 
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
  modelingPattern: [ #ANALYTICAL_DIMENSION ]
}

@EndUserText.label: 'Material Substitution Reason'
@Analytics: { dataCategory: #DIMENSION}
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED

@AbapCatalog: {
  sqlViewName: 'ISDMATLSUBSTRSN',
  buffering: {
    status: #ACTIVE,
    type: #FULL
  }
}

@Metadata.ignorePropagatedAnnotations:true

define view I_MaterialSubstitutionReason
as select from
tvsu
association [0..*] to I_MaterialSubstitutionReasonT as _Text on $projection.MaterialSubstitutionReason = _Text.MaterialSubstitutionReason
{
    @ObjectModel.text.association: '_Text'
    key sugrd as MaterialSubstitutionReason,
    
    _Text
}
```
