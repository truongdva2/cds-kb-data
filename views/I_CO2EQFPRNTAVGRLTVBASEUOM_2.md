---
name: I_CO2EQFPRNTAVGRLTVBASEUOM_2
description: CO 2EQFPRNTAVGRLTVBASEUOM 2
semantic_en: "product and plant carbon footprint – average relative co2 equivalent footprint for products at specific plants."
semantic_vi: "dấu chân carbon sản phẩm tại nhà máy – tính toán lượng khí thải co2 tương đương trung bình cho sản phẩm."
keywords:
  - dấu chân carbon
  - sản phẩm
  - nhà máy
app_component: SUS-PFM-INT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SUS
  - SUS-PFM
  - SUS-PFM-INT
  - interface-view
  - unit-of-measure
  - component:SUS-PFM-INT
  - lob:Other
---
# I_CO2EQFPRNTAVGRLTVBASEUOM_2

**CO 2EQFPRNTAVGRLTVBASEUOM 2**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `Product` | `I_PFMProdPlntFootprint.Product` |
| `Plant` | `I_PFMProdPlntFootprint.Plant` |
| `PFMFootprintValidFromDate` | `_PFMMasterDataFootprint.PFMFootprintValidFromDate` |
| `PFMFootprintValidToDate` | `_PFMMasterDataFootprint.PFMFootprintValidToDate` |
| `PFMFootprintQuantity` | `_PFMMasterDataFootprintQty.PFMFootprintQuantity` |
| `PFMFootprintFxdPtDcmlQuantity` | `cast(…)` |
| `PFMFootprintUnit` | `_PFMMasterDataFootprintQty.PFMFootprintUnit` |
| `PFMFootprintCalculatedBy` | `_PFMMasterDataFootprint.PFMFootprintCalculatedBy` |
| `PFMFootprintPeriodStartDate` | `_PFMMasterDataFootprint.PFMFootprintPeriodStartDate` |
| `PFMFootprintPeriodEndDate` | `_PFMMasterDataFootprint.PFMFootprintPeriodEndDate` |
| `PFMMasterDataFootprintUUID` | `_PFMMasterDataFootprint.PFMMasterDataFootprintUUID` |
| `PFMMasterDataFootprintQtyUUID` | `_PFMMasterDataFootprintQty.PFMMasterDataFootprintQtyUUID` |
| `_Product` | *Association* |
| `_Plant` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_CO2eqFprntAvgGHGCat` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CO2eqFprntAvgGHGCat` | `I_CO2eqFprntAvgGHGCat` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Avg Rltv CO2eq Footprint of Prod at Plnt'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #COMPOSITE

@Metadata.ignorePropagatedAnnotations:true // needed for the C1 contract

@ObjectModel: {
  supportedCapabilities: [ // needed for the C1 contract
    #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE, 
    #CDS_MODELING_ASSOCIATION_TARGET 
  ],
  modelingPattern: #NONE
}

@ObjectModel.usageType:
{
  serviceQuality: #A,
  sizeCategory:   #L, // based on size category of I_PFMProdPlntFootprint
  dataClass:      #MASTER
}

define view entity I_CO2eqFprntAvgRltvBaseUoM_2 with parameters
  P_KeyDate : vdm_v_key_date
  
  as select from I_PFMProdPlntFootprint

    inner join I_PFMMasterDataFootprintQty as _PFMMasterDataFootprintQty on  _PFMMasterDataFootprintQty.PFMMasterDataFootprintUUID = I_PFMProdPlntFootprint.PFMMasterDataFootprintUUID
                                                                         and _PFMMasterDataFootprintQty.PFMFootprintCategory       = 'GHG'
                                                                         and _PFMMasterDataFootprintQty.PFMFootprintReferenceBasis = '01'
    inner join I_PFMMasterDataFootprint as _PFMMasterDataFootprint       on  _PFMMasterDataFootprint.PFMMasterDataFootprintUUID = I_PFMProdPlntFootprint.PFMMasterDataFootprintUUID
                                                                         and (   ( _PFMMasterDataFootprint.PFMFootprintValidFromDate <= $parameters.P_KeyDate and _PFMMasterDataFootprint.PFMFootprintValidToDate >= $parameters.P_KeyDate )
                                                                             or ( _PFMMasterDataFootprint.PFMFootprintValidFromDate is initial and _PFMMasterDataFootprint.PFMFootprintValidToDate is initial ) )
    
    association [0..*] to I_CO2eqFprntAvgGHGCat as _CO2eqFprntAvgGHGCat on _CO2eqFprntAvgGHGCat.PFMMasterDataFootprintQtyUUID = $projection.PFMMasterDataFootprintQtyUUID                                                                        
                                                                      
{
  @ObjectModel.foreignKey.association: '_Product'
  key I_PFMProdPlntFootprint.Product,
  
  @ObjectModel.foreignKey.association: '_Plant'
  key I_PFMProdPlntFootprint.Plant,
  
  key _PFMMasterDataFootprint.PFMFootprintValidFromDate,
  
  key _PFMMasterDataFootprint.PFMFootprintValidToDate,
    
  //CO2e Footprint
  @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
  _PFMMasterDataFootprintQty.PFMFootprintQuantity,

  @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
  cast (_PFMMasterDataFootprintQty.PFMFootprintQuantity as pfmfootprintquantity_quan) as PFMFootprintFxdPtDcmlQuantity,
  
  //CO2e Footprint Unit
  @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  _PFMMasterDataFootprintQty.PFMFootprintUnit,
  
  //CO2e Footprint Calculated By
  _PFMMasterDataFootprint.PFMFootprintCalculatedBy,
      
  _PFMMasterDataFootprint.PFMFootprintPeriodStartDate,
  _PFMMasterDataFootprint.PFMFootprintPeriodEndDate,
  
  //Key references
  _PFMMasterDataFootprint.PFMMasterDataFootprintUUID,
  _PFMMasterDataFootprintQty.PFMMasterDataFootprintQtyUUID,
      
  // foreign key associations
  I_PFMProdPlntFootprint._Product,
  I_PFMProdPlntFootprint._Plant,
  
  _PFMMasterDataFootprintQty._UnitOfMeasure,

  _CO2eqFprntAvgGHGCat
  
}
```
