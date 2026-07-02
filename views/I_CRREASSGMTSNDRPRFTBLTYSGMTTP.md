---
name: I_CRREASSGMTSNDRPRFTBLTYSGMTTP
description: Crreassgmtsndrprftbltysgmttp
semantic_en: "cost and revenue reassignment sender profitability segment record — tracks profit center sourcing for cost allocation"
semantic_vi: "bản ghi phân khúc lợi nhuận bên gửi phân bổ lại chi phí và doanh thu — theo dõi nguồn trung tâm lợi nhuận để phân bổ chi phí"
keywords:
  - phân bổ lại chi phí
  - phân khúc lợi nhuận
  - trung tâm chi phí
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
# I_CRREASSGMTSNDRPRFTBLTYSGMTTP

**Crreassgmtsndrprftbltysgmttp**

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
| `SourceLedger` | `SourceLedger` |
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
| `SalesDocument` | `SalesDocument` |
| `SalesDocumentItem` | `SalesDocumentItem` |
| `ProfitCenter` | `ProfitCenter` |
| `PartnerProfitCenter` | `PartnerProfitCenter` |
| `FunctionalArea` | `FunctionalArea` |
| `ControllingBusTransacType` | `ControllingBusTransacType` |

## Associations

> No associations found.

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@EndUserText.label: 'Cost and Revn Reassgmt Sndr PS - TP'
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
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
 @OData.entityType.name:'CRReassgmtSndrPrftbltySgmt_Type'
define view entity I_CRReassgmtSndrPrftbltySgmtTP 
        as projection on R_CRReassgmtSndrPrftbltySgmtTP as _ProfitabilitySegment
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
      SourceLedger, 
      
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
      
      SalesDocument,
      SalesDocumentItem, 
      ProfitCenter,
      PartnerProfitCenter,
      
      FunctionalArea,
      ControllingBusTransacType,
      
      _Item : redirected to parent I_CostAndRevnReassgmtItemTP,
      _CRReassgmt : redirected to I_CostAndRevenueReassignmentTP

}
```
