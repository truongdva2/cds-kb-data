---
name: I_SRVCCONFITEMREFOBJECTTP
description: Srvcconfitemrefobjecttp
semantic_en: "service confirmation item reference object — tracks referenced equipment, functional locations, or products associated with service line items."
semantic_vi: "đối tượng tham chiếu mục xác nhận dịch vụ — theo dõi thiết bị, vị trí chức năng hoặc sản phẩm được tham chiếu liên kết với các mục dịch vụ."
keywords:
  - thiết bị
  - vị trí chức năng
  - sản phẩm dịch vụ
app_component: CRM-S4-SRV-SCO-2CL
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
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITEMREFOBJECTTP

**Srvcconfitemrefobjecttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceConfirmation` | `ServiceConfirmation` |
| `ServiceConfirmationItem` | `ServiceConfirmationItem` |
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
@EndUserText.label: 'Service Confirmation Itm Ref Object - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
   
   usageType: { dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfItemRefObjectTP as projection on R_SrvcConfItemRefObjectTP 
{
      
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  key ServiceRefObjectSequenceNumber,
      SerialNumber,
      ServiceReferenceEquipment,
      ServiceRefFunctionalLocation,
      ServiceReferenceProduct,
      SrvcRefObjIsMainObject,

      //Associations
      _ServiceConfirmationItemTP : redirected to parent I_ServiceConfirmationItemTP,
      _SrvcConfTP : redirected to I_ServiceConfirmationTP 
}
```
