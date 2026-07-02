---
name: I_DRCTACTYALLOCPRFTBLTYSGMTTP
description: Drctactyallocprftbltysgmttp
semantic_en: "data extract for direct activity allocation to profitability segment transaction provider — enabling allocation analysis by customer and market segment"
semantic_vi: "chiết xuất dữ liệu cho cấp phát hoạt động trực tiếp tới nhà cung cấp giao dịch phân khúc lợi nhuận — cho phép phân tích cấp phát theo khách hàng và phân khúc thị trường"
keywords:
  - phân khúc lợi nhuận
  - cấp phát hoạt động
  - khách hàng
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
---
# I_DRCTACTYALLOCPRFTBLTYSGMTTP

**Drctactyallocprftbltysgmttp**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FiscalYear` | `FiscalYear` |
| `ReferenceDocument` | `ReferenceDocument` |
| `ControllingArea` | `ControllingArea` |
| `ReferenceDocumentItem` | `ReferenceDocumentItem` |
| `LedgerGLLineItem` | `LedgerGLLineItem` |
| `ReferenceDocumentType` | `ReferenceDocumentType` |
| `ReferenceDocumentContext` | `ReferenceDocumentContext` |
| `AccountingDocument` | `AccountingDocument` |
| `TransactionSubitem` | `TransactionSubitem` |
| `CompanyCode` | `CompanyCode` |
| `Customer` | `Customer` |
| `CustomerGroup` | `CustomerGroup` |
| `CustomerSupplierIndustry` | `CustomerSupplierIndustry` |
| `CustomerSupplierCountry` | `CustomerSupplierCountry` |
| `SalesDistrict` | `SalesDistrict` |
| `SoldProduct` | `SoldProduct` |
| `SoldProductGroup` | `SoldProductGroup` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `OrganizationDivision` | `OrganizationDivision` |
| `BillToParty` | `BillToParty` |
| `ShipToParty` | `ShipToParty` |
| `WBSElementExternalID` | `WBSElementExternalID` |
| `ServiceDocumentType` | `ServiceDocumentType` |
| `ServiceDocument` | `ServiceDocument` |
| `ServiceDocumentItem` | `ServiceDocumentItem` |
| `FunctionalArea` | `FunctionalArea` |
| `SalesDocument` | `SalesDocument` |
| `SalesDocumentItem` | `SalesDocumentItem` |
| `ProfitCenter` | `ProfitCenter` |
| `PartnerProfitCenter` | `PartnerProfitCenter` |
| `ControllingBusTransacType` | `ControllingBusTransacType` |
| `SourceLedger` | `SourceLedger` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Drct Acty Alloc Rcvr Prftblty Sgmt - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL
  }
}
@OData.entityType.name:'ActivityAllocationProfitabilitySegment_Type'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define view entity I_DrctActyAllocPrftbltySgmtTP
  as projection on R_DrctActyAllocPrftbltySgmtTP as _ProfitabilitySegment
  
       
{
  key FiscalYear,
  key ReferenceDocument,
  key ControllingArea, 
  key ReferenceDocumentItem,
  key LedgerGLLineItem,
  key ReferenceDocumentType, 
  key ReferenceDocumentContext, 
  key AccountingDocument,  
      
      TransactionSubitem,    
      CompanyCode,
      Customer,
      CustomerGroup,
      CustomerSupplierIndustry,
      CustomerSupplierCountry,
      SalesDistrict,
      SoldProduct,
      SoldProductGroup,
      SalesOrganization,
      DistributionChannel,
      OrganizationDivision,
      BillToParty,
      ShipToParty,          
      WBSElementExternalID,
      ServiceDocumentType,
      ServiceDocument,
      ServiceDocumentItem, 
      FunctionalArea, 
      SalesDocument,
      SalesDocumentItem, 
      ProfitCenter,
      PartnerProfitCenter,   
        
      ControllingBusTransacType,
      SourceLedger,
      
      _Item : redirected to parent I_DrctActyAllocationItemTP_2,
      _ActyAllocation : redirected to I_DirectActivityAllocationTP_2

}
```
