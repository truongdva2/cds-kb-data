---
name: I_SALESPRODUCTHIERARCHYPURPOSE
description: Salesproducthierarchypurpose
semantic_en: "Product hierarchy purpose — classification of product hierarchy purposes with domain values"
semantic_vi: "Mục đích phân cấp sản phẩm — phân loại mục đích phân cấp sản phẩm với giá trị miền"
keywords:
  - phân loại phân cấp sản phẩm
  - mục đích phân cấp
  - giá trị lĩnh vực
app_component: SD-SLS-PH-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-PH
  - interface-view
  - product
  - component:SD-SLS-PH-2CL
  - lob:Sales & Distribution
---
# I_SALESPRODUCTHIERARCHYPURPOSE

**Salesproducthierarchypurpose**

| Property | Value |
|---|---|
| App Component | `SD-SLS-PH-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `SalesProductHierarchyPurpose` | `substring(dd07l.domvalue_l, 1, 2)` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesProductHierarchyPrpsTxt` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
    representativeKey: 'SalesProductHierarchyPurpose',
    usageType:{
        dataClass: #META,
        serviceQuality: #A,
        sizeCategory: #S
     }
}
@Analytics: {
    dataCategory: #DIMENSION,
    internalName: #LOCAL
}
@AbapCatalog: {
    sqlViewName: 'ISDPHP',
    compiler.compareFilter:true
}
@EndUserText.label: 'Product Hierarchy Purpose in Sales'
@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SEARCHABLE_ENTITY,
                                        #ANALYTICAL_DIMENSION  ]
define view I_SalesProductHierarchyPurpose
  as select from dd07l

  association [0..*] to I_SalesProductHierarchyPrpsTxt as _Text on $projection.SalesProductHierarchyPurpose = _Text.SalesProductHierarchyPurpose
{
      @ObjectModel.text.association: '_Text'
      @EndUserText.label: 'Purpose'
  key substring(dd07l.domvalue_l, 1, 2) as SalesProductHierarchyPurpose,

      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      domvalue_l                        as DomainValue,

      @Search.defaultSearchElement: true
      _Text
}
where dd07l.domname  = 'SD_PRODH_PURPOSE' and dd07l.as4local = 'A';
```
