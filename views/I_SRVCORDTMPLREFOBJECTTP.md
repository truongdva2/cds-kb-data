---
name: I_SRVCORDTMPLREFOBJECTTP
description: Srvcordtmplrefobjecttp
semantic_en: "reference objects for service order templates — links templates to equipment, locations, products and serials"
semantic_vi: "đối tượng tham chiếu cho mẫu đơn hàng dịch vụ — liên kết mẫu đến thiết bị, vị trí, sản phẩm và số sê-ri"
keywords:
  - tham chiếu
  - mẫu
  - thiết bị
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLREFOBJECTTP

**Srvcordtmplrefobjecttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `ServiceOrderTemplate` | `ServiceOrderTemplate` |
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
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Template Ref Object - TP'
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

define view entity I_SrvcOrdTmplRefObjectTP
 as projection on R_SrvcOrdTmplRefObjectTP {

  key ServiceOrderTemplate,
  key ServiceRefObjectSequenceNumber,
      SerialNumber,
      ServiceReferenceEquipment,
      ServiceRefFunctionalLocation,
      ServiceReferenceProduct,
      SrvcRefObjIsMainObject,

  /* Associations */
      _ServiceOrderTemplateTP : redirected to parent I_ServiceOrderTemplateTP
}
```
