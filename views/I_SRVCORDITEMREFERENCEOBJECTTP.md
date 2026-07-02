---
name: I_SRVCORDITEMREFERENCEOBJECTTP
description: Srvcorditemreferenceobjecttp
semantic_en: "Reference objects for service order items such as equipment, location, or product — linking service work to asset context."
semantic_vi: "Các đối tượng tham chiếu cho hạng mục đơn hàng dịch vụ chẳng hạn như thiết bị, vị trí hoặc sản phẩm — liên kết công việc dịch vụ với bối cảnh tài sản."
keywords:
  - đối tượng tham chiếu
  - hạng mục đơn hàng
  - tài sản
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - item-level
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITEMREFERENCEOBJECTTP

**Srvcorditemreferenceobjecttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceOrder` | `ServiceOrder` |
| `ServiceOrderItem` | `ServiceOrderItem` |
| `ServiceRefObjectSequenceNumber` | `ServiceRefObjectSequenceNumber` |
| `SerialNumber` | `SerialNumber` |
| `ServiceReferenceEquipment` | `ServiceReferenceEquipment` |
| `ServiceRefFunctionalLocation` | `ServiceRefFunctionalLocation` |
| `ServiceReferenceProduct` | `ServiceReferenceProduct` |
| `SrvcRefObjIsMainObject` | `SrvcRefObjIsMainObject` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Item Reference Object - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdItemReferenceObjectTP 
as projection on R_SrvcOrdItemReferenceObjectTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key ServiceRefObjectSequenceNumber,
      SerialNumber,
      ServiceReferenceEquipment,
      ServiceRefFunctionalLocation,
      ServiceReferenceProduct,
      SrvcRefObjIsMainObject,
      /* Associations */
      _ServiceOrderItemTP : redirected to parent I_ServiceOrderItemTP,
      _ServiceOrderTP     : redirected to I_ServiceOrderTP
}
```
