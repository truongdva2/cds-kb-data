---
name: D_BDRCRTEFRMEXTPRCGELMNTP
description: D Bdrcrtefrmextprcgelmntp
semantic_en: "Action parameter for creating BDR from external data with pricing elements — ConditionType, ConditionRateAmount, ConditionCurrency, ConditionQuantity, ConditionQuantityUnit, ConditionRateRatio, ConditionRateRatioUnit"
semantic_vi: "Tham số thao tác để tạo BDR từ dữ liệu bên ngoài với yếu tố định giá — loại điều kiện, số tiền tỷ lệ, loại tiền tệ, số lượng, đơn vị số lượng, tỷ lệ điều kiện, đơn vị tỷ lệ"
keywords:
  - BDR
  - định giá
  - bên ngoài
  - tạo
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - transactional-processing
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTPRCGELMNTP

**D Bdrcrtefrmextprcgelmntp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ConditionType` | `kschl` |
| `ConditionRateAmount` | `vfprc_rate_amount` |
| `ConditionCurrency` | `waers` |
| `ConditionQuantity` | `kpein` |
| `ConditionQuantityUnit` | `kmein` |
| `ConditionRateRatio` | `vfprc_element_ratio` |
| `ConditionRateRatioUnit` | `msehi` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Pricing Param'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtPrcgElmntP { 

    ConditionType           : kschl;
    
    @OData.v2.amount.noDecimalShift: true    
    @Semantics.amount.currencyCode: 'ConditionCurrency' 
    ConditionRateAmount     : vfprc_rate_amount;
    
    @Semantics.currencyCode: true
    ConditionCurrency       : waers;  //No semantics in I-View
    
    @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
    ConditionQuantity       : kpein;
    
    @Semantics.unitOfMeasure: true
    ConditionQuantityUnit   : kmein;
  
    @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
    ConditionRateRatio      : vfprc_element_ratio; // Datenelemente klären
  
    @Semantics.unitOfMeasure: true
    ConditionRateRatioUnit  : msehi;
  
  

  
   
  
}
```
