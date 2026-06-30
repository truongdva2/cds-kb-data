---
name: C_PURGINFORECDPRICECNDNDEX
description: Purginforecdpricecndndex
semantic_en: "Purchasing info record pricing condition data extraction (DEX) — exports price condition records linked to a purchasing info record: condition type, validity, rate value, quantity, currency, and base unit per org/plant/category combination."
semantic_vi: "Trích xuất dữ liệu điều kiện giá của hồ sơ thông tin mua hàng (DEX) — xuất các bản ghi điều kiện giá liên kết với hồ sơ thông tin mua: loại điều kiện, hiệu lực, giá trị, số lượng, đồng tiền và đơn vị cơ sở theo tổ hợp tổ chức/nhà máy/phân loại."
keywords:
  - điều kiện giá hồ sơ thông tin mua
  - pricing condition info record
  - giá mua hàng theo điều kiện
  - trích xuất điều kiện giá mua
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:PurchasingInfoRecord
---
# C_PURGINFORECDPRICECNDNDEX

**Purginforecdpricecndndex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchasingInfoRecord` | `PurchasingInfoRecord` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingInfoRecordCategory` | `PurchasingInfoRecordCategory` |
| `Plant` | `Plant` |
| `ConditionRecord` | `ConditionRecord` |
| `ConditionValidityEndDate` | `ConditionValidityEndDate` |
| `ConditionSequentialNumberShort` | `ConditionSequentialNumberShort` |
| `ConditionType` | `ConditionType` |
| `ConditionValidityStartDate` | `ConditionValidityStartDate` |
| `ConditionRateValue` | `ConditionRateValue` |
| `ConditionRateValueUnit` | `ConditionRateValueUnit` |
| `ConditionQuantity` | `ConditionQuantity` |
| `ConditionQuantityUnit` | `ConditionQuantityUnit` |
| `ConditionApplication` | `ConditionApplication` |
| `ConditionCalculationTypeShort` | `ConditionCalculationTypeShort` |
| `ConditionIsDeleted` | `ConditionIsDeleted` |
| `ConditionToBaseQtyNmrtr` | `ConditionToBaseQtyNmrtr` |
| `ConditionToBaseQtyDnmntr` | `ConditionToBaseQtyDnmntr` |
| `BaseUnit` | `BaseUnit` |
| `Material` | `Material` |
| `MaterialGroup` | `MaterialGroup` |
| `PurgDocOrderQuantityUnit` | `PurgDocOrderQuantityUnit` |
| `ConditionCurrency` | `ConditionCurrency` |

## Associations

> No associations found.

## Source Code

```abap
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MIXED
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE , #EXTRACTION_DATA_SOURCE ,#CDS_MODELING_ASSOCIATION_TARGET]
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory: #FACT
@EndUserText.label: 'Purchasing Info Record Pricing Condition'
@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecord'
@Metadata.ignorePropagatedAnnotations:true

define view entity C_PurgInfoRecdPriceCndnDEX
  as select from I_PurgInfoRecdPriceCndnAPI01
{
 
      @Search.defaultSearchElement: true
  key PurchasingInfoRecord,
  key PurchasingOrganization,
  key PurchasingInfoRecordCategory,
  key Plant,
  key ConditionRecord,
  key ConditionValidityEndDate,
  key ConditionSequentialNumberShort,

      ConditionType,
      ConditionValidityStartDate,

      @Semantics.amount.currencyCode: 'ConditionRateValueUnit'
      ConditionRateValue,
      ConditionRateValueUnit,

      @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
      ConditionQuantity,
      ConditionQuantityUnit,

      ConditionApplication,
      ConditionCalculationTypeShort,
      ConditionIsDeleted,
      ConditionToBaseQtyNmrtr,
      ConditionToBaseQtyDnmntr,
      BaseUnit,
      Material,
      MaterialGroup,
      PurgDocOrderQuantityUnit,
      ConditionCurrency

}
```
