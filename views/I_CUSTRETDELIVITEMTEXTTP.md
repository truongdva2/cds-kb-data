---
name: I_CUSTRETDELIVITEMTEXTTP
description: Custretdelivitemtexttp
semantic_en: "Customer returns delivery item text — text documents for return delivery items by language and text identifier."
semantic_vi: "Văn bản chi tiết mục hàng trả về — lưu trữ tài liệu mô tả dài cho từng mục hàng trong phiếu giao nhận hàng trả về theo ngôn ngữ."
keywords:
  - Hàng trả về
  - Văn bản mô tả
  - Mục hàng giao nhận
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
  - text
  - item-level
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_CUSTRETDELIVITEMTEXTTP

**Custretdelivitemtexttp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CustomerReturnDelivery` | `CustomerReturnDelivery` |
| `CustomerReturnDeliveryItem` | `CustomerReturnDeliveryItem` |
| `Language` | `Language` |
| `LongTextID` | `LongTextID` |
| `LongText` | `LongText` |

## Associations

> No associations found.

## Source Code

```abap
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

@ObjectModel: {
    usageType: {
        dataClass:      #TRANSACTIONAL,
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    dataCategory: #TEXT,
    semanticKey: ['CustomerReturnDelivery', 'CustomerReturnDeliveryItem', 'Language', 'LongTextID'],
    representativeKey: 'LongTextID',
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Customer Returns Delivery Item - Text TP'
define view entity I_CustRetDelivItemTextTP 
  as projection on R_CustRetDelivItemTextTP as CustomerReturnsDelivItemText 
{
      @ObjectModel.foreignKey.association: '_Delivery'
  key CustomerReturnDelivery,
      @ObjectModel.foreignKey.association: '_Item'
  key CustomerReturnDeliveryItem,
      @Semantics.language:true
  key Language,
  key LongTextID,
  
      @Semantics.text:true
      LongText,
      
      // Associations 
      _Delivery : redirected to I_CustomerReturnsDeliveryTP,
      _Item     : redirected to parent I_CustomerReturnsDelivItemTP
}
```
