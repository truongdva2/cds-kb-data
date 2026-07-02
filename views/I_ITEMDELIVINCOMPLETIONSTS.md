---
name: I_ITEMDELIVINCOMPLETIONSTS
description: Itemdelivincompletionsts
semantic_en: "item delivery incompletion status — single-value domain for delivery process completion states."
semantic_vi: "trạng thái hoàn thành giao hàng mặt hàng — miền giá trị duy nhất cho các trạng thái hoàn thành quy trình giao hàng."
keywords:
  - trạng thái giao hàng
  - hoàn thành giao
  - mặt hàng
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - item-level
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
  - bo:ItemDeliveryIncompletionStatus
---
# I_ITEMDELIVINCOMPLETIONSTS

**Itemdelivincompletionsts**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ItemDeliveryIncompletionStatus` | `substring(dd07l.domvalue_l, 1, 1)` |
| `_Text` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ItemDelivIncompletionStsT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'ItemDeliveryIncompletionStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Item Delivery Incompletion Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDIDELINCPSTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION ]
@ObjectModel.sapObjectNodeType.name: 'ItemDeliveryIncompletionStatus'                                        
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_ItemDelivIncompletionSts 
as select from dd07l 

association [0..*] to I_ItemDelivIncompletionStsT as _Text on $projection.ItemDeliveryIncompletionStatus = _Text.ItemDeliveryIncompletionStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as ItemDeliveryIncompletionStatus,
   
    _Text
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
  and ((dd07l.domvalue_l = 'A') or (dd07l.domvalue_l = 'C'));
```
