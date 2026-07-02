---
name: I_CASUBSTITUTEDOCCATEGORY
description: Casubstitutedoccategory
semantic_en: "substitute document category code reference — domain values for categorizing substitute or replacement document types."
semantic_vi: "bảng mã danh mục tài liệu thay thế — giá trị phân loại các loại tài liệu thay thế."
keywords:
  - tài liệu thay thế
  - danh mục tài liệu
  - mã danh mục
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASUBSTITUTEDOCCATEGORY

**Casubstitutedoccategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CASubstituteDocumentCategory` | `cast( left( dd07l.domvalue_l,1 ) as abwtp_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CASubstituteDocCategoryText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Substitute Document Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CASubstituteDocumentCategory',
                sapObjectNodeType.name: 'ContrAcctgSubstitDocCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASubstituteDocCategory
  as select from dd07l

  association [0..*] to I_CASubstituteDocCategoryText as _Text on $projection.CASubstituteDocumentCategory = _Text.CASubstituteDocumentCategory

{
  key cast( left( dd07l.domvalue_l,1 ) as abwtp_kk preserving type ) as CASubstituteDocumentCategory,

      _Text
}
where
      domname  = 'ABWTP_KK'
  and as4local = 'A'
```
