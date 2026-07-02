---
name: I_PROVIDERCONTRACTCATEGORY
description: Providercontractcategory
semantic_en: "Provider contract category classification — categorizes provider contracts by type for management and reporting."
semantic_vi: "Phân loại danh mục hợp đồng nhà cung cấp — phân loại các hợp đồng nhà cung cấp theo loại để quản lý và báo cáo."
keywords:
  - danh mục hợp đồng
  - loại hợp đồng cung cấp
  - phân loại
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
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACTCATEGORY

**Providercontractcategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CAProviderContractCategory` | `cast( left( dd07l.domvalue_l, 1 ) as vtcat_kk preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ProviderContractCategoryText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Provider Contract Category'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAProviderContractCategory',
                sapObjectNodeType.name: 'ProviderContractCategory',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ProviderContractCategory
  as select from dd07l

  association [1..*] to I_ProviderContractCategoryText as _Text on $projection.CAProviderContractCategory = _Text.CAProviderContractCategory

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as vtcat_kk preserving type ) as CAProviderContractCategory,

      _Text
}
where
      domname  = 'VTCAT_KK'
  and as4local = 'A'
```
