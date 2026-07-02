---
name: I_PRODCOSTINGCOSTINGVARIANTVH
description: Prodcostingcostingvariantvh
semantic_en: "Costing variant value help — costing and valuation variant pairs with names and costing type for selection list."
semantic_vi: "Trợ giúp giá trị biến thể tính giá — cặp biến thể tính giá và định giá với tên và loại tính giá cho danh sách lựa chọn."
keywords:
  - biến thể tính giá
  - tính giá
  - định giá
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - interface-view
  - value-help
  - component:CO-PC-PCP-2CL
  - lob:Controlling
---
# I_PRODCOSTINGCOSTINGVARIANTVH

**Prodcostingcostingvariantvh**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CostingVariant` | `CostingVariant` |
| `CostingVariantName` | `CostingVariantName` |
| `ValuationVariant` | `ValuationVariant` |
| `ValuationVariantName` | `ValuationVariantName` |
| `CostingType` | `CostingType` |

## Associations

> No associations found.

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  representativeKey: 'CostingVariant',
  usageType: { dataClass: #CUSTOMIZING,
               serviceQuality: #A,
               sizeCategory: #S
  }
}
@Analytics.technicalName: 'IPRODCOSTCOSTVARVH'
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Costing Variant'
@Search.searchable: true
@Consumption.ranked:true

define view entity I_ProdCostingCostingVariantVH
  as select from I_CostingVariantStdVH
  
{
      @Search.defaultSearchElement: true
      @Search.ranking:#HIGH
  key CostingVariant,
      @Search.defaultSearchElement: true
      CostingVariantName,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingValuationVariantStdVH' , element: 'ValuationVariant' }, useAsTemplate: true }]
      ValuationVariant,
      ValuationVariantName,
      @Consumption.valueHelpDefinition:[{entity: { name: 'I_CostingTypeStdVH' , element: 'CostingType' }, useAsTemplate: true }]
      CostingType

}

where
  (
    CostingReferenceObject = '0'
  )
```
