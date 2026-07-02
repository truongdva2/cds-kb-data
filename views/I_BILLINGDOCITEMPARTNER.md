---
name: I_BILLINGDOCITEMPARTNER
description: Billing DocumentITEMPARTNER
semantic_en: "billing document item partner — partner functions and contact details assigned to individual invoice line items."
semantic_vi: "đối tác mục tài liệu hóa đơn — chức năng đối tác và chi tiết liên hệ được gán cho các mục dòng hóa đơn riêng lẻ."
keywords:
  - đối tác
  - mục hóa đơn
  - chức năng
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - billing-document
  - billing
  - item-level
  - partner
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:PartnerFunction
---
# I_BILLINGDOCITEMPARTNER

**Billing DocumentITEMPARTNER**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `BillingDocument` | `Partner.BillingDocument` |
| `BillingDocumentItem` | `Partner.BillingDocumentItem` |
| `PartnerFunction` | `Partner.PartnerFunction` |
| `Customer` | `Partner.Customer` |
| `Supplier` | `Partner.Supplier` |
| `Personnel` | `Partner.Personnel` |
| `AddressID` | `Partner.AddressID` |
| `ContactPerson` | `Partner.ContactPerson` |
| `AddressPersonID` | `Partner.AddressPersonID` |
| `ReferenceBusinessPartner` | `Partner.ReferenceBusinessPartner` |
| `BPRefAddressIDForDocSpcfcAddr` | `Partner.BPRefAddressIDForDocSpcfcAddr` |
| `SDDocPartnerAddressRefType` | `Partner.SDDocPartnerAddressRefType` |
| `_BillingDocument` | *Association* |
| `_Item` | *Association* |
| `_PartnerFunction` | *Association* |
| `_Address` | *Association* |
| `_BusinessPartnerAddress` | *Association* |
| `_BPRefAddressForDocSpcfcAddr` | *Association* |
| `_DfltAddrRprstn` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocument` | `I_BillingDocument` | [1..1] |
| `_Item` | `I_BillingDocumentItem` | [1..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILDOCITPT'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Billing Document Item Partner'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'PartnerFunction'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #B, sizeCategory: #XL }

@VDM.viewType: #COMPOSITE

define view I_BillingDocItemPartner
  as select from I_BillingDocItemPartnerBasic as Partner

  association [1..1] to I_BillingDocument     as _BillingDocument
    on $projection.BillingDocument = _BillingDocument.BillingDocument

  association [1..1] to I_BillingDocumentItem as _Item
    on  $projection.BillingDocument     = _Item.BillingDocument
    and $projection.BillingDocumentItem = _Item.BillingDocumentItem

{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingDocumentStdVH', element: 'BillingDocument' } } ]
      @ObjectModel.foreignKey.association: '_BillingDocument'
  key Partner.BillingDocument,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingDocumentItemStdVH', element: 'BillingDocumentItem' },
                                            additionalBinding: [ { localElement: 'BillingDocument',
                                                                   element: 'BillingDocument' } ] } ]
      @ObjectModel.foreignKey.association: '_Item'
  key Partner.BillingDocumentItem,

      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key Partner.PartnerFunction,

      Partner.Customer,

      Partner.Supplier,

      Partner.Personnel,

      @ObjectModel.foreignKey.association: '_Address'
      Partner.AddressID,

      Partner.ContactPerson,

      Partner.AddressPersonID,
      Partner.ReferenceBusinessPartner,
      Partner.BPRefAddressIDForDocSpcfcAddr,
      Partner.SDDocPartnerAddressRefType,

      // Association
      @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT ]
      _BillingDocument,

      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT ]
      _Item,

      Partner._PartnerFunction,
      Partner._Address,
      Partner._BusinessPartnerAddress,
      Partner._BPRefAddressForDocSpcfcAddr,
      Partner._DfltAddrRprstn
}

where _BillingDocument.SDDocumentCategory = 'M' // Invoice
   or _BillingDocument.SDDocumentCategory = 'N' // Invoice Canceled
   or _BillingDocument.SDDocumentCategory = 'O' // Credit Memo
   or _BillingDocument.SDDocumentCategory = 'P' // Debit Memo
   or _BillingDocument.SDDocumentCategory = 'S' // Credit Memo Canceled
   or _BillingDocument.SDDocumentCategory = 'U' // Pro Forma Invoice
   or _BillingDocument.SDDocumentCategory = '5' // Intercompany Invoice
   or _BillingDocument.SDDocumentCategory = '6' // Intercompany Credit Memo
   or _BillingDocument.SDDocumentCategory = 'DPRQ' // Down Payment Request
   or _BillingDocument.SDDocumentCategory = 'DPCC' // Down Payment Cancellation
```
