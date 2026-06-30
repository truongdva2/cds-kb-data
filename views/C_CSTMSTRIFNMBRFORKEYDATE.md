---
name: C_CSTMSTRIFNMBRFORKEYDATE
description: Cstmstrifnmbrforkeydate
semantic_en: "Customs tariff number for a key date (parameterized) — supplies the tariff classification scheme, content, validity dates, official/concatenated descriptions, and supplementary units of measure for a customs tariff number as of a given date."
semantic_vi: "Số danh mục hải quan theo ngày hiệu lực (tham số hóa) — cung cấp sơ đồ phân loại thuế quan, nội dung, ngày hiệu lực, mô tả chính thức/ghép nối và đơn vị đo bổ sung cho số danh mục hải quan tại một ngày xác định."
keywords:
  - số danh mục hải quan
  - thuế quan
  - phân loại thương mại
  - ngày hiệu lực
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FT
  - FT-ITR
  - FT-ITR-CLS
  - consumption-view
  - component:FT-ITR-CLS
  - lob:Other
---
# C_CSTMSTRIFNMBRFORKEYDATE

**Cstmstrifnmbrforkeydate**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `TrdClassfctnNmbrSchm` | `TrdClassfctnNmbrSchm` |
| `CustomsTariffNumber` | `CustomsTariffNumber` |
| `TrdClassfctnNmbrSchmCntnt` | `TrdClassfctnNmbrSchmCntnt` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `TrdClassfctnNmbrForOfclDesc` | `TrdClassfctnNmbrForOfclDesc` |
| `TrdClassfctnNmbrForCnctntdDesc` | `TrdClassfctnNmbrForCnctntdDesc` |
| `UnitOfMeasureSystem` | `UnitOfMeasureSystem` |
| `CustomsUnitOfMeasure` | `CustomsUnitOfMeasure` |
| `SecondCustomsUnitOfMeasure` | `SecondCustomsUnitOfMeasure` |
| `SupplementaryUnit` | `SupplementaryUnit` |
| `SecondSupplementaryUnit` | `SecondSupplementaryUnit` |
| `_Date` | *Association* |
| `_OfficialDesc` | *Association* |
| `_CnctntdDesc` | *Association* |
| `_TrdClassfctnNmbrSchmCntnt` | *Association* |
| `_TrdClassfctnNmbrSchm` | *Association* |
| `_SupplementaryUnit` | *Association* |
| `_SecondSupplementaryUnit` | *Association* |
| `_CustomsUnitOfMeasure` | *Association* |
| `_SecondCustomsUnitOfMeasure` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Date` | `I_CalendarDate` | [0..1] |

## Source Code

```abap
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CSTTRIFNOKDATE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED

@ObjectModel.modelingPattern:#NONE

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                   ] 
define view C_CstmsTrifNmbrForKeyDate
  with parameters
    P_KeyDate : sll_validon
  as select from I_CstmsTrifNmbrForKeyDate (P_KeyDate : $parameters.P_KeyDate) 
      association [0..1] to I_CalendarDate         as _Date                       on  $projection.ValidityStartDate = _Date.CalendarDate
{
  key TrdClassfctnNmbrSchm,
  key CustomsTariffNumber,
      TrdClassfctnNmbrSchmCntnt,
      ValidityStartDate,
      ValidityEndDate,
      @ObjectModel.text.association: '_OfficialDesc'
      TrdClassfctnNmbrForOfclDesc,
      @ObjectModel.text.association: '_CnctntdDesc'
      TrdClassfctnNmbrForCnctntdDesc,
      UnitOfMeasureSystem,
      CustomsUnitOfMeasure,
      SecondCustomsUnitOfMeasure,
      SupplementaryUnit,
      SecondSupplementaryUnit,

      // Will be removed later
      _Date,
      _OfficialDesc,
      _CnctntdDesc,
      _TrdClassfctnNmbrSchmCntnt,
      _TrdClassfctnNmbrSchm,
      _SupplementaryUnit,
      _SecondSupplementaryUnit,
      _CustomsUnitOfMeasure,
      _SecondCustomsUnitOfMeasure
}
```
