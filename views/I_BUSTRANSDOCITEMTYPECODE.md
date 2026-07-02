---
name: I_BUSTRANSDOCITEMTYPECODE
description: Bustransdocitemtypecode
semantic_en: "business transaction document item type codes — master data for line item type classification in transaction documents"
semantic_vi: "mã loại mục tài liệu giao dịch kinh doanh — dữ liệu chính cho phân loại loại mục hàng trong các tài liệu giao dịch"
keywords:
  - loại mục tài liệu
  - mã phân loại
  - tài liệu giao dịch
app_component: TM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - interface-view
  - item-level
  - component:TM-2CL
  - lob:Other
  - bo:TranspBizTransacDocItmTypeCode
---
# I_BUSTRANSDOCITEMTYPECODE

**Bustransdocitemtypecode**

| Property | Value |
|---|---|
| App Component | `TM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BusinessTransacDocItmTypeCode` | `cast (btditm_tco150 as njit_btd_item_type_code preserving type )` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BusTransDocItmTypeCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'BTD Item Type Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'BusinessTransacDocItmTypeCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'TranspBizTransacDocItmTypeCode'
define root view entity I_BusTransDocItemTypeCode
  as select from /scmtms/c_btdit

  composition [0..*] of I_BusTransDocItmTypeCodeText as _Text
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key cast (btditm_tco150 as njit_btd_item_type_code preserving type ) as BusinessTransacDocItmTypeCode,
      _Text
}
```
