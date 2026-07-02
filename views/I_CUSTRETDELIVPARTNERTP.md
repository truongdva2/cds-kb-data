---
name: I_CUSTRETDELIVPARTNERTP
description: Custretdelivpartnertp
semantic_en: "Customer returns delivery partner — business partner roles and contact details for return shipment transactions."
semantic_vi: "Đối tác giao nhận hàng trả về — lưu trữ vai trò đối tác (khách hàng, nhà cung cấp, nhân viên) và thông tin địa chỉ liên hệ cho phiếu giao nhận hàng trả về."
keywords:
  - Đối tác giao nhận
  - Hàng trả về
  - Thông tin liên hệ
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
  - partner
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# I_CUSTRETDELIVPARTNERTP

**Custretdelivpartnertp**

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
| `PartnerFunction` | `PartnerFunction` |
| `Customer` | `Customer` |
| `Supplier` | `Supplier` |
| `Personnel` | `Personnel` |
| `AddressID` | `AddressID` |
| `AddressPersonID` | `AddressPersonID` |
| `ContactPerson` | `ContactPerson` |

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
        dataClass:      #MIXED,
        serviceQuality: #C,
        sizeCategory:   #XL
    },
    semanticKey: ['CustomerReturnDelivery', 'PartnerFunction'],
    representativeKey: 'PartnerFunction',
    modelingPattern: #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
}
@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@EndUserText.label: 'Customer Returns Delivery Partner - TP'
define view entity I_CustRetDelivPartnerTP  
  as projection on R_CustRetDelivPartnerTP as CustomerReturnsDeliveryPartner
{
      @ObjectModel.foreignKey.association: '_Delivery'
  key CustomerReturnDelivery,
  key PartnerFunction,
  
      Customer,
      Supplier,
      Personnel,
      AddressID,
      AddressPersonID,
      ContactPerson,

      // Associations
      _Delivery : redirected to parent I_CustomerReturnsDeliveryTP
}
```
