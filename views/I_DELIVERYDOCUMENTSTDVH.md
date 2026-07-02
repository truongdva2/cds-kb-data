---
name: I_DELIVERYDOCUMENTSTDVH
description: Delivery DocumentUMENTSTDVH
semantic_en: "value helper for delivery documents — provides lookup reference to delivery document numbers by shipping point."
semantic_vi: "view hỗ trợ giá trị cho tài liệu giao hàng — cung cấp tham chiếu tra cứu các số tài liệu giao hàng theo điểm giao hàng."
keywords:
  - tài liệu giao hàng
  - điểm giao hàng
  - tra cứu
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - value-help
  - standard-value-help
  - delivery-document
  - delivery
  - document
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
  - bo:DeliveryDocument
---
# I_DELIVERYDOCUMENTSTDVH

**Delivery DocumentUMENTSTDVH**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `DeliveryDocument` | `DeliveryDocument` |
| `ShippingPoint` | `ShippingPoint` |

## Associations

> No associations found.

## Source Code

```abap
//GENERATED:003:GlBfhyJl7jU{rt6Qk9cfW0
@AbapCatalog.sqlViewName: 'IDD__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'DeliveryDocument'

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Delivery Document'

@Search.searchable: true
@Consumption.ranked: true

@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: [ #VALUE_HELP_PROVIDER ]
define view I_DeliveryDocumentStdVH
  as select from I_DeliveryDocument
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key DeliveryDocument,

      @Consumption.hidden: true
      ShippingPoint
}
```
