---
name: I_DELIVERYCONFIRMATIONSTATUST
description: Deliveryconfirmationstatust
semantic_en: "text descriptions for delivery confirmation statuses — provides multilingual confirmation labels."
semantic_vi: "mô tả văn bản cho trạng thái xác nhận giao hàng — cung cấp nhãn xác nhận đa ngôn ngữ."
keywords:
  - xác nhận giao hàng
  - mô tả đa ngôn ngữ
  - trạng thái
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
  - delivery
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
  - bo:DeliveryConfirmationStatus
---
# I_DELIVERYCONFIRMATIONSTATUST

**Deliveryconfirmationstatust**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DeliveryConfirmationStatus` | `statu` |
| `Language` | `spras` |
| `DeliveryConfirmationStatusDesc` | `bezei` |
| `_DeliveryConfirmationStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryConfirmationStatus` | `I_DeliveryConfirmationStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DeliveryConfirmationStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Delivery Confirmation Status - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true 
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDELIVCONFSTST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE  ]
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_DeliveryConfirmationStatusT
as select from tvbst

association[0..1] to I_DeliveryConfirmationStatus as _DeliveryConfirmationStatus on $projection.DeliveryConfirmationStatus = _DeliveryConfirmationStatus.DeliveryConfirmationStatus
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_DeliveryConfirmationStatus'
    key statu as DeliveryConfirmationStatus,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as DeliveryConfirmationStatusDesc,
    
    _DeliveryConfirmationStatus,
    _Language
}
where (tvbst.tbnam = 'VBAP') and (tvbst.fdnam = 'BESTA');
```
