---
name: I_CABLLBLEITMCLASS
description: Cabllbleitmclass
semantic_en: "billable item classes — codes for item classifications in contract accounting billing (Klassen der abr. Positionen)."
semantic_vi: "các lớp hàng hóa có thể thanh toán — mã cho các phân loại hàng hóa trong lập hóa đơn kế toán hợp đồng (Klassen der abr. Positionen)."
keywords:
  - lớp hàng hóa
  - hàng hóa lập hóa đơn
  - phân loại
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABLLBLEITMCLASS

**Cabllbleitmclass**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CABllbleItmClass` | `_tfk8101C.bitcat` |
| `_CABllbleItmClassText` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABllbleItmClassText` | `I_CABllbleItmClassText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Klassen der abr. Positionen' 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'CABllbleItmClass',
  sapObjectNodeType.name: 'ContrAcctgBillableItemClass',
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC
define view entity I_CABllbleItmClass
  as select from tfk8101c as _tfk8101C
  association [0..*] to I_CABllbleItmClassText      as _CABllbleItmClassText      on $projection.CABllbleItmClass = _CABllbleItmClassText.CABllbleItmClass
{
      @ObjectModel.text.association: '_CABllbleItmClassText'
  key _tfk8101C.bitcat as CABllbleItmClass,
  
      _CABllbleItmClassText
}
```
