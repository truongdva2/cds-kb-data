---
name: I_PURCONTRPARTNERSTP
description: Purcontrpartnerstp
semantic_en: "purchase contract partners — records supplier, plant, and partner function details for contract items"
semantic_vi: "đối tác hợp đồng mua — ghi lại chi tiết nhà cung cấp, nhà máy, và chức năng đối tác"
keywords:
  - nhà cung cấp
  - nhà máy
  - đối tác
app_component: MM-PUR-OA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-OA
  - interface-view
  - transactional-processing
  - partner
  - component:MM-PUR-OA-2CL
  - lob:Sourcing & Procurement
---
# I_PURCONTRPARTNERSTP

**Purcontrpartnerstp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `PurchaseContract` | `PurchaseContract` |
| `PurchaseContractItem` | `PurchaseContractItem` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `SupplierSubrange` | `SupplierSubrange` |
| `Plant` | `Plant` |
| `PartnerFunction` | `PartnerFunction` |
| `PartnerCounter` | `PartnerCounter` |
| `PurchasingDocumentCategory` | `PurchasingDocumentCategory` |
| `PurchaseContractType` | `PurchaseContractType` |
| `PurchasingDocumentType` | `PurchasingDocumentType` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `Supplier` | `Supplier` |
| `SupplierContact` | `SupplierContact` |
| `EmploymentInternalID` | `EmploymentInternalID` |
| `DefaultPartner` | `DefaultPartner` |
| `PurchasingDocumentPartner` | `PurchasingDocumentPartner` |
| `PurchasingDocumentPartnerName` | `PurchasingDocumentPartnerName` |
| `LastChangeDateTime` | `LastChangeDateTime` |

## Associations

> No associations found.

## Source Code

```abap
@EndUserText.label: 'Purchase Contract Partners - TP'
@AccessControl.authorizationCheck: #CHECK

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey:  [ 'PurchaseContract','PurchaseContractItem','PurchasingOrganization','SupplierSubrange','Plant','PartnerFunction','PartnerCounter' ]

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations: true
define view entity I_PurContrPartnersTP
  as projection on R_PurContrPartnersTP
{
  key PurchaseContract,
  key PurchaseContractItem,
  key PurchasingOrganization,
  key SupplierSubrange,
  key Plant,
  key PartnerFunction,
  key PartnerCounter,
      PurchasingDocumentCategory,
      PurchaseContractType,
      PurchasingDocumentType,
      CreatedByUser,
      CreationDate,
      Supplier,
      SupplierContact,
      EmploymentInternalID,
      DefaultPartner,
      PurchasingDocumentPartner,
      PurchasingDocumentPartnerName,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      /* Associations */
      _PurchaseContract : redirected to parent I_PurchaseContractTP


}
```
