---
name: I_CO2EQFPRNTAVGGHGCAT
description: CO 2EQFPRNTAVGGHGCAT
semantic_en: "carbon footprint component by ghg category – average relative co2 equivalent footprint broken down by greenhouse gas categories."
semantic_vi: "thành phần dấu chân carbon theo danh mục khí nhà kính – tính toán lượng khí thải co2 tương đương trung bình."
keywords:
  - dấu chân carbon
  - khí nhà kính
  - co2
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
  - component:SUS-PFM-INT
  - lob:Other
---
# I_CO2EQFPRNTAVGGHGCAT

**CO 2EQFPRNTAVGGHGCAT**

| Property | Value |
|---|---|
| App Component | `SUS-PFM-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PFMMasterDataFprntQtyCompUUID` | `PFMMasterDataFprntQtyCompUUID` |
| `PFMMasterDataFootprintQtyUUID` | `PFMMasterDataFootprintQtyUUID` |
| `GHGCategory` | `cast (PFMFootprintQtyComponentType as sufnd_vdm_ghgcategory)` |
| `PFMFootprintQuantity` | `PFMFootprintQuantity` |
| `PFMFootprintFxdPtDcmlQuantity` | `cast (PFMFootprintQuantity as pfmfootprintquantity_quan)` |
| `PFMFootprintUnit` | `PFMFootprintUnit` |
| `_UnitOfMeasure` | *Association* |
| `_GHGCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_GHGCategory` | `I_GHGCategory` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Avg Rltv CO2eq Footprint GHG Category'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #COMPOSITE

@Metadata.ignorePropagatedAnnotations:true // needed for the C1 contract

@ObjectModel:
{
  usageType:
  {
    dataClass: #MASTER,
    sizeCategory: #XL, 
    serviceQuality: #A
  },
   supportedCapabilities: [ // needed for the C1 contract
    #SQL_DATA_SOURCE, 
    #CDS_MODELING_DATA_SOURCE, 
    #CDS_MODELING_ASSOCIATION_TARGET 
  ],
  modelingPattern: #NONE
  
}

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CO2eqFprntAvgGHGCat as select from I_PFMMasterDataFprntQtyComp

  // Foreign Key Relationships 
  association [0..1] to I_UnitOfMeasure as _UnitOfMeasure on $projection.PFMFootprintUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_GHGCategory as _GHGCategory on $projection.GHGCategory = _GHGCategory.GHGCategory
  
 {

  key PFMMasterDataFprntQtyCompUUID as PFMMasterDataFprntQtyCompUUID,
      PFMMasterDataFootprintQtyUUID as PFMMasterDataFootprintQtyUUID,
                          
      cast (PFMFootprintQtyComponentType as sufnd_vdm_ghgcategory) as GHGCategory,
      
      //CO2e Footprint
      @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
      PFMFootprintQuantity         as PFMFootprintQuantity,

      @Semantics.quantity.unitOfMeasure: 'PFMFootprintUnit'
      cast (PFMFootprintQuantity as pfmfootprintquantity_quan) as PFMFootprintFxdPtDcmlQuantity,
      
      //CO2e Footprint Unit
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      PFMFootprintUnit             as PFMFootprintUnit,
      
      // Associations
      _UnitOfMeasure,
      _GHGCategory
      
} 
where PFMFootprintQtyComponentGroup = 'GHG_CATEG'
```
