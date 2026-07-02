---
name: I_OUTBOUNDDELIVERYITEMTEXTTP
description: Outbound DeliveryITEMTEXTTP
semantic_en: "transient projection of outbound delivery item text — stores long text descriptions for delivery items."
semantic_vi: "phép chiếu tạm thời của văn bản mục vật tư giao đi — lưu trữ mô tả văn bản dài cho các mục vật tư giao."
keywords:
  - văn bản giao đi
  - mô tả mục vật tư
  - ghi chú
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - interface-view
  - transactional-processing
  - delivery
  - text
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_OUTBOUNDDELIVERYITEMTEXTTP

**Outbound DeliveryITEMTEXTTP**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `OutboundDelivery` | `OutboundDelivery` |
| `OutboundDeliveryItem` | `OutboundDeliveryItem` |
| `Language` | `Language` |
| `LongTextID` | `LongTextID` |
| `LongText` | `LongText` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Outbound Delivery Item - Text TP'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@ObjectModel: {
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    dataCategory: #TEXT,
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    semanticKey: ['OutboundDelivery', 'OutboundDeliveryItem', 'Language', 'LongTextID'],
    representativeKey: 'LongTextID'
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_OutboundDeliveryItemTextTP
  as projection on R_OutboundDeliveryItemTextTP as _OutboundDeliveryItemTextTP
{
      @ObjectModel.foreignKey.association: '_Delivery'
  key OutboundDelivery,
      @ObjectModel.foreignKey.association: '_Item'
  key OutboundDeliveryItem,
      @Semantics.language:true
  key Language,
  key LongTextID,
      @Semantics.text:true
      LongText,


      /* Associations */
      _Delivery : redirected to I_OutboundDeliveryTP,
      _Item     : redirected to parent I_OutboundDeliveryItemTP

}
```
