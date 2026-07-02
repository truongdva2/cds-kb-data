---
name: I_CACORRESPONDENCEVARIANT
description: Cacorrespondencevariant
semantic_en: "correspondence variant — identifies variants of correspondence definitions."
semantic_vi: "biến thể thư từ — xác định các biến thể của các định nghĩa thư từ."
keywords:
  - biến thể thư từ
  - correspondence
  - variant
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
# I_CACORRESPONDENCEVARIANT

**Cacorrespondencevariant**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CACorrespondenceVariant` | `coprc` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACorrespondenceVariantText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Correspondence Variant'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACorrespondenceVariant',
                sapObjectNodeType.name: 'ContrAcctgCorrespncVariant',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACorrespondenceVariant
  as select from tfk070b

  association [0..*] to I_CACorrespondenceVariantText as _Text on $projection.CACorrespondenceVariant = _Text.CACorrespondenceVariant

{
      @ObjectModel.text.association: '_Text'
  key coprc as CACorrespondenceVariant,

      _Text

}
```
